import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "CGV — Conditions générales de vente · TaraServices" },
      { name: "description", content: "Conditions générales de vente des services TaraServices : commande, tarifs, paiement, livraison et garanties." },
    ],
  }),
  component: CgvPage,
});

function CgvPage() {
  return (
    <div>
      <section className="relative py-24 border-b border-border bg-grid-red">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Conditions commerciales</div>
          <h1 className="font-display text-5xl md:text-7xl">CGV<span className="text-primary">.</span></h1>
          <p className="mt-6 text-muted-foreground max-w-2xl">Conditions générales de vente des prestations TaraServices.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-muted-foreground">
          <Block title="Article 1 — Champ d'application">
            <p>Les présentes CGV s'appliquent à toutes les prestations vendues par TaraServices à ses clients particuliers et professionnels au Cameroun.</p>
          </Block>

          <Block title="Article 2 — Commande">
            <p>Toute commande passée par WhatsApp, téléphone, email ou via le formulaire du site vaut acceptation des présentes CGV. Un récapitulatif est transmis au client avant exécution.</p>
          </Block>

          <Block title="Article 3 — Tarifs">
            <p>Les tarifs sont indiqués en FCFA, toutes taxes comprises. Ils peuvent évoluer en fonction de la distance, du volume et des contraintes spécifiques de la mission. Un devis gratuit est établi sur demande.</p>
          </Block>

          <Block title="Article 4 — Paiement">
            <p>Le paiement s'effectue par Mobile Money (MTN, Orange), en espèces à la livraison, ou par virement bancaire pour les entreprises. Pour les contrats mensuels, la facturation est émise en fin de mois et payable sous 15 jours.</p>
          </Block>

          <Block title="Article 5 — Livraison et exécution">
            <p>Les délais de livraison sont communiqués à titre indicatif. TaraServices s'engage à respecter les engagements pris lors de la confirmation de commande. En cas de retard significatif, le client est informé sans délai.</p>
          </Block>

          <Block title="Article 6 — Annulation">
            <p>Toute annulation doit être notifiée le plus tôt possible. Une annulation après le démarrage de la mission peut donner lieu à une facturation au prorata des prestations engagées.</p>
          </Block>

          <Block title="Article 7 — Responsabilité">
            <p>TaraServices s'engage à apporter le plus grand soin à l'exécution des missions confiées. En cas de dommage avéré, la responsabilité de TaraServices est limitée au montant de la prestation concernée, sauf souscription d'une assurance complémentaire.</p>
          </Block>

          <Block title="Article 8 — Réclamations">
            <p>Toute réclamation doit être adressée à TaraServices dans un délai de 7 jours après la prestation, par email à <a href="mailto:yannickoberts@gmail.com" className="text-primary hover:underline">yannickoberts@gmail.com</a> ou par WhatsApp.</p>
          </Block>

          <Block title="Article 9 — Litiges">
            <p>En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux de Yaoundé seront seuls compétents.</p>
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
