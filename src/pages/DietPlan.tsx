
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
import { User, Target, Activity, Heart, Apple } from 'lucide-react';

const DietPlan = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
    activity: '',
    allergies: '',
    medical: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Diet plan request:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Healthy meal planning"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              {t('diet.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('diet.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center text-2xl text-health-700">
                  <Apple className="h-6 w-6 mr-2" />
                  Personalized Nutrition Assessment
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
                      <div>
                        <Label htmlFor="age">{t('diet.age')}</Label>
                        <Input
                          id="age"
                          type="number"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="weight">{t('diet.weight')}</Label>
                        <Input
                          id="weight"
                          type="number"
                          value={formData.weight}
                          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="height">{t('diet.height')}</Label>
                        <Input
                          id="height"
                          type="number"
                          value={formData.height}
                          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Goals & Activity */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-health-800 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Goals & Lifestyle
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="goal">{t('diet.goal')}</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, goal: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your goal" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weight-loss">Weight Loss</SelectItem>
                            <SelectItem value="weight-gain">Weight Gain</SelectItem>
                            <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                            <SelectItem value="performance">Athletic Performance</SelectItem>
                            <SelectItem value="maintenance">Maintenance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="activity">{t('diet.activity')}</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, activity: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select activity level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sedentary">Sedentary (Office job)</SelectItem>
                            <SelectItem value="light">Light Activity (1-3 days/week)</SelectItem>
                            <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                            <SelectItem value="high">High Activity (6-7 days/week)</SelectItem>
                            <SelectItem value="extreme">Extreme (2x/day, intense)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Health Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-health-800 flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      Health Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="allergies">{t('diet.allergies')}</Label>
                        <Textarea
                          id="allergies"
                          value={formData.allergies}
                          onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                          placeholder="List any food allergies, intolerances, or dietary restrictions..."
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="medical">{t('diet.medical')}</Label>
                        <Textarea
                          id="medical"
                          value={formData.medical}
                          onChange={(e) => setFormData({ ...formData, medical: e.target.value })}
                          placeholder="Any medical conditions, medications, or health concerns..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-6">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-health-600 hover:bg-health-700 px-12 py-3 text-lg"
                    >
                      <Activity className="h-5 w-5 mr-2" />
                      {t('diet.submit')}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-health-800 mb-2">Personalized Plans</h3>
                <p className="text-gray-600 text-sm">Customized to your specific goals and lifestyle</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Apple className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-health-800 mb-2">Science-Based</h3>
                <p className="text-gray-600 text-sm">Evidence-based nutrition recommendations</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-health-800 mb-2">Health Focused</h3>
                <p className="text-gray-600 text-sm">Promoting long-term health and wellness</p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DietPlan;
