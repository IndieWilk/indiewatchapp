
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={cn("logo-container", className)} {...props}>
      <img 
        src="/lovable-uploads/59c88d89-a2ae-40d0-9d1b-217d9abc6e61.png" 
        alt="IndieWatch Logo" 
        className="h-10 w-10 object-contain"
        style={{
          filter: 'drop-shadow(0 0 0 transparent)',
          background: 'transparent',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
};

export default Logo;
