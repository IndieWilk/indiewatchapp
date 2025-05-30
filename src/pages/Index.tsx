
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  ShoppingBag, 
  MessageSquare,
  RectangleHorizontal
} from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IndieWatch
          </h1>
          
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Discover, Support and Shop for the worlds best independent watch brands
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/shop">
              <Button size="lg">
                <ShoppingBag className="mr-2 h-5 w-5" /> Cool Watches
              </Button>
            </Link>
            <Link to="/community">
              <Button size="lg" variant="outline">
                <MessageSquare className="mr-2 h-5 w-5" /> Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Discover Brands</h2>
              </div>
              
              <div className="text-center py-16">
                <h3 className="text-lg font-medium mb-2">No brands available</h3>
                <p className="text-muted-foreground">Brands will appear here once added</p>
              </div>
              
              <div className="flex justify-center mt-6">
                <Link to="/shop" className="text-primary">
                  <Button variant="outline" className="flex items-center">
                    <RectangleHorizontal className="mr-2 h-4 w-4" /> View All Brands
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Community Discussions</h2>
                <Link to="/community" className="text-primary flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="text-center py-8">
                <p className="text-muted-foreground">Community discussions will appear here</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Latest News</h2>
                <Link to="/content" className="text-primary flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="text-center py-8">
                <p className="text-muted-foreground">News articles will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
