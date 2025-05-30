
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <img 
      src="/lovable-uploads/d73b9283-ded8-4f21-832e-9dcbeb592e88.png" 
      alt="IndieWatch Logo"
      className={cn("text-primary", className)}
      {...props}
    />
  );
};

export default Logo;
