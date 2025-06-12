
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: 'The Science Behind Pre-Workout Nutrition',
      excerpt: 'Discover how proper pre-workout nutrition can enhance your performance and optimize your training sessions.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Dr. Sarah Mueller',
      date: '2024-12-10',
      readTime: '5 min read',
      category: 'Sports Nutrition'
    },
    {
      id: 2,
      title: 'Weight Management: Beyond Calories In vs Calories Out',
      excerpt: 'Understanding the complex factors that influence weight management and sustainable approaches to healthy weight loss.',
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Lisa Wagner',
      date: '2024-12-08',
      readTime: '7 min read',
      category: 'Weight Management'
    },
    {
      id: 3,
      title: 'Recovery Nutrition for Elite Athletes',
      excerpt: 'Learn about the critical role of post-exercise nutrition in recovery, adaptation, and performance optimization.',
      image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Michael Schmidt',
      date: '2024-12-05',
      readTime: '6 min read',
      category: 'Recovery'
    },
    {
      id: 4,
      title: 'Hydration Strategies for Endurance Sports',
      excerpt: 'Comprehensive guide to maintaining optimal hydration before, during, and after endurance activities.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Dr. Sarah Mueller',
      date: '2024-12-03',
      readTime: '8 min read',
      category: 'Hydration'
    },
    {
      id: 5,
      title: 'Supplements: What Works and What Doesn\'t',
      excerpt: 'Evidence-based analysis of popular sports supplements and their effectiveness for performance enhancement.',
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Lisa Wagner',
      date: '2024-12-01',
      readTime: '10 min read',
      category: 'Supplements'
    },
    {
      id: 6,
      title: 'Meal Timing for Optimal Performance',
      excerpt: 'Understanding when to eat for maximum training adaptations and competition performance.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Michael Schmidt',
      date: '2024-11-28',
      readTime: '6 min read',
      category: 'Meal Planning'
    }
  ];

  const categories = ['All', 'Sports Nutrition', 'Weight Management', 'Recovery', 'Hydration', 'Supplements', 'Meal Planning'];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-health-800 mb-6">
              Nutrition & Wellness Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest research, tips, and insights on sports nutrition, 
              performance optimization, and healthy living from our expert team.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-[300px] lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-energy-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-health-100 text-health-700 px-3 py-1 rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-health-800 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <Button asChild>
                      <Link to={`/blog/${blogPosts[0].id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-health-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-health-800 mb-3 group-hover:text-health-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link to={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-health-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-health-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest nutrition tips, research updates, 
              and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-energy-500 hover:bg-energy-600 text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
