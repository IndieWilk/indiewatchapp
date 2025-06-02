
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { User, ShoppingCart, Search, ShoppingBag, Users, Newspaper, Cog } from "lucide-react";
import { SearchCommand } from "./SearchCommand";
import Logo from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center mr-6">
          <Logo />
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/shop" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
                <ShoppingBag className="h-4 w-4" />
                Shop
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/community" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
                <Users className="h-4 w-4" />
                Community
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/content" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
                <Newspaper className="h-4 w-4" />
                News
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/wheel" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
                <Cog className="h-4 w-4" />
                The Wheel
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-4 ml-auto">
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
