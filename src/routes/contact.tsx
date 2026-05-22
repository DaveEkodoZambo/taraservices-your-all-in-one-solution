import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

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
    <div>
      <section className="relative py-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-red" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Parlons-en</div>
          <h1 className="font-display text-6xl md:text-8xl leading-none">CONTACT<span className="text-primary">.</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">Un appel, un message, et nous sommes là. Disponibles 24h/24, 7j/7.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
          <a href="https://wa.me/237659315165" target="_blank" rel="noreferrer" className="group p-8 border border-border bg-card hover:border-primary transition-all">
            <MessageCircle className="w-8 h-8 text-primary" />
            <h2 className="mt-6 font-display text-3xl">WHATSAPP</h2>
            <p className="mt-4 text-lg">659 315 165</p>
            <p className="text-lg">687 755 212</p>
            <span className="mt-6 inline-block text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary">Ouvrir un chat →</span>
          </a>

          <a href="tel:+237659315165" className="group p-8 border border-border bg-card hover:border-primary transition-all">
            <Phone className="w-8 h-8 text-primary" />
            <h2 className="mt-6 font-display text-3xl">APPELER</h2>
            <p className="mt-4 text-lg">+237 659 315 165</p>
            <p className="text-lg">+237 687 755 212</p>
            <span className="mt-6 inline-block text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary">Composer →</span>
          </a>

          <a href="mailto:yannickoberts@gmail.com" className="group p-8 border border-border bg-card hover:border-primary transition-all">
            <Mail className="w-8 h-8 text-primary" />
            <h2 className="mt-6 font-display text-3xl">EMAIL</h2>
            <p className="mt-4 text-base break-all">yannickoberts@gmail.com</p>
            <span className="mt-6 inline-block text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary">Écrire →</span>
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-8 border border-primary/30 bg-card">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="mt-4 font-display text-3xl">LOCALISATION</h2>
            <p className="mt-3 text-muted-foreground">Hôtel de Ville, Centre-ville Yaoundé, Cameroun</p>
          </div>
          <div className="p-8 border border-primary/30 bg-card">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="mt-4 font-display text-3xl">HORAIRES</h2>
            <p className="mt-3 text-muted-foreground">7 jours sur 7 · 24 heures sur 24</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={(e) => { e.preventDefault(); window.location.href = "https://wa.me/237659315165"; }} className="p-8 md:p-12 border border-border bg-card space-y-6">
            <h2 className="font-display text-4xl">ÉCRIVEZ-NOUS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Votre nom" className="w-full bg-input border border-border px-4 py-3 focus:outline-none focus:border-primary text-foreground" />
              <input required type="tel" placeholder="Téléphone" className="w-full bg-input border border-border px-4 py-3 focus:outline-none focus:border-primary text-foreground" />
            </div>
            <input type="email" placeholder="Email (optionnel)" className="w-full bg-input border border-border px-4 py-3 focus:outline-none focus:border-primary text-foreground" />
            <textarea required rows={5} placeholder="Quel service vous intéresse ?" className="w-full bg-input border border-border px-4 py-3 focus:outline-none focus:border-primary text-foreground resize-none" />
            <button type="submit" className="w-full bg-primary text-primary-foreground py-4 font-semibold uppercase tracking-widest text-sm hover:bg-primary/90" style={{ boxShadow: "var(--shadow-red)" }}>
              Envoyer via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
