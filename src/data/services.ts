import { Monitor, ShoppingCart, Search, RefreshCw, MousePointer, Share2, Target, FileText, User, CheckCircle, Star, MessageSquare } from "lucide-react";

export interface ServiceItem {
  name: string;
  slug: string;
  icon: any;
  description: string;
  category: string;
  content: {
    NL: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      features: string[];
      process: string[];
    };
    FR: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      features: string[];
      process: string[];
    };
    EN: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      features: string[];
      process: string[];
    };
  };
}

export const serviceCategories = [
  {
    title: "BEING ONLINE",
    items: [
      {
        name: "Your own corporate identity",
        slug: "corporate-identity",
        icon: User,
        description: "Stand out with a unique corporate identity",
        category: "being-online",
        content: {
          NL: {
            title: "Jouw Eigen Bedrijfsidentiteit",
            subtitle: "Val op met een unieke corporate identity",
            description: "Een sterke bedrijfsidentiteit is de basis van je merk. Wij helpen je een consistente en herkenbare uitstraling te creëren die jouw bedrijf onderscheidt van de concurrentie.",
            benefits: [
              "Professionele uitstraling die vertrouwen wekt",
              "Herkenbare branding over alle kanalen",
              "Consistente communicatie naar klanten",
              "Verhoogde merkwaarde en klantloyaliteit"
            ],
            features: [
              "Logo ontwerp en branding",
              "Huisstijl ontwikkeling",
              "Kleurpalet en typografie",
              "Merkrichtlijnen en brandbook"
            ],
            process: [
              "Intake gesprek en merkanalyse",
              "Conceptontwikkeling en schetsen",
              "Design uitwerking en feedback",
              "Finalisatie en leverling brandbook"
            ]
          },
          FR: {
            title: "Votre Propre Identité d'Entreprise",
            subtitle: "Démarquez-vous avec une identité corporate unique",
            description: "Une identité d'entreprise forte est la base de votre marque. Nous vous aidons à créer une image cohérente et reconnaissable qui distingue votre entreprise de la concurrence.",
            benefits: [
              "Apparence professionnelle qui inspire confiance",
              "Branding reconnaissable sur tous les canaux",
              "Communication cohérente vers les clients",
              "Valeur de marque et fidélité client accrues"
            ],
            features: [
              "Conception de logo et branding",
              "Développement d'identité visuelle",
              "Palette de couleurs et typographie",
              "Directives de marque et brandbook"
            ],
            process: [
              "Entretien d'admission et analyse de marque",
              "Développement de concept et esquisses",
              "Élaboration du design et feedback",
              "Finalisation et livraison du brandbook"
            ]
          },
          EN: {
            title: "Your Own Corporate Identity",
            subtitle: "Stand out with a unique corporate identity",
            description: "A strong corporate identity is the foundation of your brand. We help you create a consistent and recognizable image that sets your business apart from the competition.",
            benefits: [
              "Professional appearance that builds trust",
              "Recognizable branding across all channels",
              "Consistent communication to customers",
              "Increased brand value and customer loyalty"
            ],
            features: [
              "Logo design and branding",
              "Visual identity development",
              "Color palette and typography",
              "Brand guidelines and brandbook"
            ],
            process: [
              "Intake interview and brand analysis",
              "Concept development and sketches",
              "Design elaboration and feedback",
              "Finalization and brandbook delivery"
            ]
          }
        }
      },
      {
        name: "Website",
        slug: "website",
        icon: Monitor,
        description: "The online center of your business",
        category: "being-online",
        content: {
          NL: {
            title: "Professionele Website",
            subtitle: "Het online centrum van je bedrijf",
            description: "Een professionele website is essentieel in de digitale wereld van vandaag. Wij ontwerpen en ontwikkelen websites die niet alleen mooi zijn, maar ook optimaal presteren en converteren.",
            benefits: [
              "24/7 online aanwezigheid voor je bedrijf",
              "Verhoogde geloofwaardigheid en professionaliteit",
              "Betere vindbaarheid in zoekmachines",
              "Meer leads en conversies"
            ],
            features: [
              "Responsive design voor alle apparaten",
              "SEO-geoptimaliseerde content",
              "Snelle laadtijden en veiligheid",
              "Content Management System (CMS)"
            ],
            process: [
              "Strategische planning en wireframing",
              "Visueel ontwerp en user experience",
              "Ontwikkeling en content creatie",
              "Testing, lancering en onderhoud"
            ]
          },
          FR: {
            title: "Site Web Professionnel",
            subtitle: "Le centre en ligne de votre entreprise",
            description: "Un site web professionnel est essentiel dans le monde numérique d'aujourd'hui. Nous concevons et développons des sites web qui sont non seulement beaux, mais qui performent et convertissent de manière optimale.",
            benefits: [
              "Présence en ligne 24/7 pour votre entreprise",
              "Crédibilité et professionnalisme accrus",
              "Meilleure visibilité dans les moteurs de recherche",
              "Plus de leads et de conversions"
            ],
            features: [
              "Design responsive pour tous les appareils",
              "Contenu optimisé pour le SEO",
              "Temps de chargement rapides et sécurité",
              "Système de gestion de contenu (CMS)"
            ],
            process: [
              "Planification stratégique et wireframing",
              "Conception visuelle et expérience utilisateur",
              "Développement et création de contenu",
              "Tests, lancement et maintenance"
            ]
          },
          EN: {
            title: "Professional Website",
            subtitle: "The online center of your business",
            description: "A professional website is essential in today's digital world. We design and develop websites that are not only beautiful, but also perform optimally and convert effectively.",
            benefits: [
              "24/7 online presence for your business",
              "Increased credibility and professionalism",
              "Better visibility in search engines",
              "More leads and conversions"
            ],
            features: [
              "Responsive design for all devices",
              "SEO-optimized content",
              "Fast loading times and security",
              "Content Management System (CMS)"
            ],
            process: [
              "Strategic planning and wireframing",
              "Visual design and user experience",
              "Development and content creation",
              "Testing, launch and maintenance"
            ]
          }
        }
      },
      {
        name: "Webshop",
        slug: "webshop",
        icon: ShoppingCart,
        description: "24/7 online sales",
        category: "being-online",
        content: {
          NL: {
            title: "E-commerce Webshop",
            subtitle: "24/7 online verkopen",
            description: "Een professionele webshop opent deuren naar nieuwe klanten en verhoogt je omzet. Wij ontwikkelen gebruiksvriendelijke webshops die converteren en je producten of diensten optimaal presenteren.",
            benefits: [
              "Verkopen zonder tijdsbeperkingen",
              "Uitbreiding van je klantenbereik",
              "Automatisering van verkoopprocessen",
              "Integratie met betaal- en verzendmethoden"
            ],
            features: [
              "Gebruiksvriendelijke productcatalogus",
              "Veilige betalingsverwerking",
              "Voorraad- en orderbeheer",
              "Mobile-first responsive design"
            ],
            process: [
              "E-commerce strategie en planning",
              "Design en user experience optimalisatie",
              "Ontwikkeling en integraties",
              "Testing, training en go-live"
            ]
          },
          FR: {
            title: "Boutique en Ligne E-commerce",
            subtitle: "Ventes en ligne 24/7",
            description: "Une boutique en ligne professionnelle ouvre les portes à de nouveaux clients et augmente votre chiffre d'affaires. Nous développons des boutiques conviviales qui convertissent et présentent vos produits ou services de manière optimale.",
            benefits: [
              "Ventes sans restrictions horaires",
              "Extension de votre portée client",
              "Automatisation des processus de vente",
              "Intégration avec les méthodes de paiement et d'expédition"
            ],
            features: [
              "Catalogue de produits convivial",
              "Traitement sécurisé des paiements",
              "Gestion des stocks et des commandes",
              "Design responsive mobile-first"
            ],
            process: [
              "Stratégie et planification e-commerce",
              "Design et optimisation de l'expérience utilisateur",
              "Développement et intégrations",
              "Tests, formation et mise en ligne"
            ]
          },
          EN: {
            title: "E-commerce Webshop",
            subtitle: "24/7 online sales",
            description: "A professional webshop opens doors to new customers and increases your revenue. We develop user-friendly webshops that convert and optimally present your products or services.",
            benefits: [
              "Sales without time restrictions",
              "Expansion of your customer reach",
              "Automation of sales processes",
              "Integration with payment and shipping methods"
            ],
            features: [
              "User-friendly product catalog",
              "Secure payment processing",
              "Inventory and order management",
              "Mobile-first responsive design"
            ],
            process: [
              "E-commerce strategy and planning",
              "Design and user experience optimization",
              "Development and integrations",
              "Testing, training and go-live"
            ]
          }
        }
      }
    ]
  },
  {
    title: "TO BE FOUND",
    items: [
      {
        name: "SEO",
        slug: "seo",
        icon: Search,
        description: "For a website that is easy to find",
        category: "to-be-found",
        content: {
          NL: {
            title: "Zoekmachine Optimalisatie (SEO)",
            subtitle: "Voor een website die makkelijk te vinden is",
            description: "SEO zorgt ervoor dat jouw website hoger scoort in Google en andere zoekmachines. Door strategische optimalisaties trekken we meer organisch verkeer naar je website en verhogen we je online zichtbaarheid.",
            benefits: [
              "Hogere positie in zoekresultaten",
              "Meer organisch website verkeer",
              "Verhoogde online zichtbaarheid", 
              "Betere ROI dan betaalde advertenties"
            ],
            features: [
              "Keyword research en strategie",
              "On-page en technische optimalisatie",
              "Content optimalisatie en creatie",
              "Link building en authority opbouw"
            ],
            process: [
              "SEO audit en concurrentieanalyse",
              "Keyword strategie ontwikkeling",
              "Implementatie van optimalisaties",
              "Monitoring en rapportage"
            ]
          },
          FR: {
            title: "Optimisation des Moteurs de Recherche (SEO)",
            subtitle: "Pour un site web facile à trouver",
            description: "Le SEO garantit que votre site web obtient un meilleur classement sur Google et d'autres moteurs de recherche. Grâce à des optimisations stratégiques, nous attirons plus de trafic organique vers votre site web et augmentons votre visibilité en ligne.",
            benefits: [
              "Position plus élevée dans les résultats de recherche",
              "Plus de trafic organique sur le site web",
              "Visibilité en ligne accrue",
              "Meilleur ROI que la publicité payante"
            ],
            features: [
              "Recherche de mots-clés et stratégie",
              "Optimisation on-page et technique",
              "Optimisation et création de contenu",
              "Link building et développement d'autorité"
            ],
            process: [
              "Audit SEO et analyse concurrentielle",
              "Développement de stratégie de mots-clés",
              "Implémentation des optimisations",
              "Monitoring et reporting"
            ]
          },
          EN: {
            title: "Search Engine Optimization (SEO)",
            subtitle: "For a website that is easy to find",
            description: "SEO ensures that your website ranks higher on Google and other search engines. Through strategic optimizations, we attract more organic traffic to your website and increase your online visibility.",
            benefits: [
              "Higher position in search results",
              "More organic website traffic",
              "Increased online visibility",
              "Better ROI than paid advertising"
            ],
            features: [
              "Keyword research and strategy",
              "On-page and technical optimization",
              "Content optimization and creation",
              "Link building and authority development"
            ],
            process: [
              "SEO audit and competitive analysis",
              "Keyword strategy development",
              "Implementation of optimizations",
              "Monitoring and reporting"
            ]
          }
        }
      }
    ]
  }
];

// Add more service categories and items here
export const allServices: ServiceItem[] = serviceCategories.flatMap(category => category.items);