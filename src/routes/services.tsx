import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos Services — TaraServices" },
      { name: "description", content: "Découvrez plus de 15 services TaraServices : livraison, nettoyage, déménagement, paiement de factures, technique et bien plus." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <section className="relative py-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-red" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Catalogue complet</div>
          <h1 className="font-display text-6xl md:text-8xl leading-none">NOS <span className="text-gradient-red">SERVICES</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Une plateforme, plus de 15 prestations pensées pour vous simplifier le quotidien et booster votre entreprise.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article key={s.title} className="group relative p-8 border border-border bg-card hover:border-primary transition-all overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <span className="font-display text-2xl text-muted-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-6 font-display text-2xl">{s.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 p-10 border border-primary/30 bg-card text-center">
            <h3 className="font-display text-3xl md:text-4xl">UN SERVICE SUR MESURE ?</h3>
            <p className="mt-3 text-muted-foreground">Nous adaptons nos prestations à vos besoins. Parlons-en.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-widest text-sm" style={{ boxShadow: "var(--shadow-red)" }}>
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
