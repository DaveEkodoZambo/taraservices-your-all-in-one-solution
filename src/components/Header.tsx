import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo-bike.png";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Tarifs" },
  { to: "/portfolio", label: "Réalisations" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "À propos" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img src={logo} alt="TaraServices" width={48} height={48} className="w-12 h-12 transition-transform group-hover:rotate-6" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-wide">TARA<span className="text-primary">SERVICES</span></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Efficacité · Rapidité</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-0.5">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-xs uppercase tracking-widest text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="https://wa.me/237659315165"
            target="_blank"
            rel="noreferrer"
            className="ml-3 px-4 py-2.5 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            style={{ boxShadow: "var(--shadow-red)" }}
          >
            <Phone className="w-3.5 h-3.5" /> Commander
          </a>
        </nav>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-sm uppercase tracking-widest text-muted-foreground border-b border-border/50">
                {n.label}
              </Link>
            ))}
            <a href="https://wa.me/237659315165" className="mt-3 py-3 bg-primary text-primary-foreground text-center text-sm uppercase tracking-widest font-semibold">
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
