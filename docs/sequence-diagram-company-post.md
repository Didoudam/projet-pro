# Diagramme de Séquence : Publication d'un Post au nom d'une Entreprise

```
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                    PUBLICATION D'UN POST AU NOM D'UNE ENTREPRISE                               │
└────────────────────────────────────────────────────────────────────────────────────────────────┘

   USER              FRONTEND             API                 DATABASE
    │                   │                  │                      │
    │                   │                  │                      │
    │  Ouvre formulaire │                  │                      │
    │ ────────────────► │                  │                      │
    │                   │                  │                      │
    │                   │  GET /writers    │                      │
    │                   │ ───────────────► │                      │
    │                   │                  │                      │
    │                   │                  │  SELECT Writer       │
    │                   │                  │  + WriterLinks       │
    │                   │                  │ ───────────────────► │
    │                   │                  │                      │
    │                   │                  │  Writers[]           │
    │                   │                  │ ◄─────────────────── │
    │                   │                  │                      │
    │                   │  [Perso, Entrep] │                      │
    │                   │ ◄─────────────── │                      │
    │                   │                  │                      │
    │  Affiche dropdown │                  │                      │
    │ ◄──────────────── │                  │                      │
    │                   │                  │                      │
    │                   │                  │                      │
    │  Sélectionne      │                  │                      │
    │  "Entreprise XYZ" │                  │                      │
    │ ────────────────► │                  │                      │
    │                   │                  │                      │
    │  Rédige + Publie  │                  │                      │
    │ ────────────────► │                  │                      │
    │                   │                  │                      │
    │                   │  POST /posts     │                      │
    │                   │  {content,       │                      │
    │                   │   writerId}      │                      │
    │                   │ ───────────────► │                      │
    │                   │                  │                      │
    │                   │                  │  Vérifie session     │
    │                   │                  │ ─────────┐           │
    │                   │                  │ ◄────────┘ OK        │
    │                   │                  │                      │
    │                   │                  │  SELECT WriterLink   │
    │                   │                  │  (vérifie accès)     │
    │                   │                  │ ───────────────────► │
    │                   │                  │                      │
    │                   │                  │  Accès confirmé ✓    │
    │                   │                  │ ◄─────────────────── │
    │                   │                  │                      │
    │                   │                  │  INSERT Post         │
    │                   │                  │ ───────────────────► │
    │                   │                  │                      │
    │                   │                  │  Post créé           │
    │                   │                  │ ◄─────────────────── │
    │                   │                  │                      │
    │                   │  201 + Post      │                      │
    │                   │ ◄─────────────── │                      │
    │                   │                  │                      │
    │  Post affiché     │                  │                      │
    │  (logo entreprise)│                  │                      │
    │ ◄──────────────── │                  │                      │
    │                   │                  │                      │
   ─┴─                 ─┴─                ─┴─                    ─┴─
```

---

## Cas d'erreur

```
   USER              API                 Réponse
    │                 │                    │
    │  POST sans      │                    │
    │  session        ├──────────────────► │  401 Non authentifié
    │ ◄───────────────┤                    │
    │                 │                    │
    │  POST writerId  │                    │
    │  sans lien      ├──────────────────► │  403 Pas lié à l'entreprise
    │ ◄───────────────┤                    │
    │                 │                    │
    │  POST content   │                    │
    │  vide           ├──────────────────► │  400 Contenu invalide
    │ ◄───────────────┤                    │
   ─┴─               ─┴─                  ─┴─
```

---

## Modèle de données

```
  USER                         COMPANY
    │                            │
    │ 1:1                        │ 1:1
    ▼                            ▼
  WRITER ◄───── WRITERLINK ────► WRITER
(personnel)    (autorise)      (entreprise)
    │
    │ 1:N
    ▼
   POST
```

---

## Endpoints

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/users/{userId}/writer` | Liste des writers disponibles |
| POST | `/api/users/{userId}/writer/{writerId}/posts` | Créer un post |
