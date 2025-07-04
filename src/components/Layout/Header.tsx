
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.products'), href: '/products' },
    { name: t('nav.booking'), href: '/booking' },
    { name: t('nav.diet_plan'), href: '/diet-plan' },
    { name: t('nav.consultation'), href: '/consultation' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-health-100">
      {/* Top bar */}
      <div className="bg-health-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{t('contact.phone')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{t('contact.email')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <div className="hidden md:block">
              <span>Professional Nutrition & Sports Consulting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-health-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-health-800">Clinic Armita</h1>
              <p className="text-xs text-health-600">Nutrition & Sports</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-health-600 ${
                  isActive(item.href)
                    ? 'text-health-600 border-b-2 border-health-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline" size="sm">
              <Link to="/login">{t('nav.login')}</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/admin">{t('nav.admin')}</Link>
            </Button>
            <Button asChild size="sm" className="bg-health-600 hover:bg-health-700">
              <Link to="/booking">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-health-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-health-600 ${
                    isActive(item.href) ? 'text-health-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild variant="outline" size="sm">
                  <Link to="/login">{t('nav.login')}</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/admin">{t('nav.admin')}</Link>
                </Button>
                <Button asChild size="sm" className="bg-health-600 hover:bg-health-700">
                  <Link to="/booking">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
