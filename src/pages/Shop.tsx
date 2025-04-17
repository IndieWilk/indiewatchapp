
import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown, 
  Search, 
  SlidersHorizontal, 
  Watch, 
  Clock, 
  Timer, 
  Award, 
  Compass, 
  LayoutGrid
} from 'lucide-react';

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
  const [searchQuery, setSearchQuery] = useState("");

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
      </div>
    </div>
  );
};

export default Shop;
