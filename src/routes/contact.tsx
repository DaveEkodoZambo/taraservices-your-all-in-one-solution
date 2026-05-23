import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TaraServices" },
      { name: "description", content: "Contactez TaraServices à Yaoundé. WhatsApp : 659 315 165 / 687 755 212. Email : yannickoberts@gmail.com." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative pt-36 pb-10 px-4 md:px-6">
        <div className="max-w-[1500px] mx-auto bento-cell p-10 md:p-16 animate-float-in">
          <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 flex items-center gap-3"><span className="w-8 h-px bg-primary" /> Parlons-en</div>
          <h1 className="font-display text-6xl md:text-9xl leading-[0.85]">CONTACT<span className="text-primary">.</span></h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl">Un appel, un message, et nous sommes là. Disponibles 24h sur 24, 7 jours sur 7.</p>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-10">
        <div className="max-w-[1500px] mx-auto grid grid-cols-12 gap-3">
          <a href="https://wa.me/237659315165" target="_blank" rel="noreferrer" className="col-span-12 md:col-span-6 lg:col-span-4 bento-cell p-10 group min-h-[260px] flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 bg-primary flex items-center justify-center text-primary-foreground"><MessageCircle className="w-7 h-7" /></div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
            </div>
            <div>
              <h2 className="font-display text-4xl">WHATSAPP</h2>
              <p className="mt-3 text-lg">659 315 165</p>
              <p className="text-lg">687 755 212</p>
            </div>
          </a>

          <a href="tel:+237659315165" className="col-span-12 md:col-span-6 lg:col-span-4 bento-cell p-10 group min-h-[260px] flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary"><Phone className="w-7 h-7" /></div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
            </div>
            <div>
              <h2 className="font-display text-4xl">APPELER</h2>
              <p className="mt-3 text-lg">+237 659 315 165</p>
              <p className="text-lg">+237 687 755 212</p>
            </div>
          </a>

          <a href="mailto:yannickoberts@gmail.com" className="col-span-12 lg:col-span-4 bento-cell p-10 group min-h-[260px] flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary"><Mail className="w-7 h-7" /></div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
            </div>
            <div>
              <h2 className="font-display text-4xl">EMAIL</h2>
              <p className="mt-3 text-base break-all">yannickoberts@gmail.com</p>
            </div>
          </a>

          <div className="col-span-12 md:col-span-6 bento-cell p-10 bg-primary/5 border-primary/40">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="mt-6 font-display text-4xl">LOCALISATION</h2>
            <p className="mt-3 text-muted-foreground text-lg">Hôtel de Ville<br />Centre-ville, Yaoundé<br />Cameroun</p>
          </div>
          <div className="col-span-12 md:col-span-6 bento-cell p-10">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="mt-6 font-display text-4xl">HORAIRES</h2>
            <p className="mt-3 text-muted-foreground text-lg">7 jours sur 7<br />24 heures sur 24<br /><span className="text-primary">Aucune pause.</span></p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-3xl mx-auto bento-cell p-8 md:p-12">
          <form onSubmit={(e) => { e.preventDefault(); window.location.href = "https://wa.me/237659315165"; }} className="space-y-5">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-2">— Formulaire</div>
              <h2 className="font-display text-4xl md:text-5xl">ÉCRIVEZ-NOUS.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Votre nom" className="w-full bg-input border border-border px-4 py-4 focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground" />
              <input required type="tel" placeholder="Téléphone" className="w-full bg-input border border-border px-4 py-4 focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground" />
            </div>
            <input type="email" placeholder="Email (optionnel)" className="w-full bg-input border border-border px-4 py-4 focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground" />
            <textarea required rows={5} placeholder="Quel service vous intéresse ?" className="w-full bg-input border border-border px-4 py-4 focus:outline-none focus:border-primary text-foreground resize-none placeholder:text-muted-foreground" />
            <button type="submit" className="w-full bg-primary text-primary-foreground py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary/90" style={{ boxShadow: "var(--shadow-red)" }}>
              Envoyer via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
