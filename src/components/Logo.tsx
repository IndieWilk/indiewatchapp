
import React from 'react';
import { cn } from '@/lib/utils';
import { Watch } from 'lucide-react';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={cn("logo-container", className)} {...props}>
      <div className="h-14 w-14 bg-primary rounded-lg flex items-center justify-center">
        <Watch className="h-8 w-8 text-primary-foreground" />
      </div>
    </div>
  );
};

export default Logo;
