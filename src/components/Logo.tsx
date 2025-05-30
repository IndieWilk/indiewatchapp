
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={cn("logo-container", className)} {...props}>
      <div className="h-16 w-16 flex items-center justify-center">
        <img 
          src="/lovable-uploads/496d474c-015e-4b67-b474-132116f271fd.png" 
          alt="IW Logo" 
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
