
import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown, Filter, Search, SlidersHorizontal } from 'lucide-react';

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

const BRANDS = ["All Brands", "Baltic", "Brew", "Farer", "Halios", "Lorier", "Monta"];
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

const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Shop Independent Watches</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search watches..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filters</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Brand</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {BRANDS.map((brand) => (
                          <div key={brand} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={brand}
                              checked={selectedBrand === brand}
                              onChange={() => setSelectedBrand(brand)}
                              className="text-primary"
                            />
                            <Label htmlFor={brand}>{brand}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Price Range</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {PRICE_RANGES.map((range) => (
                          <div key={range} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={range}
                              checked={selectedPrice === range}
                              onChange={() => setSelectedPrice(range)}
                              className="text-primary"
                            />
                            <Label htmlFor={range}>{range}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </PopoverContent>
              </Popover>
              
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
                    <Button variant="ghost" className="justify-start">Price: Low to High</Button>
                    <Button variant="ghost" className="justify-start">Price: High to Low</Button>
                    <Button variant="ghost" className="justify-start">Newest First</Button>
                    <Button variant="ghost" className="justify-start">Popularity</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {WATCHES.map(watch => (
            <ProductCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
