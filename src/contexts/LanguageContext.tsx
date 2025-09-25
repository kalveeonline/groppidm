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