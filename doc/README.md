# Projet Pro - Documentation

## Description du projet

Application web de réseau social professionnel permettant aux utilisateurs et aux entreprises de publier du contenu, commenter, voter et interagir.

## Architecture

### Stack technique

- **Framework**: Next.js 15.5.4 (avec Turbopack)
- **Langage**: TypeScript 5
- **Base de données**: MySQL (via Prisma ORM)
- **Authentification**: Better Auth 1.3.27
- **Validation**: Yup 1.7.1 + yup-locales
- **State Management**: Zustand 5.0.8
- **Styling**: Tailwind CSS 4
- **Forms**: React Hook Form 7.64.0
- **UI**: React 19.1.0, React Icons 5.5.0

## Modèle de données

### Entités principales

#### User
Représente un utilisateur de la plateforme.
- Champs: `id`, `name`, `email`, `emailVerified`, `image`, `firstName`, `lastName`, `isRoot`
- Relations: `Session`, `Account`, `Writer`, `Skill`, `CompanyAdmin`, `formation`, `Experience`

#### Company
Représente une entreprise.
- Champs: `id`, `name`, `activity`, `image`, `description`
- Relations: `CompanyAdmin`, `Writer`, `formation`, `Experience`

#### Writer (Table intermédiaire)
**Concept clé**: Un Writer représente l'identité qui publie du contenu. Il peut être soit:
- Un utilisateur personnel (`userId` rempli, `companyId` null)
- Une entreprise (`companyId` rempli, `userId` null)

**Pourquoi cette architecture?**
- Un utilisateur peut publier en son nom personnel
- Un utilisateur admin peut publier au nom de son entreprise
- Permet de gérer facilement les permissions et l'attribution des posts

Relations: `Post`, `Vote`, `Comment`

#### Post
Publication de contenu par un Writer.
- Champs: `id`, `content`, `createdAt`, `writerId`
- Relations: `writer`, `media`, `Comment`, `Vote`

#### Comment
Commentaire sur un post ou un autre commentaire (structure récursive).
- Champs: `id`, `content`, `createdAt`, `votes`, `postId`, `commentId`, `writerId`
- Relations: `writer`, `post`, `comment` (parent), `replies` (enfants), `Vote`

#### Vote
Vote sur un post ou un commentaire.
- Champs: `id`, `writerId`, `postId`, `commentId`, `status` (true/false pour upvote/downvote)
- Relations: `writer`, `post`, `comment`

#### Media
Fichiers multimédias attachés à un post.
- Champs: `id`, `nom`, `url`, `altText`, `description`, `type`, `postId`

#### CompanyAdmin
Liaison entre un utilisateur et une entreprise qu'il administre.
- Champs: `id`, `role`, `companyId`, `userId`

## Fonctionnement

### Création automatique de Writers

**À la création d'un User:**
```typescript
const user = await prisma.user.create({
  data: {
    ...userData,
    Writer: {
      create: {} // Crée automatiquement un Writer personnel
    }
  }
});
```

**À la création d'une Company:**
```typescript
const company = await prisma.company.create({
  data: {
    ...companyData,
    Writer: {
      create: {} // Crée automatiquement un Writer entreprise
    }
  }
});
```

### Routes API

#### Users
- `GET /api/users` - Liste des utilisateurs
- `POST /api/users` - Création d'un utilisateur (crée automatiquement un Writer)
- `GET /api/users/[userId]` - Détails d'un utilisateur
- `PUT /api/users/[userId]` - Mise à jour d'un utilisateur
- `DELETE /api/users/[userId]` - Suppression d'un utilisateur

#### Companies
- `GET /api/companies` - Liste des entreprises
- `POST /api/companies` - Création d'une entreprise (crée automatiquement un Writer)

#### Writers
- `GET /api/writers/[writerId]` - Détails d'un writer
- `GET /api/writers/[writerId]/posts` - Posts d'un writer

#### Posts
- `GET /api/posts` - Liste des posts
- `POST /api/posts` - Création d'un post
- `GET /api/posts/[postId]` - Détails d'un post
- `PUT /api/posts/[postId]` - Mise à jour d'un post
- `DELETE /api/posts/[postId]` - Suppression d'un post
- `GET /api/posts/[postId]/votes` - Votes d'un post
- `POST /api/posts/[postId]/votes` - Voter sur un post

#### Comments
- `GET /api/comments` - Liste des commentaires
- `POST /api/comments` - Création d'un commentaire
- `GET /api/comments/[commentId]` - Commentaires enfants (réponses)
- `PUT /api/comments/[commentId]` - Mise à jour d'un commentaire
- `DELETE /api/comments/[commentId]` - Suppression d'un commentaire
- `GET /api/comments/[commentId]/votes` - Votes d'un commentaire
- `POST /api/comments/[commentId]/votes` - Voter sur un commentaire

#### Votes
- `PUT /api/votes/[voteId]` - Modification d'un vote (changer status)
- `DELETE /api/votes/[voteId]` - Suppression d'un vote

### Validation des données

Utilisation de **Yup** pour la validation des schémas:
- `userCreateSchema` / `userUpdateSchema`
- `postCreateSchema` / `postUpdateSchema`
- `commentCreateSchema` / `commentUpdateSchema`
- `voteCreateSchema` / `voteUpdateSchema`

Les schémas sont définis dans `/src/lib/schemas/`

### Authentification (à venir)

L'authentification sera gérée par **Better Auth**. Une fois implémentée:
- Vérification de la session utilisateur
- Vérification de `emailVerified = true` pour certaines actions (création de posts)
- Vérification que le `writerId` utilisé appartient bien à l'utilisateur connecté

### Sécurité

**Règles à implémenter:**
1. Un utilisateur ne peut publier qu'avec ses propres Writers (personnel + companies qu'il administre)
2. Seul l'utilisateur ayant créé un vote peut le modifier/supprimer
3. Seul l'auteur d'un post/commentaire peut le modifier/supprimer
4. Les emails doivent être vérifiés pour publier du contenu

## Structure des dossiers

```
src/
├── app/
│   └── api/           # Routes API Next.js
│       ├── users/
│       ├── companies/
│       ├── writers/
│       ├── posts/
│       ├── comments/
│       └── votes/
├── lib/
│   ├── prisma.ts      # Client Prisma
│   └── schemas/       # Schémas de validation Yup
└── ...

prisma/
└── schema.prisma      # Schéma de base de données

doc/
├── README.md          # Ce fichier
└── fonctionnement.md  # Notes diverses
```

## Commandes utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm run start

# Linting
npm run lint

# Prisma
npx prisma generate    # Générer le client Prisma
npx prisma migrate dev # Créer une migration
npx prisma studio      # Interface graphique DB
```

## Concepts clés à retenir

1. **Writer = Identité de publication**: Un User ou une Company
2. **Création automatique**: Chaque User/Company a automatiquement un Writer
3. **Pas de route POST /api/writers**: Les Writers sont créés automatiquement
4. **Structure récursive**: Les Comments peuvent avoir des réponses (comments enfants)
5. **Votes flexibles**: Un Vote peut cibler un Post OU un Comment
