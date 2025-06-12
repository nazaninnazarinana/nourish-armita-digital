
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-energy-300/20 rounded-full blur-2xl animate-float animate-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float animate-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your
                <span className="block text-energy-300">Performance</span>
                <span className="block">& Health</span>
              </h1>
              <p className="text-xl text-health-100 max-w-lg">
                Expert nutrition and sports consulting for athletes and individuals. 
                Collaborating with national teams to optimize performance through science-based nutrition.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-energy-500 hover:bg-energy-600 text-black font-semibold px-8 py-4 text-lg">
                <Link to="/booking">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-health-800 px-8 py-4 text-lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-energy-300">500+</div>
                <div className="text-health-200">Athletes Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-energy-300">15+</div>
                <div className="text-health-200">National Teams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-energy-300">98%</div>
                <div className="text-health-200">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Athlete in training"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-health-900/50 to-transparent rounded-2xl"></div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-float">
                <div className="text-health-600 font-semibold">Sports Nutrition</div>
                <div className="text-sm text-gray-600">Expert Consulting</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-energy-400 rounded-xl p-4 shadow-xl animate-float animate-delay-300">
                <div className="text-black font-semibold">Performance</div>
                <div className="text-sm text-gray-800">Optimization</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
