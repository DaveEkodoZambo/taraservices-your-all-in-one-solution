import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — TaraServices" },
      { name: "description", content: "Politique de confidentialité TaraServices : comment nous collectons, utilisons et protégeons vos données personnelles." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div>
      <section className="relative py-24 border-b border-border bg-grid-red">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Vos données, votre contrôle</div>
          <h1 className="font-display text-5xl md:text-7xl">POLITIQUE DE <span className="text-gradient-red">CONFIDENTIALITÉ</span></h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-muted-foreground">
          <Block title="1. Collecte des données">
            <p>TaraServices collecte uniquement les données nécessaires à l'exécution des services demandés : nom, téléphone, adresse de livraison, email, et informations relatives à votre commande.</p>
          </Block>

          <Block title="2. Utilisation des données">
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Traiter et livrer vos commandes</li>
              <li>Vous contacter au sujet de votre mission</li>
              <li>Améliorer la qualité de nos services</li>
              <li>Vous informer de nos actualités (avec votre accord)</li>
            </ul>
          </Block>

          <Block title="3. Conservation">
            <p>Vos données sont conservées pendant la durée nécessaire à la fourniture du service et aux obligations légales, généralement 3 ans après la dernière interaction.</p>
          </Block>

          <Block title="4. Partage avec des tiers">
            <p>TaraServices ne vend, ne loue et ne partage vos données personnelles avec aucun tiers à des fins commerciales. Vos informations peuvent être partagées uniquement avec nos prestataires opérationnels (livreurs, partenaires techniques) dans la stricte mesure nécessaire à l'exécution du service.</p>
          </Block>

          <Block title="5. Sécurité">
            <p>Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou altération.</p>
          </Block>

          <Block title="6. Vos droits">
            <p>Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Pour exercer ces droits, écrivez-nous à <a href="mailto:yannickoberts@gmail.com" className="text-primary hover:underline">yannickoberts@gmail.com</a>.</p>
          </Block>

          <Block title="7. Cookies">
            <p>Notre site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre consentement explicite.</p>
          </Block>

          <Block title="8. Modifications">
            <p>La présente politique peut être mise à jour. Toute modification substantielle vous sera notifiée par les moyens appropriés.</p>
          </Block>

          <p className="text-xs uppercase tracking-widest pt-10 border-t border-border">Dernière mise à jour : Mai 2026</p>
        </div>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-3xl text-foreground mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
