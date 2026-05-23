import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Shield, Heart, Target, Eye, Award, Users, ArrowRight } from "lucide-react";
import courier from "@/assets/hero-courier.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — TaraServices Yaoundé" },
      { name: "description", content: "TaraServices, basée à l'Hôtel de Ville de Yaoundé, offre livraison et plus de 15 multiservices au Cameroun, 24h/24 et 7j/7." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "2022", t: "Naissance", d: "Création de TaraServices avec une mission claire : la livraison de colis à Yaoundé." },
  { y: "2023", t: "Diversification", d: "Lancement des premiers multiservices : nettoyage, blanchisserie, factures." },
  { y: "2024", t: "Expansion", d: "Couverture étendue à l'ensemble du territoire national camerounais." },
  { y: "2025", t: "Partenariats", d: "Contrats récurrents avec PME et grandes structures du pays." },
  { y: "2026", t: "16 services", d: "Catalogue complet : technique, immobilier, événementiel et plus encore." },
];

function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* HERO BENTO */}
      <section className="relative pt-36 pb-10 px-4 md:px-6">
        <div className="max-w-[1500px] mx-auto grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-7 bento-cell p-10 md:p-14 animate-float-in min-h-[440px] flex flex-col justify-between">
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary flex items-center gap-3"><span className="w-8 h-px bg-primary" /> Notre histoire</div>
            <div>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85]">
                À<br /><span className="text-gradient-red">PROPOS.</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl">TaraServices est une entreprise camerounaise dédiée à la livraison et aux multiservices. Notre mission : vous libérer du temps avec des prestations efficaces, rapides et fiables.</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 bento-cell relative min-h-[440px] overflow-hidden group">
            <img src={courier} alt="Équipe TaraServices" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1600} height={1600} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">— Sur le terrain</div>
              <div className="font-display text-3xl mt-2">L'ÉQUIPE EN ACTION</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / PROMISE */}
      <section className="px-4 md:px-6 py-12">
        <div className="max-w-[1500px] mx-auto grid grid-cols-12 gap-3">
          {[
            { i: Target, t: "Mission", d: "Simplifier le quotidien des Camerounais en regroupant tous les services essentiels sur une plateforme fiable." },
            { i: Eye, t: "Vision", d: "Devenir le partenaire de référence pour la logistique et les services au Cameroun." },
            { i: Award, t: "Promesse", d: "Efficacité et rapidité, sans compromis sur la qualité. 24h/24, 7j/7." },
          ].map((b) => (
            <div key={b.t} className="col-span-12 md:col-span-4 bento-cell p-10 min-h-[280px] flex flex-col justify-between group">
              <b.i className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h2 className="font-display text-4xl">{b.t}</h2>
                <p className="mt-3 text-muted-foreground">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 md:px-6 py-12">
        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10">
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">— Nos valeurs</div>
            <h2 className="font-display text-5xl md:text-7xl">CE QUI NOUS<br /><span className="text-gradient-red">DÉFINIT.</span></h2>
          </div>
          <div className="grid grid-cols-12 gap-3">
            {[
              { i: MapPin, t: "Proximité", d: "Au cœur de Yaoundé, proches de nos clients." },
              { i: Clock, t: "Disponibilité", d: "Toujours là, jour, nuit, week-end inclus." },
              { i: Shield, t: "Fiabilité", d: "Personnel formé, missions sécurisées." },
              { i: Heart, t: "Engagement", d: "Votre satisfaction, notre vraie réussite." },
            ].map((v) => (
              <div key={v.t} className="col-span-6 lg:col-span-3 bento-cell p-8 min-h-[200px]">
                <v.i className="w-8 h-8 text-primary" />
                <h3 className="mt-6 font-display text-2xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE BENTO */}
      <section className="px-4 md:px-6 py-12">
        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10">
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">— Parcours</div>
            <h2 className="font-display text-5xl md:text-7xl">UNE HISTOIRE EN<br /><span className="text-primary">MOUVEMENT.</span></h2>
          </div>
          <div className="grid grid-cols-12 gap-3">
            {timeline.map((e, i) => (
              <div key={e.y} className={`col-span-12 md:col-span-6 ${i === 0 || i === 4 ? "lg:col-span-4" : "lg:col-span-2"} bento-cell p-6 min-h-[200px] flex flex-col justify-between group`}>
                <div className="font-display text-5xl text-primary group-hover:scale-110 origin-left transition-transform">{e.y}</div>
                <div>
                  <h3 className="font-display text-xl">{e.t}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{e.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM stat + CTA */}
      <section className="px-4 md:px-6 py-12">
        <div className="max-w-[1500px] mx-auto grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-4 bento-cell p-10 bg-primary/5 border-primary/40 flex flex-col justify-between min-h-[300px]">
            <Users className="w-10 h-10 text-primary" />
            <div>
              <div className="font-display text-7xl text-gradient-red">30+</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">Collaborateurs sur le terrain</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 bento-cell p-10 md:p-14 relative overflow-hidden min-h-[300px]">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-primary/20 animate-spin-slow" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.4em] text-primary">— Localisation</div>
              <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[0.9]">HÔTEL DE VILLE<br /><span className="outline-text">YAOUNDÉ.</span></h2>
              <p className="mt-6 text-muted-foreground max-w-xl">Notre QG se trouve au pied de l'Hôtel de Ville. Une localisation stratégique pour intervenir rapidement partout dans la capitale et bien au-delà.</p>
              <div className="mt-8 flex flex-wrap gap-8">
                {[["7j/7", "Ouvert tous les jours"], ["24h", "Disponibilité totale"], ["CMR", "Tout le territoire"]].map(([v, l]) => (
                  <div key={v}><div className="font-display text-3xl text-primary">{v}</div><div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{l}</div></div>
                ))}
              </div>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-[0.2em] text-xs" style={{ boxShadow: "var(--shadow-red)" }}>
                Venir nous voir <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
