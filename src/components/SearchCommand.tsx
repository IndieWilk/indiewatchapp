
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
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

  const filteredBrands = BRANDS.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleSelect = (brandName: string) => {
    setOpen(false);
    navigate(`/shop/${brandName.toLowerCase()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.length >= 2) {
      const matchingBrand = BRANDS.find(
        brand => brand.name.toLowerCase() === searchQuery.toLowerCase()
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
        className="flex items-center justify-center"
      >
        <Search className="h-5 w-5 text-muted-foreground" />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Type a brand name..." 
          value={searchQuery}
          onValueChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchQuery.length > 0 && (
            <CommandGroup heading="Suggestions">
              {filteredBrands.map((brand) => (
                <CommandItem
                  key={brand.name}
                  onSelect={() => handleSelect(brand.name)}
                >
                  <span>{brand.name}</span>
                  <span className="ml-2 text-muted-foreground text-sm">
                    {brand.country}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
