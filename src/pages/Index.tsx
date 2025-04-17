import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Clock, MessageSquare, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import User from '@/components/User';

const FeaturedProduct = () => (
  <Card className="overflow-hidden group transition-all hover:shadow-md">
    <div className="aspect-square bg-muted relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=500" 
        alt="Baltic Aquascaphe" 
        className="object-cover w-full h-full transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
        <Button size="sm" variant="default">Quick View</Button>
      </div>
    </div>
    <CardContent className="p-4">
      <h3 className="font-medium mb-1">Baltic Aquascaphe</h3>
      <p className="text-muted-foreground text-sm mb-2">Vintage-inspired dive watch</p>
      <p className="font-semibold text-primary">$649</p>
    </CardContent>
  </Card>
);

const CommunityPost = () => (
  <Card className="overflow-hidden hover:shadow-md transition-all">
    <CardContent className="p-4">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <User className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-medium">New Lorier Neptune Series IV</h3>
          <p className="text-sm text-muted-foreground mb-2">Posted by WatchEnthusiast • 2 hours ago</p>
          <p className="text-sm mb-3">Just got my hands on the new Neptune. The bracelet is even better than previous versions...</p>
          <div className="flex items-center text-muted-foreground text-xs gap-4">
            <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> 24 comments</span>
            <span>↑ 156 upvotes</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ArticlePreview = () => (
  <Card className="overflow-hidden group transition-all hover:shadow-md">
    <div className="aspect-video bg-muted relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=500" 
        alt="The Rise of Independent Watchmaking" 
        className="object-cover w-full h-full transition-transform group-hover:scale-105"
      />
    </div>
    <CardContent className="p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <Clock className="h-3 w-3" />
        <span>8 min read</span>
      </div>
      <h3 className="font-medium mb-1">The Rise of Independent Watchmaking</h3>
      <p className="text-sm text-muted-foreground mb-3">How small brands are challenging the Swiss giants with innovation and craftsmanship</p>
      <Link to="/content/rise-of-independent-watchmaking" className="text-primary text-sm font-medium inline-flex items-center">
        Read Article <ChevronRight className="h-3 w-3 ml-1" />
      </Link>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <Logo className="mx-auto mb-6 w-16 h-16 md:w-24 md:h-24" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            IndieWatch
          </h1>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Discover and support the most exciting independent watchmakers
            crafting unique timepieces with passion and precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ShoppingBag className="mr-2 h-5 w-5" /> Shop Watches
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <MessageSquare className="mr-2 h-5 w-5" /> Join Community
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Sections Preview */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {/* Shop Section Preview */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Featured Watches</h2>
                <Link to="/shop" className="text-primary flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <FeaturedProduct key={i} />
                ))}
              </div>
            </div>
            
            {/* Community Section Preview */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Community Discussions</h2>
                <Link to="/community" className="text-primary flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <CommunityPost key={i} />
                ))}
              </div>
            </div>
            
            {/* Content Section Preview */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
                <Link to="/content" className="text-primary flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <ArticlePreview key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
