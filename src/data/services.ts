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
          },
          PL: {
            title: "Profesjonalna Strona Internetowa",
            subtitle: "Centrum online Twojej firmy",
            description: "Profesjonalna strona internetowa jest niezbędna w dzisiejszym cyfrowym świecie. Projektujemy i rozwijamy strony, które są nie tylko piękne, ale także optymalnie działają i skutecznie konwertują.",
            benefits: [
              "Obecność online 24/7 dla Twojej firmy",
              "Zwiększona wiarygodność i profesjonalizm",
              "Lepsza widoczność w wyszukiwarkach",
              "Więcej leadów i konwersji"
            ],
            features: [
              "Responsywny design na wszystkie urządzenia",
              "Treści zoptymalizowane pod SEO",
              "Szybkie czasy ładowania i bezpieczeństwo",
              "System zarządzania treścią (CMS)"
            ],
            process: [
              "Strategiczne planowanie i wireframing",
              "Projekt wizualny i doświadczenie użytkownika",
              "Rozwój i tworzenie treści",
              "Testowanie, uruchomienie i utrzymanie"
            ]
          },
          RU: {
            title: "Профессиональный Веб-сайт",
            subtitle: "Онлайн-центр вашего бизнеса",
            description: "Профессиональный веб-сайт необходим в современном цифровом мире. Мы разрабатываем и создаем веб-сайты, которые не только красивы, но и оптимально работают и эффективно конвертируют.",
            benefits: [
              "Онлайн-присутствие 24/7 для вашего бизнеса",
              "Повышенная надежность и профессионализм",
              "Лучшая видимость в поисковых системах",
              "Больше лидов и конверсий"
            ],
            features: [
              "Адаптивный дизайн для всех устройств",
              "SEO-оптимизированный контент",
              "Быстрая загрузка и безопасность",
              "Система управления контентом (CMS)"
            ],
            process: [
              "Стратегическое планирование и wireframing",
              "Визуальный дизайн и пользовательский опыт",
              "Разработка и создание контента",
              "Тестирование, запуск и поддержка"
            ]
          },
          DE: {
            title: "Professionelle Website",
            subtitle: "Das Online-Zentrum Ihres Unternehmens",
            description: "Eine professionelle Website ist in der heutigen digitalen Welt unerlässlich. Wir entwerfen und entwickeln Websites, die nicht nur schön sind, sondern auch optimal funktionieren und effektiv konvertieren.",
            benefits: [
              "24/7 Online-Präsenz für Ihr Unternehmen",
              "Erhöhte Glaubwürdigkeit und Professionalität",
              "Bessere Sichtbarkeit in Suchmaschinen",
              "Mehr Leads und Konversionen"
            ],
            features: [
              "Responsives Design für alle Geräte",
              "SEO-optimierte Inhalte",
              "Schnelle Ladezeiten und Sicherheit",
              "Content-Management-System (CMS)"
            ],
            process: [
              "Strategische Planung und Wireframing",
              "Visuelles Design und Benutzererfahrung",
              "Entwicklung und Content-Erstellung",
              "Testing, Launch und Wartung"
            ]
          },
          ES: {
            title: "Sitio Web Profesional",
            subtitle: "El centro online de tu negocio",
            description: "Un sitio web profesional es esencial en el mundo digital de hoy. Diseñamos y desarrollamos sitios web que no solo son hermosos, sino que también funcionan de manera óptima y convierten efectivamente.",
            benefits: [
              "Presencia online 24/7 para tu negocio",
              "Mayor credibilidad y profesionalismo",
              "Mejor visibilidad en motores de búsqueda",
              "Más leads y conversiones"
            ],
            features: [
              "Diseño responsivo para todos los dispositivos",
              "Contenido optimizado para SEO",
              "Tiempos de carga rápidos y seguridad",
              "Sistema de gestión de contenido (CMS)"
            ],
            process: [
              "Planificación estratégica y wireframing",
              "Diseño visual y experiencia de usuario",
              "Desarrollo y creación de contenido",
              "Pruebas, lanzamiento y mantenimiento"
            ]
          },
          IT: {
            title: "Sito Web Professionale",
            subtitle: "Il centro online della tua attività",
            description: "Un sito web professionale è essenziale nel mondo digitale di oggi. Progettiamo e sviluppiamo siti web che non sono solo belli, ma funzionano in modo ottimale e convertono efficacemente.",
            benefits: [
              "Presenza online 24/7 per la tua attività",
              "Maggiore credibilità e professionalità",
              "Migliore visibilità nei motori di ricerca",
              "Più lead e conversioni"
            ],
            features: [
              "Design responsivo per tutti i dispositivi",
              "Contenuti ottimizzati per SEO",
              "Tempi di caricamento rapidi e sicurezza",
              "Sistema di gestione dei contenuti (CMS)"
            ],
            process: [
              "Pianificazione strategica e wireframing",
              "Design visivo ed esperienza utente",
              "Sviluppo e creazione di contenuti",
              "Test, lancio e manutenzione"
            ]
          },
          UK: {
            title: "Професійний Веб-сайт",
            subtitle: "Онлайн-центр вашого бізнесу",
            description: "Професійний веб-сайт необхідний у сучасному цифровому світі. Ми розробляємо та створюємо веб-сайти, які не тільки красиві, але й оптимально працюють та ефективно конвертують.",
            benefits: [
              "Онлайн-присутність 24/7 для вашого бізнесу",
              "Підвищена надійність та професіоналізм",
              "Краща видимість у пошукових системах",
              "Більше лідів та конверсій"
            ],
            features: [
              "Адаптивний дизайн для всіх пристроїв",
              "SEO-оптимізований контент",
              "Швидке завантаження та безпека",
              "Система управління контентом (CMS)"
            ],
            process: [
              "Стратегічне планування та wireframing",
              "Візуальний дизайн та користувацький досвід",
              "Розробка та створення контенту",
              "Тестування, запуск та підтримка"
            ]
          },
          TR: {
            title: "Profesyonel Web Sitesi",
            subtitle: "İşletmenizin online merkezi",
            description: "Profesyonel bir web sitesi günümüzün dijital dünyasında zorunludur. Sadece güzel değil, aynı zamanda optimal performans gösteren ve etkili bir şekilde dönüştüren web siteleri tasarlıyor ve geliştiriyoruz.",
            benefits: [
              "İşletmeniz için 7/24 online varlık",
              "Artan güvenilirlik ve profesyonellik",
              "Arama motorlarında daha iyi görünürlük",
              "Daha fazla potansiyel müşteri ve dönüşüm"
            ],
            features: [
              "Tüm cihazlar için duyarlı tasarım",
              "SEO optimize edilmiş içerik",
              "Hızlı yükleme süreleri ve güvenlik",
              "İçerik Yönetim Sistemi (CMS)"
            ],
            process: [
              "Stratejik planlama ve wireframing",
              "Görsel tasarım ve kullanıcı deneyimi",
              "Geliştirme ve içerik oluşturma",
              "Test, lansman ve bakım"
            ]
          },
          SV: {
            title: "Professionell Webbplats",
            subtitle: "Ditt företags online-centrum",
            description: "En professionell webbplats är nödvändig i dagens digitala värld. Vi designar och utvecklar webbplatser som inte bara är vackra, utan också presterar optimalt och konverterar effektivt.",
            benefits: [
              "Online-närvaro 24/7 för ditt företag",
              "Ökad trovärdighet och professionalism",
              "Bättre synlighet i sökmotorer",
              "Fler leads och konverteringar"
            ],
            features: [
              "Responsiv design för alla enheter",
              "SEO-optimerat innehåll",
              "Snabba laddtider och säkerhet",
              "Innehållshanteringssystem (CMS)"
            ],
            process: [
              "Strategisk planering och wireframing",
              "Visuell design och användarupplevelse",
              "Utveckling och innehållsskapande",
              "Testning, lansering och underhåll"
            ]
          },
          ZH: {
            title: "专业网站",
            subtitle: "您企业的在线中心",
            description: "在当今数字世界中，专业网站至关重要。我们设计和开发的网站不仅美观，而且性能优异，转化效果显著。",
            benefits: [
              "为您的企业提供24/7在线服务",
              "提高可信度和专业性",
              "在搜索引擎中获得更好的可见性",
              "更多潜在客户和转化"
            ],
            features: [
              "适用于所有设备的响应式设计",
              "SEO优化内容",
              "快速加载时间和安全性",
              "内容管理系统（CMS）"
            ],
            process: [
              "战略规划和线框图",
              "视觉设计和用户体验",
              "开发和内容创建",
              "测试、发布和维护"
            ]
          },
          FI: {
            title: "Ammattimainen Verkkosivusto",
            subtitle: "Yrityksesi online-keskus",
            description: "Ammattimainen verkkosivusto on välttämätön nykypäivän digitaalisessa maailmassa. Suunnittelemme ja kehitämme verkkosivustoja, jotka ovat paitsi kauniita, myös toimivat optimaalisesti ja konvertoivat tehokkaasti.",
            benefits: [
              "24/7 online-läsnäolo yrityksellesi",
              "Lisääntynyt uskottavuus ja ammattimaisuus",
              "Parempi näkyvyys hakukoneissa",
              "Enemmän liidejä ja konversioita"
            ],
            features: [
              "Responsiivinen design kaikille laitteille",
              "SEO-optimoitu sisältö",
              "Nopeat latausajat ja turvallisuus",
              "Sisällönhallintajärjestelmä (CMS)"
            ],
            process: [
              "Strateginen suunnittelu ja wireframing",
              "Visuaalinen suunnittelu ja käyttäjäkokemus",
              "Kehitys ja sisällöntuotanto",
              "Testaus, julkaisu ja ylläpito"
            ]
          },
          AR: {
            title: "موقع ويب احترافي",
            subtitle: "المركز الإلكتروني لعملك",
            description: "موقع الويب الاحترافي ضروري في عالم اليوم الرقمي. نحن نصمم ونطور مواقع ويب ليست جميلة فحسب، بل تعمل بشكل مثالي وتحول بفعالية.",
            benefits: [
              "تواجد إلكتروني على مدار الساعة لعملك",
              "زيادة المصداقية والاحترافية",
              "رؤية أفضل في محركات البحث",
              "المزيد من العملاء المحتملين والتحويلات"
            ],
            features: [
              "تصميم متجاوب لجميع الأجهزة",
              "محتوى محسّن لمحركات البحث",
              "أوقات تحميل سريعة وأمان",
              "نظام إدارة المحتوى (CMS)"
            ],
            process: [
              "التخطيط الاستراتيجي والرسم التخطيطي",
              "التصميم المرئي وتجربة المستخدم",
              "التطوير وإنشاء المحتوى",
              "الاختبار والإطلاق والصيانة"
            ]
          },
          DA: {
            title: "Professionel Hjemmeside",
            subtitle: "Din virksomheds online-centrum",
            description: "En professionel hjemmeside er essentiel i dagens digitale verden. Vi designer og udvikler hjemmesider, der ikke kun er smukke, men også yder optimalt og konverterer effektivt.",
            benefits: [
              "Online tilstedeværelse 24/7 for din virksomhed",
              "Øget troværdighed og professionalisme",
              "Bedre synlighed i søgemaskiner",
              "Flere leads og konverteringer"
            ],
            features: [
              "Responsivt design til alle enheder",
              "SEO-optimeret indhold",
              "Hurtige indlæsningstider og sikkerhed",
              "Indholdsstyringssystem (CMS)"
            ],
            process: [
              "Strategisk planlægning og wireframing",
              "Visuelt design og brugeroplevelse",
              "Udvikling og indholdsoprettelse",
              "Test, lancering og vedligeholdelse"
            ]
          },
          NO: {
            title: "Profesjonell Nettside",
            subtitle: "Bedriftens online-senter",
            description: "En profesjonell nettside er essensiell i dagens digitale verden. Vi designer og utvikler nettsider som ikke bare er vakre, men også yter optimalt og konverterer effektivt.",
            benefits: [
              "Online-tilstedeværelse 24/7 for din bedrift",
              "Økt troverdighet og profesjonalitet",
              "Bedre synlighet i søkemotorer",
              "Flere leads og konverteringer"
            ],
            features: [
              "Responsiv design for alle enheter",
              "SEO-optimalisert innhold",
              "Raske lastetider og sikkerhet",
              "Innholdsstyringssystem (CMS)"
            ],
            process: [
              "Strategisk planlegging og wireframing",
              "Visuell design og brukeropplevelse",
              "Utvikling og innholdsskaping",
              "Testing, lansering og vedlikehold"
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
          },
          PL: {
            title: "Sklep Internetowy E-commerce",
            subtitle: "Sprzedaż online 24/7",
            description: "Profesjonalny sklep internetowy otwiera drzwi do nowych klientów i zwiększa Twoje przychody. Rozwijamy przyjazne dla użytkownika sklepy, które konwertują i optymalnie prezentują Twoje produkty lub usługi.",
            benefits: [
              "Sprzedaż bez ograniczeń czasowych",
              "Rozszerzenie zasięgu klientów",
              "Automatyzacja procesów sprzedażowych",
              "Integracja z metodami płatności i wysyłki"
            ],
            features: [
              "Przyjazny katalog produktów",
              "Bezpieczne przetwarzanie płatności",
              "Zarządzanie zapasami i zamówieniami",
              "Responsywny design mobile-first"
            ],
            process: [
              "Strategia i planowanie e-commerce",
              "Design i optymalizacja doświadczenia użytkownika",
              "Rozwój i integracje",
              "Testowanie, szkolenie i uruchomienie"
            ]
          },
          RU: {
            title: "Интернет-магазин E-commerce",
            subtitle: "Онлайн-продажи 24/7",
            description: "Профессиональный интернет-магазин открывает двери к новым клиентам и увеличивает ваш доход. Мы разрабатываем удобные интернет-магазины, которые конвертируют и оптимально представляют ваши продукты или услуги.",
            benefits: [
              "Продажи без временных ограничений",
              "Расширение охвата клиентов",
              "Автоматизация процессов продаж",
              "Интеграция с платежными и доставочными методами"
            ],
            features: [
              "Удобный каталог продуктов",
              "Безопасная обработка платежей",
              "Управление запасами и заказами",
              "Адаптивный дизайн mobile-first"
            ],
            process: [
              "Стратегия и планирование e-commerce",
              "Дизайн и оптимизация пользовательского опыта",
              "Разработка и интеграции",
              "Тестирование, обучение и запуск"
            ]
          },
          DE: {
            title: "E-Commerce Webshop",
            subtitle: "24/7 Online-Verkauf",
            description: "Ein professioneller Webshop öffnet Türen zu neuen Kunden und erhöht Ihren Umsatz. Wir entwickeln benutzerfreundliche Webshops, die konvertieren und Ihre Produkte oder Dienstleistungen optimal präsentieren.",
            benefits: [
              "Verkauf ohne zeitliche Einschränkungen",
              "Erweiterung Ihrer Kundenreichweite",
              "Automatisierung von Verkaufsprozessen",
              "Integration mit Zahlungs- und Versandmethoden"
            ],
            features: [
              "Benutzerfreundlicher Produktkatalog",
              "Sichere Zahlungsabwicklung",
              "Bestands- und Auftragsverwaltung",
              "Mobile-first responsives Design"
            ],
            process: [
              "E-Commerce-Strategie und Planung",
              "Design und User-Experience-Optimierung",
              "Entwicklung und Integrationen",
              "Testing, Schulung und Go-live"
            ]
          },
          ES: {
            title: "Tienda Online E-commerce",
            subtitle: "Ventas online 24/7",
            description: "Una tienda online profesional abre puertas a nuevos clientes y aumenta tus ingresos. Desarrollamos tiendas online fáciles de usar que convierten y presentan tus productos o servicios de manera óptima.",
            benefits: [
              "Ventas sin restricciones horarias",
              "Expansión de tu alcance de clientes",
              "Automatización de procesos de venta",
              "Integración con métodos de pago y envío"
            ],
            features: [
              "Catálogo de productos fácil de usar",
              "Procesamiento seguro de pagos",
              "Gestión de inventario y pedidos",
              "Diseño responsivo mobile-first"
            ],
            process: [
              "Estrategia y planificación de e-commerce",
              "Diseño y optimización de experiencia de usuario",
              "Desarrollo e integraciones",
              "Pruebas, formación y lanzamiento"
            ]
          },
          IT: {
            title: "E-commerce Webshop",
            subtitle: "Vendite online 24/7",
            description: "Un webshop professionale apre le porte a nuovi clienti e aumenta i tuoi ricavi. Sviluppiamo webshop user-friendly che convertono e presentano in modo ottimale i tuoi prodotti o servizi.",
            benefits: [
              "Vendite senza restrizioni orarie",
              "Espansione della portata dei clienti",
              "Automazione dei processi di vendita",
              "Integrazione con metodi di pagamento e spedizione"
            ],
            features: [
              "Catalogo prodotti user-friendly",
              "Elaborazione sicura dei pagamenti",
              "Gestione inventario e ordini",
              "Design responsivo mobile-first"
            ],
            process: [
              "Strategia e pianificazione e-commerce",
              "Design e ottimizzazione dell'esperienza utente",
              "Sviluppo e integrazioni",
              "Test, formazione e go-live"
            ]
          },
          UK: {
            title: "Інтернет-магазин E-commerce",
            subtitle: "Онлайн-продажі 24/7",
            description: "Професійний інтернет-магазин відкриває двері до нових клієнтів та збільшує ваш дохід. Ми розробляємо зручні інтернет-магазини, які конвертують та оптимально представляють ваші продукти або послуги.",
            benefits: [
              "Продажі без часових обмежень",
              "Розширення охоплення клієнтів",
              "Автоматизація процесів продажу",
              "Інтеграція з платіжними та доставочними методами"
            ],
            features: [
              "Зручний каталог продуктів",
              "Безпечна обробка платежів",
              "Управління запасами та замовленнями",
              "Адаптивний дизайн mobile-first"
            ],
            process: [
              "Стратегія та планування e-commerce",
              "Дизайн та оптимізація користувацького досвіду",
              "Розробка та інтеграції",
              "Тестування, навчання та запуск"
            ]
          },
          TR: {
            title: "E-ticaret Web Mağazası",
            subtitle: "7/24 online satış",
            description: "Profesyonel bir web mağazası yeni müşterilere kapı açar ve gelirinizi artırır. Dönüştüren ve ürünlerinizi veya hizmetlerinizi optimal şekilde sunan kullanıcı dostu web mağazaları geliştiriyoruz.",
            benefits: [
              "Zaman kısıtlaması olmadan satış",
              "Müşteri erişiminizin genişletilmesi",
              "Satış süreçlerinin otomasyonu",
              "Ödeme ve kargo yöntemleriyle entegrasyon"
            ],
            features: [
              "Kullanıcı dostu ürün kataloğu",
              "Güvenli ödeme işleme",
              "Envanter ve sipariş yönetimi",
              "Mobile-first duyarlı tasarım"
            ],
            process: [
              "E-ticaret stratejisi ve planlama",
              "Tasarım ve kullanıcı deneyimi optimizasyonu",
              "Geliştirme ve entegrasyonlar",
              "Test, eğitim ve lansman"
            ]
          },
          SV: {
            title: "E-handels Webshop",
            subtitle: "Online-försäljning 24/7",
            description: "En professionell webshop öppnar dörrar till nya kunder och ökar dina intäkter. Vi utvecklar användarvänliga webshoppar som konverterar och optimalt presenterar dina produkter eller tjänster.",
            benefits: [
              "Försäljning utan tidsbegränsningar",
              "Utökning av din kundräckvidd",
              "Automatisering av försäljningsprocesser",
              "Integration med betalnings- och leveransmetoder"
            ],
            features: [
              "Användarvänlig produktkatalog",
              "Säker betalningshantering",
              "Lager- och orderhantering",
              "Mobile-first responsiv design"
            ],
            process: [
              "E-handelsstrategi och planering",
              "Design och användarupplevelsesoptimering",
              "Utveckling och integrationer",
              "Testning, utbildning och go-live"
            ]
          },
          ZH: {
            title: "电子商务网店",
            subtitle: "24/7在线销售",
            description: "专业的网店为新客户打开大门，增加您的收入。我们开发用户友好的网店，转化率高并最佳展示您的产品或服务。",
            benefits: [
              "无时间限制的销售",
              "扩大客户覆盖范围",
              "销售流程自动化",
              "与支付和配送方式集成"
            ],
            features: [
              "用户友好的产品目录",
              "安全的支付处理",
              "库存和订单管理",
              "移动优先响应式设计"
            ],
            process: [
              "电子商务战略和规划",
              "设计和用户体验优化",
              "开发和集成",
              "测试、培训和上线"
            ]
          },
          FI: {
            title: "Verkkokauppa",
            subtitle: "24/7 online-myynti",
            description: "Ammattimainen verkkokauppa avaa ovia uusille asiakkaille ja kasvattaa liikevaihtoasi. Kehitämme käyttäjäystävällisiä verkkokauppoja, jotka konvertoivat ja esittelevät tuotteitasi tai palveluitasi optimaalisesti.",
            benefits: [
              "Myynti ilman aikarajoituksia",
              "Asiakasulottuvuuden laajentaminen",
              "Myyntiprosessien automatisointi",
              "Integraatio maksu- ja toimitusmenetelmiin"
            ],
            features: [
              "Käyttäjäystävällinen tuotekatalogi",
              "Turvallinen maksunkäsittely",
              "Varastonhallinta ja tilaustenhallinta",
              "Mobile-first responsiivinen design"
            ],
            process: [
              "Verkkokauppastrategia ja suunnittelu",
              "Design ja käyttökokemuksen optimointi",
              "Kehitys ja integraatiot",
              "Testaus, koulutus ja julkaisu"
            ]
          },
          AR: {
            title: "متجر إلكتروني للتجارة الإلكترونية",
            subtitle: "مبيعات عبر الإنترنت على مدار الساعة",
            description: "يفتح المتجر الإلكتروني الاحترافي أبوابًا لعملاء جدد ويزيد من إيراداتك. نطور متاجر إلكترونية سهلة الاستخدام تحول وتعرض منتجاتك أو خدماتك بشكل مثالي.",
            benefits: [
              "مبيعات بدون قيود زمنية",
              "توسيع نطاق وصولك للعملاء",
              "أتمتة عمليات البيع",
              "التكامل مع طرق الدفع والشحن"
            ],
            features: [
              "كتالوج منتجات سهل الاستخدام",
              "معالجة دفع آمنة",
              "إدارة المخزون والطلبات",
              "تصميم متجاوب يعطي الأولوية للهاتف"
            ],
            process: [
              "استراتيجية وتخطيط التجارة الإلكترونية",
              "التصميم وتحسين تجربة المستخدم",
              "التطوير والتكاملات",
              "الاختبار والتدريب والإطلاق"
            ]
          },
          DA: {
            title: "E-handels Webshop",
            subtitle: "Online-salg 24/7",
            description: "En professionel webshop åbner døre til nye kunder og øger din omsætning. Vi udvikler brugervenlige webshops, der konverterer og optimalt præsenterer dine produkter eller tjenester.",
            benefits: [
              "Salg uden tidsbegrænsninger",
              "Udvidelse af din kundereach",
              "Automatisering af salgsprocesser",
              "Integration med betalings- og forsendelsesmetoder"
            ],
            features: [
              "Brugervenligt produktkatalog",
              "Sikker betalingsbehandling",
              "Lager- og ordrehåndtering",
              "Mobile-first responsivt design"
            ],
            process: [
              "E-handelsstrategi og planlægning",
              "Design og brugeroplevelsesoptimering",
              "Udvikling og integrationer",
              "Test, træning og go-live"
            ]
          },
          NO: {
            title: "E-handels Nettbutikk",
            subtitle: "Online-salg 24/7",
            description: "En profesjonell nettbutikk åpner dører til nye kunder og øker inntektene dine. Vi utvikler brukervennlige nettbutikker som konverterer og optimalt presenterer produktene eller tjenestene dine.",
            benefits: [
              "Salg uten tidsbegrensninger",
              "Utvidelse av kundereach",
              "Automatisering av salgsprosesser",
              "Integrasjon med betalings- og leveringsmetoder"
            ],
            features: [
              "Brukervennlig produktkatalog",
              "Sikker betalingsbehandling",
              "Lager- og ordrehåndtering",
              "Mobile-first responsiv design"
            ],
            process: [
              "E-handelsstrategi og planlegging",
              "Design og brukeropplevelsesoptimalisering",
              "Utvikling og integrasjoner",
              "Testing, opplæring og lansering"
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
          },
          PL: {
            title: "Optymalizacja dla Wyszukiwarek (SEO)",
            subtitle: "Dla strony łatwej do znalezienia",
            description: "SEO zapewnia, że Twoja strona zajmuje wyższe pozycje w Google i innych wyszukiwarkach. Poprzez strategiczne optymalizacje przyciągamy więcej organicznego ruchu na Twoją stronę i zwiększamy Twoją widoczność online.",
            benefits: [
              "Wyższa pozycja w wynikach wyszukiwania",
              "Więcej organicznego ruchu na stronie",
              "Zwiększona widoczność online",
              "Lepszy ROI niż płatne reklamy"
            ],
            features: [
              "Badanie słów kluczowych i strategia",
              "Optymalizacja on-page i techniczna",
              "Optymalizacja i tworzenie treści",
              "Link building i budowanie autorytetu"
            ],
            process: [
              "Audyt SEO i analiza konkurencji",
              "Rozwój strategii słów kluczowych",
              "Wdrożenie optymalizacji",
              "Monitoring i raportowanie"
            ]
          },
          RU: {
            title: "Поисковая Оптимизация (SEO)",
            subtitle: "Для сайта, который легко найти",
            description: "SEO обеспечивает более высокий рейтинг вашего сайта в Google и других поисковых системах. Благодаря стратегическим оптимизациям мы привлекаем больше органического трафика на ваш сайт и увеличиваем вашу онлайн-видимость.",
            benefits: [
              "Более высокая позиция в результатах поиска",
              "Больше органического трафика на сайт",
              "Повышенная онлайн-видимость",
              "Лучший ROI, чем у платной рекламы"
            ],
            features: [
              "Исследование ключевых слов и стратегия",
              "On-page и техническая оптимизация",
              "Оптимизация и создание контента",
              "Link building и развитие авторитета"
            ],
            process: [
              "SEO-аудит и анализ конкурентов",
              "Разработка стратегии ключевых слов",
              "Внедрение оптимизаций",
              "Мониторинг и отчетность"
            ]
          },
          DE: {
            title: "Suchmaschinenoptimierung (SEO)",
            subtitle: "Für eine leicht auffindbare Website",
            description: "SEO sorgt dafür, dass Ihre Website bei Google und anderen Suchmaschinen höher rankt. Durch strategische Optimierungen ziehen wir mehr organischen Traffic auf Ihre Website und erhöhen Ihre Online-Sichtbarkeit.",
            benefits: [
              "Höhere Position in den Suchergebnissen",
              "Mehr organischer Website-Traffic",
              "Erhöhte Online-Sichtbarkeit",
              "Besserer ROI als bezahlte Werbung"
            ],
            features: [
              "Keyword-Recherche und Strategie",
              "On-Page und technische Optimierung",
              "Content-Optimierung und -Erstellung",
              "Linkbuilding und Autoritätsaufbau"
            ],
            process: [
              "SEO-Audit und Wettbewerbsanalyse",
              "Keyword-Strategieentwicklung",
              "Implementierung von Optimierungen",
              "Monitoring und Reporting"
            ]
          },
          ES: {
            title: "Optimización de Motores de Búsqueda (SEO)",
            subtitle: "Para un sitio web fácil de encontrar",
            description: "El SEO garantiza que tu sitio web se posicione más alto en Google y otros motores de búsqueda. A través de optimizaciones estratégicas, atraemos más tráfico orgánico a tu sitio web y aumentamos tu visibilidad online.",
            benefits: [
              "Mayor posición en resultados de búsqueda",
              "Más tráfico orgánico al sitio web",
              "Mayor visibilidad online",
              "Mejor ROI que la publicidad pagada"
            ],
            features: [
              "Investigación de palabras clave y estrategia",
              "Optimización on-page y técnica",
              "Optimización y creación de contenido",
              "Link building y desarrollo de autoridad"
            ],
            process: [
              "Auditoría SEO y análisis competitivo",
              "Desarrollo de estrategia de palabras clave",
              "Implementación de optimizaciones",
              "Monitoreo y reportes"
            ]
          },
          IT: {
            title: "Ottimizzazione per i Motori di Ricerca (SEO)",
            subtitle: "Per un sito web facile da trovare",
            description: "Il SEO garantisce che il tuo sito web si posizioni più in alto su Google e altri motori di ricerca. Attraverso ottimizzazioni strategiche, attiriamo più traffico organico al tuo sito web e aumentiamo la tua visibilità online.",
            benefits: [
              "Posizione più alta nei risultati di ricerca",
              "Più traffico organico al sito web",
              "Maggiore visibilità online",
              "Migliore ROI rispetto alla pubblicità a pagamento"
            ],
            features: [
              "Ricerca di parole chiave e strategia",
              "Ottimizzazione on-page e tecnica",
              "Ottimizzazione e creazione di contenuti",
              "Link building e sviluppo dell'autorità"
            ],
            process: [
              "Audit SEO e analisi competitiva",
              "Sviluppo della strategia delle parole chiave",
              "Implementazione delle ottimizzazioni",
              "Monitoraggio e reporting"
            ]
          },
          UK: {
            title: "Пошукова Оптимізація (SEO)",
            subtitle: "Для сайту, який легко знайти",
            description: "SEO забезпечує вищий рейтинг вашого сайту в Google та інших пошукових системах. Завдяки стратегічним оптимізаціям ми залучаємо більше органічного трафіку на ваш сайт та підвищуємо вашу онлайн-видимість.",
            benefits: [
              "Вища позиція в результатах пошуку",
              "Більше органічного трафіку на сайт",
              "Підвищена онлайн-видимість",
              "Кращий ROI, ніж у платної реклами"
            ],
            features: [
              "Дослідження ключових слів та стратегія",
              "On-page та технічна оптимізація",
              "Оптимізація та створення контенту",
              "Link building та розвиток авторитету"
            ],
            process: [
              "SEO-аудит та аналіз конкурентів",
              "Розробка стратегії ключових слів",
              "Впровадження оптимізацій",
              "Моніторинг та звітність"
            ]
          },
          TR: {
            title: "Arama Motoru Optimizasyonu (SEO)",
            subtitle: "Kolay bulunabilen bir web sitesi için",
            description: "SEO, web sitenizin Google ve diğer arama motorlarında daha üst sıralarda yer almasını sağlar. Stratejik optimizasyonlar aracılığıyla web sitenize daha fazla organik trafik çekiyor ve online görünürlüğünüzü artırıyoruz.",
            benefits: [
              "Arama sonuçlarında daha yüksek pozisyon",
              "Daha fazla organik web sitesi trafiği",
              "Artan online görünürlük",
              "Ücretli reklamlardan daha iyi ROI"
            ],
            features: [
              "Anahtar kelime araştırması ve strateji",
              "On-page ve teknik optimizasyon",
              "İçerik optimizasyonu ve oluşturma",
              "Link building ve otorite geliştirme"
            ],
            process: [
              "SEO denetimi ve rekabet analizi",
              "Anahtar kelime stratejisi geliştirme",
              "Optimizasyonların uygulanması",
              "İzleme ve raporlama"
            ]
          },
          SV: {
            title: "Sökmotoroptimering (SEO)",
            subtitle: "För en webbplats som är lätt att hitta",
            description: "SEO säkerställer att din webbplats rankas högre på Google och andra sökmotorer. Genom strategiska optimeringar attraherar vi mer organisk trafik till din webbplats och ökar din online-synlighet.",
            benefits: [
              "Högre position i sökresultat",
              "Mer organisk webbplatstrafik",
              "Ökad online-synlighet",
              "Bättre ROI än betald annonsering"
            ],
            features: [
              "Sökordsforskning och strategi",
              "On-page och teknisk optimering",
              "Innehållsoptimering och skapande",
              "Länkbyggande och auktoritetsutveckling"
            ],
            process: [
              "SEO-revision och konkurrensanalys",
              "Utveckling av sökordsstrategi",
              "Implementering av optimeringar",
              "Övervakning och rapportering"
            ]
          },
          ZH: {
            title: "搜索引擎优化（SEO）",
            subtitle: "让您的网站易于被找到",
            description: "SEO确保您的网站在Google和其他搜索引擎中排名更高。通过战略性优化，我们为您的网站吸引更多有机流量并提高您的在线可见度。",
            benefits: [
              "在搜索结果中获得更高位置",
              "更多的有机网站流量",
              "提高在线可见度",
              "比付费广告更好的投资回报率"
            ],
            features: [
              "关键词研究和策略",
              "页面和技术优化",
              "内容优化和创建",
              "链接建设和权威发展"
            ],
            process: [
              "SEO审计和竞争分析",
              "关键词策略开发",
              "实施优化",
              "监控和报告"
            ]
          },
          FI: {
            title: "Hakukoneoptimointi (SEO)",
            subtitle: "Helposti löydettävä verkkosivusto",
            description: "SEO varmistaa, että verkkosivustosi sijoittuu korkeammalle Googlessa ja muissa hakukoneissa. Strategisten optimointien avulla houkuttelemme enemmän orgaanista liikennettä verkkosivustollesi ja lisäämme online-näkyvyyttäsi.",
            benefits: [
              "Korkeampi sijoitus hakutuloksissa",
              "Enemmän orgaanista verkkosivustoliikennettä",
              "Lisääntynyt online-näkyvyys",
              "Parempi ROI kuin maksetulla mainonnalla"
            ],
            features: [
              "Avainsanatutkimus ja strategia",
              "On-page ja tekninen optimointi",
              "Sisällön optimointi ja luominen",
              "Linkkien rakentaminen ja auktoriteetin kehittäminen"
            ],
            process: [
              "SEO-auditointi ja kilpailija-analyysi",
              "Avainsanastrategian kehittäminen",
              "Optimointien toteutus",
              "Seuranta ja raportointi"
            ]
          },
          AR: {
            title: "تحسين محركات البحث (SEO)",
            subtitle: "لموقع ويب يسهل العثور عليه",
            description: "يضمن SEO أن يحتل موقعك الإلكتروني مرتبة أعلى في جوجل ومحركات البحث الأخرى. من خلال التحسينات الاستراتيجية، نجذب المزيد من الزيارات العضوية إلى موقعك ونزيد من ظهورك عبر الإنترنت.",
            benefits: [
              "موضع أعلى في نتائج البحث",
              "المزيد من الزيارات العضوية للموقع",
              "زيادة الظهور عبر الإنترنت",
              "عائد استثمار أفضل من الإعلانات المدفوعة"
            ],
            features: [
              "بحث الكلمات الرئيسية والاستراتيجية",
              "التحسين على الصفحة والتقني",
              "تحسين وإنشاء المحتوى",
              "بناء الروابط وتطوير السلطة"
            ],
            process: [
              "تدقيق SEO وتحليل المنافسين",
              "تطوير استراتيجية الكلمات الرئيسية",
              "تنفيذ التحسينات",
              "المراقبة والتقارير"
            ]
          },
          DA: {
            title: "Søgemaskineoptimering (SEO)",
            subtitle: "For en hjemmeside der er nem at finde",
            description: "SEO sikrer, at din hjemmeside rangerer højere på Google og andre søgemaskiner. Gennem strategiske optimeringer tiltrækker vi mere organisk trafik til din hjemmeside og øger din online synlighed.",
            benefits: [
              "Højere position i søgeresultater",
              "Mere organisk hjemmesidetrafik",
              "Øget online synlighed",
              "Bedre ROI end betalt annoncering"
            ],
            features: [
              "Søgeordsresearch og strategi",
              "On-page og teknisk optimering",
              "Indholdsoptimering og -oprettelse",
              "Linkbuilding og autoritetsudvikling"
            ],
            process: [
              "SEO-revision og konkurrenceanalyse",
              "Udvikling af søgeordsstrategi",
              "Implementering af optimeringer",
              "Overvågning og rapportering"
            ]
          },
          NO: {
            title: "Søkemotoroptimalisering (SEO)",
            subtitle: "For en nettside som er lett å finne",
            description: "SEO sikrer at nettsiden din rangerer høyere på Google og andre søkemotorer. Gjennom strategiske optimaliseringer tiltrekker vi mer organisk trafikk til nettsiden din og øker din online synlighet.",
            benefits: [
              "Høyere posisjon i søkeresultater",
              "Mer organisk nettsidetrafikk",
              "Økt online synlighet",
              "Bedre ROI enn betalt annonsering"
            ],
            features: [
              "Søkeordsanalyse og strategi",
              "On-page og teknisk optimalisering",
              "Innholdsoptimalisering og -skaping",
              "Linkbygging og autoritetsutvikling"
            ],
            process: [
              "SEO-revisjon og konkurrentanalyse",
              "Utvikling av søkeordsstrategi",
              "Implementering av optimaliseringer",
              "Overvåking og rapportering"
            ]
          }
        }
      }
    ]
  }
];

// Add more service categories and items here
export const allServices: ServiceItem[] = serviceCategories.flatMap(category => category.items);