# Diagramme de Cas d'Utilisation - Projet Pro

## Diagramme

![Diagramme de Cas d'Utilisation](./use-case-diagram.svg)

---

## Acteurs

| Acteur | Description |
|--------|-------------|
| **Visiteur** | Utilisateur non authentifié avec accès limité |
| **Utilisateur** | Utilisateur authentifié avec un compte vérifié |
| **Modérateur Entreprise** | Administrateur avec permissions limitées sur une entreprise |
| **Admin Entreprise** | Administrateur avec permissions élevées sur une entreprise |
| **Super Admin Entreprise** | Créateur de l'entreprise avec tous les droits |

---

## Diagramme de Cas d'Utilisation (Format PlantUML)

```plantuml
@startuml UseCase_ProjetPro

left to right direction
skinparam packageStyle rectangle
skinparam actorStyle awesome

' === ACTEURS ===
actor "Visiteur" as visitor
actor "Utilisateur" as user
actor "Modérateur\nEntreprise" as moderator
actor "Admin\nEntreprise" as admin
actor "Super Admin\nEntreprise" as superadmin

' Héritage des rôles
user --|> visitor
moderator --|> user
admin --|> moderator
superadmin --|> admin

' === PACKAGES ===

rectangle "Authentification" {
    usecase "S'inscrire" as UC_REGISTER
    usecase "Se connecter" as UC_LOGIN
    usecase "Vérifier son email" as UC_VERIFY_EMAIL
    usecase "Modifier son email" as UC_CHANGE_EMAIL
    usecase "Modifier son mot de passe" as UC_CHANGE_PASSWORD
}

rectangle "Gestion du Profil" {
    usecase "Consulter son dashboard" as UC_DASHBOARD
    usecase "Modifier son profil" as UC_EDIT_PROFILE
    usecase "Ajouter une compétence" as UC_ADD_SKILL
    usecase "Supprimer une compétence" as UC_DEL_SKILL
    usecase "Ajouter une expérience" as UC_ADD_EXP
    usecase "Ajouter une formation" as UC_ADD_FORMATION
    usecase "Voir qui a consulté son profil" as UC_VIEW_VISITORS
}

rectangle "Consultation Publique" {
    usecase "Voir le fil d'actualité" as UC_VIEW_FEED
    usecase "Voir un profil utilisateur" as UC_VIEW_PROFILE
    usecase "Voir un profil entreprise" as UC_VIEW_COMPANY
    usecase "Voir un post" as UC_VIEW_POST
    usecase "Rechercher" as UC_SEARCH
    usecase "Voir la liste des utilisateurs" as UC_LIST_USERS
    usecase "Voir la liste des entreprises" as UC_LIST_COMPANIES
}

rectangle "Publications" {
    usecase "Créer un post" as UC_CREATE_POST
    usecase "Supprimer son post" as UC_DELETE_POST
    usecase "Commenter un post" as UC_COMMENT
    usecase "Répondre à un commentaire" as UC_REPLY
    usecase "Voter (like/dislike)" as UC_VOTE
}

rectangle "Réseau" {
    usecase "Envoyer une demande de connexion" as UC_SEND_REQUEST
    usecase "Accepter une demande" as UC_ACCEPT_REQUEST
    usecase "Refuser une demande" as UC_REJECT_REQUEST
    usecase "Voir ses connexions" as UC_VIEW_NETWORK
    usecase "Supprimer une connexion" as UC_REMOVE_CONNECTION
    usecase "Voir ses notifications" as UC_VIEW_NOTIF
}

rectangle "Gestion Entreprise" {
    usecase "Créer une entreprise" as UC_CREATE_COMPANY
    usecase "Modifier l'entreprise" as UC_EDIT_COMPANY
    usecase "Publier au nom de l'entreprise" as UC_POST_AS_COMPANY
    usecase "Commenter au nom de l'entreprise" as UC_COMMENT_AS_COMPANY
    usecase "Voir mes entreprises" as UC_MY_COMPANIES
}

rectangle "Administration Entreprise" {
    usecase "Valider une expérience" as UC_VALIDATE_EXP
    usecase "Refuser une expérience" as UC_REJECT_EXP
    usecase "Ajouter un administrateur" as UC_ADD_ADMIN
    usecase "Supprimer un administrateur" as UC_REMOVE_ADMIN
    usecase "Modifier le rôle d'un admin" as UC_CHANGE_ROLE
    usecase "Supprimer l'entreprise" as UC_DELETE_COMPANY
}

' === ASSOCIATIONS VISITEUR ===
visitor --> UC_VIEW_FEED
visitor --> UC_VIEW_PROFILE
visitor --> UC_VIEW_COMPANY
visitor --> UC_VIEW_POST
visitor --> UC_SEARCH
visitor --> UC_LIST_USERS
visitor --> UC_LIST_COMPANIES
visitor --> UC_REGISTER
visitor --> UC_LOGIN

' === ASSOCIATIONS UTILISATEUR ===
user --> UC_VERIFY_EMAIL
user --> UC_CHANGE_EMAIL
user --> UC_CHANGE_PASSWORD
user --> UC_DASHBOARD
user --> UC_EDIT_PROFILE
user --> UC_ADD_SKILL
user --> UC_DEL_SKILL
user --> UC_ADD_EXP
user --> UC_ADD_FORMATION
user --> UC_VIEW_VISITORS
user --> UC_CREATE_POST
user --> UC_DELETE_POST
user --> UC_COMMENT
user --> UC_REPLY
user --> UC_VOTE
user --> UC_SEND_REQUEST
user --> UC_ACCEPT_REQUEST
user --> UC_REJECT_REQUEST
user --> UC_VIEW_NETWORK
user --> UC_REMOVE_CONNECTION
user --> UC_VIEW_NOTIF
user --> UC_CREATE_COMPANY
user --> UC_MY_COMPANIES

' === ASSOCIATIONS MODÉRATEUR ===
moderator --> UC_POST_AS_COMPANY
moderator --> UC_COMMENT_AS_COMPANY
moderator --> UC_VALIDATE_EXP
moderator --> UC_REJECT_EXP

' === ASSOCIATIONS ADMIN ===
admin --> UC_EDIT_COMPANY

' === ASSOCIATIONS SUPER ADMIN ===
superadmin --> UC_ADD_ADMIN
superadmin --> UC_REMOVE_ADMIN
superadmin --> UC_CHANGE_ROLE
superadmin --> UC_DELETE_COMPANY

@enduml
```

---

## Diagramme Simplifié (Format Mermaid)

```mermaid
flowchart TB
    subgraph Acteurs
        V[👤 Visiteur]
        U[👤 Utilisateur]
        M[👤 Modérateur]
        A[👤 Admin]
        SA[👤 Super Admin]
    end

    subgraph "🔐 Authentification"
        UC1[S'inscrire]
        UC2[Se connecter]
        UC3[Vérifier email]
        UC4[Modifier email/mdp]
    end

    subgraph "📋 Profil"
        UC5[Modifier profil]
        UC6[Gérer compétences]
        UC7[Gérer expériences]
        UC8[Gérer formations]
    end

    subgraph "👁️ Consultation"
        UC9[Voir fil d'actualité]
        UC10[Voir profils]
        UC11[Rechercher]
    end

    subgraph "📝 Publications"
        UC12[Créer post]
        UC13[Commenter]
        UC14[Voter]
    end

    subgraph "🤝 Réseau"
        UC15[Demandes de connexion]
        UC16[Gérer connexions]
        UC17[Notifications]
    end

    subgraph "🏢 Entreprise"
        UC18[Créer entreprise]
        UC19[Modifier entreprise]
        UC20[Publier comme entreprise]
    end

    subgraph "⚙️ Administration"
        UC21[Valider expériences]
        UC22[Gérer admins]
        UC23[Supprimer entreprise]
    end

    V --> UC1 & UC2 & UC9 & UC10 & UC11
    U --> UC3 & UC4 & UC5 & UC6 & UC7 & UC8
    U --> UC12 & UC13 & UC14 & UC15 & UC16 & UC17 & UC18
    M --> UC20 & UC21
    A --> UC19
    SA --> UC22 & UC23
```

---

## Détail des Cas d'Utilisation

### 1. Authentification

| ID | Cas d'utilisation | Acteur(s) | Description |
|----|-------------------|-----------|-------------|
| UC01 | S'inscrire | Visiteur | Créer un compte avec email et mot de passe |
| UC02 | Se connecter | Visiteur | Accéder à son compte existant |
| UC03 | Vérifier son email | Utilisateur | Confirmer son adresse email pour activer le compte |
| UC04 | Modifier son email | Utilisateur | Changer l'adresse email associée au compte |
| UC05 | Modifier son mot de passe | Utilisateur | Changer le mot de passe du compte |

### 2. Gestion du Profil

| ID | Cas d'utilisation | Acteur(s) | Description |
|----|-------------------|-----------|-------------|
| UC10 | Consulter son dashboard | Utilisateur | Voir son tableau de bord personnel |
| UC11 | Modifier son profil | Utilisateur | Éditer nom, prénom, photo, bio |
| UC12 | Ajouter une compétence | Utilisateur | Ajouter une skill avec niveau (1-5) |
| UC13 | Supprimer une compétence | Utilisateur | Retirer une compétence du profil |
| UC14 | Ajouter une expérience | Utilisateur | Déclarer une expérience professionnelle |
| UC15 | Ajouter une formation | Utilisateur | Ajouter un diplôme ou certification |
| UC16 | Voir qui a consulté son profil | Utilisateur | Consulter la liste des visiteurs |

### 3. Consultation Publique

| ID | Cas d'utilisation | Acteur(s) | Description |
|----|-------------------|-----------|-------------|
| UC20 | Voir le fil d'actualité | Tous | Consulter les derniers posts |
| UC21 | Voir un profil utilisateur | Tous | Consulter le profil d'un membre |
| UC22 | Voir un profil entreprise | Tous | Consulter la page d'une entreprise |
| UC23 | Voir un post | Tous | Afficher un post et ses commentaires |
| UC24 | Rechercher | Tous | Chercher des utilisateurs ou entreprises |
| UC25 | Voir la liste des utilisateurs | Tous | Parcourir tous les membres |
| UC26 | Voir la liste des entreprises | Tous | Parcourir toutes les entreprises |

### 4. Publications

| ID | Cas d'utilisation | Acteur(s) | Description |
|----|-------------------|-----------|-------------|
| UC30 | Créer un post | Utilisateur | Publier du contenu avec médias optionnels |
| UC31 | Supprimer son post | Utilisateur | Retirer une de ses publications |
| UC32 | Commenter un post | Utilisateur | Ajouter un commentaire sous un post |
| UC33 | Répondre à un commentaire | Utilisateur | Répondre à un commentaire existant |
| UC34 | Voter | Utilisateur | Like ou dislike sur post/commentaire |

### 5. Réseau

| ID | Cas d'utilisation | Acteur(s) | Description |
|----|-------------------|-----------|-------------|
| UC40 | Envoyer une demande de connexion | Utilisateur | Inviter un autre membre |
| UC41 | Accepter une demande | Utilisateur | Valider une invitation reçue |
| UC42 | Refuser une demande | Utilisateur | Décliner une invitation |
| UC43 | Voir ses connexions | Utilisateur | Afficher son réseau |
| UC44 | Supprimer une connexion | Utilisateur | Retirer un contact |
| UC45 | Voir ses notifications | Utilisateur | Consulter les alertes et demandes |

### 6. Gestion Entreprise

| ID | Cas d'utilisation | Acteur(s) | Description |
|----|-------------------|-----------|-------------|
| UC50 | Créer une entreprise | Utilisateur | Créer une page entreprise (devient Super Admin) |
| UC51 | Modifier l'entreprise | Admin, Super Admin | Éditer les infos de l'entreprise |
| UC52 | Publier au nom de l'entreprise | Modérateur+ | Créer un post comme l'entreprise |
| UC53 | Commenter au nom de l'entreprise | Modérateur+ | Commenter comme l'entreprise |
| UC54 | Voir mes entreprises | Utilisateur | Lister les entreprises administrées |

### 7. Administration Entreprise

| ID | Cas d'utilisation | Acteur(s) | Description |
|----|-------------------|-----------|-------------|
| UC60 | Valider une expérience | Modérateur+ | Confirmer l'expérience d'un employé |
| UC61 | Refuser une expérience | Modérateur+ | Rejeter une expérience déclarée |
| UC62 | Ajouter un administrateur | Super Admin | Nommer un nouveau admin/modérateur |
| UC63 | Supprimer un administrateur | Super Admin | Retirer un admin de l'entreprise |
| UC64 | Modifier le rôle d'un admin | Super Admin | Changer le niveau d'accès |
| UC65 | Supprimer l'entreprise | Super Admin | Supprimer définitivement l'entreprise |

---

## Matrice Acteurs / Cas d'Utilisation

| Cas d'utilisation | Visiteur | Utilisateur | Modérateur | Admin | Super Admin |
|-------------------|:--------:|:-----------:|:----------:|:-----:|:-----------:|
| S'inscrire | ✅ | - | - | - | - |
| Se connecter | ✅ | - | - | - | - |
| Voir fil d'actualité | ✅ | ✅ | ✅ | ✅ | ✅ |
| Voir profils | ✅ | ✅ | ✅ | ✅ | ✅ |
| Rechercher | ✅ | ✅ | ✅ | ✅ | ✅ |
| Modifier son profil | - | ✅ | ✅ | ✅ | ✅ |
| Gérer compétences | - | ✅ | ✅ | ✅ | ✅ |
| Créer un post | - | ✅ | ✅ | ✅ | ✅ |
| Commenter/Voter | - | ✅ | ✅ | ✅ | ✅ |
| Gérer son réseau | - | ✅ | ✅ | ✅ | ✅ |
| Créer entreprise | - | ✅ | ✅ | ✅ | ✅ |
| Publier comme entreprise | - | - | ✅ | ✅ | ✅ |
| Valider expériences | - | - | ✅ | ✅ | ✅ |
| Modifier entreprise | - | - | - | ✅ | ✅ |
| Gérer les admins | - | - | - | - | ✅ |
| Supprimer entreprise | - | - | - | - | ✅ |

---

## Flux Principaux

### Flux d'inscription et création de contenu

```
1. Visiteur → S'inscrire
2. Système → Envoyer email de vérification
3. Utilisateur → Vérifier son email
4. Système → Créer profil Writer
5. Utilisateur → Créer un post
```

### Flux de validation d'expérience

```
1. Utilisateur → Ajouter une expérience (entreprise X)
2. Système → Créer expérience (validated: false)
3. Admin Entreprise X → Voir expériences en attente
4. Admin → Valider/Refuser l'expérience
5. Système → Mettre à jour le statut
```

### Flux de connexion entre utilisateurs

```
1. Utilisateur A → Envoyer demande à B
2. Système → Créer relation (status: false)
3. Utilisateur B → Voir notification
4. Utilisateur B → Accepter/Refuser
5. Système → Mettre à jour relation
```

### Flux de création d'entreprise

```
1. Utilisateur → Créer entreprise
2. Système → Créer Company + CompanyAdmin (SUPER_ADMIN)
3. Système → Créer Writer pour l'entreprise
4. Système → Créer WriterLink (user → company writer)
5. Super Admin → Peut publier comme l'entreprise
```

---

## Notes Techniques

- **Authentification** : Utilise Better Auth
- **Base de données** : MySQL avec Prisma ORM
- **Recherche** : MeiliSearch pour la recherche full-text
- **Rôles entreprise** : Enum `CompanyRole` (SUPER_ADMIN, ADMIN, MODERATOR)
- **Système Writer** : Permet à un utilisateur de publier en son nom ou au nom d'une entreprise
