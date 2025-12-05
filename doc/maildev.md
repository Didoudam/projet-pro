# MailDev - Documentation

## 📧 Qu'est-ce que MailDev ?

**MailDev** est un serveur SMTP de développement qui capture tous les emails envoyés par votre application sans les envoyer réellement. Il fournit une interface web pour visualiser et tester vos emails.

## 🎯 Fonctionnement

```
┌─────────────────────┐
│  Application Next.js│
│  (Better Auth)      │
└──────────┬──────────┘
           │ Envoie email via SMTP
           │ localhost:1025
           ▼
┌─────────────────────┐
│     MailDev         │
│  (Serveur SMTP)     │
│                     │
│  ✅ Capture l'email  │
│  ❌ Ne l'envoie PAS  │
└──────────┬──────────┘
           │
           │ Stocke en mémoire
           ▼
┌─────────────────────┐
│  Interface Web      │
│  localhost:1080     │
│                     │
│  📬 Liste des emails │
│  👁️ Visualisation    │
└─────────────────────┘
```

## 🚀 Configuration dans le projet

### 1. Docker Compose

```yaml
# docker-compose.yml
maildev:
  image: maildev/maildev
  container_name: projet-pro-maildev
  restart: unless-stopped
  ports:
    - "1080:1080"  # Interface web
    - "1025:1025"  # Serveur SMTP
  networks:
    - projet-pro-network
```

### 2. Variables d'environnement

```bash
# .env
SMTP_HOST="localhost"
SMTP_PORT="1025"
SMTP_USER=""                              # Pas d'authentification requise
SMTP_PASS=""                              # Pas d'authentification requise
SMTP_FROM="noreply@projetpro.local"       # N'importe quelle adresse
```

### 3. Configuration Nodemailer

```typescript
// src/lib/email.ts
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "localhost",
    port: parseInt(process.env.SMTP_PORT || "1025"),
    secure: false,  // Pas de TLS/SSL en développement
    auth: undefined // Pas d'authentification
});
```

## 📝 Utilisation

### Démarrer MailDev

```bash
# Via Docker Compose
docker-compose up -d maildev

# Vérifier que MailDev tourne
docker ps | grep maildev
```

### Accéder à l'interface

1. **Interface web** : http://localhost:1080
2. **Serveur SMTP** : `localhost:1025`

### Tester l'envoi d'email

1. Allez sur http://localhost:3000/signUp
2. Créez un nouveau compte
3. Better Auth envoie un email de vérification
4. Consultez http://localhost:1080 pour voir l'email capturé

## ✅ Avantages

| Avantage | Description |
|----------|-------------|
| **🚫 Pas d'envoi réel** | Les emails ne quittent jamais votre machine |
| **⚡ Rapide** | Pas de vraie connexion SMTP externe |
| **🔒 Sécurisé** | Aucun risque d'envoyer des emails de test à de vraies personnes |
| **👁️ Visualisation** | Interface web pour voir le HTML, texte, headers |
| **📋 Debug facile** | Voir exactement ce qui est envoyé |
| **0️⃣ Configuration** | Aucune config SMTP complexe |

## 🎨 Fonctionnalités de l'interface

### Vue liste
- Liste de tous les emails capturés
- Tri par date, expéditeur, destinataire
- Recherche dans les emails
- Compteur d'emails

### Vue détail
- **HTML** : Rendu visuel de l'email
- **Texte brut** : Version texte
- **Headers** : Tous les headers SMTP
- **Source** : Code source complet (EML)
- **Pièces jointes** : Téléchargement possible

### Actions
- 🗑️ Supprimer un email
- 🗑️ Supprimer tous les emails
- 📧 Relayer vers un vrai email (optionnel)

## 🔄 Workflow de développement

```
1. Développeur code une fonctionnalité email
   ↓
2. Application envoie l'email → MailDev
   ↓
3. Développeur vérifie dans l'interface web
   ↓
4. Si besoin, ajuste le template/contenu
   ↓
5. Répète jusqu'à satisfaction
```

## 🚨 Important

### Ce que MailDev N'EST PAS

❌ **Un serveur email de production**
- Les emails sont stockés en mémoire (perdus au redémarrage)
- Pas de vraie délivrabilité
- Pas de gestion des bounces

❌ **Un service de relay SMTP**
- N'envoie PAS réellement les emails
- Destiné uniquement au développement

### Ce que MailDev EST

✅ **Un outil de développement**
- Pour tester vos templates d'emails
- Pour vérifier le contenu avant production
- Pour développer sans service SMTP externe

## 📊 Comparaison avec d'autres solutions

| Solution | Avantages | Inconvénients |
|----------|-----------|---------------|
| **MailDev** | Simple, interface web, Docker | Emails en mémoire uniquement |
| **MailHog** | Similaire à MailDev | Moins maintenu |
| **Mailtrap** | Cloud, features avancées | Service externe, limites gratuites |
| **Gmail SMTP** | Vrai service | Peut envoyer de vrais emails par erreur |

## 🔧 Configuration avancée

### Persistance des emails

Par défaut, les emails sont perdus au redémarrage. Pour les persister :

```yaml
maildev:
  image: maildev/maildev
  volumes:
    - ./maildev-data:/data
  command: bin/maildev --smtp 1025 --web 1080 --outgoing-host smtp.gmail.com
```

### Relay vers un vrai SMTP (optionnel)

```yaml
maildev:
  image: maildev/maildev
  environment:
    - MAILDEV_OUTGOING_HOST=smtp.gmail.com
    - MAILDEV_OUTGOING_PORT=587
    - MAILDEV_OUTGOING_USER=your@gmail.com
    - MAILDEV_OUTGOING_PASS=yourpassword
```

### API REST

MailDev expose aussi une API REST :

```bash
# Lister les emails
curl http://localhost:1080/email

# Obtenir un email spécifique
curl http://localhost:1080/email/:id

# Supprimer tous les emails
curl -X DELETE http://localhost:1080/email/all
```

## 🎓 Exemple complet

### 1. Fonction d'envoi d'email

```typescript
// src/lib/email.ts
export async function sendVerificationEmail(
    email: string,
    verificationUrl: string
) {
    await transporter.sendMail({
        from: process.env.SMTP_FROM || "noreply@projetpro.local",
        to: email,
        subject: "Vérifiez votre adresse email",
        html: `
            <div style="font-family: Arial, sans-serif;">
                <h2>Bienvenue sur ProjetPro !</h2>
                <a href="${verificationUrl}">Vérifier mon email</a>
            </div>
        `,
    });
}
```

### 2. Better Auth configuration

```typescript
// src/lib/auth.ts
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendVerificationEmail: async ({ user, url }) => {
            await sendVerificationEmail(user.email, url);
        },
    },
});
```

### 3. Test manuel

1. Ouvrir http://localhost:1080
2. Créer un compte sur http://localhost:3000/signUp
3. Voir l'email apparaître dans MailDev
4. Cliquer sur le lien de vérification dans MailDev

## 🔜 Migration vers la production

Quand vous passez en production, remplacez MailDev par un vrai service SMTP :

### Option 1 : Service cloud (simple)
- **Resend** : 100 emails/jour gratuits
- **SendGrid** : 100 emails/jour gratuits
- **Mailgun** : 5000 emails/mois gratuits

### Option 2 : Serveur auto-hébergé (contrôle total)
- **Mailcow** sur Unraid (recommandé pour ce projet)
- **Postfix + Dovecot**
- **iRedMail**

### Variables à changer

```bash
# Production .env
SMTP_HOST="mail.didoudam.com"       # Votre serveur
SMTP_PORT="587"                     # Port TLS
SMTP_USER="noreply@didoudam.com"    # Vraie adresse
SMTP_PASS="votre-mot-de-passe"      # Vraie authentification
SMTP_FROM="noreply@didoudam.com"    # Domaine vérifié
```

## 🐛 Dépannage

### MailDev ne démarre pas

```bash
# Vérifier les logs
docker logs projet-pro-maildev

# Vérifier que les ports ne sont pas utilisés
netstat -ano | findstr :1080
netstat -ano | findstr :1025
```

### Les emails n'apparaissent pas

1. Vérifier que MailDev tourne : `docker ps | grep maildev`
2. Vérifier les variables d'environnement : `SMTP_HOST` et `SMTP_PORT`
3. Vérifier les logs de l'application Next.js
4. Tester la connexion SMTP :
   ```bash
   telnet localhost 1025
   ```

### Interface web inaccessible

1. Vérifier que le port 1080 n'est pas bloqué
2. Essayer http://127.0.0.1:1080
3. Vérifier les logs : `docker logs projet-pro-maildev`

## 📚 Ressources

- **Documentation officielle** : https://maildev.github.io/maildev/
- **GitHub** : https://github.com/maildev/maildev
- **Docker Hub** : https://hub.docker.com/r/maildev/maildev

## 🔐 Sécurité

### En développement (avec MailDev)
✅ Aucun email n'est envoyé réellement
✅ Pas besoin de credentials SMTP
✅ Pas de risque de spam accidentel

### En production (sans MailDev)
⚠️ Utiliser TLS/SSL (port 587 ou 465)
⚠️ Authentification obligatoire
⚠️ Vérifier votre domaine (SPF, DKIM, DMARC)
⚠️ Rate limiting pour éviter le spam

## ✨ Tips & Astuces

1. **Tester plusieurs destinataires** : MailDev capture TOUS les emails, peu importe le destinataire
2. **Templates HTML** : L'interface montre le rendu exact
3. **Debug** : Utilisez l'onglet "Headers" pour voir tous les détails SMTP
4. **Nettoyage** : Supprimez régulièrement les vieux emails pour garder l'interface propre
5. **API REST** : Automatisez vos tests avec l'API REST

## 🎯 Résumé

MailDev est l'outil parfait pour :
- ✅ Développer des fonctionnalités email
- ✅ Tester des templates d'emails
- ✅ Debugger des problèmes d'envoi
- ✅ Éviter d'envoyer des emails de test à de vraies personnes

C'est un **must-have** pour tout projet avec envoi d'emails ! 🚀
