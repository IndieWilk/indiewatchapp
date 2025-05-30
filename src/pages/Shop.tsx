
import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Search, 
  Shuffle,
  Filter,
  X,
  SlidersHorizontal
} from 'lucide-react';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Empty arrays for clean slate
  const BRANDS: any[] = [];
  const COUNTRIES: string[] = [];

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
            
            <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filter</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                </div>
                <p className="text-sm text-muted-foreground">No filters available</p>
              </PopoverContent>
            </Popover>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              disabled
            >
              <Shuffle className="h-4 w-4" />
              <span className="hidden sm:inline">Shuffle</span>
            </Button>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2" disabled>
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="hidden sm:inline">Sort</span>
                </Button>
              </PopoverTrigger>
            </Popover>
          </div>
        </div>
        
        <div className="text-center py-16">
          <h3 className="text-lg font-medium mb-2">No brands available</h3>
          <p className="text-muted-foreground">Brands will appear here once added</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
