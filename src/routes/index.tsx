import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-courier.jpg";
import packagesImg from "@/assets/packages.jpg";
import cityImg from "@/assets/city-map.jpg";
import cleaningImg from "@/assets/cleaning.jpg";
import logo from "@/assets/logo-bike.png";
import { services } from "@/lib/services-data";
import { testimonials } from "@/lib/testimonials-data";
import {
  ArrowRight, ArrowUpRight, Clock, Phone, Zap, Quote, Star,
  MessageCircle, ClipboardList, Rocket, CheckCircle2, MapPin, Mail,
  TrendingUp, Shield, Sparkles,
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

const marqueeItems = ["LIVRAISON EXPRESS", "★", "NETTOYAGE PRO", "★", "DÉMÉNAGEMENT", "★", "IMMOBILIER", "★", "TECHNIQUE", "★", "24H / 7J", "★"];

function Index() {
  return (
    <div className="overflow-hidden">
      {/* ========== HERO BENTO ========== */}
      <section className="relative pt-28 pb-6 px-4 md:px-6">
        <div className="max-w-[1500px] mx-auto grid grid-cols-12 grid-rows-[auto] gap-3">
          {/* Big headline cell */}
          <div className="col-span-12 lg:col-span-8 bento-cell p-8 md:p-14 animate-float-in min-h-[480px] flex flex-col justify-between relative">
            <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-red" /> En ligne 24/7
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">N°01 — Multiservices Cameroun</div>
            <div>
              <h1 className="font-display text-[15vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.82] tracking-tighter">
                LIVRER.<br />
                <span className="text-primary red-glow-text">SERVIR.</span><br />
                <span className="outline-text">PARTOUT.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Efficacité et rapidité sont nos priorités. Plus de 15 services à Yaoundé et dans tout le Cameroun, disponibles à toute heure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://wa.me/237659315165" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:-translate-y-0.5 transition-all" style={{ boxShadow: "var(--shadow-red)" }}>
                Commander <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/services" className="group inline-flex items-center gap-3 border border-border px-7 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:border-primary hover:text-primary transition-colors">
                Voir nos services <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero photo cell */}
          <div className="col-span-12 lg:col-span-4 bento-cell animate-scale-in min-h-[480px] relative group">
            <img src={heroImg} alt="Coursier TaraServices à Yaoundé" width={1600} height={1600} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute top-6 left-6 px-3 py-1 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-bold">Coursier</div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-display text-3xl">RAPIDE.<br />FIABLE.</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">Yaoundé → Tout le pays</div>
            </div>
          </div>

          {/* Stats row */}
          {[
            { v: "16+", l: "Services" },
            { v: "24/7", l: "Disponible" },
            { v: "1500+", l: "Missions" },
            { v: "4.9★", l: "Satisfaction" },
          ].map((s, i) => (
            <div key={s.l} className="col-span-6 lg:col-span-3 bento-cell p-6 md:p-8 animate-float-in" style={{ animationDelay: `${0.1 * i}s` }}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.l}</div>
              <div className="font-display text-5xl md:text-6xl mt-3 text-gradient-red">{s.v}</div>
            </div>
          ))}

          {/* Why row */}
          <div className="col-span-12 md:col-span-4 bento-cell p-8 group">
            <Zap className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-3xl mt-6">RAPIDITÉ</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">Intervention express dans toute la ville. Devis sous 15 minutes.</p>
          </div>
          <div className="col-span-12 md:col-span-4 bento-cell p-8 group">
            <Clock className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-3xl mt-6">DISPONIBILITÉ</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">Ouvert 7 jours sur 7, 24 heures sur 24. Aucune pause.</p>
          </div>
          <div className="col-span-12 md:col-span-4 bento-cell p-8 group">
            <Shield className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-3xl mt-6">FIABILITÉ</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">Personnel formé, missions garanties, satisfaction client 4.9/5.</p>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE ========== */}
      <section className="relative py-12 border-y border-border bg-primary text-primary-foreground overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className="font-display text-5xl md:text-7xl mx-6">{t}</span>
          ))}
        </div>
      </section>

      {/* ========== SERVICES BENTO ========== */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 flex items-center gap-3"><span className="w-8 h-px bg-primary" /> Catalogue</div>
              <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85]">
                NOS<br /><span className="text-gradient-red">SERVICES.</span>
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary hover:text-primary text-xs uppercase tracking-[0.3em] font-bold transition-colors">
              Voir les 16 services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-12 grid-rows-[auto] gap-3">
            {/* Featured big */}
            <div className="col-span-12 lg:col-span-6 lg:row-span-2 bento-cell relative min-h-[460px] group overflow-hidden">
              <img src={packagesImg} alt="Livraison de colis" width={1024} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/60 to-transparent" />
              <div className="absolute top-6 left-6 px-3 py-1 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-bold">Service Phare</div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">01 — Livraison</div>
                <h3 className="font-display text-5xl md:text-6xl">COLIS<br />EXPRESS</h3>
                <p className="text-muted-foreground mt-4 max-w-md">Envoi et livraison de colis dans toute la ville et sur l'ensemble du territoire national, à la vitesse de l'éclair.</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-primary">
                  Demander une course <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Cleaning featured */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-span-2 bento-cell relative min-h-[460px] group overflow-hidden">
              <img src={cleaningImg} alt="Nettoyage industriel" width={1024} height={1280} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">02 — Pro</div>
                <h3 className="font-display text-3xl">NETTOYAGE<br />INDUSTRIEL</h3>
                <p className="text-muted-foreground mt-3 text-sm">Bureaux, locaux, surfaces. Équipe pro discrète.</p>
              </div>
            </div>

            {services.slice(2, 8).map((s, i) => (
              <div key={s.title} className="col-span-6 md:col-span-4 lg:col-span-3 bento-cell p-6 group">
                <div className="flex items-start justify-between">
                  <s.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-muted-foreground tabular-nums">0{i + 3}</span>
                </div>
                <h3 className="font-display text-lg mt-6 leading-tight">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS BENTO ========== */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">— Process</div>
            <h2 className="font-display text-6xl md:text-8xl">
              4 ÉTAPES.<br /><span className="text-gradient-red">ZÉRO STRESS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-3">
            {[
              { i: MessageCircle, t: "Contactez", d: "WhatsApp, appel, email ou formulaire — au choix.", n: "01" },
              { i: ClipboardList, t: "Devis 15min", d: "Notre équipe revient avec un tarif clair en 15 minutes.", n: "02" },
              { i: Rocket, t: "Intervention", d: "Nous déployons immédiatement la bonne équipe.", n: "03" },
              { i: CheckCircle2, t: "Validé", d: "Vous contrôlez. Vous validez. Vous payez. Simple.", n: "04" },
            ].map((s) => (
              <div key={s.n} className="col-span-12 md:col-span-6 lg:col-span-3 bento-cell p-8 relative group min-h-[280px] flex flex-col justify-between">
                <div className="font-display text-[8rem] text-primary/10 leading-none absolute -top-4 -right-2 select-none">{s.n}</div>
                <s.i className="w-10 h-10 text-primary relative" />
                <div className="relative">
                  <h3 className="font-display text-3xl">{s.t}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS BENTO ========== */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-4 bento-cell p-10 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">— Avis clients</div>
                <h2 className="font-display text-5xl md:text-6xl leading-[0.9]">
                  ILS NOUS<br />FONT<br /><span className="text-gradient-red">CONFIANCE.</span>
                </h2>
              </div>
              <div>
                <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}</div>
                <div className="font-display text-4xl mt-3">4.9<span className="text-muted-foreground text-2xl">/5</span></div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">200+ avis vérifiés</div>
              </div>
            </div>

            {testimonials.slice(0, 4).map((t, i) => (
              <figure key={i} className={`bento-cell p-8 ${i === 0 ? "col-span-12 md:col-span-6 lg:col-span-4" : "col-span-12 md:col-span-6 lg:col-span-4"}`}>
                <Quote className="w-8 h-8 text-primary" />
                <blockquote className="mt-4 text-base leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-display text-xl">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING + LOCATION BENTO ========== */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="max-w-[1500px] mx-auto grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-7 bento-cell p-10 md:p-14">
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">— Tarifs</div>
            <h2 className="font-display text-6xl md:text-7xl leading-[0.85]">
              DÈS<br /><span className="text-gradient-red">1500 FCFA.</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-lg">Une formule express pour vos missions ponctuelles, des forfaits Pro pour les indépendants, des contrats sur mesure pour les entreprises.</p>

            <div className="mt-10 space-y-2">
              {[
                { n: "Express", p: "1 500 FCFA", d: "Course unique" },
                { n: "Pro", p: "45 000 FCFA / mois", d: "30 courses + multiservices", h: true },
                { n: "Entreprise", p: "Sur devis", d: "Volume illimité, équipe dédiée" },
              ].map((p) => (
                <div key={p.n} className={`p-5 border flex items-center justify-between transition-colors ${p.h ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                  <div>
                    <div className="font-display text-xl">{p.n}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{p.d}</div>
                  </div>
                  <div className="font-display text-lg text-primary">{p.p}</div>
                </div>
              ))}
            </div>

            <Link to="/pricing" className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-[0.2em] text-xs" style={{ boxShadow: "var(--shadow-red)" }}>
              Toutes les formules <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-3">
            <div className="bento-cell relative overflow-hidden min-h-[260px] group">
              <img src={cityImg} alt="Yaoundé de nuit" width={1280} height={896} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <MapPin className="w-7 h-7 text-primary" />
                <div className="font-display text-2xl mt-3">YAOUNDÉ</div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] mt-1">Hôtel de Ville · Centre</div>
              </div>
            </div>
            <div className="bento-cell p-8 flex flex-col justify-between min-h-[260px] bg-primary/5">
              <TrendingUp className="w-10 h-10 text-primary" />
              <div>
                <div className="font-display text-3xl">+200%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] mt-2">Croissance mensuelle des missions en 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative py-32 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/30 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <img src={logo} alt="" width={64} height={64} className="w-16 h-16 mx-auto opacity-90" />
          <h2 className="mt-8 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85]">
            UN BESOIN ?<br /><span className="text-gradient-red">UN APPEL.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">Notre équipe est en ligne, 24h sur 24, 7 jours sur 7. Une seule mission : votre satisfaction.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/237659315165" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:-translate-y-0.5 transition-all" style={{ boxShadow: "var(--shadow-red)" }}>
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="tel:+237659315165" className="inline-flex items-center gap-3 border border-border px-8 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:border-primary hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> 659 315 165
            </a>
            <a href="mailto:yannickoberts@gmail.com" className="inline-flex items-center gap-3 border border-border px-8 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:border-primary hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
