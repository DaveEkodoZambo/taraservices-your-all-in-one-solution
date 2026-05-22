import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import courier from "@/assets/courier.jpg";
import logo from "@/assets/logo-bike.png";
import { services } from "@/lib/services-data";
import { testimonials } from "@/lib/testimonials-data";
import {
  ArrowRight, Clock, MapPin, Phone, Zap, Quote, Star,
  MessageCircle, ClipboardList, Rocket, CheckCircle2, Calendar,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TaraServices — Efficacité et rapidité sont nos priorités" },
      { name: "description", content: "Livraison de colis et plus de 15 multiservices partout au Cameroun. Disponible 24h/24, 7j/7 depuis Yaoundé." },
      { property: "og:title", content: "TaraServices — Livraison & Multiservices au Cameroun" },
      { property: "og:description", content: "Efficacité et rapidité sont nos priorités. 24h/24, 7j/7." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute -right-40 top-20 w-[600px] h-[600px] rounded-full border border-primary/30 animate-spin-slow" />
        <div className="absolute -right-20 top-40 w-[400px] h-[400px] rounded-full border border-primary/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 animate-float-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.3em] mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-red" /> Disponible 24h/24 · 7j/7
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight">
              LIVRAISON<br />
              <span className="text-gradient-red">SANS LIMITE</span><br />
              <span className="text-muted-foreground/60">AU CAMEROUN</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl">
              <span className="text-foreground font-semibold">Efficacité et rapidité sont nos priorités.</span> Colis, multiservices, technique, immobilier — tout, partout, tout le temps.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://wa.me/237659315165" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all" style={{ boxShadow: "var(--shadow-red)" }}>
                Commander maintenant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/services" className="inline-flex items-center gap-3 border border-border px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-colors">
                Nos services
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-4 gap-6 max-w-2xl">
              {[
                { v: "16+", l: "Services" },
                { v: "24/7", l: "Disponible" },
                { v: "100%", l: "National" },
                { v: "1500+", l: "Missions" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-primary pl-4">
                  <div className="font-display text-3xl md:text-4xl">{s.v}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm ring-glow">
              <img src={courier} alt="Coursier TaraServices à vélo" className="w-full h-full object-cover" width={1080} height={1600} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-background/60 border border-primary/30 p-5">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="" width={40} height={40} className="w-10 h-10" />
                  <div>
                    <div className="font-display text-xl">RAPIDE & FIABLE</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Coursier dédié · Yaoundé</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 px-3 py-1.5 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-semibold">En ligne</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / Why */}
      <section className="relative py-24 border-y border-border bg-grid-red">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { i: Zap, t: "Rapidité", d: "Intervention express dans toute la ville et au-delà." },
            { i: Clock, t: "Disponibilité", d: "Ouvert 7 jours sur 7, 24 heures sur 24." },
            { i: MapPin, t: "Couverture", d: "Tout le territoire national couvert." },
          ].map((f) => (
            <div key={f.t} className="group relative p-8 border border-border bg-card hover:border-primary transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 bg-primary flex items-center justify-center -translate-x-2 -translate-y-2 group-hover:-translate-x-3 group-hover:-translate-y-3 transition-transform">
                <f.i className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl mt-6">{f.t}</h3>
              <p className="mt-3 text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-primary mb-3">— Ce que nous faisons</div>
              <h2 className="font-display text-5xl md:text-7xl">PLUS DE <span className="text-primary">15 SERVICES</span></h2>
            </div>
            <Link to="/services" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary inline-flex items-center gap-2">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.slice(0, 8).map((s) => (
              <div key={s.title} className="bg-background p-8 hover:bg-card transition-colors group">
                <s.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-28 border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-3">— Comment ça marche</div>
            <h2 className="font-display text-5xl md:text-7xl">4 ÉTAPES, <span className="text-gradient-red">ZÉRO STRESS</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {[
              { i: MessageCircle, t: "Contactez-nous", d: "WhatsApp, appel, email ou formulaire." },
              { i: ClipboardList, t: "Devis instantané", d: "Réponse et tarif sous 15 minutes." },
              { i: Rocket, t: "Intervention", d: "Notre équipe se déploie immédiatement." },
              { i: CheckCircle2, t: "Mission accomplie", d: "Vous validez, vous payez. Simple." },
            ].map((s, i) => (
              <div key={s.t} className="relative p-8 border border-border bg-background">
                <div className="font-display text-7xl text-primary/20 leading-none">0{i + 1}</div>
                <s.i className="w-8 h-8 text-primary mt-4" />
                <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-primary mb-3">— Ils nous ont fait confiance</div>
              <h2 className="font-display text-5xl md:text-7xl">AVIS <span className="text-primary">CLIENTS</span></h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}</div>
              <span className="text-sm uppercase tracking-widest text-muted-foreground">4.9 / 5 · 200+ avis</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <figure key={i} className="relative p-8 border border-border bg-card hover:border-primary/50 transition-colors">
                <Quote className="w-10 h-10 text-primary/30" />
                <blockquote className="mt-4 text-base leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-display text-xl">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="relative py-28 border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-3">— Tarifs simples</div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">À PARTIR DE<br /><span className="text-gradient-red">1 500 FCFA</span></h2>
            <p className="mt-6 text-lg text-muted-foreground">Une formule express pour vos missions ponctuelles, des forfaits Pro pour les indépendants, des contrats sur mesure pour les entreprises.</p>
            <Link to="/pricing" className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-widest text-sm" style={{ boxShadow: "var(--shadow-red)" }}>
              Voir les formules <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { n: "Express", p: "1 500 FCFA", d: "Course unique" },
              { n: "Pro", p: "45 000 FCFA / mois", d: "30 courses + multiservices", h: true },
              { n: "Entreprise", p: "Sur devis", d: "Volume illimité, équipe dédiée" },
            ].map((p) => (
              <div key={p.n} className={`p-6 border flex items-center justify-between ${p.h ? "border-primary bg-primary/5" : "border-border bg-background"}`}>
                <div>
                  <div className="font-display text-2xl">{p.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{p.d}</div>
                </div>
                <div className="font-display text-xl text-primary">{p.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-primary mb-3">— Le journal</div>
              <h2 className="font-display text-5xl md:text-7xl">BLOG & <span className="text-primary">ACTUS</span></h2>
            </div>
            <Link to="/blog" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary inline-flex items-center gap-2">
              Tous les articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Livraison", date: "12 Mai 2026", title: "Optimisez vos envois à Yaoundé" },
              { tag: "Multiservices", date: "05 Mai 2026", title: "Externaliser le nettoyage de vos bureaux" },
              { tag: "Actualité", date: "20 Avril 2026", title: "TaraServices étend sa couverture à Douala" },
            ].map((a, i) => (
              <Link key={i} to="/blog" className="group p-8 border border-border bg-card hover:border-primary transition-all block">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">{a.tag}</span>
                <h3 className="mt-4 font-display text-2xl group-hover:text-primary transition-colors">{a.title}</h3>
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />{a.date}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-red" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/20" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/40" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-7xl">UN BESOIN ?<br /><span className="text-gradient-red">UN APPEL SUFFIT.</span></h2>
          <p className="mt-6 text-lg text-muted-foreground">Appelez-nous ou écrivez-nous sur WhatsApp. Nous intervenons immédiatement.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/237659315165" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-widest text-sm" style={{ boxShadow: "var(--shadow-red)" }}>
              <Phone className="w-4 h-4" /> 659 315 165
            </a>
            <Link to="/contact" className="inline-flex items-center gap-3 border border-border px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:border-primary">
              Tous les contacts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
