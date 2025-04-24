
import React from 'react';
import MainNav from '@/components/MainNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { ShoppingBag } from 'lucide-react';

const CartPage = () => {
  // Placeholder data - in a real app this would come from a cart context/store
  const cartItems = [
    {
      name: "Baltic Aquascaphe",
      image: "https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=500",
      rrp: 649,
      brand: "Baltic"
    }
  ];

  const recommendedItems = [
    {
      name: "Lorier Neptune",
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=500",
      rrp: 499,
      brand: "Lorier"
    },
    {
      name: "Brew Metric",
      image: "https://images.unsplash.com/photo-1547996160-81dfa6f585aa?q=80&w=500",
      rrp: 395,
      brand: "Brew"
    },
    {
      name: "Farer Bernina",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=500",
      rrp: 875,
      brand: "Farer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 overflow-hidden rounded-md">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-muted-foreground">£{item.rrp}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£{cartItems.reduce((acc, item) => acc + item.rrp, 0)}</span>
                </div>
              </div>
              <Button className="w-full" size="lg">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Buy Now
              </Button>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Other pieces you may like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendedItems.map((item, index) => (
              <ProductCard 
                key={index}
                name={item.name}
                image={item.image}
                rrp={item.rrp}
                brand={item.brand}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
