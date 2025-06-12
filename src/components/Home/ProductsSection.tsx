
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Performance Whey Protein',
      category: 'Protein Supplements',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'High-quality whey protein for muscle recovery and growth',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Energy Boost Complex',
      category: 'Pre-Workout',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1594735797693-d5d29ad41e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Natural energy booster for enhanced performance',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Recovery Formula',
      category: 'Post-Workout',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1571970124340-2fd0094d2cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Advanced recovery blend for faster muscle repair',
      rating: 4.9
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
            Premium Supplements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully selected, scientifically-backed supplements to support your nutrition goals 
            and enhance your performance journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in animate-delay-${index + 1}00`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-energy-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-health-800">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-energy-500 text-sm">★</span>
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-health-600">
                    ${product.price}
                  </span>
                  <Button size="sm" className="bg-health-600 hover:bg-health-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-2 border-health-600 text-health-600 hover:bg-health-600 hover:text-white">
            <Link to="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
