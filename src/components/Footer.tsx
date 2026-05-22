import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl">TARA<span className="text-primary">SERVICES</span></h3>
          <p className="mt-3 text-muted-foreground max-w-sm">Efficacité et rapidité sont nos priorités. Livraison et plus de 15 services partout au Cameroun, 24h/24, 7j/7.</p>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-widest text-primary mb-4">NAVIGUER</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-widest text-primary mb-4">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> 659 315 165 / 687 755 212</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> yannickoberts@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Hôtel de Ville, Yaoundé</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} TaraServices — Tous droits réservés
      </div>
    </footer>
  );
}
