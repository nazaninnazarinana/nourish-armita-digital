
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
    'nav.login': 'Login',
    'nav.admin': 'Admin',
    'nav.diet_plan': 'Diet Plan',
    'nav.consultation': 'Consultation',
    
    // Login
    'login.title': 'Welcome Back',
    'login.subtitle': 'Sign in to your account',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.signin': 'Sign In',
    'login.forgot': 'Forgot Password?',
    'login.signup': 'Create Account',
    
    // Admin
    'admin.title': 'Admin Dashboard',
    'admin.appointments': 'Appointments',
    'admin.users': 'Users',
    'admin.products': 'Products',
    'admin.blog': 'Blog Posts',
    'admin.settings': 'Settings',
    
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
    'services.team.title': 'National Team Collaboration',
    'services.team.desc': 'Working with national sports teams to optimize team performance',
    'services.cta.title': 'Ready to Transform Your Performance?',
    'services.cta.subtitle': 'Join hundreds of athletes and individuals who have achieved their goals with our expert guidance.',
    'services.cta.book': 'Book Consultation',
    'services.cta.contact': 'Contact Us',
    
    // Products
    'products.title': 'Premium Supplements',
    'products.subtitle': 'Carefully selected, scientifically-backed supplements to support your nutrition goals and enhance your performance journey.',
    'products.view_all': 'View All Products',
    'products.add_cart': 'Add to Cart',
    
    // Booking
    'booking.title': 'Book Your Appointment',
    'booking.subtitle': 'Schedule your consultation with our nutrition and sports experts',
    'booking.name': 'Full Name',
    'booking.email': 'Email Address',
    'booking.phone': 'Phone Number',
    'booking.date': 'Select Date',
    'booking.time': 'Select Time',
    'booking.service': 'Select Service',
    'booking.message': 'Additional Message',
    'booking.submit': 'Book Appointment',
    
    // Diet Plan
    'diet.title': 'Personalized Diet Plan',
    'diet.subtitle': 'Get a customized nutrition plan tailored to your goals and lifestyle',
    'diet.goal': 'Your Goal',
    'diet.age': 'Age',
    'diet.weight': 'Current Weight (kg)',
    'diet.height': 'Height (cm)',
    'diet.activity': 'Activity Level',
    'diet.allergies': 'Food Allergies/Restrictions',
    'diet.medical': 'Medical Conditions',
    'diet.submit': 'Create My Diet Plan',
    
    // Consultation
    'consultation.title': 'Online Consultation',
    'consultation.subtitle': 'Connect with our experts via WhatsApp or Telegram',
    'consultation.whatsapp': 'WhatsApp Consultation',
    'consultation.telegram': 'Telegram Consultation',
    'consultation.schedule': 'Schedule Video Call',
    
    // Testimonials
    'testimonials.title': 'What Athletes Say',
    'testimonials.subtitle': 'Hear from professional athletes and national team members who have transformed their performance with our expert nutrition guidance.',
    
    // Contact
    'contact.phone': '+98 912 344 3470',
    'contact.email': 'info@clinicarmita.com',
    'contact.whatsapp': 'WhatsApp',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    
    // Footer
    'footer.description': 'Expert nutrition and sports consulting services for athletes and individuals. We collaborate with national sports teams and provide personalized dietary solutions.',
    'footer.quick_links': 'Quick Links',
    'footer.services_list': 'Services',
    'footer.copyright': '© 2024 Clinic Armita. All rights reserved.',
    
    // Blog
    'blog.title': 'Nutrition & Wellness Blog',
    'blog.subtitle': 'Latest insights on sports nutrition and healthy living',
    'blog.read_more': 'Read More',
    'blog.author': 'Author',
    'blog.date': 'Date',
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
    'nav.login': 'Anmelden',
    'nav.admin': 'Admin',
    'nav.diet_plan': 'Diätplan',
    'nav.consultation': 'Beratung',
    
    // Login
    'login.title': 'Willkommen zurück',
    'login.subtitle': 'Melden Sie sich in Ihrem Konto an',
    'login.email': 'E-Mail',
    'login.password': 'Passwort',
    'login.signin': 'Anmelden',
    'login.forgot': 'Passwort vergessen?',
    'login.signup': 'Konto erstellen',
    
    // Admin
    'admin.title': 'Admin Dashboard',
    'admin.appointments': 'Termine',
    'admin.users': 'Benutzer',
    'admin.products': 'Produkte',
    'admin.blog': 'Blog-Beiträge',
    'admin.settings': 'Einstellungen',
    
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
    'services.team.title': 'Nationalmannschaften-Zusammenarbeit',
    'services.team.desc': 'Zusammenarbeit mit Nationalmannschaften zur Optimierung der Teamleistung',
    'services.cta.title': 'Bereit, Ihre Leistung zu transformieren?',
    'services.cta.subtitle': 'Schließen Sie sich Hunderten von Athleten und Privatpersonen an, die ihre Ziele mit unserer Expertenberatung erreicht haben.',
    'services.cta.book': 'Beratung buchen',
    'services.cta.contact': 'Kontaktieren Sie uns',
    
    // Products
    'products.title': 'Premium-Nahrungsergänzungsmittel',
    'products.subtitle': 'Sorgfältig ausgewählte, wissenschaftlich fundierte Nahrungsergänzungsmittel zur Unterstützung Ihrer Ernährungsziele und zur Verbesserung Ihrer Leistungsreise.',
    'products.view_all': 'Alle Produkte anzeigen',
    'products.add_cart': 'In den Warenkorb',
    
    // Booking
    'booking.title': 'Buchen Sie Ihren Termin',
    'booking.subtitle': 'Vereinbaren Sie einen Termin mit unseren Ernährungs- und Sportexperten',
    'booking.name': 'Vollständiger Name',
    'booking.email': 'E-Mail-Adresse',
    'booking.phone': 'Telefonnummer',
    'booking.date': 'Datum auswählen',
    'booking.time': 'Zeit auswählen',
    'booking.service': 'Service auswählen',
    'booking.message': 'Zusätzliche Nachricht',
    'booking.submit': 'Termin buchen',
    
    // Diet Plan
    'diet.title': 'Personalisierter Diätplan',
    'diet.subtitle': 'Erhalten Sie einen maßgeschneiderten Ernährungsplan, der auf Ihre Ziele und Ihren Lebensstil zugeschnitten ist',
    'diet.goal': 'Ihr Ziel',
    'diet.age': 'Alter',
    'diet.weight': 'Aktuelles Gewicht (kg)',
    'diet.height': 'Größe (cm)',
    'diet.activity': 'Aktivitätslevel',
    'diet.allergies': 'Nahrungsmittelallergien/Einschränkungen',
    'diet.medical': 'Medizinische Bedingungen',
    'diet.submit': 'Meinen Diätplan erstellen',
    
    // Consultation
    'consultation.title': 'Online-Beratung',
    'consultation.subtitle': 'Verbinden Sie sich mit unseren Experten über WhatsApp oder Telegram',
    'consultation.whatsapp': 'WhatsApp-Beratung',
    'consultation.telegram': 'Telegram-Beratung',
    'consultation.schedule': 'Videoanruf planen',
    
    // Testimonials
    'testimonials.title': 'Was Athleten sagen',
    'testimonials.subtitle': 'Hören Sie von professionellen Athleten und Nationalmannschaftsmitgliedern, die ihre Leistung mit unserer Expertenernährungsberatung transformiert haben.',
    
    // Contact
    'contact.phone': '+98 912 344 3470',
    'contact.email': 'info@clinicarmita.com',
    'contact.whatsapp': 'WhatsApp',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    
    // Footer
    'footer.description': 'Expertenernährung und Sportberatungsdienstleistungen für Athleten und Privatpersonen. Wir arbeiten mit Nationalmannschaften zusammen und bieten personalisierte Ernährungslösungen.',
    'footer.quick_links': 'Schnelllinks',
    'footer.services_list': 'Leistungen',
    'footer.copyright': '© 2024 Clinic Armita. Alle Rechte vorbehalten.',
    
    // Blog
    'blog.title': 'Ernährungs- und Wellness-Blog',
    'blog.subtitle': 'Neueste Erkenntnisse zu Sporternährung und gesundem Leben',
    'blog.read_more': 'Weiterlesen',
    'blog.author': 'Autor',
    'blog.date': 'Datum',
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
