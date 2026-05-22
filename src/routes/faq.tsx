import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Questions fréquentes · TaraServices" },
      { name: "description", content: "Toutes les réponses aux questions fréquentes sur la livraison, les tarifs, les services et les paiements TaraServices." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Quels sont vos horaires d'ouverture ?", a: "Nous sommes disponibles 24h/24 et 7j/7, y compris les jours fériés. Vous pouvez nous joindre à tout moment via WhatsApp ou par téléphone." },
  { q: "Couvrez-vous tout le Cameroun ?", a: "Oui. Notre service de livraison s'étend sur l'ensemble du territoire national. Pour les multiservices, nous intervenons principalement à Yaoundé et dans les zones environnantes." },
  { q: "Quels sont vos délais de livraison ?", a: "À l'intérieur de Yaoundé, la livraison se fait généralement en moins de 2 heures. Pour les autres villes, comptez entre 24 et 72 heures selon la destination." },
  { q: "Comment passer une commande ?", a: "Le plus simple : envoyez-nous un message WhatsApp au 659 315 165 ou 687 755 212. Vous pouvez également utiliser le formulaire de contact de notre site." },
  { q: "Quels moyens de paiement acceptez-vous ?", a: "Nous acceptons les paiements via Mobile Money (MTN, Orange), espèces à la livraison, et virement bancaire pour les entreprises." },
  { q: "Mes colis sont-ils assurés ?", a: "Oui, tous les colis confiés à TaraServices sont suivis et sécurisés. Pour les envois de grande valeur, une assurance complémentaire peut être souscrite." },
  { q: "Proposez-vous des contrats pour entreprises ?", a: "Absolument. Nous proposons des forfaits mensuels et des contrats personnalisés pour les entreprises ayant des besoins récurrents en livraison ou en multiservices." },
  { q: "Comment se passe le placement d'une ménagère ou d'une nounou ?", a: "Nous sélectionnons et formons notre personnel. Un entretien préalable est organisé, puis une période d'essai vous permet de valider la collaboration." },
  { q: "Puis-je annuler ou modifier une commande ?", a: "Oui, tant que la mission n'a pas démarré. Contactez-nous le plus tôt possible pour éviter des frais d'annulation." },
  { q: "Faites-vous le paiement de toutes les factures ?", a: "Nous prenons en charge Sonel (électricité), Camwater (eau), les impôts, Canal+ et la plupart des fournisseurs camerounais." },
];

function FaqPage() {
  return (
    <div>
      <section className="relative py-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-red" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Aide & support</div>
          <h1 className="font-display text-6xl md:text-8xl leading-none">QUESTIONS<br /><span className="text-gradient-red">FRÉQUENTES</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Tout ce que vous devez savoir sur TaraServices, regroupé ici. Une autre question ? Écrivez-nous.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border bg-card px-6 hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-left font-display text-xl py-5">
                  <span className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-9 text-base leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-10 border border-primary/30 bg-card text-center">
            <h2 className="font-display text-3xl">VOUS N'AVEZ PAS TROUVÉ ?</h2>
            <p className="mt-3 text-muted-foreground">Notre équipe vous répond en quelques minutes.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-widest text-sm" style={{ boxShadow: "var(--shadow-red)" }}>
              Nous contacter <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
