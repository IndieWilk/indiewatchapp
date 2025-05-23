import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { User, ShoppingCart, Watch, Gift, Search } from "lucide-react";
import { SearchCommand } from "./SearchCommand";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const BRANDS = [
  "baltic", "brew", "farer", "halios", "lorier", "monta", 
  "autodromo", "kurono", "anordain", "beaucroft", 
  "nivada-grenchen", "norqain"
];

const BRAND_PRODUCTS = {
  baltic: [
    { name: "Aquascaphe Dual-Crown", slug: "aquascaphe-dual-crown" },
    { name: "Bicompax 002", slug: "bicompax-002" },
    { name: "HMS 002", slug: "hms-002" }
  ],
  brew: [
    { name: "Retromatic", slug: "retromatic" },
    { name: "Metric", slug: "metric" },
    { name: "Retrograph", slug: "retrograph" }
  ],
  farer: [
    { name: "Bernina Hand-Wound", slug: "bernina-hand-wound" },
    { name: "Lander IV", slug: "lander-iv" },
    { name: "Carnegie Chronograph", slug: "carnegie-chronograph" }
  ],
  lorier: [
    { name: "Neptune IV", slug: "neptune-iv" },
    { name: "Falcon IV", slug: "falcon-iv" },
    { name: "Hyperion", slug: "hyperion" }
  ],
  monta: [
    { name: "Skyquest", slug: "skyquest" },
    { name: "Oceanking", slug: "oceanking" },
    { name: "Atlas", slug: "atlas" }
  ],
  halios: [
    { name: "Universa", slug: "universa" },
    { name: "Fairwind", slug: "fairwind" },
    { name: "Seaforth", slug: "seaforth" }
  ],
  rosenbusch: [
    { name: "The Quest RB200", slug: "the-quest-rb200" },
    { name: "The Horizon", slug: "the-horizon" }
  ],
};

const MainNav = () => {
  const navigate = useNavigate();

  const handleRandomWatch = () => {
    const availableBrands = Object.keys(BRAND_PRODUCTS);
    const randomBrand = availableBrands[Math.floor(Math.random() * availableBrands.length)];
    
    const brandProducts = BRAND_PRODUCTS[randomBrand as keyof typeof BRAND_PRODUCTS];
    const randomProduct = brandProducts[Math.floor(Math.random() * brandProducts.length)];
    
    navigate(`/shop/${randomBrand}/${randomProduct.slug}`);
  };

  // Temporary data - in a real app this would come from a global state/context
  const cartItems = [
    {
      name: "Baltic Aquascaphe",
      rrp: 649,
    }
  ];

  const calculatePrizeEntries = (total: number): number => {
    return Math.floor(total / 100) * 5;
  };

  const totalEntries = cartItems.reduce((acc, item) => acc + calculatePrizeEntries(item.rrp), 0);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10 rounded-md overflow-hidden shadow-md transition-transform hover:scale-105" />
        </Link>
        
        <div className="flex items-center gap-2 ml-4">
          <Button 
            variant="outline" 
            className="hover:bg-primary/10 gap-2"
            title="Random Watch"
            onClick={handleRandomWatch}
          >
            <Watch className="h-5 w-5 text-primary" />
            Random Watch
          </Button>

          <Button 
            variant="outline" 
            className="hover:bg-primary/10 gap-2 relative"
            onClick={() => navigate('/monthly-prize')}
          >
            <Gift className="h-5 w-5 text-primary" />
            Monthly Prize
            <Badge 
              variant="secondary" 
              className="absolute -top-2 -right-2 bg-blue-500 text-white hover:bg-blue-600"
              title="Your prize draw entries"
            >
              {totalEntries}
            </Badge>
          </Button>
        </div>
        
        <NavigationMenu className="hidden md:flex mx-6">
          <NavigationMenuList>
            
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex-1"></div>
        
        <div className="flex items-center space-x-4">
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
