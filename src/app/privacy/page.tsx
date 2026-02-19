import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Projet Pro",
  description: "Politique de confidentialité de Projet Pro",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pattern-dots">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-card border-2 border-border p-6 md:p-8 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
          <h1 className="text-2xl md:text-3xl font-bold font-mono uppercase mb-6 border-b-2 border-border pb-4">
            Politique de Confidentialité
          </h1>

          <div className="space-y-6 text-sm md:text-base">
            <section>
              <h2 className="text-lg font-bold font-mono uppercase mb-3 text-primary">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bienvenue sur Projet Pro. Nous accordons une grande importance à la protection de vos données personnelles.
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations
                lorsque vous utilisez notre plateforme.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold font-mono uppercase mb-3 text-primary">
                2. Données Collectées
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Nous collectons les types de données suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Informations d&apos;identification (nom, prénom, email)</li>
                <li>Informations de profil professionnel</li>
                <li>Contenu que vous publiez (posts, commentaires)</li>
                <li>Données de connexion et d&apos;utilisation</li>
                <li>Informations sur les entreprises que vous gérez</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold font-mono uppercase mb-3 text-primary">
                3. Utilisation des Données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Fournir et améliorer nos services</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Faciliter les connexions professionnelles</li>
                <li>Communiquer avec vous concernant votre compte</li>
                <li>Assurer la sécurité de la plateforme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold font-mono uppercase mb-3 text-primary">
                4. Partage des Données
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager certaines informations
                avec des prestataires de services qui nous aident à faire fonctionner la plateforme,
                toujours dans le respect de cette politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold font-mono uppercase mb-3 text-primary">
                5. Sécurité des Données
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées
                pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold font-mono uppercase mb-3 text-primary">
                6. Vos Droits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d&apos;opposition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold font-mono uppercase mb-3 text-primary">
                7. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous utilisons des cookies essentiels pour le fonctionnement de la plateforme,
                notamment pour maintenir votre session de connexion. Aucun cookie publicitaire
                ou de tracking tiers n&apos;est utilisé.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold font-mono uppercase mb-3 text-primary">
                8. Conservation des Données
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données sont conservées aussi longtemps que votre compte est actif.
                En cas de suppression de compte, vos données personnelles seront effacées
                dans un délai de 30 jours, sauf obligation légale de conservation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold font-mono uppercase mb-3 text-primary">
                9. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
                vous pouvez nous contacter via les coordonnées disponibles sur notre plateforme.
              </p>
            </section>

            <section className="pt-4 border-t-2 border-border">
              <p className="text-xs text-muted-foreground">
                Dernière mise à jour : Février 2026
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
