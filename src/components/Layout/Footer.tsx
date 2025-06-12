
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import InstagramButton from '@/components/ui/InstagramButton';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-health-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-health-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Clinic Armita</h3>
                <p className="text-health-200 text-sm">Professional Nutrition & Sports Consulting</p>
              </div>
            </div>
            <p className="text-health-200 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-health-400" />
                <a href="tel:+4917687801557" className="text-health-200 hover:text-white transition-colors">
                  {t('contact.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-health-400" />
                <a href="mailto:info@clinicarmita.com" className="text-health-200 hover:text-white transition-colors">
                  {t('contact.email')}
                </a>
              </div>
            </div>
            <div className="flex space-x-3 mb-4">
              <WhatsAppButton className="text-sm px-4 py-2" />
              <InstagramButton className="text-sm px-4 py-2" />
            </div>
            <LanguageSwitcher />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-health-200 hover:text-white transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/products" className="text-health-200 hover:text-white transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/about" className="text-health-200 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-health-200 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="/booking" className="text-health-200 hover:text-white transition-colors">{t('nav.booking')}</Link></li>
              <li><Link to="/blog" className="text-health-200 hover:text-white transition-colors">{t('nav.blog')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services_list')}</h4>
            <ul className="space-y-2">
              <li><span className="text-health-200">Sports Nutrition</span></li>
              <li><span className="text-health-200">Weight Management</span></li>
              <li><span className="text-health-200">Therapeutic Diets</span></li>
              <li><span className="text-health-200">Team Consulting</span></li>
              <li><span className="text-health-200">Online Consultations</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-health-700 mt-8 pt-8 text-center">
          <p className="text-health-200">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
