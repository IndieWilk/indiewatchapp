import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  ChevronDown, 
  Search, 
  Shuffle,
  Filter,
  X,
  SlidersHorizontal
} from 'lucide-react';

interface Brand {
  name: string;
  country: string;
  image: string;
}

const BRANDS: Brand[] = [];

const shuffleArray = (array: Brand[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const COUNTRIES = Array.from(new Set(BRANDS.map(brand => brand.country)));

const BrandSquare = ({ brand }: { brand: Brand }) => {
  return (
    <Link to={`/shop/${brand.name.toLowerCase()}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md border-2 border-primary/30 hover:border-primary/50 group cursor-pointer">
        <AspectRatio ratio={1 / 1}>
          <img 
            src={brand.image} 
            alt={`${brand.name} watch`}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </AspectRatio>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg">{brand.name}</h3>
          <Badge variant="secondary" className="mt-1 text-xs">{brand.country}</Badge>
        </CardContent>
      </Card>
    </Link>
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
  const [displayedBrands, setDisplayedBrands] = useState<Brand[]>([]);
  
  useEffect(() => {
    setDisplayedBrands(shuffleArray(BRANDS));
  }, []);

  const handleShuffle = () => {
    setDisplayedBrands(shuffleArray([...displayedBrands]));
  };
  
  const toggleFilter = (option: string) => {
    setSelectedCountries(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option) 
        : [...prev, option]
    );
  };
  
  const clearAllFilters = () => {
    setSelectedCountries([]);
  };
  
  const filteredBrands = displayedBrands.filter(brand => {
    const matchesSearch = 
      searchQuery === '' || 
      brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCountry = 
      selectedCountries.length === 0 || 
      selectedCountries.includes(brand.country);
    
    return matchesSearch && matchesCountry;
  });
  
  const activeFilterCount = selectedCountries.length;

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
                  onFilterChange={toggleFilter}
                />
              </PopoverContent>
            </Popover>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleShuffle}
            >
              <Shuffle className="h-4 w-4" />
              <span className="hidden sm:inline">Shuffle</span>
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
        
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredBrands.map(brand => (
              <BrandSquare key={brand.name} brand={brand} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium mb-2">No brands available</h3>
            <p className="text-muted-foreground">Brands will appear here once added</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
