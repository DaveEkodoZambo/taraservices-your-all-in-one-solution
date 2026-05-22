import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cgu")({
  head: () => ({
    meta: [
      { title: "CGU — Conditions générales d'utilisation · TaraServices" },
      { name: "description", content: "Conditions générales d'utilisation du site et des services TaraServices." },
    ],
  }),
  component: CguPage,
});

function CguPage() {
  return (
    <div>
      <section className="relative py-24 border-b border-border bg-grid-red">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Règles d'utilisation</div>
          <h1 className="font-display text-5xl md:text-7xl">CGU<span className="text-primary">.</span></h1>
          <p className="mt-6 text-muted-foreground max-w-2xl">Conditions générales d'utilisation du site et des services TaraServices.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-muted-foreground">
          <Block title="Article 1 — Objet">
            <p>Les présentes CGU régissent l'utilisation du site web TaraServices et de l'ensemble des services proposés. L'accès au site implique l'acceptation pleine et entière des présentes conditions.</p>
          </Block>

          <Block title="Article 2 — Accès au site">
            <p>Le site est accessible 24h/24, 7j/7, sauf cas de force majeure ou maintenance technique. TaraServices ne saurait être tenue responsable de toute interruption.</p>
          </Block>

          <Block title="Article 3 — Comportement de l'utilisateur">
            <p>L'utilisateur s'engage à utiliser le site de manière loyale et à ne pas porter atteinte à son bon fonctionnement, à sa sécurité ou à son intégrité.</p>
          </Block>

          <Block title="Article 4 — Propriété intellectuelle">
            <p>L'ensemble du contenu du site (textes, images, logos, code) est la propriété exclusive de TaraServices. Toute reproduction non autorisée est interdite.</p>
          </Block>

          <Block title="Article 5 — Données personnelles">
            <p>Le traitement des données personnelles est encadré par notre Politique de confidentialité, accessible depuis le pied de page du site.</p>
          </Block>

          <Block title="Article 6 — Liens externes">
            <p>Le site peut contenir des liens vers des sites tiers. TaraServices décline toute responsabilité quant au contenu de ces sites.</p>
          </Block>

          <Block title="Article 7 — Modification des CGU">
            <p>TaraServices se réserve le droit de modifier les présentes CGU à tout moment. Les nouvelles versions s'appliquent dès leur publication.</p>
          </Block>

          <Block title="Article 8 — Droit applicable">
            <p>Les présentes CGU sont soumises au droit camerounais. Tout litige relèvera de la compétence des tribunaux de Yaoundé.</p>
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
