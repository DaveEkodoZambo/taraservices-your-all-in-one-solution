import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-2xl bg-background/85 border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-[1500px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-11 h-11 bg-primary flex items-center justify-center overflow-hidden">
            <img src={logo} alt="TaraServices" width={36} height={36} className="w-8 h-8 transition-transform group-hover:scale-110 brightness-0 invert" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-tight">TARA<span className="text-primary">SERVICES</span></span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-muted-foreground mt-1">Efficacité · Rapidité</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href="https://wa.me/237659315165"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-primary/90 transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-red)" }}
          >
            <Phone className="w-3.5 h-3.5" /> Commander
          </a>
        </div>

        <button className="xl:hidden text-foreground p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-sm uppercase tracking-widest font-semibold text-muted-foreground border-b border-border/40 hover:text-primary transition-colors">
                {n.label}
              </Link>
            ))}
            <a href="https://wa.me/237659315165" className="mt-4 py-4 bg-primary text-primary-foreground text-center text-sm uppercase tracking-widest font-bold">
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
