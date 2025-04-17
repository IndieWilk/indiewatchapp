
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { removeBackground, loadImage } from '@/utils/imageUtils';

interface LogoProps extends React.HTMLAttributes<SVGSVGElement> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  const [logoSrc, setLogoSrc] = useState('/lovable-uploads/269f5645-d531-4c96-9f04-dd5bcbb7e885.png');

  useEffect(() => {
    const removeBackgroundFromLogo = async () => {
      try {
        // Fetch the original logo image
        const response = await fetch(logoSrc);
        const blob = await response.blob();
        
        // Load the image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const backgroundRemovedBlob = await removeBackground(imageElement);
        
        // Create a URL for the background-removed image
        const backgroundRemovedUrl = URL.createObjectURL(backgroundRemovedBlob);
        setLogoSrc(backgroundRemovedUrl);
      } catch (error) {
        console.error('Failed to remove logo background:', error);
      }
    };

    removeBackgroundFromLogo();
  }, []);

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={cn("text-primary", className)}
      fill="currentColor"
      {...props}
    >
      <image 
        href={logoSrc} 
        width="100" 
        height="100" 
      />
    </svg>
  );
};

export default Logo;

