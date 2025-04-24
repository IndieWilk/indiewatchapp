
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { User, ShoppingCart, Watch } from "lucide-react";
import { SearchCommand } from "./SearchCommand";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

// Define available brands
const BRANDS = [
  "baltic", "brew", "farer", "halios", "lorier", "monta", 
  "autodromo", "kurono", "anordain", "beaucroft", 
  "nivada-grenchen", "norqain"
];

const MainNav = () => {
  const navigate = useNavigate();

  const handleRandomWatch = () => {
    // Instead of trying to navigate to a specific watch (which doesn't exist yet),
    // navigate to a random brand page
    const randomBrand = BRANDS[Math.floor(Math.random() * BRANDS.length)];
    navigate(`/shop/${randomBrand}`);
    
    // Show a toast to inform the user what happened
    toast.info(`Exploring ${randomBrand.charAt(0).toUpperCase() + randomBrand.slice(1)} watches`, {
      description: "We'll have individual watch pages soon!"
    });
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10 rounded-md overflow-hidden shadow-md transition-transform hover:scale-105" />
        </Link>
        
        <Button 
          variant="outline" 
          className="ml-4 hover:bg-primary/10 gap-2"
          title="Random Watch"
          onClick={handleRandomWatch}
        >
          <Watch className="h-5 w-5 text-primary" />
          Random Watch
        </Button>
        
        <NavigationMenu className="hidden md:flex mx-6">
          <NavigationMenuList>
            
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex-1 flex justify-center">
          <SearchCommand />
        </div>
        
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Profile">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/profile" className="flex items-center">
                  Profile and Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/security" className="flex items-center">
                  Security and Safety
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/feedback" className="flex items-center">
                  Feedback and Issues
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
