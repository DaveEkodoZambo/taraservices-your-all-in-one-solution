import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services-data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
    <div className="overflow-hidden">
      <section className="relative pt-36 pb-16 px-4 md:px-6">
        <div className="max-w-[1500px] mx-auto bento-cell p-10 md:p-16 animate-float-in">
          <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 flex items-center gap-3"><span className="w-8 h-px bg-primary" /> Catalogue complet · 16 services</div>
          <h1 className="font-display text-6xl md:text-9xl leading-[0.85]">
            NOS<br /><span className="text-gradient-red">SERVICES.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">Une plateforme unique, plus de 15 prestations pensées pour vous simplifier le quotidien et booster votre entreprise. À Yaoundé, partout au Cameroun.</p>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1500px] mx-auto grid grid-cols-12 gap-3">
          {services.map((s, i) => {
            const span = i === 0 || i === 7 ? "lg:col-span-6" : i === 3 ? "lg:col-span-6" : "lg:col-span-3";
            return (
              <article key={s.title} className={`col-span-12 md:col-span-6 ${span} bento-cell p-8 group min-h-[220px] flex flex-col justify-between`}>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <span className="font-display text-2xl text-muted-foreground/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h2 className="font-display text-2xl leading-tight">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            );
          })}

          <div className="col-span-12 bento-cell p-10 md:p-14 mt-3 bg-primary/5 border-primary/40">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-4xl md:text-6xl leading-tight">UN SERVICE<br />SUR <span className="text-gradient-red">MESURE</span> ?</h3>
                <p className="mt-4 text-muted-foreground">Nous adaptons toutes nos prestations à vos besoins spécifiques. Parlons-en.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-[0.2em] text-xs" style={{ boxShadow: "var(--shadow-red)" }}>
                  Demander un devis <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://wa.me/237659315165" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-border px-7 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:border-primary hover:text-primary transition-colors">
                  WhatsApp <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
