import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const SUPPORTED_LANGUAGES = [
  { code: "NL", name: "Nederlands" },
  { code: "EN", name: "English" },
  { code: "FR", name: "Français" },
  { code: "PL", name: "Polski" },
  { code: "RU", name: "Русский" },
  { code: "DE", name: "Deutsch" },
  { code: "ES", name: "Español" },
  { code: "IT", name: "Italiano" },
  { code: "UK", name: "Українська" },
  { code: "TR", name: "Türkçe" }
];

const translations = {
  NL: {
    // Navigation
    'nav.services': 'Wat wil je?',
    'nav.offices': 'Onze kantoren',
    'nav.blog': 'Blog',
    'nav.myMedia': 'My Media',
    'nav.contact': 'Klaar voor een babbel?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU MAAKT',
    'hero.subtitle1': "KMO'S",
    'hero.subtitle2': 'SUCCESVOL ONLINE',
    'hero.cta1': 'Maak een afspraak',
    'hero.cta2': 'Bel me op',
    'hero.trustIndicators.oneStop': 'One-stop-shop',
    'hero.trustIndicators.budget': 'Voor ieder budget',
    'hero.trustIndicators.reports': 'Maandelijkse rapporten',
    
    // Footer
    'footer.companyDescription': 'GROPPI Digital Marketing Bureau maakt KMO\'s succesvol online met professionele digitale marketing oplossingen.',
    'footer.companyName': 'GROPPI',
    'footer.companyTagline': 'Digital Marketing Bureau',
    'footer.services': 'Onze Services',
    'footer.websiteDevelopment': 'Website Development',
    'footer.webshopCreation': 'Webshop Creation', 
    'footer.seoOptimization': 'SEO Optimalisatie',
    'footer.digitalAdvertising': 'Digital Advertising',
    'footer.socialMediaMarketing': 'Social Media Marketing',
    'footer.contact': 'Contact',
    'footer.locations': 'Antwerpen, Brussel,\nOost- & West-Vlaanderen',
    'footer.newsletter': 'Blijf op de hoogte',
    'footer.newsletterDescription': 'Ontvang tips en nieuws over digital marketing.',
    'footer.emailPlaceholder': 'Jouw e-mail adres',
    'footer.subscribe': 'Inschrijven',
    'footer.allRightsReserved': 'Alle rechten voorbehouden.',
    'footer.privacy': 'Privacy Beleid',
    'footer.terms': 'Algemene Voorwaarden',
    
    // Features Section
    'features.title1': 'Alles voor jouw zaak',
    'features.desc1': 'Complete digitale oplossingen onder één dak',
    'features.title2': 'Persoonlijke & lokale aanpak',
    'features.desc2': 'Maatwerk service met persoonlijk contact',
    'features.title3': 'Voor elk budget',
    'features.desc3': 'Oplossingen die passen bij jouw financiële mogelijkheden',
    
    // Services Section
    'services.mainTitle': 'Wij regelen alles',
    'services.mainSubtitle': 'terwijl jij je focust op jouw zaak',
    'services.solidBasisTitle': 'Start met een solide basis',
    'services.adverterenTitle': 'Groei met Digitaal adverteren',
    'services.website': 'Website',
    'services.websiteDesc': 'Professioneel online, met een website op maat.',
    'services.webshop': 'Webshop',
    'services.webshopDesc': 'Jouw diensten en producten in de kijker.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Jouw website hoger in de zoekresultaten.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'Een positieve reputatie en correcte gegevens in één klap.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Jouw advertenties op Google, Bing en Youtube.',
    'services.socialMedia': 'Adverteren op Sociale media',
    'services.socialMediaDesc': 'Bereik je doelgroep op de populairste kanalen.',
    'services.omni': 'All-in-one adverteren met Omni',
    'services.omniDesc': 'Meer bereik op Google, Bing, Facebook en Instagram.',
    'services.goudengids': 'Adverteren op goudengids.be',
    'services.goudengidsDesc': 'Jouw zaak op de grootste bedrijvengids van België.',
    'services.solidBasisButton': 'Alles over jouw solide basis',
    'services.adverterenButton': 'Alles over digitaal adverteren',
    
    // Digital Scan Section
    'digitalScan.title': 'Gebruik onze gratis Digital scan',
    'digitalScan.description': 'Wil je de kwaliteit van jouw bedrijf op het net nagaan? Onze Digital scan kijkt na of jouw bedrijfsgegevens correct vermeld worden op meer dan 30 online platformen.',
    'digitalScan.button': 'Scan jouw site',
    'digitalScan.websiteStatus': 'Website Status',
    'digitalScan.seoOptimization': 'SEO Optimalisatie',
    'digitalScan.onlineVisibility': 'Online Zichtbaarheid',
    'digitalScan.businessData': 'Bedrijfsgegevens',
    'digitalScan.statusActive': 'Actief',
    'digitalScan.statusGood': 'Goed',
    'digitalScan.statusExcellent': 'Uitstekend',
    'digitalScan.statusVerified': 'Geverifieerd',
    
    // Testimonials Section
    'testimonials.title': 'Wat onze klanten zeggen',
    'testimonials.subtitle': 'Geloof ons niet zomaar - hoor van onze tevreden klanten',
    
    // Customer Demos Section
    'customerDemos.title': 'Onze Klanten Demo\'s',
    'customerDemos.subtitle': 'Ontdek branchespecifieke oplossingen op maat van uw bedrijf',
    'customerDemos.realEstate': 'Vastgoed',
    'customerDemos.realEstateDesc': 'Vastgoed showcase websites',
    'customerDemos.ecommerce': 'E-commerce',
    'customerDemos.ecommerceDesc': 'Online winkel oplossingen',
    'customerDemos.restaurant': 'Restaurant',
    'customerDemos.restaurantDesc': 'Menu & reserveringssystemen',
    'customerDemos.fitness': 'Fitness',
    'customerDemos.fitnessDesc': 'Sportschool & trainingsplatformen',
    'customerDemos.viewDemo': 'Bekijk Demo',
    
    // Stats Section
    'stats.happyClients': 'Gelukkige klanten',
    'stats.websitesOnline': 'Websites online',
    'stats.liveCampaigns': 'Live campagnes',
    
    // Common
    'common.learnMore': 'Meer informatie',
    'common.getStarted': 'Aan de slag',
    'common.contactUs': 'Contact opnemen'
  },
  EN: {
    // Navigation
    'nav.services': 'What do you want?',
    'nav.offices': 'Our offices',
    'nav.blog': 'Blog',
    'nav.myMedia': 'My Media',
    'nav.contact': 'Ready for a chat?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU MAKES',
    'hero.subtitle1': 'SMEs',
    'hero.subtitle2': 'SUCCESSFUL ONLINE',
    'hero.cta1': 'Make an appointment',
    'hero.cta2': 'Call me',
    'hero.trustIndicators.oneStop': 'One-stop-shop',
    'hero.trustIndicators.budget': 'For every budget',
    'hero.trustIndicators.reports': 'Monthly reports',
    
    // Footer
    'footer.companyDescription': 'GROPPI Digital Marketing Bureau helps SMEs succeed online with professional digital marketing solutions.',
    'footer.companyName': 'GROPPI',
    'footer.companyTagline': 'Digital Marketing Bureau',
    'footer.services': 'Our Services',
    'footer.websiteDevelopment': 'Website Development',
    'footer.webshopCreation': 'Webshop Creation',
    'footer.seoOptimization': 'SEO Optimization',
    'footer.digitalAdvertising': 'Digital Advertising',
    'footer.socialMediaMarketing': 'Social Media Marketing',
    'footer.contact': 'Contact',
    'footer.locations': 'Antwerp, Brussels,\nEast & West Flanders',
    'footer.newsletter': 'Stay informed',
    'footer.newsletterDescription': 'Receive tips and news about digital marketing.',
    'footer.emailPlaceholder': 'Your email address',
    'footer.subscribe': 'Subscribe',
    'footer.allRightsReserved': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
    
    // Features Section
    'features.title1': 'Everything for your Needs',
    'features.desc1': 'Complete digital solutions under one roof',
    'features.title2': 'Personal & local approach',
    'features.desc2': 'Customized service with personal contact',
    'features.title3': 'For every budget',
    'features.desc3': 'Solutions that fit your financial possibilities',
    
    // Services Section
    'services.mainTitle': 'We take care of everything',
    'services.mainSubtitle': 'while you focus on your business',
    'services.solidBasisTitle': 'Start with a solid foundation',
    'services.adverterenTitle': 'Grow with digital advertising',
    'services.website': 'Website',
    'services.websiteDesc': 'Professional online presence with a custom website.',
    'services.webshop': 'Webshop',
    'services.webshopDesc': 'Your services and products in the spotlight.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Your website higher in search results.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'A positive reputation and correct data in one go.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Your ads on Google, Bing and Youtube.',
    'services.socialMedia': 'Social media advertising',
    'services.socialMediaDesc': 'Reach your target audience on the most popular channels.',
    'services.omni': 'All-in-one advertising with Omni',
    'services.omniDesc': 'More reach on Google, Bing, Facebook and Instagram.',
    'services.goudengids': 'Advertising on goudengids.be',
    'services.goudengidsDesc': 'Your business on Belgium\'s largest business directory.',
    'services.solidBasisButton': 'All about your solid foundation',
    'services.adverterenButton': 'All about digital advertising',
    
    // Digital Scan Section
    'digitalScan.title': 'Use our free Digital scan',
    'digitalScan.description': 'Want to check the quality of your business on the net? Our Digital scan checks whether your business details are correctly mentioned on more than 30 online platforms.',
    'digitalScan.button': 'Scan your site',
    'digitalScan.websiteStatus': 'Website Status',
    'digitalScan.seoOptimization': 'SEO Optimization',
    'digitalScan.onlineVisibility': 'Online Visibility',
    'digitalScan.businessData': 'Business Data',
    'digitalScan.statusActive': 'Active',
    'digitalScan.statusGood': 'Good',
    'digitalScan.statusExcellent': 'Excellent',
    'digitalScan.statusVerified': 'Verified',
    
    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Don\'t just take our word for it - hear from our satisfied clients',
    
    // Customer Demos Section
    'customerDemos.title': 'Our Customer Demos',
    'customerDemos.subtitle': 'Explore industry-specific solutions tailored to your business needs',
    'customerDemos.realEstate': 'Real Estate',
    'customerDemos.realEstateDesc': 'Property showcase websites',
    'customerDemos.ecommerce': 'E-commerce',
    'customerDemos.ecommerceDesc': 'Online store solutions',
    'customerDemos.restaurant': 'Restaurant',
    'customerDemos.restaurantDesc': 'Menu & reservation systems',
    'customerDemos.fitness': 'Fitness',
    'customerDemos.fitnessDesc': 'Gym & training platforms',
    'customerDemos.viewDemo': 'View Demo',
    
    // Stats Section
    'stats.happyClients': 'Happy clients',
    'stats.websitesOnline': 'Websites online',
    'stats.liveCampaigns': 'Live campaigns',
    
    // Common
    'common.learnMore': 'Learn more',
    'common.getStarted': 'Get started',
    'common.contactUs': 'Contact us'
  },
  FR: {
    // Navigation
    'nav.services': 'Que voulez-vous?',
    'nav.offices': 'Nos bureaux',
    'nav.blog': 'Blog',
    'nav.myMedia': 'My Media',
    'nav.contact': 'Prêt pour une discussion?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU REND LES',
    'hero.subtitle1': 'PME',
    'hero.subtitle2': 'PROSPÈRES EN LIGNE',
    'hero.cta1': 'Prendre rendez-vous',
    'hero.cta2': "M'appeler",
    'hero.trustIndicators.oneStop': 'Solution tout-en-un',
    'hero.trustIndicators.budget': 'Pour chaque budget',
    'hero.trustIndicators.reports': 'Rapports mensuels',
    
    // Footer
    'footer.services': 'Nos Services',
    'footer.websiteDevelopment': 'Développement de Sites Web',
    'footer.webshopCreation': 'Création de Boutique en Ligne',
    'footer.seoOptimization': 'Optimisation SEO',
    'footer.digitalAdvertising': 'Publicité Digitale',
    'footer.socialMediaMarketing': 'Marketing des Médias Sociaux',
    'footer.contact': 'Contact',
    'footer.locations': 'Anvers, Bruxelles,\nFlandre Orientale & Occidentale',
    'footer.newsletter': 'Restez informé',
    'footer.newsletterDescription': 'Recevez des conseils et actualités sur le marketing digital.',
    'footer.emailPlaceholder': 'Votre adresse e-mail',
    'footer.subscribe': "S'inscrire",
    'footer.allRightsReserved': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions Générales',
    
    // Features Section
    'features.title1': 'Tout pour votre entreprise',
    'features.desc1': 'Solutions numériques complètes sous un même toit',
    'features.title2': 'Approche personnelle et locale',
    'features.desc2': 'Service sur mesure avec contact personnel',
    'features.title3': 'Pour chaque budget',
    'features.desc3': 'Solutions adaptées à vos possibilités financières',
    
    // Services Section
    'services.mainTitle': 'Nous nous occupons de tout',
    'services.mainSubtitle': 'pendant que vous vous concentrez sur votre entreprise',
    'services.solidBasisTitle': 'Commencez par une base solide',
    'services.adverterenTitle': 'Grandissez avec la publicité digitale',
    'services.website': 'Site Web',
    'services.websiteDesc': 'Professionnel en ligne, avec un site web sur mesure.',
    'services.webshop': 'Boutique en ligne',
    'services.webshopDesc': 'Vos services et produits mis en valeur.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Votre site web plus haut dans les résultats de recherche.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'Une réputation positive et des données correctes en un coup.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Vos publicités sur Google, Bing et Youtube.',
    'services.socialMedia': 'Publicité sur les médias sociaux',
    'services.socialMediaDesc': 'Atteignez votre public cible sur les canaux les plus populaires.',
    'services.omni': 'Publicité tout-en-un avec Omni',
    'services.omniDesc': 'Plus de portée sur Google, Bing, Facebook et Instagram.',
    'services.goudengids': 'Publicité sur goudengids.be',
    'services.goudengidsDesc': 'Votre entreprise sur le plus grand annuaire d\'entreprises de Belgique.',
    'services.solidBasisButton': 'Tout sur votre base solide',
    'services.adverterenButton': 'Tout sur la publicité digitale',
    
    // Digital Scan Section
    'digitalScan.title': 'Utilisez notre scan digital gratuit',
    'digitalScan.description': 'Voulez-vous vérifier la qualité de votre entreprise sur le net ? Notre scan digital vérifie si vos données d\'entreprise sont correctement mentionnées sur plus de 30 plateformes en ligne.',
    'digitalScan.button': 'Scannez votre site',
    'digitalScan.websiteStatus': 'Statut du site web',
    'digitalScan.seoOptimization': 'Optimisation SEO',
    'digitalScan.onlineVisibility': 'Visibilité en ligne',
    'digitalScan.businessData': 'Données d\'entreprise',
    
    // Stats Section
    'stats.happyClients': 'Clients satisfaits',
    'stats.websitesOnline': 'Sites web en ligne',
    'stats.liveCampaigns': 'Campagnes en direct',
    
    // Common
    'common.learnMore': 'En savoir plus',
    'common.getStarted': 'Commencer',
    'common.contactUs': 'Nous contacter'
  },
  PL: {
    // Navigation
    'nav.services': 'Czego potrzebujesz?',
    'nav.offices': 'Nasze biura',
    'nav.blog': 'Blog',
    'nav.myMedia': 'My Media',
    'nav.contact': 'Gotowy na rozmowę?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU POMAGA',
    'hero.subtitle1': 'MŚP',
    'hero.subtitle2': 'ODNIEŚĆ SUKCES ONLINE',
    'hero.cta1': 'Umów się na spotkanie',
    'hero.cta2': 'Zadzwoń do mnie',
    'hero.trustIndicators.oneStop': 'Kompleksowa obsługa',
    'hero.trustIndicators.budget': 'Dla każdego budżetu',
    'hero.trustIndicators.reports': 'Miesięczne raporty',
    
    // Footer
    'footer.services': 'Nasze usługi',
    'footer.websiteDevelopment': 'Tworzenie stron internetowych',
    'footer.webshopCreation': 'Tworzenie sklepów internetowych',
    'footer.seoOptimization': 'Optymalizacja SEO',
    'footer.digitalAdvertising': 'Reklama cyfrowa',
    'footer.socialMediaMarketing': 'Marketing w mediach społecznościowych',
    'footer.contact': 'Kontakt',
    'footer.locations': 'Antwerpia, Bruksela,\nFlandria Wschodnia i Zachodnia',
    'footer.newsletter': 'Bądź na bieżąco',
    'footer.newsletterDescription': 'Otrzymuj wskazówki i wiadomości o marketingu cyfrowym.',
    'footer.emailPlaceholder': 'Twój adres e-mail',
    'footer.subscribe': 'Zapisz się',
    'footer.allRightsReserved': 'Wszelkie prawa zastrzeżone.',
    'footer.privacy': 'Polityka prywatności',
    'footer.terms': 'Warunki użytkowania',
    
    // Features Section
    'features.title1': 'Wszystko dla Twojej firmy',
    'features.desc1': 'Kompleksowe rozwiązania cyfrowe pod jednym dachem',
    'features.title2': 'Osobiste i lokalne podejście',
    'features.desc2': 'Spersonalizowana obsługa z osobistym kontaktem',
    'features.title3': 'Dla każdego budżetu',
    'features.desc3': 'Rozwiązania dopasowane do Twoich możliwości finansowych',
    
    // Services Section
    'services.mainTitle': 'Zajmiemy się wszystkim',
    'services.mainSubtitle': 'podczas gdy Ty skupiasz się na swojej firmie',
    'services.solidBasisTitle': 'Zacznij od solidnych fundamentów',
    'services.adverterenTitle': 'Rozwijaj się dzięki reklamie cyfrowej',
    'services.website': 'Strona internetowa',
    'services.websiteDesc': 'Profesjonalna obecność online z niestandardową stroną internetową.',
    'services.webshop': 'Sklep internetowy',
    'services.webshopDesc': 'Twoje usługi i produkty w centrum uwagi.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Twoja strona wyżej w wynikach wyszukiwania.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'Pozytywna reputacja i poprawne dane za jednym razem.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Twoje reklamy w Google, Bing i Youtube.',
    'services.socialMedia': 'Reklama w mediach społecznościowych',
    'services.socialMediaDesc': 'Dotrzyj do swojej grupy docelowej na najpopularniejszych kanałach.',
    'services.omni': 'Reklama all-in-one z Omni',
    'services.omniDesc': 'Większy zasięg w Google, Bing, Facebook i Instagram.',
    'services.goudengids': 'Reklama na goudengids.be',
    'services.goudengidsDesc': 'Twoja firma w największym katalogu firm w Belgii.',
    'services.solidBasisButton': 'Wszystko o solidnych fundamentach',
    'services.adverterenButton': 'Wszystko o reklamie cyfrowej',
    
    // Digital Scan Section
    'digitalScan.title': 'Użyj naszego bezpłatnego skanowania cyfrowego',
    'digitalScan.description': 'Chcesz sprawdzić jakość swojej firmy w sieci? Nasze skanowanie cyfrowe sprawdza, czy dane Twojej firmy są prawidłowo wymienione na ponad 30 platformach online.',
    'digitalScan.button': 'Zeskanuj swoją stronę',
    'digitalScan.websiteStatus': 'Status strony',
    'digitalScan.seoOptimization': 'Optymalizacja SEO',
    'digitalScan.onlineVisibility': 'Widoczność online',
    'digitalScan.businessData': 'Dane firmowe',
    
    // Stats Section
    'stats.happyClients': 'Zadowoleni klienci',
    'stats.websitesOnline': 'Strony online',
    'stats.liveCampaigns': 'Aktywne kampanie',
    
    // Common
    'common.learnMore': 'Dowiedz się więcej',
    'common.getStarted': 'Rozpocznij',
    'common.contactUs': 'Skontaktuj się z nami'
  },
  RU: {
    // Navigation
    'nav.services': 'Что вам нужно?',
    'nav.offices': 'Наши офисы',
    'nav.blog': 'Блог',
    'nav.myMedia': 'My Media',
    'nav.contact': 'Готовы к разговору?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU ДЕЛАЕТ',
    'hero.subtitle1': 'МСП',
    'hero.subtitle2': 'УСПЕШНЫМИ ОНЛАЙН',
    'hero.cta1': 'Записаться на встречу',
    'hero.cta2': 'Позвоните мне',
    'hero.trustIndicators.oneStop': 'Комплексное решение',
    'hero.trustIndicators.budget': 'Для любого бюджета',
    'hero.trustIndicators.reports': 'Ежемесячные отчеты',
    
    // Footer
    'footer.services': 'Наши услуги',
    'footer.websiteDevelopment': 'Разработка веб-сайтов',
    'footer.webshopCreation': 'Создание интернет-магазинов',
    'footer.seoOptimization': 'SEO-оптимизация',
    'footer.digitalAdvertising': 'Цифровая реклама',
    'footer.socialMediaMarketing': 'Маркетинг в социальных сетях',
    'footer.contact': 'Контакты',
    'footer.locations': 'Антверпен, Брюссель,\nВосточная и Западная Фландрия',
    'footer.newsletter': 'Будьте в курсе',
    'footer.newsletterDescription': 'Получайте советы и новости о цифровом маркетинге.',
    'footer.emailPlaceholder': 'Ваш email адрес',
    'footer.subscribe': 'Подписаться',
    'footer.allRightsReserved': 'Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    
    // Features Section
    'features.title1': 'Все для вашего бизнеса',
    'features.desc1': 'Комплексные цифровые решения под одной крышей',
    'features.title2': 'Личный и локальный подход',
    'features.desc2': 'Персонализированный сервис с личным контактом',
    'features.title3': 'Для любого бюджета',
    'features.desc3': 'Решения, соответствующие вашим финансовым возможностям',
    
    // Services Section
    'services.mainTitle': 'Мы позаботимся обо всем',
    'services.mainSubtitle': 'пока вы сосредоточены на своем бизнесе',
    'services.solidBasisTitle': 'Начните с прочного фундамента',
    'services.adverterenTitle': 'Растите с цифровой рекламой',
    'services.website': 'Веб-сайт',
    'services.websiteDesc': 'Профессиональное присутствие онлайн с индивидуальным веб-сайтом.',
    'services.webshop': 'Интернет-магазин',
    'services.webshopDesc': 'Ваши услуги и продукты в центре внимания.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Ваш сайт выше в результатах поиска.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'Положительная репутация и правильные данные за один раз.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Ваши объявления в Google, Bing и Youtube.',
    'services.socialMedia': 'Реклама в социальных сетях',
    'services.socialMediaDesc': 'Достигайте своей целевой аудитории на самых популярных каналах.',
    'services.omni': 'Комплексная реклама с Omni',
    'services.omniDesc': 'Больший охват в Google, Bing, Facebook и Instagram.',
    'services.goudengids': 'Реклама на goudengids.be',
    'services.goudengidsDesc': 'Ваш бизнес в крупнейшем бизнес-каталоге Бельгии.',
    'services.solidBasisButton': 'Все о прочном фундаменте',
    'services.adverterenButton': 'Все о цифровой рекламе',
    
    // Digital Scan Section
    'digitalScan.title': 'Используйте наше бесплатное цифровое сканирование',
    'digitalScan.description': 'Хотите проверить качество вашего бизнеса в сети? Наше цифровое сканирование проверяет, правильно ли указаны данные вашей компании на более чем 30 онлайн-платформах.',
    'digitalScan.button': 'Сканировать ваш сайт',
    'digitalScan.websiteStatus': 'Статус веб-сайта',
    'digitalScan.seoOptimization': 'SEO-оптимизация',
    'digitalScan.onlineVisibility': 'Онлайн-видимость',
    'digitalScan.businessData': 'Бизнес-данные',
    
    // Stats Section
    'stats.happyClients': 'Довольные клиенты',
    'stats.websitesOnline': 'Сайты онлайн',
    'stats.liveCampaigns': 'Активные кампании',
    
    // Common
    'common.learnMore': 'Узнать больше',
    'common.getStarted': 'Начать',
    'common.contactUs': 'Связаться с нами'
  },
  DE: {
    // Navigation
    'nav.services': 'Was möchten Sie?',
    'nav.offices': 'Unsere Büros',
    'nav.blog': 'Blog',
    'nav.myMedia': 'My Media',
    'nav.contact': 'Bereit für ein Gespräch?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU MACHT',
    'hero.subtitle1': 'KMU',
    'hero.subtitle2': 'ERFOLGREICH ONLINE',
    'hero.cta1': 'Termin vereinbaren',
    'hero.cta2': 'Rufen Sie mich an',
    'hero.trustIndicators.oneStop': 'Komplettlösung',
    'hero.trustIndicators.budget': 'Für jedes Budget',
    'hero.trustIndicators.reports': 'Monatliche Berichte',
    
    // Footer
    'footer.services': 'Unsere Dienstleistungen',
    'footer.websiteDevelopment': 'Website-Entwicklung',
    'footer.webshopCreation': 'Webshop-Erstellung',
    'footer.seoOptimization': 'SEO-Optimierung',
    'footer.digitalAdvertising': 'Digitale Werbung',
    'footer.socialMediaMarketing': 'Social-Media-Marketing',
    'footer.contact': 'Kontakt',
    'footer.locations': 'Antwerpen, Brüssel,\nOst- & Westflandern',
    'footer.newsletter': 'Bleiben Sie informiert',
    'footer.newsletterDescription': 'Erhalten Sie Tipps und Neuigkeiten über digitales Marketing.',
    'footer.emailPlaceholder': 'Ihre E-Mail-Adresse',
    'footer.subscribe': 'Abonnieren',
    'footer.allRightsReserved': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Allgemeine Geschäftsbedingungen',
    
    // Features Section
    'features.title1': 'Alles für Ihr Unternehmen',
    'features.desc1': 'Komplette digitale Lösungen unter einem Dach',
    'features.title2': 'Persönlicher & lokaler Ansatz',
    'features.desc2': 'Maßgeschneiderter Service mit persönlichem Kontakt',
    'features.title3': 'Für jedes Budget',
    'features.desc3': 'Lösungen, die zu Ihren finanziellen Möglichkeiten passen',
    
    // Services Section
    'services.mainTitle': 'Wir kümmern uns um alles',
    'services.mainSubtitle': 'während Sie sich auf Ihr Geschäft konzentrieren',
    'services.solidBasisTitle': 'Beginnen Sie mit einer soliden Grundlage',
    'services.adverterenTitle': 'Wachsen Sie mit digitaler Werbung',
    'services.website': 'Website',
    'services.websiteDesc': 'Professionelle Online-Präsenz mit maßgeschneiderter Website.',
    'services.webshop': 'Webshop',
    'services.webshopDesc': 'Ihre Dienstleistungen und Produkte im Rampenlicht.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Ihre Website höher in Suchergebnissen.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'Positive Reputation und korrekte Daten auf einen Schlag.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Ihre Anzeigen auf Google, Bing und Youtube.',
    'services.socialMedia': 'Social-Media-Werbung',
    'services.socialMediaDesc': 'Erreichen Sie Ihre Zielgruppe auf den beliebtesten Kanälen.',
    'services.omni': 'All-in-One-Werbung mit Omni',
    'services.omniDesc': 'Mehr Reichweite auf Google, Bing, Facebook und Instagram.',
    'services.goudengids': 'Werbung auf goudengids.be',
    'services.goudengidsDesc': 'Ihr Unternehmen im größten Unternehmensverzeichnis Belgiens.',
    'services.solidBasisButton': 'Alles über Ihre solide Grundlage',
    'services.adverterenButton': 'Alles über digitale Werbung',
    
    // Digital Scan Section
    'digitalScan.title': 'Nutzen Sie unseren kostenlosen Digital-Scan',
    'digitalScan.description': 'Möchten Sie die Qualität Ihres Unternehmens im Netz überprüfen? Unser Digital-Scan prüft, ob Ihre Unternehmensdaten auf mehr als 30 Online-Plattformen korrekt angegeben sind.',
    'digitalScan.button': 'Scannen Sie Ihre Website',
    'digitalScan.websiteStatus': 'Website-Status',
    'digitalScan.seoOptimization': 'SEO-Optimierung',
    'digitalScan.onlineVisibility': 'Online-Sichtbarkeit',
    'digitalScan.businessData': 'Unternehmensdaten',
    
    // Stats Section
    'stats.happyClients': 'Zufriedene Kunden',
    'stats.websitesOnline': 'Websites online',
    'stats.liveCampaigns': 'Aktive Kampagnen',
    
    // Common
    'common.learnMore': 'Mehr erfahren',
    'common.getStarted': 'Loslegen',
    'common.contactUs': 'Kontaktieren Sie uns'
  },
  ES: {
    // Navigation
    'nav.services': '¿Qué deseas?',
    'nav.offices': 'Nuestras oficinas',
    'nav.blog': 'Blog',
    'nav.myMedia': 'My Media',
    'nav.contact': '¿Listo para una charla?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU HACE QUE LAS',
    'hero.subtitle1': 'PYMES',
    'hero.subtitle2': 'TENGAN ÉXITO EN LÍNEA',
    'hero.cta1': 'Solicitar cita',
    'hero.cta2': 'Llámame',
    'hero.trustIndicators.oneStop': 'Solución integral',
    'hero.trustIndicators.budget': 'Para cada presupuesto',
    'hero.trustIndicators.reports': 'Informes mensuales',
    
    // Footer
    'footer.services': 'Nuestros servicios',
    'footer.websiteDevelopment': 'Desarrollo de sitios web',
    'footer.webshopCreation': 'Creación de tiendas online',
    'footer.seoOptimization': 'Optimización SEO',
    'footer.digitalAdvertising': 'Publicidad digital',
    'footer.socialMediaMarketing': 'Marketing en redes sociales',
    'footer.contact': 'Contacto',
    'footer.locations': 'Amberes, Bruselas,\nFlandes Oriental y Occidental',
    'footer.newsletter': 'Manténgase informado',
    'footer.newsletterDescription': 'Reciba consejos y noticias sobre marketing digital.',
    'footer.emailPlaceholder': 'Su dirección de correo electrónico',
    'footer.subscribe': 'Suscribirse',
    'footer.allRightsReserved': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos y condiciones',
    
    // Features Section
    'features.title1': 'Todo para su negocio',
    'features.desc1': 'Soluciones digitales completas bajo un mismo techo',
    'features.title2': 'Enfoque personal y local',
    'features.desc2': 'Servicio personalizado con contacto personal',
    'features.title3': 'Para cada presupuesto',
    'features.desc3': 'Soluciones que se ajustan a sus posibilidades financieras',
    
    // Services Section
    'services.mainTitle': 'Nos encargamos de todo',
    'services.mainSubtitle': 'mientras usted se concentra en su negocio',
    'services.solidBasisTitle': 'Comience con una base sólida',
    'services.adverterenTitle': 'Crezca con publicidad digital',
    'services.website': 'Sitio web',
    'services.websiteDesc': 'Presencia online profesional con un sitio web personalizado.',
    'services.webshop': 'Tienda online',
    'services.webshopDesc': 'Sus servicios y productos en el centro de atención.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Su sitio web más alto en los resultados de búsqueda.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'Reputación positiva y datos correctos de una sola vez.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Sus anuncios en Google, Bing y Youtube.',
    'services.socialMedia': 'Publicidad en redes sociales',
    'services.socialMediaDesc': 'Llegue a su público objetivo en los canales más populares.',
    'services.omni': 'Publicidad todo en uno con Omni',
    'services.omniDesc': 'Mayor alcance en Google, Bing, Facebook e Instagram.',
    'services.goudengids': 'Publicidad en goudengids.be',
    'services.goudengidsDesc': 'Su negocio en el directorio de empresas más grande de Bélgica.',
    'services.solidBasisButton': 'Todo sobre su base sólida',
    'services.adverterenButton': 'Todo sobre publicidad digital',
    
    // Digital Scan Section
    'digitalScan.title': 'Use nuestro escaneo digital gratuito',
    'digitalScan.description': '¿Quiere verificar la calidad de su empresa en la red? Nuestro escaneo digital comprueba si los datos de su empresa se mencionan correctamente en más de 30 plataformas en línea.',
    'digitalScan.button': 'Escanee su sitio',
    'digitalScan.websiteStatus': 'Estado del sitio web',
    'digitalScan.seoOptimization': 'Optimización SEO',
    'digitalScan.onlineVisibility': 'Visibilidad en línea',
    'digitalScan.businessData': 'Datos empresariales',
    
    // Stats Section
    'stats.happyClients': 'Clientes satisfechos',
    'stats.websitesOnline': 'Sitios web en línea',
    'stats.liveCampaigns': 'Campañas activas',
    
    // Common
    'common.learnMore': 'Más información',
    'common.getStarted': 'Comenzar',
    'common.contactUs': 'Contáctenos'
  },
  IT: {
    // Navigation
    'nav.services': 'Cosa desideri?',
    'nav.offices': 'I nostri uffici',
    'nav.blog': 'Blog',
    'nav.myMedia': 'My Media',
    'nav.contact': 'Pronto per una chiacchierata?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU RENDE LE',
    'hero.subtitle1': 'PMI',
    'hero.subtitle2': 'DI SUCCESSO ONLINE',
    'hero.cta1': 'Fissa un appuntamento',
    'hero.cta2': 'Chiamami',
    'hero.trustIndicators.oneStop': 'Soluzione completa',
    'hero.trustIndicators.budget': 'Per ogni budget',
    'hero.trustIndicators.reports': 'Rapporti mensili',
    
    // Footer
    'footer.services': 'I nostri servizi',
    'footer.websiteDevelopment': 'Sviluppo siti web',
    'footer.webshopCreation': 'Creazione e-commerce',
    'footer.seoOptimization': 'Ottimizzazione SEO',
    'footer.digitalAdvertising': 'Pubblicità digitale',
    'footer.socialMediaMarketing': 'Marketing sui social media',
    'footer.contact': 'Contatti',
    'footer.locations': 'Anversa, Bruxelles,\nFiandre Orientali e Occidentali',
    'footer.newsletter': 'Rimani informato',
    'footer.newsletterDescription': 'Ricevi consigli e notizie sul marketing digitale.',
    'footer.emailPlaceholder': 'Il tuo indirizzo email',
    'footer.subscribe': 'Iscriviti',
    'footer.allRightsReserved': 'Tutti i diritti riservati.',
    'footer.privacy': 'Informativa sulla privacy',
    'footer.terms': 'Termini e condizioni',
    
    // Features Section
    'features.title1': 'Tutto per la tua azienda',
    'features.desc1': 'Soluzioni digitali complete sotto un unico tetto',
    'features.title2': 'Approccio personale e locale',
    'features.desc2': 'Servizio personalizzato con contatto personale',
    'features.title3': 'Per ogni budget',
    'features.desc3': 'Soluzioni adatte alle tue possibilità finanziarie',
    
    // Services Section
    'services.mainTitle': 'Ci occupiamo di tutto',
    'services.mainSubtitle': 'mentre tu ti concentri sulla tua attività',
    'services.solidBasisTitle': 'Inizia con una base solida',
    'services.adverterenTitle': 'Cresci con la pubblicità digitale',
    'services.website': 'Sito web',
    'services.websiteDesc': 'Presenza online professionale con un sito web personalizzato.',
    'services.webshop': 'E-commerce',
    'services.webshopDesc': 'I tuoi servizi e prodotti sotto i riflettori.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Il tuo sito web più in alto nei risultati di ricerca.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'Reputazione positiva e dati corretti in un colpo solo.',
    'services.sea': 'SEA',
    'services.seaDesc': 'I tuoi annunci su Google, Bing e Youtube.',
    'services.socialMedia': 'Pubblicità sui social media',
    'services.socialMediaDesc': 'Raggiungi il tuo pubblico target sui canali più popolari.',
    'services.omni': 'Pubblicità all-in-one con Omni',
    'services.omniDesc': 'Maggiore portata su Google, Bing, Facebook e Instagram.',
    'services.goudengids': 'Pubblicità su goudengids.be',
    'services.goudengidsDesc': 'La tua azienda nella più grande directory aziendale del Belgio.',
    'services.solidBasisButton': 'Tutto sulla tua base solida',
    'services.adverterenButton': 'Tutto sulla pubblicità digitale',
    
    // Digital Scan Section
    'digitalScan.title': 'Usa la nostra scansione digitale gratuita',
    'digitalScan.description': 'Vuoi verificare la qualità della tua azienda in rete? La nostra scansione digitale controlla se i dati della tua azienda sono correttamente menzionati su oltre 30 piattaforme online.',
    'digitalScan.button': 'Scansiona il tuo sito',
    'digitalScan.websiteStatus': 'Stato del sito web',
    'digitalScan.seoOptimization': 'Ottimizzazione SEO',
    'digitalScan.onlineVisibility': 'Visibilità online',
    'digitalScan.businessData': 'Dati aziendali',
    
    // Stats Section
    'stats.happyClients': 'Clienti soddisfatti',
    'stats.websitesOnline': 'Siti web online',
    'stats.liveCampaigns': 'Campagne attive',
    
    // Common
    'common.learnMore': 'Scopri di più',
    'common.getStarted': 'Inizia',
    'common.contactUs': 'Contattaci'
  },
  UK: {
    // Navigation
    'nav.services': 'Що вам потрібно?',
    'nav.offices': 'Наші офіси',
    'nav.blog': 'Блог',
    'nav.myMedia': 'My Media',
    'nav.contact': 'Готові до розмови?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU РОБИТЬ',
    'hero.subtitle1': 'МСП',
    'hero.subtitle2': 'УСПІШНИМИ ОНЛАЙН',
    'hero.cta1': 'Записатися на зустріч',
    'hero.cta2': 'Зателефонуйте мені',
    'hero.trustIndicators.oneStop': 'Комплексне рішення',
    'hero.trustIndicators.budget': 'Для будь-якого бюджету',
    'hero.trustIndicators.reports': 'Щомісячні звіти',
    
    // Footer
    'footer.services': 'Наші послуги',
    'footer.websiteDevelopment': 'Розробка веб-сайтів',
    'footer.webshopCreation': 'Створення інтернет-магазинів',
    'footer.seoOptimization': 'SEO-оптимізація',
    'footer.digitalAdvertising': 'Цифрова реклама',
    'footer.socialMediaMarketing': 'Маркетинг у соціальних мережах',
    'footer.contact': 'Контакти',
    'footer.locations': 'Антверпен, Брюссель,\nСхідна та Західна Фландрія',
    'footer.newsletter': 'Будьте в курсі',
    'footer.newsletterDescription': 'Отримуйте поради та новини про цифровий маркетинг.',
    'footer.emailPlaceholder': 'Ваша email адреса',
    'footer.subscribe': 'Підписатися',
    'footer.allRightsReserved': 'Всі права захищені.',
    'footer.privacy': 'Політика конфіденційності',
    'footer.terms': 'Умови використання',
    
    // Features Section
    'features.title1': 'Все для вашого бізнесу',
    'features.desc1': 'Комплексні цифрові рішення під одним дахом',
    'features.title2': 'Особистий і локальний підхід',
    'features.desc2': 'Персоналізований сервіс з особистим контактом',
    'features.title3': 'Для будь-якого бюджету',
    'features.desc3': 'Рішення, що відповідають вашим фінансовим можливостям',
    
    // Services Section
    'services.mainTitle': 'Ми подбаємо про все',
    'services.mainSubtitle': 'поки ви зосереджені на своєму бізнесі',
    'services.solidBasisTitle': 'Почніть з міцного фундаменту',
    'services.adverterenTitle': 'Зростайте з цифровою рекламою',
    'services.website': 'Веб-сайт',
    'services.websiteDesc': 'Професійна присутність онлайн з індивідуальним веб-сайтом.',
    'services.webshop': 'Інтернет-магазин',
    'services.webshopDesc': 'Ваші послуги та продукти в центрі уваги.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Ваш сайт вище в результатах пошуку.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'Позитивна репутація та правильні дані за один раз.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Ваші оголошення в Google, Bing та Youtube.',
    'services.socialMedia': 'Реклама в соціальних мережах',
    'services.socialMediaDesc': 'Досягайте своєї цільової аудиторії на найпопулярніших каналах.',
    'services.omni': 'Комплексна реклама з Omni',
    'services.omniDesc': 'Більший охоплення в Google, Bing, Facebook та Instagram.',
    'services.goudengids': 'Реклама на goudengids.be',
    'services.goudengidsDesc': 'Ваш бізнес у найбільшому бізнес-каталозі Бельгії.',
    'services.solidBasisButton': 'Все про міцний фундамент',
    'services.adverterenButton': 'Все про цифрову рекламу',
    
    // Digital Scan Section
    'digitalScan.title': 'Використайте наше безкоштовне цифрове сканування',
    'digitalScan.description': 'Хочете перевірити якість вашого бізнесу в мережі? Наше цифрове сканування перевіряє, чи правильно вказані дані вашої компанії на понад 30 онлайн-платформах.',
    'digitalScan.button': 'Сканувати ваш сайт',
    'digitalScan.websiteStatus': 'Статус веб-сайту',
    'digitalScan.seoOptimization': 'SEO-оптимізація',
    'digitalScan.onlineVisibility': 'Онлайн-видимість',
    'digitalScan.businessData': 'Бізнес-дані',
    
    // Stats Section
    'stats.happyClients': 'Задоволені клієнти',
    'stats.websitesOnline': 'Сайти онлайн',
    'stats.liveCampaigns': 'Активні кампанії',
    
    // Common
    'common.learnMore': 'Дізнатися більше',
    'common.getStarted': 'Почати',
    'common.contactUs': 'Зв\'язатися з нами'
  },
  TR: {
    // Navigation
    'nav.services': 'Ne istersiniz?',
    'nav.offices': 'Ofislerimiz',
    'nav.blog': 'Blog',
    'nav.myMedia': 'My Media',
    'nav.contact': 'Sohbet için hazır mısınız?',
    
    // Hero Section
    'hero.title': 'GROPPI DIGITAL MARKETING BUREAU',
    'hero.subtitle1': 'KOBİ\'LERİ',
    'hero.subtitle2': 'ONLİNE BAŞARILI KILAR',
    'hero.cta1': 'Randevu al',
    'hero.cta2': 'Beni ara',
    'hero.trustIndicators.oneStop': 'Tek durak çözüm',
    'hero.trustIndicators.budget': 'Her bütçe için',
    'hero.trustIndicators.reports': 'Aylık raporlar',
    
    // Footer
    'footer.services': 'Hizmetlerimiz',
    'footer.websiteDevelopment': 'Web Sitesi Geliştirme',
    'footer.webshopCreation': 'E-ticaret Oluşturma',
    'footer.seoOptimization': 'SEO Optimizasyonu',
    'footer.digitalAdvertising': 'Dijital Reklamcılık',
    'footer.socialMediaMarketing': 'Sosyal Medya Pazarlama',
    'footer.contact': 'İletişim',
    'footer.locations': 'Anvers, Brüksel,\nDoğu ve Batı Flandra',
    'footer.newsletter': 'Bilgilendirilmeye devam edin',
    'footer.newsletterDescription': 'Dijital pazarlama hakkında ipuçları ve haberler alın.',
    'footer.emailPlaceholder': 'E-posta adresiniz',
    'footer.subscribe': 'Abone ol',
    'footer.allRightsReserved': 'Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Şartlar ve Koşullar',
    
    // Features Section
    'features.title1': 'İşletmeniz için her şey',
    'features.desc1': 'Tek çatı altında eksiksiz dijital çözümler',
    'features.title2': 'Kişisel ve yerel yaklaşım',
    'features.desc2': 'Kişisel temas ile özelleştirilmiş hizmet',
    'features.title3': 'Her bütçe için',
    'features.desc3': 'Finansal imkanlarınıza uygun çözümler',
    
    // Services Section
    'services.mainTitle': 'Her şeyle biz ilgileniriz',
    'services.mainSubtitle': 'siz işinize odaklanırken',
    'services.solidBasisTitle': 'Sağlam bir temelle başlayın',
    'services.adverterenTitle': 'Dijital reklamla büyüyün',
    'services.website': 'Web Sitesi',
    'services.websiteDesc': 'Özel web sitesiyle profesyonel çevrimiçi varlık.',
    'services.webshop': 'E-ticaret',
    'services.webshopDesc': 'Hizmetleriniz ve ürünleriniz spot ışıklarında.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Web siteniz arama sonuçlarında daha yüksek.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'Olumlu itibar ve doğru veriler tek seferde.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Google, Bing ve Youtube\'da reklamlarınız.',
    'services.socialMedia': 'Sosyal medya reklamcılığı',
    'services.socialMediaDesc': 'En popüler kanallarda hedef kitlenize ulaşın.',
    'services.omni': 'Omni ile hepsi bir arada reklamcılık',
    'services.omniDesc': 'Google, Bing, Facebook ve Instagram\'da daha fazla erişim.',
    'services.goudengids': 'goudengids.be\'de reklamcılık',
    'services.goudengidsDesc': 'İşletmeniz Belçika\'nın en büyük iş dizininde.',
    'services.solidBasisButton': 'Sağlam temeli hakkında her şey',
    'services.adverterenButton': 'Dijital reklamcılık hakkında her şey',
    
    // Digital Scan Section
    'digitalScan.title': 'Ücretsiz Dijital tarama hizmetimizi kullanın',
    'digitalScan.description': 'İşletmenizin internetteki kalitesini kontrol etmek ister misiniz? Dijital taramamız, işletme bilgilerinizin 30\'dan fazla çevrimiçi platformda doğru bir şekilde belirtilip belirtilmediğini kontrol eder.',
    'digitalScan.button': 'Sitenizi tarayın',
    'digitalScan.websiteStatus': 'Web Sitesi Durumu',
    'digitalScan.seoOptimization': 'SEO Optimizasyonu',
    'digitalScan.onlineVisibility': 'Çevrimiçi Görünürlük',
    'digitalScan.businessData': 'İşletme Verileri',
    
    // Stats Section
    'stats.happyClients': 'Mutlu müşteriler',
    'stats.websitesOnline': 'Çevrimiçi web siteleri',
    'stats.liveCampaigns': 'Canlı kampanyalar',
    
    // Common
    'common.learnMore': 'Daha fazla bilgi',
    'common.getStarted': 'Başlayın',
    'common.contactUs': 'Bize ulaşın'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('NL');

  const t = (key: string): string => {
    const translation = translations[language as keyof typeof translations];
    return (translation && translation[key as keyof typeof translation]) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};