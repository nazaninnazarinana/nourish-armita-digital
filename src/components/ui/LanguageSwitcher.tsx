
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="px-3 py-1 text-sm"
      >
        EN
      </Button>
      <Button
        variant={language === 'de' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('de')}
        className="px-3 py-1 text-sm"
      >
        DE
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
