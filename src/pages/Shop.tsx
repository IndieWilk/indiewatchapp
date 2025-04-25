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

const BRANDS: Brand[] = [
  { 
    name: "Baltic", 
    country: "France",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&h=500&fit=crop"
  },
  { 
    name: "Brew", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop"
  },
  { 
    name: "Farer", 
    country: "UK",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop"
  },
  { 
    name: "Halios", 
    country: "Canada",
    image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop"
  },
  { 
    name: "Lorier", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop"
  },
  { 
    name: "Monta", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop"
  },
  { 
    name: "Autodromo", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1569411032431-07598b0012c2?w=500&h=500&fit=crop"
  },
  { 
    name: "Kurono", 
    country: "Japan",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop"
  },
  { 
    name: "Anordain", 
    country: "UK",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop"
  },
  { 
    name: "Beaucroft", 
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop"
  },
  { 
    name: "Nivada Grenchen", 
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop"
  },
  { 
    name: "Norqain", 
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1548096805-f63cf22ed46d?w=500&h=500&fit=crop"
  },
  { 
    name: "Rosenbusch", 
    country: "Germany",
    image: "https://images.unsplash.com/photo-1614703418052-d5b893d495bc?w=500&h=500&fit=crop"
  }
];

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
