import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown, 
  Filter, 
  Search, 
  SlidersHorizontal, 
  Watch, 
  Clock, 
  Timer, 
  Award, 
  Compass, 
  LayoutGrid
} from 'lucide-react';

const WATCHES = [
  {
    id: 1,
    name: "Baltic Aquascaphe",
    brand: "Baltic",
    price: 649,
    image: "https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=500",
    description: "Vintage-inspired dive watch"
  },
  {
    id: 2,
    name: "Farer Lander GMT",
    brand: "Farer",
    price: 1250,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=500",
    description: "Classic GMT with vibrant dial"
  },
  {
    id: 3,
    name: "Halios Seaforth",
    brand: "Halios",
    price: 775,
    image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=500",
    description: "Minimalist dive watch"
  },
  {
    id: 4,
    name: "Lorier Neptune",
    brand: "Lorier",
    price: 499,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=500",
    description: "Vintage-inspired tool watch"
  },
  {
    id: 5,
    name: "Monta Atlas",
    brand: "Monta",
    price: 1950,
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=500",
    description: "Luxury GMT traveler's watch"
  },
  {
    id: 6,
    name: "Brew Metric",
    brand: "Brew",
    price: 395,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=500",
    description: "Coffee-inspired chronograph"
  },
];

const BRANDS = [
  { name: "Baltic", icon: Watch, color: "bg-primary/10" },
  { name: "Brew", icon: Clock, color: "bg-primary-300/20" },
  { name: "Farer", icon: Compass, color: "bg-primary-500/20" },
  { name: "Halios", icon: Timer, color: "bg-primary-400/20" },
  { name: "Lorier", icon: Award, color: "bg-primary-200/20" },
  { name: "Monta", icon: LayoutGrid, color: "bg-primary-600/20" },
  { name: "Autodromo", icon: Watch, color: "bg-primary/10" },
  { name: "Kurono", icon: Clock, color: "bg-primary-300/20" },
  { name: "Anordain", icon: Compass, color: "bg-primary-500/20" }
];

const PRICE_RANGES = ["All Prices", "Under $500", "$500-$1000", "$1000-$2000", "Over $2000"];

const ProductCard = ({ watch }: { watch: typeof WATCHES[0] }) => (
  <Card className="overflow-hidden group transition-all hover:shadow-md">
    <div className="aspect-square bg-muted relative overflow-hidden">
      <img 
        src={watch.image} 
        alt={watch.name} 
        className="object-cover w-full h-full transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
        <Button size="sm" variant="default">Quick View</Button>
      </div>
    </div>
    <CardContent className="p-4">
      <div className="text-sm text-muted-foreground mb-1">{watch.brand}</div>
      <h3 className="font-medium mb-1">{watch.name}</h3>
      <p className="text-muted-foreground text-sm mb-2">{watch.description}</p>
      <div className="flex items-center justify-between mt-2">
        <p className="font-semibold text-primary">${watch.price}</p>
        <Button size="sm" variant="outline">Add to Cart</Button>
      </div>
    </CardContent>
  </Card>
);

const BrandSquare = ({ brand }: { brand: typeof BRANDS[0] }) => {
  const Icon = brand.icon;
  
  return (
    <Card className="aspect-square overflow-hidden transition-all hover:shadow-md border-2 border-primary/30 hover:border-primary/50 group cursor-pointer">
      <CardContent className="p-0 h-full flex flex-col items-center justify-center text-center">
        <div className={`w-16 h-16 rounded-full ${brand.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-medium text-lg">{brand.name}</h3>
        <Badge variant="outline" className="mt-2 bg-background/50">Watch Brand</Badge>
      </CardContent>
    </Card>
  );
};

const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeView, setActiveView] = useState<'brands' | 'products'>('brands');

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Independent Watch Brands</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search brands..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant={activeView === 'brands' ? 'default' : 'outline'} 
                className="flex items-center gap-2"
                onClick={() => setActiveView('brands')}
              >
                <LayoutGrid className="h-4 w-4" />
                <span className="hidden sm:inline">Brands</span>
              </Button>
              
              <Button 
                variant={activeView === 'products' ? 'default' : 'outline'} 
                className="flex items-center gap-2"
                onClick={() => setActiveView('products')}
              >
                <Watch className="h-4 w-4" />
                <span className="hidden sm:inline">Products</span>
              </Button>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="hidden sm:inline">Sort</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56">
                  <div className="grid gap-2">
                    <Button variant="ghost" className="justify-start">A-Z</Button>
                    <Button variant="ghost" className="justify-start">Z-A</Button>
                    <Button variant="ghost" className="justify-start">Newest First</Button>
                    <Button variant="ghost" className="justify-start">Popularity</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        
        {activeView === 'brands' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {BRANDS
              .filter(brand => 
                searchQuery === '' || 
                brand.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map(brand => (
                <BrandSquare key={brand.name} brand={brand} />
              ))
            }
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {WATCHES.map(watch => (
              <ProductCard key={watch.id} watch={watch} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
