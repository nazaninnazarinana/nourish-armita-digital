
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Scale, Target, TrendingUp, Heart } from 'lucide-react';

const WeightManagement = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: TrendingUp,
      title: 'Weight Loss Program',
      description: 'Sustainable weight loss through balanced nutrition and lifestyle changes',
      features: ['Custom calorie planning', 'Macro tracking', 'Weekly check-ins']
    },
    {
      icon: Target,
      title: 'Weight Gain Program',
      description: 'Healthy weight gain for athletes and underweight individuals',
      features: ['High-calorie meal plans', 'Muscle building focus', 'Progress monitoring']
    },
    {
      icon: Heart,
      title: 'Body Recomposition',
      description: 'Simultaneous fat loss and muscle gain for improved body composition',
      features: ['Precision nutrition', 'Training coordination', 'Body composition analysis']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1506629905607-679b8394e6e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Weight management"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              Weight Management Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive weight management solutions tailored to your individual goals and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program) => (
              <Card key={program.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-health-600 rounded-lg flex items-center justify-center mb-6">
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-health-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-health-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-health-600 hover:bg-health-700">
                    <Link to="/booking">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Healthy lifestyle"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-health-800 mb-6">Our Method</h2>
              <p className="text-gray-600 mb-6">
                Our weight management approach is based on sustainable lifestyle changes rather than quick fixes. We create personalized plans that fit your schedule, preferences, and goals.
              </p>
              <p className="text-gray-600 mb-6">
                Each program includes comprehensive nutritional assessment, custom meal planning, progress tracking, and ongoing support to ensure long-term success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-health-600 hover:bg-health-700">
                  <Link to="/diet-plan">Get Diet Plan</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/consultation">Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-health-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Body, Transform Your Life</h2>
            <p className="text-health-100 mb-8 max-w-2xl mx-auto">
              Start your weight management journey today with personalized guidance from our expert nutritionists.
            </p>
            <Button asChild size="lg" className="bg-energy-500 hover:bg-energy-600 text-black">
              <Link to="/booking">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WeightManagement;
