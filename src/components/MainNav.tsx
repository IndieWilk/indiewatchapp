import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Cog } from "lucide-react";
import { SearchCommand } from "./SearchCommand";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MainNav = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 mr-4">
          <Logo className="h-10 w-10 rounded-md overflow-hidden shadow-md transition-transform hover:scale-105" />
          <span className="text-xl font-bold text-primary">IndieWatch</span>
        </Link>
        
        <NavigationMenu className="hidden md:flex mx-6">
          <NavigationMenuList>
            
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center ml-auto space-x-4">
          <SearchCommand />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Profile">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/profile" className="flex items-center">
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/wishlist" className="flex items-center">
                  My Wishlist
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/security" className="flex items-center">
                  Security
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" aria-label="The Wheel">
            <Cog className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              0
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
