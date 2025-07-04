
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Watch } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  rrp: number;
  brand: string;
}

const ProductCard = ({ name, image, rrp, brand }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(price);
  };

  const productSlug = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link to={`/shop/${brand.toLowerCase()}/${productSlug}`}>
      <Card className="overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-md">
        <AspectRatio ratio={1 / 1}>
          <div className="w-full h-full bg-primary/20 flex items-center justify-center">
            <Watch className="h-16 w-16 text-primary" />
          </div>
        </AspectRatio>
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold mb-3">{name}</h2>
          <Badge variant="secondary">RRP: {formatPrice(rrp)}</Badge>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
