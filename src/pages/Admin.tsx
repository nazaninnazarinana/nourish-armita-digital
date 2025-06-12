
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Package, FileText, Settings, BarChart3 } from 'lucide-react';

const Admin = () => {
  const { t } = useLanguage();

  const adminStats = [
    { title: 'Total Appointments', value: '234', icon: Calendar, color: 'bg-blue-500' },
    { title: 'Active Users', value: '1,234', icon: Users, color: 'bg-green-500' },
    { title: 'Products', value: '56', icon: Package, color: 'bg-purple-500' },
    { title: 'Blog Posts', value: '23', icon: FileText, color: 'bg-orange-500' },
  ];

  const quickActions = [
    { title: t('admin.appointments'), icon: Calendar, href: '/admin/appointments' },
    { title: t('admin.users'), icon: Users, href: '/admin/users' },
    { title: t('admin.products'), icon: Package, href: '/admin/products' },
    { title: t('admin.blog'), icon: FileText, href: '/admin/blog' },
    { title: t('admin.settings'), icon: Settings, href: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Admin dashboard"
              className="w-full h-64 object-cover rounded-2xl shadow-xl mb-8"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              {t('admin.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage your clinic operations, appointments, and content from this central dashboard.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {adminStats.map((stat, index) => (
              <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-health-800">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.color} text-white`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {quickActions.map((action) => (
                  <Button
                    key={action.title}
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-health-50"
                    onClick={() => console.log(`Navigate to ${action.href}`)}
                  >
                    <action.icon className="h-6 w-6" />
                    <span className="text-sm">{action.title}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-600">Sports Nutrition Consultation</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">Dec 15, 2024</p>
                        <p className="text-sm text-health-600">10:00 AM</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Product #{item}234</p>
                        <p className="text-sm text-gray-600">Protein Supplement</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600 font-medium">$89.99</p>
                        <p className="text-sm text-gray-600">Completed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
