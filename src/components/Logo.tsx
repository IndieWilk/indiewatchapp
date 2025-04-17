
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.HTMLAttributes<SVGSVGElement> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={cn("text-primary", className)}
      fill="currentColor"
      {...props}
    >
      <image 
        href="/lovable-uploads/14ffdd9a-e013-4b98-ab7d-c746e0831b48.png" 
        width="100" 
        height="100" 
      />
    </svg>
  );
};

export default Logo;
