
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'de';
  setLanguage: (lang: 'en' | 'de') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.booking': 'Booking',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title1': 'Transform Your',
    'hero.title2': 'Performance',
    'hero.title3': '& Health',
    'hero.subtitle': 'Expert nutrition and sports consulting for athletes and individuals. Collaborating with national teams to optimize performance through science-based nutrition.',
    'hero.cta1': 'Book Free Consultation',
    'hero.cta2': 'Explore Services',
    'hero.stats.athletes': 'Athletes Trained',
    'hero.stats.teams': 'National Teams',
    'hero.stats.success': 'Success Rate',
    
    // Services
    'services.title': 'Our Expert Services',
    'services.subtitle': 'Comprehensive nutrition and sports consulting services designed to help you achieve peak performance and optimal health through science-based approaches.',
    'services.sports.title': 'Sports Nutrition Consulting',
    'services.sports.desc': 'Personalized nutrition plans for professional athletes and national sports teams',
    'services.weight.title': 'Weight Management Programs',
    'services.weight.desc': 'Comprehensive weight loss and gain programs tailored to individual needs',
    'services.therapeutic.title': 'Therapeutic Dietary Plans',
    'services.therapeutic.desc': 'Medical nutrition therapy for various health conditions and diseases',
    'services.cta.title': 'Ready to Transform Your Performance?',
    'services.cta.subtitle': 'Join hundreds of athletes and individuals who have achieved their goals with our expert guidance.',
    'services.cta.book': 'Book Consultation',
    'services.cta.contact': 'Contact Us',
    
    // Products
    'products.title': 'Premium Supplements',
    'products.subtitle': 'Carefully selected, scientifically-backed supplements to support your nutrition goals and enhance your performance journey.',
    'products.view_all': 'View All Products',
    'products.add_cart': 'Add to Cart',
    
    // Testimonials
    'testimonials.title': 'What Athletes Say',
    'testimonials.subtitle': 'Hear from professional athletes and national team members who have transformed their performance with our expert nutrition guidance.',
    
    // Contact
    'contact.phone': '+49 176 87801557',
    'contact.email': 'info@clinicarmita.com',
    'contact.whatsapp': 'WhatsApp',
    'contact.instagram': 'Instagram',
    
    // Footer
    'footer.description': 'Expert nutrition and sports consulting services for athletes and individuals. We collaborate with national sports teams and provide personalized dietary solutions.',
    'footer.quick_links': 'Quick Links',
    'footer.services_list': 'Services',
    'footer.copyright': '© 2024 Clinic Armita. All rights reserved.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Leistungen',
    'nav.products': 'Produkte',
    'nav.booking': 'Termin buchen',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title1': 'Transformieren Sie Ihre',
    'hero.title2': 'Leistung',
    'hero.title3': '& Gesundheit',
    'hero.subtitle': 'Expertenerährung und Sportberatung für Athleten und Privatpersonen. Zusammenarbeit mit Nationalmannschaften zur Leistungsoptimierung durch wissenschaftlich fundierte Ernährung.',
    'hero.cta1': 'Kostenlose Beratung buchen',
    'hero.cta2': 'Leistungen erkunden',
    'hero.stats.athletes': 'Trainierte Athleten',
    'hero.stats.teams': 'Nationalmannschaften',
    'hero.stats.success': 'Erfolgsquote',
    
    // Services
    'services.title': 'Unsere Expertenleistungen',
    'services.subtitle': 'Umfassende Ernährungs- und Sportberatungsdienstleistungen, die darauf ausgelegt sind, Ihnen zu Höchstleistungen und optimaler Gesundheit durch wissenschaftlich fundierte Ansätze zu verhelfen.',
    'services.sports.title': 'Sporternährungsberatung',
    'services.sports.desc': 'Personalisierte Ernährungspläne für professionelle Athleten und Nationalmannschaften',
    'services.weight.title': 'Gewichtsmanagement-Programme',
    'services.weight.desc': 'Umfassende Gewichtsab- und -zunahme-Programme, die auf individuelle Bedürfnisse zugeschnitten sind',
    'services.therapeutic.title': 'Therapeutische Diätpläne',
    'services.therapeutic.desc': 'Medizinische Ernährungstherapie für verschiedene Gesundheitszustände und Krankheiten',
    'services.cta.title': 'Bereit, Ihre Leistung zu transformieren?',
    'services.cta.subtitle': 'Schließen Sie sich Hunderten von Athleten und Privatpersonen an, die ihre Ziele mit unserer Expertenberatung erreicht haben.',
    'services.cta.book': 'Beratung buchen',
    'services.cta.contact': 'Kontaktieren Sie uns',
    
    // Products
    'products.title': 'Premium-Nahrungsergänzungsmittel',
    'products.subtitle': 'Sorgfältig ausgewählte, wissenschaftlich fundierte Nahrungsergänzungsmittel zur Unterstützung Ihrer Ernährungsziele und zur Verbesserung Ihrer Leistungsreise.',
    'products.view_all': 'Alle Produkte anzeigen',
    'products.add_cart': 'In den Warenkorb',
    
    // Testimonials
    'testimonials.title': 'Was Athleten sagen',
    'testimonials.subtitle': 'Hören Sie von professionellen Athleten und Nationalmannschaftsmitgliedern, die ihre Leistung mit unserer Expertenernährungsberatung transformiert haben.',
    
    // Contact
    'contact.phone': '+49 176 87801557',
    'contact.email': 'info@clinicarmita.com',
    'contact.whatsapp': 'WhatsApp',
    'contact.instagram': 'Instagram',
    
    // Footer
    'footer.description': 'Expertenernährung und Sportberatungsdienstleistungen für Athleten und Privatpersonen. Wir arbeiten mit Nationalmannschaften zusammen und bieten personalisierte Ernährungslösungen.',
    'footer.quick_links': 'Schnelllinks',
    'footer.services_list': 'Leistungen',
    'footer.copyright': '© 2024 Clinic Armita. Alle Rechte vorbehalten.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  useEffect(() => {
    // Auto-detect language based on browser settings
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('de')) {
      setLanguage('de');
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
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
