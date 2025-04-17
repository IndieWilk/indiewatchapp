
import React from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center px-4 py-16">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-primary">
          IndieWatch
        </h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Discover and track the most exciting independent creators, 
          games, films, music, and more.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore Indie Creators
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
