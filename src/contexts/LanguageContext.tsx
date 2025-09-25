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