import React from 'react';
import { useParams } from 'react-router-dom';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

// Using the existing BRANDS data from Shop.tsx
interface Brand {
  name: string;
  country: string;
  image: string;
}

const BRANDS: Brand[] = [
  { 
    name: "Baltic", 
    country: "France",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&h=500&fit=crop"
  },
  { 
    name: "Brew", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop"
  },
  { 
    name: "Farer", 
    country: "UK",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop"
  },
  { 
    name: "Halios", 
    country: "Canada",
    image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop"
  },
  { 
    name: "Lorier", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop"
  },
  { 
    name: "Monta", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop"
  },
  { 
    name: "Autodromo", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1569411032431-07598b0012c2?w=500&h=500&fit=crop"
  },
  { 
    name: "Kurono", 
    country: "Japan",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop"
  },
  { 
    name: "Anordain", 
    country: "UK",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop"
  },
  { 
    name: "Beaucroft", 
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop"
  },
  { 
    name: "Nivada Grenchen", 
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop"
  },
  { 
    name: "Norqain", 
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1548096805-f63cf22ed46d?w=500&h=500&fit=crop"
  }
];

const BrandPage = () => {
  const { brandName } = useParams();
  const brand = BRANDS.find(b => b.name.toLowerCase() === brandName?.toLowerCase());

  if (!brand) {
    return (
      <div>
        <MainNav />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Brand not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <AspectRatio ratio={1 / 1}>
              <img 
                src={brand.image} 
                alt={`${brand.name} brand`}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </Card>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{brand.name}</h1>
              <Badge variant="secondary">{brand.country}</Badge>
            </div>
            
            <div className="space-y-4">
              <Button size="lg" className="w-full">
                View Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
