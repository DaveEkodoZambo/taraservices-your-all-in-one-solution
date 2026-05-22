import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Shield, Heart } from "lucide-react";
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: MapPin, t: "Centre Yaoundé", d: "Hôtel de Ville, accessible et central." },
            { i: Clock, t: "24h / 24", d: "Toujours disponible, jour et nuit." },
            { i: Shield, t: "Fiable", d: "Personnel formé et missions sécurisées." },
            { i: Heart, t: "Au service du client", d: "Votre satisfaction est notre engagement." },
          ].map((v) => (
            <div key={v.t} className="p-6 border border-border bg-card">
              <v.i className="w-7 h-7 text-primary" />
              <h3 className="mt-4 font-display text-2xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
