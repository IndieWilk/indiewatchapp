
import React from 'react';
import { useParams } from 'react-router-dom';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';

interface Brand {
  name: string;
  country: string;
  image: string;
  description: string;
}

const BRANDS: Brand[] = [
  { 
    name: "Baltic", 
    country: "France",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&h=500&fit=crop",
    description: "Founded in 2017, Baltic Watches is a French micro-brand that combines vintage-inspired design with modern reliability. Their watches are assembled in France using high-quality components, offering exceptional value in the entry-luxury segment."
  },
  { 
    name: "Brew", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop",
    description: "Inspired by coffee culture and industrial espresso machines, Brew Watch Co. creates unique timepieces that celebrate the ritual of coffee. Each watch features distinctive design elements drawn from vintage coffee equipment and machinery."
  },
  { 
    name: "Farer", 
    country: "UK",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop",
    description: "Farer embodies British design with Swiss precision. Known for their bold use of color and distinctive design language, they create watches that stand out while maintaining classic proportions and excellent build quality."
  },
  { 
    name: "Halios", 
    country: "Canada",
    image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop",
    description: "Halios is a pioneering micro-brand from Vancouver, Canada, specializing in robust dive watches. Their pieces are known for exceptional quality, thoughtful design, and creating a strong community following."
  },
  { 
    name: "Lorier", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop",
    description: "Lorier creates neo-vintage watches that capture the charm of mid-century timepieces while offering modern durability. Their designs focus on versatility and everyday wearability at accessible price points."
  },
  { 
    name: "Monta", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop",
    description: "Monta represents American luxury watchmaking with Swiss manufacturing precision. Their watches feature exceptional finishing and robust build quality, positioning themselves in the premium micro-brand segment."
  },
  { 
    name: "Autodromo", 
    country: "USA",
    image: "https://images.unsplash.com/photo-1569411032431-07598b0012c2?w=500&h=500&fit=crop",
    description: "Autodromo creates automotive-inspired timepieces that capture the spirit of vintage motorsport. Their designs draw heavily from dashboard instruments and the golden age of racing."
  },
  { 
    name: "Kurono", 
    country: "Japan",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop",
    description: "Kurono Tokyo, created by master watchmaker Hajime Asaoka, offers accessible pieces with Japanese design sensibility. Each watch reflects the minimalist aesthetics and attention to detail characteristic of Japanese craftsmanship."
  },
  { 
    name: "Anordain", 
    country: "UK",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop",
    description: "Anordain is known for their stunning vitreous enamel dials, made in-house in Glasgow, Scotland. They combine traditional craftsmanship with modern design sensibilities to create unique timepieces."
  },
  { 
    name: "Beaucroft", 
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop",
    description: "Beaucroft exemplifies Swiss watchmaking traditions with a modern twist. Their timepieces feature classic designs enhanced by contemporary elements and superior finishing."
  },
  { 
    name: "Nivada Grenchen", 
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop",
    description: "Nivada Grenchen, established in 1926, has been revived to recreate their iconic mid-century sports watches. Their modern pieces stay true to the original designs while incorporating contemporary reliability."
  },
  { 
    name: "Norqain", 
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1548096805-f63cf22ed46d?w=500&h=500&fit=crop",
    description: "Norqain represents a new generation of independent Swiss watchmaking. Founded by industry veterans, they create robust sport and adventure watches with distinctive design elements and high-end finishing."
  }
];

const BRAND_PRODUCTS = {
  baltic: [
    { name: "Aquascaphe Dual-Crown", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&h=500&fit=crop", rrp: 650 },
    { name: "Bicompax 002", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 1890 },
    { name: "HMS 002", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 400 },
    { name: "MR01", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 630 },
    { name: "Tricompax", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop", rrp: 1990 },
    { name: "Aquascaphe Classic", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop", rrp: 580 }
  ],
  brew: [
    { name: "Retromatic", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop", rrp: 425 },
    { name: "Metric", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 395 },
    { name: "HP-1", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 350 },
    { name: "Retrograph", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 375 },
    { name: "Mastergraph", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop", rrp: 595 },
    { name: "P-51", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop", rrp: 425 }
  ],
  // Add similar product arrays for other brands...
};

const BrandPage = () => {
  const { brandName } = useParams();
  const brand = BRANDS.find(b => b.name.toLowerCase() === brandName?.toLowerCase());
  const products = brandName ? BRAND_PRODUCTS[brandName.toLowerCase() as keyof typeof BRAND_PRODUCTS] || [] : [];

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
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
            
            <div className="prose dark:prose-invert">
              <p className="text-muted-foreground">{brand.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              rrp={product.rrp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
