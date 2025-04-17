
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

const mockResults: SearchResult[] = [
  { 
    id: '1', 
    category: 'shop', 
    title: 'Baltic Aquascaphe', 
    description: 'Vintage-inspired dive watch',
    link: '/shop/baltic' 
  },
  { 
    id: '2', 
    category: 'shop', 
    title: 'Lorier Neptune', 
    description: 'Modern tool watch',
    link: '/shop/lorier' 
  },
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
        <CommandInput placeholder="Search brands, topics, news..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Shop">
            {mockResults
              .filter(result => result.category === 'shop')
              .map(result => (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="flex items-center gap-2"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <div>
                    <p>{result.title}</p>
                    {result.description && (
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    )}
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
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
