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
    EN: {
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
    [key: string]: {
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
          PL: {
            title: "Twoja Własna Tożsamość Korporacyjna",
            subtitle: "Wyróżnij się unikalną tożsamością korporacyjną",
            description: "Silna tożsamość korporacyjna jest fundamentem Twojej marki. Pomagamy stworzyć spójny i rozpoznawalny wizerunek, który wyróżni Twój biznes na tle konkurencji.",
            benefits: [
              "Profesjonalny wygląd budujący zaufanie",
              "Rozpoznawalny branding we wszystkich kanałach",
              "Spójna komunikacja z klientami",
              "Zwiększona wartość marki i lojalność klientów"
            ],
            features: [
              "Projektowanie logo i branding",
              "Rozwój tożsamości wizualnej",
              "Paleta kolorów i typografia",
              "Wytyczne marki i brandbook"
            ],
            process: [
              "Wywiad wstępny i analiza marki",
              "Rozwój koncepcji i szkice",
              "Opracowanie projektu i feedback",
              "Finalizacja i dostawa brandbooka"
            ]
          },
          RU: {
            title: "Ваш Собственный Корпоративный Стиль",
            subtitle: "Выделитесь уникальным корпоративным стилем",
            description: "Сильный корпоративный стиль - основа вашего бренда. Мы помогаем создать последовательный и узнаваемый образ, который выделит ваш бизнес среди конкурентов.",
            benefits: [
              "Профессиональный вид, вызывающий доверие",
              "Узнаваемый брендинг во всех каналах",
              "Последовательная коммуникация с клиентами",
              "Повышенная ценность бренда и лояльность клиентов"
            ],
            features: [
              "Дизайн логотипа и брендинг",
              "Разработка визуальной идентичности",
              "Цветовая палитра и типографика",
              "Руководство по бренду и брендбук"
            ],
            process: [
              "Вводное интервью и анализ бренда",
              "Разработка концепции и эскизы",
              "Проработка дизайна и обратная связь",
              "Финализация и доставка брендбука"
            ]
          },
          DE: {
            title: "Ihre Eigene Corporate Identity",
            subtitle: "Heben Sie sich mit einer einzigartigen Corporate Identity ab",
            description: "Eine starke Corporate Identity ist das Fundament Ihrer Marke. Wir helfen Ihnen, ein konsistentes und erkennbares Image zu schaffen, das Ihr Unternehmen von der Konkurrenz abhebt.",
            benefits: [
              "Professionelles Erscheinungsbild, das Vertrauen schafft",
              "Erkennbares Branding über alle Kanäle",
              "Konsistente Kommunikation mit Kunden",
              "Erhöhter Markenwert und Kundentreue"
            ],
            features: [
              "Logodesign und Branding",
              "Entwicklung der visuellen Identität",
              "Farbpalette und Typografie",
              "Markenrichtlinien und Brandbook"
            ],
            process: [
              "Aufnahmegespräch und Markenanalyse",
              "Konzeptentwicklung und Skizzen",
              "Designausarbeitung und Feedback",
              "Finalisierung und Brandbook-Lieferung"
            ]
          },
          ES: {
            title: "Tu Propia Identidad Corporativa",
            subtitle: "Destaca con una identidad corporativa única",
            description: "Una identidad corporativa fuerte es la base de tu marca. Te ayudamos a crear una imagen consistente y reconocible que distinga tu negocio de la competencia.",
            benefits: [
              "Apariencia profesional que genera confianza",
              "Branding reconocible en todos los canales",
              "Comunicación consistente con los clientes",
              "Mayor valor de marca y lealtad del cliente"
            ],
            features: [
              "Diseño de logo y branding",
              "Desarrollo de identidad visual",
              "Paleta de colores y tipografía",
              "Directrices de marca y brandbook"
            ],
            process: [
              "Entrevista inicial y análisis de marca",
              "Desarrollo de concepto y bocetos",
              "Elaboración del diseño y feedback",
              "Finalización y entrega del brandbook"
            ]
          },
          IT: {
            title: "La Tua Identità Aziendale",
            subtitle: "Distinguiti con un'identità aziendale unica",
            description: "Una forte identità aziendale è la base del tuo brand. Ti aiutiamo a creare un'immagine coerente e riconoscibile che distingue la tua azienda dalla concorrenza.",
            benefits: [
              "Aspetto professionale che genera fiducia",
              "Branding riconoscibile su tutti i canali",
              "Comunicazione coerente con i clienti",
              "Maggiore valore del brand e fedeltà dei clienti"
            ],
            features: [
              "Design del logo e branding",
              "Sviluppo dell'identità visiva",
              "Palette colori e tipografia",
              "Linee guida del brand e brandbook"
            ],
            process: [
              "Colloquio iniziale e analisi del brand",
              "Sviluppo del concept e bozze",
              "Elaborazione del design e feedback",
              "Finalizzazione e consegna del brandbook"
            ]
          },
          UK: {
            title: "Ваш Власний Корпоративний Стиль",
            subtitle: "Виділіться унікальним корпоративним стилем",
            description: "Сильний корпоративний стиль - основа вашого бренду. Ми допомагаємо створити послідовний і впізнаваний образ, який виділить ваш бізнес серед конкурентів.",
            benefits: [
              "Професійний вигляд, що викликає довіру",
              "Впізнаваний брендинг у всіх каналах",
              "Послідовна комунікація з клієнтами",
              "Підвищена цінність бренду та лояльність клієнтів"
            ],
            features: [
              "Дизайн логотипу та брендинг",
              "Розробка візуальної ідентичності",
              "Кольорова палітра та типографіка",
              "Керівництво по бренду та брендбук"
            ],
            process: [
              "Вступне інтерв'ю та аналіз бренду",
              "Розробка концепції та ескізи",
              "Опрацювання дизайну та зворотний зв'язок",
              "Фіналізація та доставка брендбука"
            ]
          },
          TR: {
            title: "Kendi Kurumsal Kimliğiniz",
            subtitle: "Benzersiz bir kurumsal kimlikle öne çıkın",
            description: "Güçlü bir kurumsal kimlik, markanızın temelidir. İşletmenizi rekabetten ayıran tutarlı ve tanınabilir bir imaj oluşturmanıza yardımcı oluyoruz.",
            benefits: [
              "Güven oluşturan profesyonel görünüm",
              "Tüm kanallarda tanınabilir marka",
              "Müşterilerle tutarlı iletişim",
              "Artan marka değeri ve müşteri sadakati"
            ],
            features: [
              "Logo tasarımı ve marka oluşturma",
              "Görsel kimlik geliştirme",
              "Renk paleti ve tipografi",
              "Marka yönergeleri ve brandbook"
            ],
            process: [
              "Giriş görüşmesi ve marka analizi",
              "Konsept geliştirme ve eskizler",
              "Tasarım detaylandırma ve geri bildirim",
              "Sonlandırma ve brandbook teslimi"
            ]
          },
          SV: {
            title: "Din Egen Företagsidentitet",
            subtitle: "Sticka ut med en unik företagsidentitet",
            description: "En stark företagsidentitet är grunden för ditt varumärke. Vi hjälper dig att skapa en konsekvent och igenkännbar image som skiljer ditt företag från konkurrenterna.",
            benefits: [
              "Professionellt utseende som bygger förtroende",
              "Igenkännbar varumärkesprofilering över alla kanaler",
              "Konsekvent kommunikation med kunder",
              "Ökat varumärkesvärde och kundlojalitet"
            ],
            features: [
              "Logotypdesign och varumärkesprofilering",
              "Utveckling av visuell identitet",
              "Färgpalett och typografi",
              "Varumärkesriktlinjer och brandbook"
            ],
            process: [
              "Inledande intervju och varumärkesanalys",
              "Konceptutveckling och skisser",
              "Designutarbetning och feedback",
              "Slutförande och brandbook-leverans"
            ]
          },
          ZH: {
            title: "您的企业形象",
            subtitle: "以独特的企业形象脱颖而出",
            description: "强大的企业形象是您品牌的基础。我们帮助您创建一致且易于识别的形象，使您的企业在竞争中脱颖而出。",
            benefits: [
              "建立信任的专业外观",
              "在所有渠道上可识别的品牌",
              "与客户的一致沟通",
              "提升品牌价值和客户忠诚度"
            ],
            features: [
              "标志设计和品牌建设",
              "视觉识别开发",
              "调色板和排版",
              "品牌指南和品牌手册"
            ],
            process: [
              "初始访谈和品牌分析",
              "概念开发和草图",
              "设计细化和反馈",
              "最终确定和品牌手册交付"
            ]
          },
          FI: {
            title: "Oma Yritysilmeesi",
            subtitle: "Erotu ainutlaatuisella yritysilmeellä",
            description: "Vahva yritysilme on brändisi perusta. Autamme sinua luomaan johdonmukaisen ja tunnistettavan kuvan, joka erottaa yrityksesi kilpailijoista.",
            benefits: [
              "Luottamusta herättävä ammattimainen ulkoasu",
              "Tunnistettava brändi kaikissa kanavissa",
              "Johdonmukainen viestintä asiakkaille",
              "Kasvanut brändin arvo ja asiakasuskollisuus"
            ],
            features: [
              "Logosuunnittelu ja brändäys",
              "Visuaalisen identiteetin kehittäminen",
              "Väripaletti ja typografia",
              "Brändiohjeet ja brandbook"
            ],
            process: [
              "Aloitushaastattelu ja brändianalyysi",
              "Konseptin kehittäminen ja luonnokset",
              "Suunnittelun viimeistely ja palaute",
              "Viimeistely ja brandbookin toimitus"
            ]
          },
          AR: {
            title: "هويتك المؤسسية الخاصة",
            subtitle: "تميز بهوية مؤسسية فريدة",
            description: "الهوية المؤسسية القوية هي أساس علامتك التجارية. نساعدك في إنشاء صورة متسقة ومميزة تميز عملك عن المنافسين.",
            benefits: [
              "مظهر احترافي يبني الثقة",
              "علامة تجارية معروفة عبر جميع القنوات",
              "تواصل متسق مع العملاء",
              "زيادة قيمة العلامة التجارية وولاء العملاء"
            ],
            features: [
              "تصميم الشعار والعلامة التجارية",
              "تطوير الهوية البصرية",
              "لوحة الألوان والطباعة",
              "إرشادات العلامة التجارية وكتاب العلامة التجارية"
            ],
            process: [
              "مقابلة أولية وتحليل العلامة التجارية",
              "تطوير المفهوم والرسومات",
              "تفصيل التصميم والملاحظات",
              "الإنهاء وتسليم كتاب العلامة التجارية"
            ]
          },
          DA: {
            title: "Din Egen Virksomhedsidentitet",
            subtitle: "Skil dig ud med en unik virksomhedsidentitet",
            description: "En stærk virksomhedsidentitet er fundamentet for dit brand. Vi hjælper dig med at skabe et konsistent og genkendeligt image, der adskiller din virksomhed fra konkurrenterne.",
            benefits: [
              "Professionelt udseende der skaber tillid",
              "Genkendelig branding på tværs af alle kanaler",
              "Konsistent kommunikation med kunder",
              "Øget brandværdi og kundeloyalitet"
            ],
            features: [
              "Logodesign og branding",
              "Udvikling af visuel identitet",
              "Farvepalet og typografi",
              "Brandretningslinjer og brandbook"
            ],
            process: [
              "Indledende interview og brandanalyse",
              "Konceptudvikling og skitser",
              "Designudarbejdelse og feedback",
              "Færdiggørelse og brandbook-levering"
            ]
          },
          NO: {
            title: "Din Egen Bedriftsidentitet",
            subtitle: "Skill deg ut med en unik bedriftsidentitet",
            description: "En sterk bedriftsidentitet er grunnlaget for merkevaren din. Vi hjelper deg med å skape et konsistent og gjenkjennelig image som skiller bedriften din fra konkurrentene.",
            benefits: [
              "Profesjonelt utseende som bygger tillit",
              "Gjenkjennelig merkevarebygging på tvers av alle kanaler",
              "Konsistent kommunikasjon med kunder",
              "Økt merkeverdi og kundelojalitet"
            ],
            features: [
              "Logodesign og merkevarebygging",
              "Utvikling av visuell identitet",
              "Fargepalett og typografi",
              "Merkevareretningslinjer og brandbook"
            ],
            process: [
              "Innledende intervju og merkevareanalyse",
              "Konseptutvikling og skisser",
              "Designutarbeidelse og tilbakemelding",
              "Ferdigstillelse og brandbook-levering"
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