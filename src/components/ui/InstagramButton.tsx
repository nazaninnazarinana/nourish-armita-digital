
import { Button } from './button';
import { Instagram } from 'lucide-react';

const InstagramButton = ({ className = '' }: { className?: string }) => {
  const handleInstagramClick = () => {
    // Replace with actual Instagram handle when provided
    window.open('https://instagram.com/clinicarmita', '_blank');
  };

  return (
    <Button
      onClick={handleInstagramClick}
      variant="outline"
      className={`border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white ${className}`}
    >
      <Instagram className="h-4 w-4 mr-2" />
      Instagram
    </Button>
  );
};

export default InstagramButton;
