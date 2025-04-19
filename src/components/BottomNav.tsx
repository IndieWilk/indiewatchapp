
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Users, Newspaper, Clock, Cog } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    {
      name: 'Discover',
      icon: Home,
      path: '/',
    },
    {
      name: 'Shop',
      icon: ShoppingBag,
      path: '/shop',
    },
    {
      name: 'Community',
      icon: Users,
      path: '/community',
    },
    {
      name: 'News',
      icon: Newspaper,
      path: '/content',
    },
    {
      name: 'The Wheel',
      icon: 'wheel',
      path: '/wheel',
    },
  ];

  // Custom icon component for The Wheel
  const WheelIcon = () => (
    <div className="relative">
      <Clock className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5" />
      <Cog className="h-5 w-5 opacity-50" />
    </div>
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full px-2",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary transition-colors"
              )}
            >
              <div className="mb-1">
                {item.icon === 'wheel' ? (
                  <WheelIcon />
                ) : (
                  React.createElement(item.icon, { className: "h-5 w-5" })
                )}
              </div>
              <span className="text-xs">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
