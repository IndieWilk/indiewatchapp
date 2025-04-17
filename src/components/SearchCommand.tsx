import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search, ShoppingBag, MessageSquare, Newspaper } from 'lucide-react';

interface SearchResult {
  id: string;
  category: 'shop' | 'community' | 'news';
  title: string;
  description?: string;
  link: string;
}

// Keep the existing BRANDS data structure from Shop.tsx
const BRANDS = [
  { name: "Baltic", country: "France" },
  { name: "Brew", country: "USA" },
  { name: "Farer", country: "UK" },
  { name: "Halios", country: "Canada" },
  { name: "Lorier", country: "USA" },
  { name: "Monta", country: "USA" },
  { name: "Autodromo", country: "USA" },
  { name: "Kurono", country: "Japan" },
  { name: "Anordain", country: "UK" },
  { name: "Beaucroft", country: "Switzerland" },
  { name: "Nivada Grenchen", country: "Switzerland" },
  { name: "Norqain", country: "Switzerland" }
];

const mockResults: SearchResult[] = [
  { 
    id: '3', 
    category: 'community', 
    title: 'New Lorier Neptune Series IV Discussion', 
    description: 'Active discussion about the latest release',
    link: '/community' 
  },
  { 
    id: '4', 
    category: 'news', 
    title: 'The Rise of Independent Watchmaking', 
    description: 'Latest industry insights',
    link: '/content' 
  },
];

export function SearchCommand() {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
    navigate(result.link);
  };

  // Filter brands based on search query
  const filteredBrands = BRANDS.filter(brand => 
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    
    // If there's exactly one brand match and user has typed at least 2 characters
    if (value.length >= 2) {
      const exactMatch = BRANDS.find(
        brand => brand.name.toLowerCase() === value.toLowerCase()
      );
      
      if (exactMatch) {
        setOpen(false);
        navigate(`/shop/${exactMatch.name.toLowerCase()}`);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <div className="flex items-center gap-2 text-muted-foreground">
          <Search className="h-4 w-4" />
          <span>Search brands, topics, news...</span>
        </div>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search brands, topics, news..." 
          value={searchQuery}
          onValueChange={handleSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {filteredBrands.length > 0 && (
            <CommandGroup heading="Brands">
              {filteredBrands.map(brand => (
                <CommandItem
                  key={brand.name}
                  onSelect={() => {
                    setOpen(false);
                    navigate(`/shop/${brand.name.toLowerCase()}`);
                  }}
                  className="flex items-center gap-2"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <div>
                    <p>{brand.name}</p>
                    <p className="text-sm text-muted-foreground">{brand.country}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          <CommandGroup heading="Community">
            {mockResults
              .filter(result => result.category === 'community')
              .map(result => (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <div>
                    <p>{result.title}</p>
                    {result.description && (
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    )}
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="News">
            {mockResults
              .filter(result => result.category === 'news')
              .map(result => (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="flex items-center gap-2"
                >
                  <Newspaper className="h-4 w-4" />
                  <div>
                    <p>{result.title}</p>
                    {result.description && (
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    )}
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
