import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-bike.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <img src={logo} alt="" width={32} height={32} className="w-8 h-8 brightness-0 invert" />
              </div>
              <span className="font-display text-2xl">TARA<span className="text-primary">SERVICES</span></span>
            </Link>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              Efficacité et rapidité sont nos priorités. Livraison de colis et plus de 15 services partout au Cameroun, disponible 24h/24, 7j/7.
            </p>
            <div className="mt-8 flex gap-2">
              {[
                { i: MessageCircle, h: "https://wa.me/237659315165", l: "WhatsApp" },
                { i: Facebook, h: "#", l: "Facebook" },
                { i: Instagram, h: "#", l: "Instagram" },
              ].map(({ i: Icon, h, l }) => (
                <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className="w-12 h-12 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-xs tracking-[0.3em] text-primary mb-6">NAVIGUER</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[["/", "Accueil"], ["/services", "Services"], ["/pricing", "Tarifs"], ["/portfolio", "Réalisations"], ["/blog", "Blog"], ["/about", "À propos"], ["/faq", "FAQ"], ["/contact", "Contact"]].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">{label}<ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-xs tracking-[0.3em] text-primary mb-6">LÉGAL</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/mentions-legales" className="hover:text-foreground">Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="hover:text-foreground">Confidentialité</Link></li>
              <li><Link to="/cgu" className="hover:text-foreground">CGU</Link></li>
              <li><Link to="/cgv" className="hover:text-foreground">CGV</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-xs tracking-[0.3em] text-primary mb-6">CONTACT 24/7</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+237659315165" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>659 315 165<br />687 755 212</span>
                </a>
              </li>
              <li>
                <a href="mailto:yannickoberts@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors break-all">
                  <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" /> yannickoberts@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Hôtel de Ville<br />Centre-ville, Yaoundé
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© {new Date().getFullYear()} TaraServices — Tous droits réservés</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full animate-pulse-red" /> En ligne · 24h/24 · 7j/7</span>
        </div>
      </div>
    </footer>
  );
}
