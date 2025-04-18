import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
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
        className="flex items-center justify-center text-muted-foreground"
      >
        <Search className="h-5 w-5" />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Type a brand name..." 
          value={searchQuery}
          onValueChange={handleSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandDialog>
    </>
  );
}
