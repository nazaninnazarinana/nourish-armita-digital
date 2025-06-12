
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { User, Heart, Target, Users, Video, Apple } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: User,
      title: 'Sports Nutrition Consulting',
      description: 'Professional nutrition consulting for athletes and sports teams',
      features: ['Performance optimization', 'Recovery nutrition', 'Competition prep'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/sports-nutrition'
    },
    {
      icon: Heart,
      title: 'Weight Management Programs',
      description: 'Comprehensive weight loss and gain programs',
      features: ['Custom meal plans', 'Progress tracking', 'Lifestyle coaching'],
      image: 'https://images.unsplash.com/photo-1506629905607-679b8394e6e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/weight-management'
    },
    {
      icon: Target,
      title: 'Therapeutic Diet Plans',
      description: 'Medical nutrition therapy for various health conditions',
      features: ['Clinical assessment', 'Medical coordination', 'Ongoing monitoring'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/therapeutic-diets'
    },
    {
      icon: Users,
      title: 'Team Consulting',
      description: 'Nutrition consulting for sports teams and organizations',
      features: ['Team workshops', 'Group meal planning', 'Performance tracking'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/team-consulting'
    },
    {
      icon: Video,
      title: 'Online Consultations',
      description: 'Virtual nutrition consultations via video or messaging',
      features: ['Video calls', 'WhatsApp support', 'Telegram messaging'],
      image: 'https://images.unsplash.com/photo-1594824209347-6bb2802b1b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/consultation'
    },
    {
      icon: Apple,
      title: 'Personalized Diet Plans',
      description: 'Custom diet plans tailored to your specific needs',
      features: ['Goal-based planning', 'Health assessments', 'Regular updates'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/diet-plan'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Nutrition services"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-health-600 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-health-800">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-health-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-health-600 hover:bg-health-700">
                    <Link to={service.link}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-health-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-health-100 mb-8 max-w-2xl mx-auto">
              Book a consultation today and take the first step towards achieving your health and performance goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-energy-500 hover:bg-energy-600 text-black">
                <Link to="/booking">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-health-800">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
