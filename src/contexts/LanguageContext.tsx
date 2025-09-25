import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
    
    // Service Categories
    'category.beingOnline': 'BEING ONLINE',
    'category.toBeFound': 'TO BE FOUND', 
    'category.toStandOut': 'TO STAND OUT',
    'category.satisfiedCustomers': 'SATISFIED CUSTOMERS',
    
    // Footer
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
    'footer.copyright': '© 2024 GROPPI Digital Marketing Bureau. Alle rechten voorbehouden.',
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
    
    // Stats Section
    'stats.happyClients': 'Gelukkige klanten',
    'stats.websitesOnline': 'Websites online',
    'stats.liveCampaigns': 'Live campagnes',
    
    // Online Presence & Branding Page
    'branding.title': 'Alles over Online Aanwezigheid & Branding',
    'branding.subtitle': 'Bouw een sterke digitale identiteit die uw doelgroep aantrekt en converteert',
    'branding.intro': 'In het digitale tijdperk is uw online aanwezigheid uw digitale visitekaartje. Het bepaalt hoe klanten u waarnemen, vertrouwen en uiteindelijk kiezen voor uw diensten.',
    
    'branding.section1.title': 'Wat is Online Aanwezigheid?',
    'branding.section1.content': 'Online aanwezigheid omvat alle digitale touchpoints waar uw merk zichtbaar is. Van uw website tot sociale media, van Google My Business tot online reviews - elk element draagt bij aan uw digitale reputatie.',
    
    'branding.section2.title': 'Waarom is Sterke Branding Cruciaal?',
    'branding.section2.point1': 'Verhoogt merkherkenning met 80%',
    'branding.section2.point2': 'Genereert 23% meer omzet',
    'branding.section2.point3': 'Bouwt klantvertrouwen en loyaliteit',
    'branding.section2.point4': 'Differentieert van concurrenten',
    
    'branding.section3.title': 'Essentiële Elementen van Online Branding',
    'branding.section3.element1.title': 'Professionele Website',
    'branding.section3.element1.desc': 'Uw digitale hoofdkantoor met consistente branding, gebruiksvriendelijke navigatie en mobiele optimalisatie.',
    'branding.section3.element2.title': 'Visuele Identiteit',
    'branding.section3.element2.desc': 'Logo, kleurenpalet, typografie en beeldstijl die uw merkpersoonlijkheid weerspiegelen.',
    'branding.section3.element3.title': 'Content Strategie',
    'branding.section3.element3.desc': 'Waardevolle, relevante content die uw expertise toont en doelgroep engageert.',
    'branding.section3.element4.title': 'Sociale Media Aanwezigheid',
    'branding.section3.element4.desc': 'Consistente communicatie en branding over alle sociale platforms.',
    
    'branding.section4.title': 'Ons Branding Proces',
    'branding.section4.step1.title': 'Merkanalyse & Strategie',
    'branding.section4.step1.desc': 'We analyseren uw huidige positie en ontwikkelen een merkstrategie die aansluit bij uw doelen.',
    'branding.section4.step2.title': 'Visuele Identiteit Ontwikkeling',
    'branding.section4.step2.desc': 'Creatie van logo, kleurenpalet en brandrichtlijnen die uw merk tot leven brengen.',
    'branding.section4.step3.title': 'Website & Digitale Platforms',
    'branding.section4.step3.desc': 'Implementatie van uw branding op website, sociale media en andere digitale kanalen.',
    'branding.section4.step4.title': 'Monitoring & Optimalisatie',
    'branding.section4.step4.desc': 'Continue monitoring van uw online reputatie en optimalisatie van uw digitale aanwezigheid.',
    
    'branding.cta.title': 'Klaar om Uw Online Aanwezigheid te Versterken?',
    'branding.cta.description': 'Laat ons u helpen een sterke digitale identiteit op te bouwen die resultaten oplevert.',
    'branding.cta.button': 'Start Uw Branding Project',
    
    // Solid Foundation Page
    'solidFoundation.title': 'Bouw een Solide Digitale Basis voor Uw Bedrijf',
    'solidFoundation.subtitle': 'Ontdek hoe een sterke digitale fundering uw bedrijf naar nieuwe hoogten kan tillen',
    'solidFoundation.intro': 'In de moderne zakenwereld is een solide digitale basis niet langer een luxe, maar een absolute noodzaak. Het vormt het fundament waarop al uw digitale marketinginspanningen rusten.',

    'solidFoundation.section1.title': 'Waarom is een Solide Digitale Basis Cruciaal?',
    'solidFoundation.section1.content': 'Een sterke digitale basis zorgt ervoor dat uw bedrijf professioneel overkomt, gemakkelijk vindbaar is en klanten vertrouwen wekt. Het is de eerste indruk die potentiële klanten van uw bedrijf krijgen in de digitale wereld.',

    'solidFoundation.section2.title': 'De Pijlers van een Sterke Digitale Basis',
    'solidFoundation.section2.pillar1.title': 'Professionele Website',
    'solidFoundation.section2.pillar1.desc': 'Uw website is uw digitale visitekaartje. Het moet snel, mobieloptimaal en gebruiksvriendelijk zijn.',
    'solidFoundation.section2.pillar2.title': 'SEO Optimalisatie',
    'solidFoundation.section2.pillar2.desc': 'Zorg ervoor dat uw website vindbaar is in zoekmachines wanneer klanten naar uw diensten zoeken.',
    'solidFoundation.section2.pillar3.title': 'Correcte Bedrijfsgegevens',
    'solidFoundation.section2.pillar3.desc': 'Consistente NAP-gegevens (Naam, Adres, Telefoonnummer) over alle online platforms.',
    'solidFoundation.section2.pillar4.title': 'Online Reputatiebeheer',
    'solidFoundation.section2.pillar4.desc': 'Monitor en beheer wat er online over uw bedrijf wordt gezegd.',

    'solidFoundation.section3.title': 'Onze Aanpak voor Uw Solide Basis',
    'solidFoundation.section3.step1.title': 'Website Audit & Optimalisatie',
    'solidFoundation.section3.step1.desc': 'We analyseren uw huidige website en identificeren verbeterpunten voor betere prestaties.',
    'solidFoundation.section3.step2.title': 'SEO Fundamenten',
    'solidFoundation.section3.step2.desc': 'Implementatie van basis SEO-technieken voor betere vindbaarheid.',
    'solidFoundation.section3.step3.title': 'Bedrijfsgegevens Synchronisatie',
    'solidFoundation.section3.step3.desc': 'Zorgen voor consistente bedrijfsinformatie over alle online kanalen.',
    'solidFoundation.section3.step4.title': 'Monitoring & Rapportage',
    'solidFoundation.section3.step4.desc': 'Continue monitoring van uw online prestaties met maandelijkse rapporten.',

    'solidFoundation.benefits.title': 'Voordelen van een Solide Digitale Basis',
    'solidFoundation.benefits.benefit1': '75% meer online zichtbaarheid',
    'solidFoundation.benefits.benefit2': '50% toename in websiteverkeer',
    'solidFoundation.benefits.benefit3': '40% meer leads vanuit online kanalen',
    'solidFoundation.benefits.benefit4': 'Betere klantervaring en tevredenheid',

    'solidFoundation.cta.title': 'Klaar om Uw Digitale Basis te Versterken?',
    'solidFoundation.cta.description': 'Laat ons u helpen een solide fundament te leggen voor uw digitale succes.',
    'solidFoundation.cta.button': 'Start Uw Digitale Transformatie',

    // Common
    'common.learnMore': 'Meer informatie',
    'common.getStarted': 'Aan de slag',
    'common.contactUs': 'Contact opnemen'
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
    
    // Service Categories
    'category.beingOnline': 'ÊTRE EN LIGNE',
    'category.toBeFound': 'ÊTRE TROUVÉ',
    'category.toStandOut': 'SE DÉMARQUER',
    'category.satisfiedCustomers': 'CLIENTS SATISFAITS',
    
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
    'footer.copyright': '© 2024 GROPPI Digital Marketing Bureau. Tous droits réservés.',
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
    
    // Online Presence & Branding Page
    'branding.title': 'Tout sur la Présence en Ligne et le Branding',
    'branding.subtitle': 'Construisez une identité numérique forte qui attire et convertit votre public cible',
    'branding.intro': 'À l\'ère numérique, votre présence en ligne est votre carte de visite numérique. Elle détermine comment les clients vous perçoivent, vous font confiance et choisissent finalement vos services.',
    
    'branding.section1.title': 'Qu\'est-ce que la Présence en Ligne?',
    'branding.section1.content': 'La présence en ligne englobe tous les points de contact numériques où votre marque est visible. De votre site web aux médias sociaux, de Google My Business aux avis en ligne - chaque élément contribue à votre réputation numérique.',
    
    'branding.section2.title': 'Pourquoi un Branding Fort est-il Crucial?',
    'branding.section2.point1': 'Augmente la reconnaissance de marque de 80%',
    'branding.section2.point2': 'Génère 23% de revenus en plus',
    'branding.section2.point3': 'Construit la confiance et la fidélité des clients',
    'branding.section2.point4': 'Se différencie des concurrents',
    
    'branding.section3.title': 'Éléments Essentiels du Branding en Ligne',
    'branding.section3.element1.title': 'Site Web Professionnel',
    'branding.section3.element1.desc': 'Votre siège social numérique avec un branding cohérent, une navigation conviviale et une optimisation mobile.',
    'branding.section3.element2.title': 'Identité Visuelle',
    'branding.section3.element2.desc': 'Logo, palette de couleurs, typographie et style visuel qui reflètent la personnalité de votre marque.',
    'branding.section3.element3.title': 'Stratégie de Contenu',
    'branding.section3.element3.desc': 'Contenu précieux et pertinent qui démontre votre expertise et engage votre public cible.',
    'branding.section3.element4.title': 'Présence sur les Médias Sociaux',
    'branding.section3.element4.desc': 'Communication et branding cohérents sur toutes les plateformes sociales.',
    
    'branding.section4.title': 'Notre Processus de Branding',
    'branding.section4.step1.title': 'Analyse de Marque & Stratégie',
    'branding.section4.step1.desc': 'Nous analysons votre position actuelle et développons une stratégie de marque alignée sur vos objectifs.',
    'branding.section4.step2.title': 'Développement d\'Identité Visuelle',
    'branding.section4.step2.desc': 'Création de logo, palette de couleurs et directives de marque qui donnent vie à votre marque.',
    'branding.section4.step3.title': 'Site Web & Plateformes Numériques',
    'branding.section4.step3.desc': 'Implémentation de votre branding sur le site web, médias sociaux et autres canaux numériques.',
    'branding.section4.step4.title': 'Surveillance & Optimisation',
    'branding.section4.step4.desc': 'Surveillance continue de votre réputation en ligne et optimisation de votre présence numérique.',
    
    'branding.cta.title': 'Prêt à Renforcer Votre Présence en Ligne?',
    'branding.cta.description': 'Laissez-nous vous aider à construire une identité numérique forte qui génère des résultats.',
    'branding.cta.button': 'Commencez Votre Projet de Branding',
    
    // Solid Foundation Page
    'solidFoundation.title': 'Construisez une Base Numérique Solide pour Votre Entreprise',
    'solidFoundation.subtitle': 'Découvrez comment une fondation numérique forte peut propulser votre entreprise vers de nouveaux sommets',
    'solidFoundation.intro': 'Dans le monde des affaires moderne, une base numérique solide n\'est plus un luxe, mais une nécessité absolue. Elle forme le fondement sur lequel reposent tous vos efforts de marketing numérique.',

    'solidFoundation.section1.title': 'Pourquoi une Base Numérique Solide est-elle Cruciale?',
    'solidFoundation.section1.content': 'Une base numérique forte garantit que votre entreprise paraît professionnelle, est facilement trouvable et inspire confiance aux clients. C\'est la première impression que les clients potentiels ont de votre entreprise dans le monde numérique.',

    'solidFoundation.section2.title': 'Les Piliers d\'une Base Numérique Forte',
    'solidFoundation.section2.pillar1.title': 'Site Web Professionnel',
    'solidFoundation.section2.pillar1.desc': 'Votre site web est votre carte de visite numérique. Il doit être rapide, optimisé pour mobile et convivial.',
    'solidFoundation.section2.pillar2.title': 'Optimisation SEO',
    'solidFoundation.section2.pillar2.desc': 'Assurez-vous que votre site web est trouvable dans les moteurs de recherche quand les clients recherchent vos services.',
    'solidFoundation.section2.pillar3.title': 'Données d\'Entreprise Correctes',
    'solidFoundation.section2.pillar3.desc': 'Données NAP cohérentes (Nom, Adresse, Téléphone) sur toutes les plateformes en ligne.',
    'solidFoundation.section2.pillar4.title': 'Gestion de la Réputation en Ligne',
    'solidFoundation.section2.pillar4.desc': 'Surveillez et gérez ce qui se dit en ligne sur votre entreprise.',

    'solidFoundation.section3.title': 'Notre Approche pour Votre Base Solide',
    'solidFoundation.section3.step1.title': 'Audit et Optimisation du Site Web',
    'solidFoundation.section3.step1.desc': 'Nous analysons votre site web actuel et identifions les points d\'amélioration pour de meilleures performances.',
    'solidFoundation.section3.step2.title': 'Fondements SEO',
    'solidFoundation.section3.step2.desc': 'Implémentation des techniques SEO de base pour une meilleure visibilité.',
    'solidFoundation.section3.step3.title': 'Synchronisation des Données d\'Entreprise',
    'solidFoundation.section3.step3.desc': 'Assurer la cohérence des informations d\'entreprise sur tous les canaux en ligne.',
    'solidFoundation.section3.step4.title': 'Surveillance et Rapports',
    'solidFoundation.section3.step4.desc': 'Surveillance continue de vos performances en ligne avec des rapports mensuels.',

    'solidFoundation.benefits.title': 'Avantages d\'une Base Numérique Solide',
    'solidFoundation.benefits.benefit1': '75% plus de visibilité en ligne',
    'solidFoundation.benefits.benefit2': '50% d\'augmentation du trafic web',
    'solidFoundation.benefits.benefit3': '40% plus de prospects des canaux en ligne',
    'solidFoundation.benefits.benefit4': 'Meilleure expérience et satisfaction client',

    'solidFoundation.cta.title': 'Prêt à Renforcer Votre Base Numérique?',
    'solidFoundation.cta.description': 'Laissez-nous vous aider à construire une fondation solide pour votre succès numérique.',
    'solidFoundation.cta.button': 'Commencez Votre Transformation Numérique',

    // Common
    'common.learnMore': 'En savoir plus',
    'common.getStarted': 'Commencer',
    'common.contactUs': 'Nous contacter'
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
    
    // Service Categories
    'category.beingOnline': 'BEING ONLINE',
    'category.toBeFound': 'TO BE FOUND',
    'category.toStandOut': 'TO STAND OUT',
    'category.satisfiedCustomers': 'SATISFIED CUSTOMERS',
    
    // Footer
    'footer.services': 'Our Services',
    'footer.websiteDevelopment': 'Website Development',
    'footer.webshopCreation': 'Webshop Creation',
    'footer.seoOptimization': 'SEO Optimization',
    'footer.digitalAdvertising': 'Digital Advertising',
    'footer.socialMediaMarketing': 'Social Media Marketing',
    'footer.contact': 'Contact',
    'footer.locations': 'Antwerp, Brussels,\nEast & West Flanders',
    'footer.newsletter': 'Stay updated',
    'footer.newsletterDescription': 'Receive tips and news about digital marketing.',
    'footer.emailPlaceholder': 'Your email address',
    'footer.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 GROPPI Digital Marketing Bureau. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    
    // Features Section
    'features.title1': 'Everything for your business',
    'features.desc1': 'Complete digital solutions under one roof',
    'features.title2': 'Personal & local approach',
    'features.desc2': 'Tailor-made service with personal contact',
    'features.title3': 'For every budget',
    'features.desc3': 'Solutions that fit your financial possibilities',
    
    // Services Section
    'services.mainTitle': 'We take care of everything',
    'services.mainSubtitle': 'while you focus on your business',
    'services.solidBasisTitle': 'Start with a solid foundation',
    'services.adverterenTitle': 'Grow with Digital advertising',
    'services.website': 'Website',
    'services.websiteDesc': 'Professional online, with a custom website.',
    'services.webshop': 'Webshop',
    'services.webshopDesc': 'Your services and products in the spotlight.',
    'services.seo': 'SEO',
    'services.seoDesc': 'Your website higher in search results.',
    'services.netsync': 'Netsync',
    'services.netsyncDesc': 'A positive reputation and correct data in one go.',
    'services.sea': 'SEA',
    'services.seaDesc': 'Your ads on Google, Bing and Youtube.',
    'services.socialMedia': 'Social Media Advertising',
    'services.socialMediaDesc': 'Reach your target audience on the most popular channels.',
    'services.omni': 'All-in-one advertising with Omni',
    'services.omniDesc': 'More reach on Google, Bing, Facebook and Instagram.',
    'services.goudengids': 'Advertising on goudengids.be',
    'services.goudengidsDesc': 'Your business on Belgium\'s largest business directory.',
    'services.solidBasisButton': 'Everything about your solid foundation',
    'services.adverterenButton': 'Everything about digital advertising',
    
    // Digital Scan Section
    'digitalScan.title': 'Use our free Digital scan',
    'digitalScan.description': 'Want to check the quality of your business on the net? Our Digital scan checks if your business data is correctly mentioned on more than 30 online platforms.',
    'digitalScan.button': 'Scan your site',
    'digitalScan.websiteStatus': 'Website Status',
    'digitalScan.seoOptimization': 'SEO Optimization',
    'digitalScan.onlineVisibility': 'Online Visibility',
    'digitalScan.businessData': 'Business Data',
    
    // Stats Section
    'stats.happyClients': 'Happy clients',
    'stats.websitesOnline': 'Websites online',
    'stats.liveCampaigns': 'Live campaigns',
    
    // Online Presence & Branding Page
    'branding.title': 'Everything About Online Presence & Branding',
    'branding.subtitle': 'Build a strong digital identity that attracts and converts your target audience',
    'branding.intro': 'In the digital age, your online presence is your digital business card. It determines how customers perceive you, trust you, and ultimately choose your services.',
    
    'branding.section1.title': 'What is Online Presence?',
    'branding.section1.content': 'Online presence encompasses all digital touchpoints where your brand is visible. From your website to social media, from Google My Business to online reviews - every element contributes to your digital reputation.',
    
    'branding.section2.title': 'Why is Strong Branding Crucial?',
    'branding.section2.point1': 'Increases brand recognition by 80%',
    'branding.section2.point2': 'Generates 23% more revenue',
    'branding.section2.point3': 'Builds customer trust and loyalty',
    'branding.section2.point4': 'Differentiates from competitors',
    
    'branding.section3.title': 'Essential Elements of Online Branding',
    'branding.section3.element1.title': 'Professional Website',
    'branding.section3.element1.desc': 'Your digital headquarters with consistent branding, user-friendly navigation, and mobile optimization.',
    'branding.section3.element2.title': 'Visual Identity',
    'branding.section3.element2.desc': 'Logo, color palette, typography, and visual style that reflect your brand personality.',
    'branding.section3.element3.title': 'Content Strategy',
    'branding.section3.element3.desc': 'Valuable, relevant content that showcases your expertise and engages your target audience.',
    'branding.section3.element4.title': 'Social Media Presence',
    'branding.section3.element4.desc': 'Consistent communication and branding across all social platforms.',
    
    'branding.section4.title': 'Our Branding Process',
    'branding.section4.step1.title': 'Brand Analysis & Strategy',
    'branding.section4.step1.desc': 'We analyze your current position and develop a brand strategy aligned with your goals.',
    'branding.section4.step2.title': 'Visual Identity Development',
    'branding.section4.step2.desc': 'Creation of logo, color palette, and brand guidelines that bring your brand to life.',
    'branding.section4.step3.title': 'Website & Digital Platforms',
    'branding.section4.step3.desc': 'Implementation of your branding on website, social media, and other digital channels.',
    'branding.section4.step4.title': 'Monitoring & Optimization',
    'branding.section4.step4.desc': 'Continuous monitoring of your online reputation and optimization of your digital presence.',
    
    'branding.cta.title': 'Ready to Strengthen Your Online Presence?',
    'branding.cta.description': 'Let us help you build a strong digital identity that delivers results.',
    'branding.cta.button': 'Start Your Branding Project',
    
    // Solid Foundation Page
    'solidFoundation.title': 'Build a Solid Digital Foundation for Your Business',
    'solidFoundation.subtitle': 'Discover how a strong digital foundation can propel your business to new heights',
    'solidFoundation.intro': 'In the modern business world, a solid digital foundation is no longer a luxury, but an absolute necessity. It forms the foundation on which all your digital marketing efforts rest.',

    'solidFoundation.section1.title': 'Why is a Solid Digital Foundation Crucial?',
    'solidFoundation.section1.content': 'A strong digital foundation ensures that your business appears professional, is easily findable, and inspires customer confidence. It\'s the first impression potential customers get of your business in the digital world.',

    'solidFoundation.section2.title': 'The Pillars of a Strong Digital Foundation',
    'solidFoundation.section2.pillar1.title': 'Professional Website',
    'solidFoundation.section2.pillar1.desc': 'Your website is your digital business card. It must be fast, mobile-optimized, and user-friendly.',
    'solidFoundation.section2.pillar2.title': 'SEO Optimization',
    'solidFoundation.section2.pillar2.desc': 'Ensure your website is findable in search engines when customers search for your services.',
    'solidFoundation.section2.pillar3.title': 'Correct Business Data',
    'solidFoundation.section2.pillar3.desc': 'Consistent NAP data (Name, Address, Phone) across all online platforms.',
    'solidFoundation.section2.pillar4.title': 'Online Reputation Management',
    'solidFoundation.section2.pillar4.desc': 'Monitor and manage what is said about your business online.',

    'solidFoundation.section3.title': 'Our Approach for Your Solid Foundation',
    'solidFoundation.section3.step1.title': 'Website Audit & Optimization',
    'solidFoundation.section3.step1.desc': 'We analyze your current website and identify improvement points for better performance.',
    'solidFoundation.section3.step2.title': 'SEO Fundamentals',
    'solidFoundation.section3.step2.desc': 'Implementation of basic SEO techniques for better findability.',
    'solidFoundation.section3.step3.title': 'Business Data Synchronization',
    'solidFoundation.section3.step3.desc': 'Ensuring consistent business information across all online channels.',
    'solidFoundation.section3.step4.title': 'Monitoring & Reporting',
    'solidFoundation.section3.step4.desc': 'Continuous monitoring of your online performance with monthly reports.',

    'solidFoundation.benefits.title': 'Benefits of a Solid Digital Foundation',
    'solidFoundation.benefits.benefit1': '75% more online visibility',
    'solidFoundation.benefits.benefit2': '50% increase in website traffic',
    'solidFoundation.benefits.benefit3': '40% more leads from online channels',
    'solidFoundation.benefits.benefit4': 'Better customer experience and satisfaction',

    'solidFoundation.cta.title': 'Ready to Strengthen Your Digital Foundation?',
    'solidFoundation.cta.description': 'Let us help you build a solid foundation for your digital success.',
    'solidFoundation.cta.button': 'Start Your Digital Transformation',

    // Common
    'common.learnMore': 'Learn more',
    'common.getStarted': 'Get started',
    'common.contactUs': 'Contact us'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('NL');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.NL] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};