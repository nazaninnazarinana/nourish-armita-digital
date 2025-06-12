
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import TelegramButton from '@/components/ui/TelegramButton';
import { Video, Clock, CheckCircle, MessageCircle } from 'lucide-react';

const Consultation = () => {
  const { t } = useLanguage();

  const consultationFeatures = [
    {
      icon: Video,
      title: 'Video Consultations',
      description: 'Face-to-face sessions with our nutrition experts via video call'
    },
    {
      icon: MessageCircle,
      title: 'Instant Messaging',
      description: 'Quick questions and follow-ups via WhatsApp or Telegram'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book sessions that fit your schedule, including evenings and weekends'
    },
    {
      icon: CheckCircle,
      title: 'Personalized Advice',
      description: 'Tailored nutrition recommendations based on your specific needs'
    }
  ];

  const handleVideoConsultation = () => {
    // This would typically open a booking modal or redirect to scheduling
    alert('Video consultation booking - to be implemented with calendar integration');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1594824209347-6bb2802b1b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Online consultation"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              {t('consultation.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('consultation.subtitle')}
            </p>
          </div>

          {/* Consultation Options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp Consultation */}
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-health-800">
                  {t('consultation.whatsapp')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Start an instant conversation with our nutrition experts on WhatsApp. 
                  Perfect for quick questions and ongoing support.
                </p>
                <WhatsAppButton className="w-full" />
                <p className="text-sm text-gray-500 mt-3">
                  Available: Mon-Fri 9AM-7PM
                </p>
              </CardContent>
            </Card>

            {/* Telegram Consultation */}
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-health-800">
                  {t('consultation.telegram')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Connect with us on Telegram for secure messaging and file sharing. 
                  Great for sharing meal photos and progress updates.
                </p>
                <TelegramButton className="w-full" />
                <p className="text-sm text-gray-500 mt-3">
                  Available: Mon-Fri 9AM-7PM
                </p>
              </CardContent>
            </Card>

            {/* Video Consultation */}
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-health-800">
                  {t('consultation.schedule')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Book a comprehensive video consultation for detailed nutrition assessment 
                  and personalized planning.
                </p>
                <Button 
                  onClick={handleVideoConsultation}
                  className="w-full bg-health-600 hover:bg-health-700"
                >
                  <Video className="h-4 w-4 mr-2" />
                  Schedule Video Call
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  60-minute sessions available
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-health-800 text-center mb-12">
              Why Choose Online Consultation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationFeatures.map((feature, index) => (
                <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-health-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <Card className="bg-health-600 text-white text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-health-100 mb-8 max-w-2xl mx-auto">
                Our nutrition experts are ready to help you achieve your health and performance goals. 
                Choose your preferred consultation method and connect with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton className="bg-white text-green-600 hover:bg-gray-100" />
                <TelegramButton className="bg-white text-blue-600 hover:bg-gray-100" />
                <Button 
                  onClick={handleVideoConsultation}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-health-600"
                >
                  <Video className="h-4 w-4 mr-2" />
                  Book Video Call
                </Button>
              </div>
              <p className="text-health-200 mt-6">
                Contact: {t('contact.phone')} | {t('contact.email')}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
