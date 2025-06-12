
import { Button } from './button';

const WhatsAppButton = ({ className = '' }: { className?: string }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '4917687801557'; // +49 176 87801557 without + and spaces
    const message = encodeURIComponent('Hello! I would like to inquire about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
    >
      WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
