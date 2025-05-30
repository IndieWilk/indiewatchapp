
import React from 'react';
import MainNav from '@/components/MainNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const CartPage = () => {
  // Empty arrays for clean slate
  const cartItems: any[] = [];
  const recommendedItems: any[] = [];

  const cartTotal = 0;

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="text-center py-8">
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£{cartTotal}</span>
                </div>
              </div>
              <Button className="w-full" size="lg" disabled>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Buy Now
              </Button>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Other pieces you may like</h2>
          <div className="text-center py-8">
            <p className="text-muted-foreground">No recommendations available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
