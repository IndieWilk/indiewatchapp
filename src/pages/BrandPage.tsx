
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BrandPage = () => {
  return (
    <div>
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          asChild
        >
          <Link to="/shop" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </Button>

        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Brand not found</h1>
          <p className="text-muted-foreground">No brands are currently available</p>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
