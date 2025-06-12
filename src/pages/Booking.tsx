
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Booking = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              Book Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your consultation with our nutrition and sports experts.
            </p>
          </div>
          
          <div className="text-center py-20">
            <p className="text-gray-600">Booking system coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
