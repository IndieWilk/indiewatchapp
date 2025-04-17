import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandInput,
} from "@/components/ui/command";
import { Search } from 'lucide-react';

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

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    
    // If user has typed at least 2 characters
    if (value.length >= 2) {
      const matchingBrand = BRANDS.find(
        brand => brand.name.toLowerCase() === value.toLowerCase()
      );
      
      if (matchingBrand) {
        setOpen(false);
        navigate(`/shop/${matchingBrand.name.toLowerCase()}`);
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
          <span>Search brands...</span>
        </div>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Type a brand name..." 
          value={searchQuery}
          onValueChange={handleSearch}
        />
      </CommandDialog>
    </>
  );
}
