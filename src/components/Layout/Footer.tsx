
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-health-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-health-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Clinic Armita</h3>
                <p className="text-health-200 text-sm">Professional Nutrition & Sports Consulting</p>
              </div>
            </div>
            <p className="text-health-200 mb-4 max-w-md">
              Expert nutrition and sports consulting services for athletes and individuals. 
              We collaborate with national sports teams and provide personalized dietary solutions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-health-400" />
                <span className="text-health-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-health-400" />
                <span className="text-health-200">info@clinicarmita.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-health-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-health-200 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-health-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-health-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/booking" className="text-health-200 hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-health-200">Sports Nutrition</span></li>
              <li><span className="text-health-200">Weight Management</span></li>
              <li><span className="text-health-200">Therapeutic Diets</span></li>
              <li><span className="text-health-200">Team Consulting</span></li>
              <li><span className="text-health-200">Online Consultations</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-health-700 mt-8 pt-8 text-center">
          <p className="text-health-200">&copy; 2024 Clinic Armita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
