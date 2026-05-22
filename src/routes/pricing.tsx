import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Tarifs & Formules — TaraServices" },
      { name: "description", content: "Découvrez les formules TaraServices : Express, Pro et Entreprise. Tarifs transparents pour la livraison et les multiservices au Cameroun." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Express",
    price: "1 500",
    unit: "à partir de · FCFA / course",
    desc: "Pour vos besoins ponctuels du quotidien.",
    features: [
      "Livraison intra-ville Yaoundé",
      "Réponse sous 15 minutes",
      "Paiement à la livraison",
      "Suivi WhatsApp en temps réel",
      "1 destinataire par course",
    ],
    cta: "Commander",
    highlight: false,
  },
  {
    name: "Pro",
    price: "45 000",
    unit: "FCFA / mois",
    desc: "Pour les indépendants et petites entreprises.",
    features: [
      "Jusqu'à 30 courses / mois",
      "Coursier dédié sur demande",
      "Tarifs négociés inter-villes",
      "Accès aux multiservices",
      "Facturation mensuelle",
      "Support prioritaire 7j/7",
    ],
    cta: "Choisir Pro",
    highlight: true,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    unit: "contrat personnalisé",
    desc: "Pour les structures à fort volume.",
    features: [
      "Courses illimitées",
      "Équipe dédiée",
      "Couverture nationale",
      "Tous les multiservices inclus",
      "Account manager dédié",
      "SLA contractuel garanti",
      "Reporting mensuel détaillé",
    ],
    cta: "Demander un devis",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <div>
      <section className="relative py-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-red" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Formules transparentes</div>
          <h1 className="font-display text-6xl md:text-8xl leading-none">NOS <span className="text-gradient-red">TARIFS</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Trois formules pour s'adapter à tous les besoins. Sans engagement, sans frais cachés.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-10 border bg-card flex flex-col ${
                p.highlight ? "border-primary lg:scale-105" : "border-border"
              }`}
              style={p.highlight ? { boxShadow: "var(--shadow-red)" } : undefined}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Le plus choisi
                </div>
              )}
              <h2 className="font-display text-4xl">{p.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-8 pb-8 border-b border-border">
                <div className="font-display text-6xl">{p.price}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{p.unit}</div>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-10 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm uppercase tracking-widest font-semibold transition-all ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {p.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-6">
          {[
            { t: "Sans engagement", d: "Résiliez à tout moment, aucun frais." },
            { t: "Devis gratuit", d: "Recevez un chiffrage en moins de 24h." },
            { t: "Paiement flexible", d: "Mobile Money, espèces ou virement." },
          ].map((b) => (
            <div key={b.t} className="p-6 border border-border bg-card text-center">
              <h3 className="font-display text-2xl text-primary">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
