import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, User, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Actualités — TaraServices" },
      { name: "description", content: "Conseils, nouveautés et actualités de TaraServices : livraison, multiservices et entrepreneuriat au Cameroun." },
    ],
  }),
  component: BlogPage,
});

const articles = [
  { tag: "Livraison", date: "12 Mai 2026", author: "Équipe Tara", title: "Comment optimiser vos envois de colis à Yaoundé", excerpt: "Les bonnes pratiques pour préparer, emballer et suivre vos colis pour des livraisons sans accroc dans la capitale.", read: "4 min" },
  { tag: "Multiservices", date: "05 Mai 2026", author: "Yannick O.", title: "Pourquoi externaliser le nettoyage de vos bureaux", excerpt: "Productivité, image de marque et bien-être : trois raisons pour lesquelles les entreprises camerounaises font appel à nos équipes.", read: "6 min" },
  { tag: "Conseils", date: "28 Avril 2026", author: "Équipe Tara", title: "Choisir la bonne ménagère : nos critères de sélection", excerpt: "Découvrez le processus rigoureux que nous appliquons pour vous proposer du personnel domestique de confiance.", read: "5 min" },
  { tag: "Actualité", date: "20 Avril 2026", author: "Direction", title: "TaraServices étend sa couverture à Douala", excerpt: "Nouvelle étape pour l'entreprise : nos services de livraison express sont désormais opérationnels dans la capitale économique.", read: "3 min" },
  { tag: "Immobilier", date: "10 Avril 2026", author: "Pôle Immo", title: "Biyem-Assi, Mendong, Odza : où investir en 2026 ?", excerpt: "Analyse des quartiers prisés de Yaoundé et tendances du marché immobilier camerounais.", read: "8 min" },
  { tag: "Entreprise", date: "01 Avril 2026", author: "Yannick O.", title: "Notre engagement : efficacité et rapidité", excerpt: "Retour sur la philosophie qui guide chaque mission que nous menons depuis l'Hôtel de Ville de Yaoundé.", read: "4 min" },
];

function BlogPage() {
  const [featured, ...rest] = articles;
  return (
    <div>
      <section className="relative py-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-red" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Le journal</div>
          <h1 className="font-display text-6xl md:text-8xl leading-none">BLOG & <span className="text-gradient-red">ACTUS</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Conseils pratiques, nouveautés et coulisses de TaraServices.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <article className="grid lg:grid-cols-2 gap-10 mb-20 group cursor-pointer">
            <div className="relative aspect-[4/3] bg-card border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
              <div className="absolute inset-0 bg-grid-red" />
              <div className="absolute bottom-6 left-6 text-6xl font-display text-primary/30">01</div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">À la une · {featured.tag}</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                <span className="flex items-center gap-2"><User className="w-3.5 h-3.5" />{featured.author}</span>
                <span>{featured.read} de lecture</span>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-primary text-sm uppercase tracking-widest font-semibold">Lire l'article <ArrowRight className="w-4 h-4" /></span>
            </div>
          </article>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <article key={i} className="group p-8 border border-border bg-card hover:border-primary transition-all cursor-pointer">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">{a.tag}</span>
                <h3 className="mt-4 font-display text-2xl group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{a.date}</span>
                  <span>{a.read}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center gap-3 border border-border px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-colors">
              Proposer un sujet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
