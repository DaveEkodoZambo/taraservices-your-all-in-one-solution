import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Shield, Heart, Target, Eye, Award, Users, ArrowRight } from "lucide-react";
import courier from "@/assets/courier.jpg";

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
  { y: "2022", t: "Naissance de TaraServices", d: "Création de l'entreprise avec une activité principale : la livraison de colis à Yaoundé." },
  { y: "2023", t: "Diversification", d: "Lancement des premiers multiservices : nettoyage, blanchisserie et paiement de factures." },
  { y: "2024", t: "Expansion territoriale", d: "Ouverture de la couverture à l'ensemble du territoire national." },
  { y: "2025", t: "Partenariats entreprises", d: "Signature de contrats récurrents avec PME et grandes structures camerounaises." },
  { y: "2026", t: "Plus de 15 services", d: "Catalogue complet : technique, immobilier, événementiel et plus encore." },
];

const team = [
  { name: "Yannick Oberts", role: "Fondateur & Directeur", initials: "YO" },
  { name: "Équipe Opérations", role: "Coordination missions", initials: "OP" },
  { name: "Équipe Coursiers", role: "Livraison & terrain", initials: "CR" },
  { name: "Service Client", role: "Support 24h/24", initials: "SC" },
];

function AboutPage() {
  return (
    <div>
      <section className="relative py-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-red" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Notre histoire</div>
            <h1 className="font-display text-6xl md:text-8xl leading-none">À <span className="text-gradient-red">PROPOS</span></h1>
            <p className="mt-6 text-lg text-muted-foreground">TaraServices est une entreprise camerounaise dédiée à la livraison de colis et aux multiservices. Notre mission : vous libérer du temps avec des prestations efficaces, rapides et fiables.</p>
            <p className="mt-4 text-muted-foreground">Du nettoyage industriel au paiement de factures, de la blanchisserie au déménagement, nous couvrons l'intégralité de vos besoins quotidiens et professionnels.</p>
          </div>
          <div className="relative aspect-square overflow-hidden ring-glow">
            <img src={courier} alt="Équipe TaraServices" className="w-full h-full object-cover" loading="lazy" width={1080} height={1600} />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/20" />
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { i: Target, t: "Notre Mission", d: "Simplifier le quotidien des Camerounais en regroupant tous les services essentiels sur une seule plateforme fiable." },
            { i: Eye, t: "Notre Vision", d: "Devenir le partenaire de référence des particuliers et entreprises pour la logistique et les services au Cameroun." },
            { i: Award, t: "Notre Promesse", d: "Efficacité et rapidité, sans compromis sur la qualité. Une équipe disponible 24h/24, 7j/7." },
          ].map((b) => (
            <div key={b.t} className="p-10 border border-border bg-card hover:border-primary transition-colors">
              <b.i className="w-10 h-10 text-primary" />
              <h2 className="mt-6 font-display text-3xl">{b.t}</h2>
              <p className="mt-3 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-3">— Nos valeurs</div>
            <h2 className="font-display text-5xl md:text-7xl">CE QUI NOUS <span className="text-gradient-red">DÉFINIT</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: MapPin, t: "Proximité", d: "Au cœur de Yaoundé, proches de nos clients." },
              { i: Clock, t: "Disponibilité", d: "Toujours là, jour et nuit, week-end inclus." },
              { i: Shield, t: "Fiabilité", d: "Personnel formé, missions sécurisées." },
              { i: Heart, t: "Engagement", d: "Votre satisfaction est notre vraie réussite." },
            ].map((v) => (
              <div key={v.t} className="p-6 border border-border bg-card">
                <v.i className="w-7 h-7 text-primary" />
                <h3 className="mt-4 font-display text-2xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 border-y border-border bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-3">— Notre parcours</div>
            <h2 className="font-display text-5xl md:text-6xl">UNE HISTOIRE EN <span className="text-primary">MOUVEMENT</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {timeline.map((e, i) => (
                <div key={e.y} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                  <div className="md:[direction:ltr] pl-12 md:pl-0 md:pr-12 md:text-right">
                    <div className="font-display text-5xl text-primary">{e.y}</div>
                    <h3 className="mt-2 font-display text-2xl">{e.t}</h3>
                    <p className="mt-2 text-muted-foreground">{e.d}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-3">— L'équipe</div>
            <h2 className="font-display text-5xl md:text-7xl">UNE ÉQUIPE <span className="text-gradient-red">DÉVOUÉE</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="p-8 border border-border bg-card text-center group hover:border-primary transition-colors">
                <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto font-display text-3xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {m.initials}
                </div>
                <h3 className="mt-6 font-display text-2xl">{m.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-3 text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-widest">Plus de 30 collaborateurs sur le terrain</span>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative p-10 md:p-16 border border-primary/30 bg-card overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-primary/20 animate-spin-slow" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.4em] text-primary">— Localisation</div>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">HÔTEL DE VILLE<br /><span className="text-muted-foreground/60">YAOUNDÉ, CENTRE</span></h2>
              <p className="mt-6 text-muted-foreground max-w-xl">Notre quartier général se trouve au cœur de la capitale, au pied de l'Hôtel de Ville. Une localisation stratégique pour intervenir rapidement partout dans la ville et bien au-delà.</p>
              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                <div><div className="font-display text-3xl text-primary">7j/7</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Ouvert tous les jours</div></div>
                <div><div className="font-display text-3xl text-primary">24h</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Disponibilité totale</div></div>
                <div><div className="font-display text-3xl text-primary">CMR</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Tout le territoire</div></div>
              </div>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-widest text-sm" style={{ boxShadow: "var(--shadow-red)" }}>
                Venir nous voir <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
