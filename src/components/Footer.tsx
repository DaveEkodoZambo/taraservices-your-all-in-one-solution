import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl">TARA<span className="text-primary">SERVICES</span></h3>
          <p className="mt-3 text-muted-foreground max-w-sm">Efficacité et rapidité sont nos priorités. Livraison et plus de 15 services partout au Cameroun, 24h/24, 7j/7.</p>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/237659315165" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><MessageCircle className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-widest text-primary mb-4">NAVIGUER</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Tarifs</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Réalisations</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/about" className="hover:text-foreground">À propos</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-widest text-primary mb-4">LÉGAL</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/mentions-legales" className="hover:text-foreground">Mentions légales</Link></li>
            <li><Link to="/confidentialite" className="hover:text-foreground">Confidentialité</Link></li>
            <li><Link to="/cgu" className="hover:text-foreground">CGU</Link></li>
            <li><Link to="/cgv" className="hover:text-foreground">CGV</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-widest text-primary mb-4">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" /> 659 315 165<br />687 755 212</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" /> yannickoberts@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Hôtel de Ville, Yaoundé</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground uppercase tracking-widest px-6">
        © {new Date().getFullYear()} TaraServices — Tous droits réservés · Yaoundé, Cameroun
      </div>
    </footer>
  );
}
