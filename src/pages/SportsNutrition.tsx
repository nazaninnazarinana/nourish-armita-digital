
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Target, Clock, Award, Users } from 'lucide-react';

const SportsNutrition = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Maximize your athletic performance with scientifically-backed nutrition strategies'
    },
    {
      icon: Clock,
      title: 'Recovery Enhancement',
      description: 'Accelerate recovery between training sessions and competitions'
    },
    {
      icon: Award,
      title: 'Competition Preparation',
      description: 'Strategic nutrition planning for peak performance during competitions'
    },
    {
      icon: Users,
      title: 'Team Support',
      description: 'Comprehensive nutrition support for entire sports teams'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Sports nutrition consulting"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              Sports Nutrition Consulting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional nutrition consulting for athletes, sports teams, and performance optimization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-health-800 mb-6">Our Approach</h2>
              <p className="text-gray-600 mb-6">
                At Clinic Armita, we provide evidence-based sports nutrition consulting tailored to each athlete's unique needs, sport requirements, and performance goals. Our comprehensive approach includes detailed assessments, personalized nutrition plans, and ongoing monitoring.
              </p>
              <p className="text-gray-600 mb-6">
                We work with professional athletes, national sports teams, and dedicated fitness enthusiasts to optimize their nutrition for peak performance, faster recovery, and long-term health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-health-600 hover:bg-health-700">
                  <Link to="/booking">Book Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Ask Questions</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Athletic performance"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-health-800 text-center mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-health-800 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-health-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Performance?</h2>
            <p className="text-health-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of athletes who have transformed their performance with our expert sports nutrition guidance.
            </p>
            <Button asChild size="lg" className="bg-energy-500 hover:bg-energy-600 text-black">
              <Link to="/booking">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SportsNutrition;
