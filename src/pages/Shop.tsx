
import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ChevronDown, 
  Search, 
  SlidersHorizontal, 
  Watch, 
  Clock, 
  Timer, 
  Award, 
  Compass, 
  LayoutGrid,
  Filter,
  X
} from 'lucide-react';

const BRANDS = [
  { 
    name: "Baltic", 
    icon: Watch, 
    color: "bg-primary/10",
    country: "France",
    style: "Dive",
    priceRange: "Mid-range"
  },
  { 
    name: "Brew", 
    icon: Clock, 
    color: "bg-primary-300/20",
    country: "USA",
    style: "Chronograph",
    priceRange: "Mid-range"
  },
  { 
    name: "Farer", 
    icon: Compass, 
    color: "bg-primary-500/20",
    country: "UK",
    style: "GMT",
    priceRange: "Mid-range"
  },
  { 
    name: "Halios", 
    icon: Timer, 
    color: "bg-primary-400/20",
    country: "Canada",
    style: "Dive",
    priceRange: "Mid-range"
  },
  { 
    name: "Lorier", 
    icon: Award, 
    color: "bg-primary-200/20",
    country: "USA",
    style: "Field",
    priceRange: "Affordable"
  },
  { 
    name: "Monta", 
    icon: LayoutGrid, 
    color: "bg-primary-600/20",
    country: "USA",
    style: "Sports",
    priceRange: "Premium"
  },
  { 
    name: "Autodromo", 
    icon: Watch, 
    color: "bg-primary/10",
    country: "USA",
    style: "Racing",
    priceRange: "Premium"
  },
  { 
    name: "Kurono", 
    icon: Clock, 
    color: "bg-primary-300/20",
    country: "Japan",
    style: "Dress",
    priceRange: "Premium"
  },
  { 
    name: "Anordain", 
    icon: Compass, 
    color: "bg-primary-500/20",
    country: "UK",
    style: "Dress",
    priceRange: "Premium"
  }
];

// Extract unique filter options
const COUNTRIES = Array.from(new Set(BRANDS.map(brand => brand.country)));
const STYLES = Array.from(new Set(BRANDS.map(brand => brand.style)));
const PRICE_RANGES = Array.from(new Set(BRANDS.map(brand => brand.priceRange)));

const BrandSquare = ({ brand }: { brand: typeof BRANDS[0] }) => {
  const Icon = brand.icon;
  
  return (
    <Card className="aspect-square overflow-hidden transition-all hover:shadow-md border-2 border-primary/30 hover:border-primary/50 group cursor-pointer">
      <CardContent className="p-0 h-full flex flex-col items-center justify-center text-center">
        <div className={`w-16 h-16 rounded-full ${brand.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-medium text-lg">{brand.name}</h3>
        <Badge variant="outline" className="mt-2 bg-background/50">{brand.style}</Badge>
        <Badge variant="secondary" className="mt-1 text-xs">{brand.country}</Badge>
      </CardContent>
    </Card>
  );
};

const FilterSection = ({ 
  title, 
  options, 
  selectedFilters, 
  onFilterChange 
}: { 
  title: string, 
  options: string[], 
  selectedFilters: string[], 
  onFilterChange: (option: string) => void
}) => {
  return (
    <div className="mb-4">
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="space-y-2">
        {options.map(option => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox 
              id={`${title}-${option}`} 
              checked={selectedFilters.includes(option)} 
              onCheckedChange={() => onFilterChange(option)}
            />
            <label 
              htmlFor={`${title}-${option}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  
  const toggleFilter = (type: 'country' | 'style' | 'price', option: string) => {
    switch (type) {
      case 'country':
        setSelectedCountries(prev => 
          prev.includes(option) 
            ? prev.filter(item => item !== option) 
            : [...prev, option]
        );
        break;
      case 'style':
        setSelectedStyles(prev => 
          prev.includes(option) 
            ? prev.filter(item => item !== option) 
            : [...prev, option]
        );
        break;
      case 'price':
        setSelectedPriceRanges(prev => 
          prev.includes(option) 
            ? prev.filter(item => item !== option) 
            : [...prev, option]
        );
        break;
    }
  };
  
  const clearAllFilters = () => {
    setSelectedCountries([]);
    setSelectedStyles([]);
    setSelectedPriceRanges([]);
  };
  
  const filteredBrands = BRANDS.filter(brand => {
    // Filter by search query
    const matchesSearch = 
      searchQuery === '' || 
      brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by selected countries
    const matchesCountry = 
      selectedCountries.length === 0 || 
      selectedCountries.includes(brand.country);
    
    // Filter by selected styles
    const matchesStyle = 
      selectedStyles.length === 0 || 
      selectedStyles.includes(brand.style);
    
    // Filter by selected price ranges
    const matchesPriceRange = 
      selectedPriceRanges.length === 0 || 
      selectedPriceRanges.includes(brand.priceRange);
    
    return matchesSearch && matchesCountry && matchesStyle && matchesPriceRange;
  });
  
  const activeFilterCount = selectedCountries.length + selectedStyles.length + selectedPriceRanges.length;

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
                  {activeFilterCount > 0 && (
                    <Badge className="ml-1" variant="secondary">{activeFilterCount}</Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  {activeFilterCount > 0 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearAllFilters}
                      className="text-xs flex items-center"
                    >
                      <X className="h-3 w-3 mr-1" /> Clear All
                    </Button>
                  )}
                </div>
                
                <FilterSection 
                  title="Country" 
                  options={COUNTRIES} 
                  selectedFilters={selectedCountries}
                  onFilterChange={(option) => toggleFilter('country', option)}
                />
                
                <FilterSection 
                  title="Style" 
                  options={STYLES} 
                  selectedFilters={selectedStyles}
                  onFilterChange={(option) => toggleFilter('style', option)}
                />
                
                <FilterSection 
                  title="Price Range" 
                  options={PRICE_RANGES} 
                  selectedFilters={selectedPriceRanges}
                  onFilterChange={(option) => toggleFilter('price', option)}
                />
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
                  <Button variant="ghost" className="justify-start">A-Z</Button>
                  <Button variant="ghost" className="justify-start">Z-A</Button>
                  <Button variant="ghost" className="justify-start">Newest First</Button>
                  <Button variant="ghost" className="justify-start">Popularity</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredBrands.map(brand => (
              <BrandSquare key={brand.name} brand={brand} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium mb-2">No brands match your filters</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={clearAllFilters}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
