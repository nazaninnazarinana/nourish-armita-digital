
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Dr. Sarah Mueller',
      title: 'Lead Sports Nutritionist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'PhD in Sports Nutrition with 15+ years experience working with Olympic athletes.'
    },
    {
      name: 'Michael Schmidt',
      title: 'Performance Coach',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Certified performance coach specializing in endurance sports and recovery protocols.'
    },
    {
      name: 'Lisa Wagner',
      title: 'Clinical Nutritionist',
      image: 'https://images.unsplash.com/photo-1594824209347-6bb2802b1b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Expert in therapeutic nutrition and weight management programs.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Evidence-based nutrition strategies tailored to individual needs and goals.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with athletes, coaches, and medical teams for optimal results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality of service and achieving outstanding results.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Passionate about improving lives through proper nutrition and wellness education.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              About Clinic Armita
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about our mission, expertise, and commitment to excellence in nutrition and sports consulting.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Clinic Armita Team"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-health-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Clinic Armita, we believe that optimal nutrition is the foundation of peak performance and vibrant health. 
                Our mission is to provide world-class nutrition and sports consulting services that empower athletes and 
                individuals to achieve their highest potential.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience working with national sports teams and elite athletes, we combine 
                cutting-edge science with practical application to deliver personalized nutrition strategies that work.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-health-50 rounded-lg">
                  <div className="text-2xl font-bold text-health-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-health-50 rounded-lg">
                  <div className="text-2xl font-bold text-health-600">25+</div>
                  <div className="text-sm text-gray-600">National Teams</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-health-800 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-health-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-health-800 text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={member.name} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-health-800 mb-2">{member.name}</h3>
                    <p className="text-health-600 font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-health-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-health-800 mb-6">Certifications & Partnerships</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team holds internationally recognized certifications and maintains partnerships with leading 
              sports organizations and medical institutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-health-600 font-bold text-lg">IOC</span>
                </div>
                <p className="text-sm text-gray-600">IOC Diploma</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-health-600 font-bold text-lg">ISSN</span>
                </div>
                <p className="text-sm text-gray-600">Sports Nutrition</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-health-600 font-bold text-lg">ACSM</span>
                </div>
                <p className="text-sm text-gray-600">Exercise Science</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-health-600 font-bold text-lg">FDA</span>
                </div>
                <p className="text-sm text-gray-600">Approved</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
