import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Réalisations — Portfolio TaraServices" },
      { name: "description", content: "Découvrez les missions et projets réalisés par TaraServices : livraisons, nettoyage, déménagements, événements et plus." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { cat: "Livraison", title: "Tournée express inter-villes", client: "PME Yaoundé–Douala", year: "2026", desc: "Mise en place d'une navette quotidienne de colis entre les deux capitales." },
  { cat: "Nettoyage", title: "Nettoyage post-chantier", client: "Tour de bureaux Bastos", year: "2026", desc: "3 200 m² nettoyés en 48h, livraison clé en main au client." },
  { cat: "Déménagement", title: "Relocation d'un siège social", client: "Cabinet juridique", year: "2025", desc: "Transfert complet de 40 postes de travail avec aménagement et câblage." },
  { cat: "Événementiel", title: "Gâteau 3 étages + logistique", client: "Mariage privé", year: "2025", desc: "Pâtisserie sur mesure et coordination de livraison synchronisée." },
  { cat: "Espaces verts", title: "Réhabilitation de jardin", client: "Résidence Odza", year: "2025", desc: "Réaménagement complet d'un jardin de 800 m² avec entretien mensuel." },
  { cat: "Immobilier", title: "Recherche et visite de biens", client: "Famille expatriée", year: "2025", desc: "Sélection de 12 appartements à Biyem-Assi et Simbock, accompagnement complet." },
  { cat: "Technique", title: "Rénovation électrique", client: "Restaurant Centre-ville", year: "2024", desc: "Mise aux normes complète de l'installation électrique d'un local commercial." },
  { cat: "Blanchisserie", title: "Contrat hôtelier", client: "Hôtel 3*", year: "2024", desc: "Gestion quotidienne du linge de chambre et de table pour 60 chambres." },
];

function PortfolioPage() {
  return (
    <div>
      <section className="relative py-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-red" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Nos preuves</div>
          <h1 className="font-display text-6xl md:text-8xl leading-none">RÉALISATIONS<span className="text-primary">.</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Une sélection de missions menées pour des particuliers, PME et grandes entreprises au Cameroun.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative aspect-square overflow-hidden border border-border bg-card hover:border-primary transition-all cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-grid-red opacity-40" />
              <div className="absolute top-6 right-6 w-10 h-10 border border-primary/40 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">{p.cat} · {p.year}</span>
                <h3 className="mt-3 font-display text-2xl md:text-3xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.client}</p>
                <p className="mt-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity max-h-0 group-hover:max-h-32">{p.desc}</p>
              </div>
              <div className="absolute top-6 left-6 font-display text-5xl text-primary/20">{String(i + 1).padStart(2, "0")}</div>
            </article>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 p-10 border border-primary/30 bg-card text-center">
          <h2 className="font-display text-3xl md:text-4xl">DEVENEZ NOTRE PROCHAINE RÉFÉRENCE</h2>
          <p className="mt-3 text-muted-foreground">Parlez-nous de votre projet, nous vous proposons une solution adaptée.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-widest text-sm" style={{ boxShadow: "var(--shadow-red)" }}>
            Démarrer un projet <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
