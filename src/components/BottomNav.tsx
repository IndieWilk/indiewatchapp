
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
      icon: () => (
        <div className="relative">
          <Clock className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5" />
          <Cog className="h-5 w-5 opacity-50" />
        </div>
      ),
      path: '/wheel',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = typeof item.icon === 'function' 
            ? item.icon 
            : (Icon => <Icon className="h-5 w-5 mb-1" />);
          
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
              {typeof item.icon === 'function' 
                ? <div className="mb-1">{IconComponent}</div>
                : <IconComponent />}
              <span className="text-xs">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

