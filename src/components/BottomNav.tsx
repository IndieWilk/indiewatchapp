
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Users, Newspaper, Gift } from 'lucide-react';
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
      icon: Gift,
      path: '/wheel',
    },
  ];

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
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
