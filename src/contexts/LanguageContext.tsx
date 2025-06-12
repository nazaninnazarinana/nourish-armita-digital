
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.booking': 'Booking',
    'nav.diet_plan': 'Diet Plan',
    'nav.consultation': 'Online Consultation',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.admin': 'Admin',

    // Hero Section
    'hero.title': 'Transform Your Performance with Expert Nutrition',
    'hero.subtitle': 'Professional sports nutrition and therapeutic dietary consulting for athletes, teams, and individuals seeking optimal health and performance.',
    'hero.cta_primary': 'Book Consultation',
    'hero.cta_secondary': 'Learn More',

    // Services
    'services.title': 'Our Expert Services',
    'services.subtitle': 'Comprehensive nutrition and sports consulting services designed to help you achieve peak performance and optimal health.',

    // Booking
    'booking.title': 'Book Your Consultation',
    'booking.subtitle': 'Schedule a personalized nutrition consultation with our expert team.',
    'booking.name': 'Full Name',
    'booking.email': 'Email Address',
    'booking.phone': 'Phone Number',
    'booking.date': 'Preferred Date',
    'booking.time': 'Preferred Time',
    'booking.service': 'Service Type',
    'booking.message': 'Additional Information',
    'booking.submit': 'Book Appointment',

    // Diet Plan
    'diet.title': 'Personalized Diet Plan',
    'diet.subtitle': 'Get a customized nutrition plan tailored to your goals and lifestyle.',
    'diet.age': 'Age',
    'diet.weight': 'Weight (kg)',
    'diet.height': 'Height (cm)',
    'diet.goal': 'Primary Goal',
    'diet.activity': 'Activity Level',
    'diet.allergies': 'Food Allergies & Restrictions',
    'diet.medical': 'Medical Conditions',
    'diet.submit': 'Request Diet Plan',

    // Consultation
    'consultation.title': 'Online Consultation',
    'consultation.subtitle': 'Connect with our nutrition experts through your preferred platform.',
    'consultation.whatsapp': 'WhatsApp Consultation',
    'consultation.telegram': 'Telegram Consultation',
    'consultation.schedule': 'Video Consultation',

    // Contact
    'contact.phone': '+98 912 344 3470',
    'contact.email': 'info@clinicarmita.com',

    // Footer
    'footer.description': 'Leading provider of professional nutrition and sports consulting services, helping athletes and individuals achieve their health and performance goals.',
    'footer.quick_links': 'Quick Links',
    'footer.services_list': 'Our Services',
    'footer.copyright': '© 2024 Clinic Armita. All rights reserved.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.products': 'Produkte',
    'nav.booking': 'Terminbuchung',
    'nav.diet_plan': 'Ernährungsplan',
    'nav.consultation': 'Online Beratung',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.login': 'Anmelden',
    'nav.admin': 'Admin',

    // Hero Section
    'hero.title': 'Transformieren Sie Ihre Leistung mit Expertenernährung',
    'hero.subtitle': 'Professionelle Sporternährung und therapeutische Ernährungsberatung für Athleten, Teams und Personen, die optimale Gesundheit und Leistung anstreben.',
    'hero.cta_primary': 'Beratung buchen',
    'hero.cta_secondary': 'Mehr erfahren',

    // Services
    'services.title': 'Unsere Expertendienste',
    'services.subtitle': 'Umfassende Ernährungs- und Sportberatungsdienste, die Ihnen helfen, Spitzenleistungen und optimale Gesundheit zu erreichen.',

    // Booking
    'booking.title': 'Buchen Sie Ihre Beratung',
    'booking.subtitle': 'Vereinbaren Sie eine personalisierte Ernährungsberatung mit unserem Expertenteam.',
    'booking.name': 'Vollständiger Name',
    'booking.email': 'E-Mail-Adresse',
    'booking.phone': 'Telefonnummer',
    'booking.date': 'Bevorzugtes Datum',
    'booking.time': 'Bevorzugte Zeit',
    'booking.service': 'Service-Typ',
    'booking.message': 'Zusätzliche Informationen',
    'booking.submit': 'Termin buchen',

    // Diet Plan
    'diet.title': 'Personalisierter Ernährungsplan',
    'diet.subtitle': 'Erhalten Sie einen maßgeschneiderten Ernährungsplan, der auf Ihre Ziele und Ihren Lebensstil zugeschnitten ist.',
    'diet.age': 'Alter',
    'diet.weight': 'Gewicht (kg)',
    'diet.height': 'Größe (cm)',
    'diet.goal': 'Hauptziel',
    'diet.activity': 'Aktivitätslevel',
    'diet.allergies': 'Nahrungsmittelallergien & Einschränkungen',
    'diet.medical': 'Medizinische Bedingungen',
    'diet.submit': 'Ernährungsplan anfordern',

    // Consultation
    'consultation.title': 'Online-Beratung',
    'consultation.subtitle': 'Verbinden Sie sich mit unseren Ernährungsexperten über Ihre bevorzugte Plattform.',
    'consultation.whatsapp': 'WhatsApp Beratung',
    'consultation.telegram': 'Telegram Beratung',
    'consultation.schedule': 'Video-Beratung',

    // Contact
    'contact.phone': '+98 912 344 3470',
    'contact.email': 'info@clinicarmita.com',

    // Footer
    'footer.description': 'Führender Anbieter von professionellen Ernährungs- und Sportberatungsdiensten, der Athleten und Einzelpersonen dabei hilft, ihre Gesundheits- und Leistungsziele zu erreichen.',
    'footer.quick_links': 'Schnelle Links',
    'footer.services_list': 'Unsere Dienstleistungen',
    'footer.copyright': '© 2024 Clinic Armita. Alle Rechte vorbehalten.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
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
