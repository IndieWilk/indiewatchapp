
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  name: string;
  image: string;
  rrp: number;
}

const ProductCard = ({ name, image, rrp }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Card className="overflow-hidden">
      <AspectRatio ratio={1 / 1}>
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full"
        />
      </AspectRatio>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">{name}</h3>
        <Badge variant="secondary">RRP: {formatPrice(rrp)}</Badge>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
