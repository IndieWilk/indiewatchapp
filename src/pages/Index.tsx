import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { 
  ChevronRight, 
  ShoppingBag, 
  MessageSquare,
  RectangleHorizontal
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import User from '@/components/User';

const BrandCard = ({ name, imageSrc }: { name: string; imageSrc: string }) => (
  <Card className="overflow-hidden group transition-all hover:shadow-md border-2 border-primary/30 hover:border-primary/50">
    <div className="aspect-square bg-muted relative overflow-hidden">
      <img 
        src={imageSrc} 
        alt={`${name} Watch`} 
        className="object-cover w-full h-full transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
        <Button size="sm" variant="default">Explore</Button>
      </div>
    </div>
    <CardContent className="p-4">
      <h3 className="font-medium mb-1">{name}</h3>
      <p className="text-muted-foreground text-sm">Independent Watch Brand</p>
    </CardContent>
  </Card>
);

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
  <Card className="overflow-hidden hover:shadow-md transition-all border-2 border-primary/30 hover:border-primary/50">
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
            <span>↑ 156 Ticks</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ArticlePreview = () => (
  <Card className="overflow-hidden group transition-all hover:shadow-md border-2 border-primary/30 hover:border-primary/50">
    <div className="aspect-video bg-muted relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=500" 
        alt="The Rise of Independent Watchmaking" 
        className="object-cover w-full h-full transition-transform group-hover:scale-105"
      />
    </div>
    <CardContent className="p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
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
  const brands = [
    { 
      name: 'Baltic', 
      imageSrc: 'https://images.unsplash.com/photo-1547996160-81dfa6f585aa?q=80&w=500'
    },
    { 
      name: 'Maen', 
      imageSrc: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=500'
    },
    { 
      name: 'Norqain', 
      imageSrc: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=500'
    },
    { 
      name: 'Beaucroft', 
      imageSrc: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=500'
    },
    { 
      name: 'Farer', 
      imageSrc: 'https://images.unsplash.com/photo-1612541831716-e3e50f0b61a9?q=80&w=500'
    },
    { 
      name: 'Serica', 
      imageSrc: 'https://images.unsplash.com/photo-1614703418052-d5b893d495bc?q=80&w=500'
    }
  ];

  const randomizedBrands = [...brands].sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center items-center mb-6 relative">
            <Logo className="mx-auto w-16 h-16 md:w-24 md:h-24" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            IndieWatch
          </h1>
          
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Discover, Support and Shop for the worlds best independent watch brands
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/shop">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <ShoppingBag className="mr-2 h-5 w-5" /> Cool Watches
              </Button>
            </Link>
            <Link to="/community">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {randomizedBrands.map((brand) => (
                  <BrandCard key={brand.name} name={brand.name} imageSrc={brand.imageSrc} />
                ))}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <CommunityPost key={i} />
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Latest News</h2>
                <Link to="/content" className="text-primary flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((i) => (
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
