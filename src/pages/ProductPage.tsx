import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ArrowLeft, Ticket } from 'lucide-react';
import { toast } from 'sonner';

interface Product {
  name: string;
  brand: string;
  image: string;
  rrp: number;
}

const BRAND_PRODUCTS: { [key: string]: Product[] } = {
  baltic: [
    { brand: "Baltic", name: "Aquascaphe Dual-Crown", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&h=500&fit=crop", rrp: 650 },
    { brand: "Baltic", name: "Bicompax 002", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 1890 },
    { brand: "Baltic", name: "HMS 002", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 400 },
    { brand: "Baltic", name: "MR01", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 630 },
    { brand: "Baltic", name: "Tricompax", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop", rrp: 1990 },
    { brand: "Baltic", name: "Aquascaphe Classic", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop", rrp: 580 }
  ],
  brew: [
    { brand: "Brew", name: "Retromatic", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop", rrp: 425 },
    { brand: "Brew", name: "Metric", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 395 },
    { brand: "Brew", name: "HP-1", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 350 },
    { brand: "Brew", name: "Retrograph", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 375 },
    { brand: "Brew", name: "Mastergraph", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop", rrp: 595 },
    { brand: "Brew", name: "P-51", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop", rrp: 425 }
  ],
  farer: [
    { brand: "Farer", name: "Bernina Hand-Wound", image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop", rrp: 875 },
    { brand: "Farer", name: "Lander IV", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 995 },
    { brand: "Farer", name: "Carnegie Chronograph", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 1680 },
    { brand: "Farer", name: "Stanhope", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 895 },
    { brand: "Farer", name: "Durham", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop", rrp: 945 }
  ],
  halios: [
    { brand: "Halios", name: "Universa", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 735 },
    { brand: "Halios", name: "Fairwind", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 775 },
    { brand: "Halios", name: "Seaforth", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 725 },
    { brand: "Halios", name: "Tropik B", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop", rrp: 695 }
  ],
  lorier: [
    { brand: "Lorier", name: "Neptune IV", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop", rrp: 499 },
    { brand: "Lorier", name: "Falcon IV", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 499 },
    { brand: "Lorier", name: "Hyperion", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 499 },
    { brand: "Lorier", name: "Gemini", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 599 }
  ],
  monta: [
    { brand: "Monta", name: "Skyquest", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop", rrp: 2190 },
    { brand: "Monta", name: "Oceanking", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 2190 },
    { brand: "Monta", name: "Atlas", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 1950 },
    { brand: "Monta", name: "Noble", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 1750 }
  ],
  autodromo: [
    { brand: "Autodromo", name: "Group B", image: "https://images.unsplash.com/photo-1569411032431-07598b0012c2?w=500&h=500&fit=crop", rrp: 995 },
    { brand: "Autodromo", name: "Intereuropa", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 1250 },
    { brand: "Autodromo", name: "Monoposto", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 875 },
    { brand: "Autodromo", name: "Group B Night Stage", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 1100 }
  ],
  kurono: [
    { brand: "Kurono", name: "Grand Akane", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 3300 },
    { brand: "Kurono", name: "Chronograph 2", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 3993 },
    { brand: "Kurono", name: "Bunkyō Tokyo", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 1738 }
  ],
  anordain: [
    { brand: "Anordain", name: "Model 1", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop", rrp: 1950 },
    { brand: "Anordain", name: "Model 2", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 1850 },
    { brand: "Anordain", name: "Model 3", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 1750 }
  ],
  beaucroft: [
    { brand: "Beaucroft", name: "Modernist", image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop", rrp: 2500 },
    { brand: "Beaucroft", name: "Classic", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 2200 },
    { brand: "Beaucroft", name: "Sport", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 2400 }
  ],
  "nivada grenchen": [
    { brand: "Nivada Grenchen", name: "Chronomaster", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop", rrp: 1850 },
    { brand: "Nivada Grenchen", name: "Antarctic", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 795 },
    { brand: "Nivada Grenchen", name: "Depthmaster", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 1095 }
  ],
  norqain: [
    { brand: "Norqain", name: "Freedom 60", image: "https://images.unsplash.com/photo-1548096805-f63cf22ed46d?w=500&h=500&fit=crop", rrp: 2990 },
    { brand: "Norqain", name: "Adventure Sport", image: "https://images.unsplash.com/photo-1548171915-f1ce15c6a10a?w=500&h=500&fit=crop", rrp: 2490 },
    { brand: "Norqain", name: "Independence 22", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop", rrp: 3990 }
  ]
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(price);
};

const calculatePrizeEntries = (price: number) => {
  return Math.floor((price / 100) * 5);
};

const ProductPage = () => {
  const { brandName, productSlug } = useParams();
  
  const brand = brandName?.toLowerCase();
  const products = brand ? BRAND_PRODUCTS[brand] : [];
  const product = products?.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === productSlug);

  const handleAddToCart = () => {
    if (product) {
      const entries = calculatePrizeEntries(product.rrp);
      toast.success("Added to cart", {
        description: `${product.name} has been added to your cart. You'll receive ${entries} prize draw entries!`
      });
    }
  };

  if (!product) {
    return (
      <div>
        <MainNav />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </div>
    );
  }

  const prizeEntries = calculatePrizeEntries(product.rrp);

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          asChild
        >
          <Link to={`/shop/${brand}`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to {product.brand} Collection
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <AspectRatio ratio={1 / 1}>
              <img 
                src={product.image} 
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {formatPrice(product.rrp)}
              </Badge>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600">
                A beautifully crafted timepiece from {product.brand}, the {product.name} represents 
                the perfect blend of traditional watchmaking and contemporary design.
              </p>
            </div>

            <div className="bg-primary text-black p-4 rounded-lg flex items-center gap-2">
              <Ticket className="h-5 w-5 text-black" />
              <p className="text-sm">
                Get <span className="font-bold">{prizeEntries} entries</span> to our monthly prize draw with this purchase!
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
