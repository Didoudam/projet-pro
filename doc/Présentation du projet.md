# Projet Pro - Documentation

## Description du projet

Application web de réseau social professionnel permettant aux utilisateurs et aux entreprises de publier du contenu, commenter, voter et interagir.

## Architecture

### Stack technique

- **Framework**: Next.js 15.5.4 (avec Turbopack)
- **Langage**: TypeScript 5
- **Base de données**: MySQL (via Prisma ORM 6.17.0)
- **Authentification**: Better Auth 1.3.0
- **Email**: Nodemailer 7.0.11 + MailDev (développement)
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

Les Writers sont créés automatiquement via les hooks Better Auth :

**Pour les utilisateurs** - après vérification d'email :
```typescript
// Dans src/lib/auth.ts - hook after verify-email
hooks: {
  after: createAuthMiddleware(async (ctx) => {
    if (ctx.path === "/verify-email" && ctx.context.newSession?.user?.id) {
      const userId = ctx.context.newSession.user.id;
      const existingWriter = await prisma.writer.findFirst({ where: { userId } });

      if (!existingWriter) {
        await prisma.writer.create({ data: { userId } });
      }
    }
  }),
}
```

**Pour les entreprises** - à la création manuelle :
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

#### Authentification
- `POST /api/auth/sign-up/email` - Inscription par email
- `POST /api/auth/sign-in/email` - Connexion par email
- `GET /api/auth/session` - Récupérer la session actuelle
- `POST /api/auth/sign-out` - Déconnexion
- `POST /api/auth/verify-email` - Vérifier l'email

#### Users
- `PATCH /api/users/[userId]` - Mise à jour du profil utilisateur (firstName, lastName, image)

#### Writers
- `GET /api/writers/current` - Récupérer le writer de l'utilisateur connecté

#### Skills
- `POST /api/skills` - Ajouter une compétence
- `DELETE /api/skills/[skillId]` - Supprimer une compétence
- `GET /api/skills/suggestions` - Suggestions de compétences (avec compteur d'utilisation)

#### Posts
- `POST /api/posts` - Créer un post (nécessite authentification)

#### Comments
- `POST /api/comments` - Créer un commentaire (nécessite authentification)

#### Votes
- `POST /api/votes` - Voter sur un post (upvote/downvote, toggle si déjà voté)

### Validation des données

Utilisation de **Yup** pour la validation des schémas:
- `userCreateSchema` / `userUpdateSchema` - Validation des utilisateurs
- `postCreateSchema` - Validation des posts
- `commentCreateSchema` - Validation des commentaires

**Règles de validation des mots de passe:**
- Minimum 8 caractères
- Au moins une minuscule
- Au moins une majuscule
- Au moins un chiffre
- Au moins un caractère spécial parmi : `@$!%*?&`

Les schémas sont définis dans `/src/lib/schemas/`

### Authentification

L'authentification est gérée par **Better Auth** avec :
- ✅ Inscription/Connexion par email et mot de passe
- ✅ Vérification d'email obligatoire
- ✅ Envoi d'emails via MailDev (développement)
- ✅ Création automatique du Writer après vérification d'email
- ✅ Sessions persistantes
- ✅ Protection des routes API

**Configuration importante :**
```env
BETTER_AUTH_URL="http://localhost:3001"              # URL du serveur
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3001"  # URL pour le client
BETTER_AUTH_SECRET="..."                              # Clé secrète
```

### Sécurité

**Règles implémentées:**
1. ✅ Authentification obligatoire pour créer des posts/commentaires/votes
2. ✅ Le `writerId` est automatiquement récupéré côté serveur (pas envoyé par le client)
3. ✅ Les votes sont liés au writer de l'utilisateur connecté
4. ✅ Vérification de session sur toutes les routes protégées

## Structure des dossiers

```
src/
├── app/
│   ├── api/                    # Routes API Next.js
│   │   ├── auth/[...all]/      # Routes Better Auth
│   │   ├── users/[userId]/     # API utilisateurs
│   │   ├── writers/current/    # API writer actuel
│   │   ├── skills/             # API compétences
│   │   ├── posts/              # API posts
│   │   ├── comments/           # API commentaires
│   │   └── votes/              # API votes
│   ├── dashboard/              # Page dashboard utilisateur
│   ├── profile/[userId]/       # Pages profil utilisateur
│   ├── posts/[postId]/         # Pages détail post
│   ├── auth/                   # Pages auth (signup/signin)
│   └── page.tsx                # Page d'accueil (feed)
├── features/                   # Fonctionnalités par domaine
│   ├── auth/                   # Composants d'authentification
│   ├── dashboard/              # Composants du dashboard
│   ├── home/                   # Composants de la page d'accueil
│   ├── posts/                  # Composants des posts
│   ├── signUp/                 # Formulaire d'inscription
│   └── users/                  # Composants utilisateurs
├── components/                 # Composants partagés
│   ├── Header.tsx              # Navigation principale
│   ├── ToastContainer.tsx      # Notifications toast
│   └── EmailVerificationBanner.tsx
├── stores/                     # State management Zustand
│   ├── useToastStore.ts        # Store notifications
│   └── usePostsStore.ts        # Store posts
├── lib/
│   ├── prisma.ts               # Client Prisma
│   ├── auth.ts                 # Configuration Better Auth
│   ├── auth-client.ts          # Client Better Auth
│   ├── email.ts                # Envoi d'emails
│   ├── icons.tsx               # Icônes centralisées
│   ├── utils.ts                # Utilitaires
│   └── schemas/                # Schémas de validation Yup
│       └── users.ts
└── ...

prisma/
├── schema.prisma               # Schéma de base de données
└── seed.ts                     # Données de test

doc/
└── README.md                   # Ce fichier
```

## Commandes utiles

```bash
# Développement
npm run dev             # Démarrer le serveur de développement (port 3001)

# Build production
npm run build           # Build de production
npm run start           # Démarrer en production

# Linting
npm run lint            # Vérifier le code

# Prisma
npx prisma generate         # Générer le client Prisma
npx prisma migrate dev      # Créer et appliquer une migration
npx prisma migrate reset    # Reset DB et exécuter les seeds
npx prisma studio           # Interface graphique DB (port 5555)
npm run seed                # Exécuter les seeds manuellement

# Base de données
# Réinitialiser complètement la DB:
npx prisma migrate reset --force
npm run seed

# MailDev (emails de développement)
# Démarrer MailDev sur port 1080 pour voir les emails
docker run -p 1080:1080 -p 1025:1025 maildev/maildev
# Puis ouvrir http://localhost:1080
```

## Concepts clés à retenir

1. **Writer = Identité de publication**: Un User ou une Company
2. **Création automatique**: Le Writer est créé automatiquement après vérification d'email
3. **Pas de route POST /api/writers**: Les Writers sont créés via les hooks Better Auth
4. **Structure récursive**: Les Comments peuvent avoir des réponses (comments enfants)
5. **Votes flexibles**: Un Vote peut cibler un Post OU un Comment
6. **Système de toast**: Notifications globales via Zustand (`useToastStore`)
7. **Icônes centralisées**: Tous les icônes dans `/src/lib/icons.tsx` pour faciliter les changements
8. **Skills avec suggestions**: Les compétences ajoutées par les utilisateurs deviennent des suggestions pour les autres (avec compteur d'utilisation)

## Fonctionnalités implémentées

### Authentification
- ✅ Inscription avec email + mot de passe
- ✅ Vérification d'email obligatoire
- ✅ Connexion/Déconnexion
- ✅ Bannière de vérification d'email
- ✅ Création automatique du Writer après vérification

### Posts
- ✅ Création de posts (texte uniquement pour l'instant)
- ✅ Affichage du feed avec posts récents
- ✅ Page de détail d'un post
- ✅ Système de votes (upvote/downvote) avec toggle
- ✅ Compteur de votes en temps réel

### Commentaires
- ✅ Ajouter un commentaire sur un post
- ✅ Réponses aux commentaires (structure récursive)
- ✅ Affichage des 3 premiers commentaires + bouton "Voir plus"

### Profils utilisateurs
- ✅ Dashboard personnel avec édition du profil
- ✅ Gestion des compétences (ajout/suppression avec niveau 1-5)
- ✅ Autocomplete des compétences basé sur l'utilisation
- ✅ Statistiques (posts, commentaires, ratio upvotes)
- ✅ Affichage des posts récents
- ✅ Pages de profil publiques (cliquables depuis les posts)

### UI/UX
- ✅ Design responsive avec Tailwind CSS
- ✅ Notifications toast (succès/erreur)
- ✅ Navigation avec header
- ✅ Avatars avec initiales si pas d'image
- ✅ Temps relatif pour les dates (il y a X minutes)
- ✅ Fast Refresh pour le développement

## Configuration du port

⚠️ **Important** : L'application tourne sur le port **3001** (et non 3000).

Si vous changez le port, pensez à mettre à jour les deux variables dans `.env` :
```env
BETTER_AUTH_URL="http://localhost:XXXX"              # Pour le serveur
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:XXXX"  # Pour le client
```

Puis redémarrez complètement le serveur pour que les variables soient prises en compte.
