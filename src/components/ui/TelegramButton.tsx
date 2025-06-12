
import { Button } from './button';
import { Send } from 'lucide-react';

const TelegramButton = ({ className = '' }: { className?: string }) => {
  const handleTelegramClick = () => {
    const phoneNumber = '989123443470'; // +98 912 344 3470 without + and spaces
    window.open(`https://t.me/${phoneNumber}`, '_blank');
  };

  return (
    <Button
      onClick={handleTelegramClick}
      variant="outline"
      className={`border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white ${className}`}
    >
      <Send className="h-4 w-4 mr-2" />
      Telegram
    </Button>
  );
};

export default TelegramButton;
