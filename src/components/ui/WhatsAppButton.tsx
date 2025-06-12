
import { Button } from './button';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ className = '' }: { className?: string }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '989123443470'; // +98 912 344 3470 without + and spaces
    const message = encodeURIComponent('Hello! I would like to inquire about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
    >
      <MessageCircle className="h-4 w-4 mr-2" />
      WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
