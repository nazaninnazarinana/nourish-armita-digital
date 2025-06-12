
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Olympic Swimmer',
      team: 'National Swimming Team',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'Clinic Armita revolutionized my performance. Their nutrition plan helped me achieve my best times and win gold at the championships.',
      rating: 5
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Professional Football Player',
      team: 'National Football Team',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'The personalized approach and scientific backing of their recommendations made all the difference in my recovery and strength.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Johnson',
      role: 'Marathon Runner',
      team: 'Elite Athletics Club',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'Thanks to Clinic Armita, I not only improved my endurance but also learned how to fuel my body properly for long-distance events.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Weightlifting Champion',
      team: 'National Weightlifting Team',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'Their expertise in sports nutrition helped me reach new personal records while maintaining optimal health and recovery.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-health-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
            What Athletes Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from professional athletes and national team members who have transformed 
            their performance with our expert nutrition guidance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-health-200"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-energy-500 text-xl">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <h4 className="text-xl font-semibold text-health-800">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-health-600 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].team}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 rounded-full p-0 ${
                  index === currentIndex 
                    ? 'bg-health-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in animate-delay-100">
            <div className="text-3xl lg:text-4xl font-bold text-health-600 mb-2">15+</div>
            <div className="text-gray-600">National Teams</div>
          </div>
          <div className="animate-fade-in animate-delay-200">
            <div className="text-3xl lg:text-4xl font-bold text-health-600 mb-2">500+</div>
            <div className="text-gray-600">Athletes Coached</div>
          </div>
          <div className="animate-fade-in animate-delay-300">
            <div className="text-3xl lg:text-4xl font-bold text-health-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="animate-fade-in animate-delay-400">
            <div className="text-3xl lg:text-4xl font-bold text-health-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
