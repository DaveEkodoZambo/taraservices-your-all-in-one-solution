import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — TaraServices" },
      { name: "description", content: "Mentions légales de TaraServices, entreprise de livraison et multiservices basée à Yaoundé, Cameroun." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <div>
      <section className="relative py-24 border-b border-border bg-grid-red">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Informations légales</div>
          <h1 className="font-display text-5xl md:text-7xl">MENTIONS <span className="text-gradient-red">LÉGALES</span></h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 prose prose-invert space-y-8 text-muted-foreground">
          <Block title="Éditeur du site">
            <p><strong className="text-foreground">Raison sociale :</strong> TaraServices</p>
            <p><strong className="text-foreground">Siège social :</strong> Hôtel de Ville, Centre-ville, Yaoundé, Cameroun</p>
            <p><strong className="text-foreground">Téléphone :</strong> +237 659 315 165 / +237 687 755 212</p>
            <p><strong className="text-foreground">Email :</strong> yannickoberts@gmail.com</p>
            <p><strong className="text-foreground">Directeur de la publication :</strong> Yannick Oberts</p>
          </Block>

          <Block title="Hébergement">
            <p>Le présent site est hébergé sur une infrastructure cloud sécurisée. Les coordonnées de l'hébergeur sont disponibles sur simple demande à l'éditeur.</p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>L'ensemble des éléments figurant sur le site TaraServices (textes, images, logos, graphismes, structure) est protégé par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable de TaraServices est strictement interdite.</p>
          </Block>

          <Block title="Responsabilité">
            <p>TaraServices s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de modifier le contenu à tout moment et sans préavis. Toutefois, TaraServices ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.</p>
          </Block>

          <Block title="Droit applicable">
            <p>Le présent site et ses conditions sont soumis au droit camerounais. Tout litige relatif à l'utilisation du site relève de la compétence exclusive des tribunaux de Yaoundé.</p>
          </Block>

          <Block title="Contact">
            <p>Pour toute question relative aux mentions légales du site, vous pouvez nous contacter à <a href="mailto:yannickoberts@gmail.com" className="text-primary hover:underline">yannickoberts@gmail.com</a>.</p>
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
