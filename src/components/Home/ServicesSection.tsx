
import { Card, CardContent } from '@/components/ui/card';
import { User, Calendar, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: 'Sports Nutrition Consulting',
      description: 'Personalized nutrition plans for professional athletes and national sports teams',
      features: ['Performance optimization', 'Recovery strategies', 'Competition preparation'],
      color: 'health-600'
    },
    {
      icon: Calendar,
      title: 'Weight Management Programs',
      description: 'Comprehensive weight loss and gain programs tailored to individual needs',
      features: ['Custom meal plans', 'Progress tracking', 'Lifestyle coaching'],
      color: 'energy-600'
    },
    {
      icon: ShoppingCart,
      title: 'Therapeutic Dietary Plans',
      description: 'Medical nutrition therapy for various health conditions and diseases',
      features: ['Clinical assessment', 'Medical coordination', 'Ongoing monitoring'],
      color: 'health-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-health-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive nutrition and sports consulting services designed to help you achieve 
            peak performance and optimal health through science-based approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in animate-delay-${index + 1}00`}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-health-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-health-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/services" 
                  className="text-health-600 font-medium hover:text-health-700 transition-colors"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-health-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Performance?</h3>
          <p className="text-health-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of athletes and individuals who have achieved their goals with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking" 
              className="bg-energy-500 hover:bg-energy-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Book Consultation
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-health-800 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
