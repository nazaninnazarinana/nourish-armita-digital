
import { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, MessageSquare } from 'lucide-react';

const Booking = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00'
  ];

  const services = [
    'Sports Nutrition Consulting',
    'Weight Management Program',
    'Therapeutic Diet Plan',
    'Team Nutrition Consulting',
    'General Nutrition Consultation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submission:', formData);
    alert('Booking request submitted! We will contact you soon to confirm.');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Nutrition consultation"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              {t('booking.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('booking.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center text-2xl text-health-700">
                  <Calendar className="h-6 w-6 mr-2" />
                  Schedule Your Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-health-800 flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">{t('booking.name')}</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t('booking.email')}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="phone">{t('booking.phone')}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-health-800 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Appointment Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="date">{t('booking.date')}</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">{t('booking.time')}</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, time: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="service">{t('booking.service')}</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-health-800 flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Additional Information
                    </h3>
                    <div>
                      <Label htmlFor="message">{t('booking.message')}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your goals, current challenges, or any specific questions..."
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center pt-6">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-health-600 hover:bg-health-700 px-12 py-3 text-lg"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      {t('booking.submit')}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-health-800 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm">Choose from available time slots that work best for you</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-health-800 mb-2">Expert Consultation</h3>
                <p className="text-gray-600 text-sm">Meet with certified nutrition and sports specialists</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-health-800 mb-2">60-Minute Sessions</h3>
                <p className="text-gray-600 text-sm">Comprehensive assessment and personalized recommendations</p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
