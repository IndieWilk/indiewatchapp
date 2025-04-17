
import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Compass, Newspaper, MessageSquare, Star, PartyPopper, Award, Timer } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Settings = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  
  const handleSpin = () => {
    setIsSpinning(true);
    // Stop spinning after 3 seconds
    setTimeout(() => {
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
          <Star className="h-6 w-6 text-primary animate-pulse" />
          Watch Geek Wheel
          <Star className="h-6 w-6 text-primary animate-pulse" />
        </h1>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Card className="col-span-1 md:col-span-2 border-primary border-2 overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-6 w-6 text-primary" />
                <span>The Watch Geek Wheel</span>
                <PartyPopper className="h-5 w-5 text-primary animate-bounce ml-2" />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex flex-col items-center justify-center text-center p-12 relative z-10">
              <div 
                className={`w-64 h-64 rounded-full border-4 border-primary-400 flex items-center justify-center mb-6 relative overflow-hidden shadow-lg 
                  ${isSpinning ? 'animate-spin' : 'hover:scale-105 transition-transform duration-300'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/30 to-primary-600/30" />
                
                {/* Wheel segments */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary-300/20 transform -rotate-45" />
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-400/20 transform rotate-45" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary-500/20 transform -rotate-135" />
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary-600/20 transform rotate-135" />
                </div>
                
                <div className="text-center px-8 relative z-10 bg-background/70 p-4 rounded-lg backdrop-blur-sm">
                  <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-medium">Spin The Wheel</p>
                </div>
              </div>
              
              <div className="relative">
                <p className="mt-4 text-base text-muted-foreground max-w-md">
                  Three lucky watch geeks can win a watch from one of our partners each month.
                </p>
                <Button 
                  onClick={handleSpin} 
                  disabled={isSpinning}
                  className="mt-6 relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {isSpinning ? (
                      <>
                        <Timer className="mr-2 h-5 w-5 animate-spin" /> 
                        Spinning...
                      </>
                    ) : (
                      <>
                        <Award className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" /> 
                        Spin Now
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-primary border-2 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-6 w-6 text-primary group-hover:rotate-45 transition-transform duration-500" />
                Discover Baltic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn about Baltic watches, our featured partner this month. Explore their unique craftsmanship and signature designs.
              </p>
              <Button variant="outline" className="mt-4 relative overflow-hidden group">
                <span className="relative z-10">Learn More</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-primary border-2 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Newspaper className="h-6 w-6 text-primary" />
                Latest Baltic News
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stay updated with the latest releases and announcements from Baltic watches.
              </p>
              <Button variant="outline" className="mt-4 relative overflow-hidden group">
                <span className="relative z-10">Read More</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="col-span-1 md:col-span-2 border-primary border-2 hover:shadow-md hover:shadow-primary/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                What the Community Are Saying
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/3">
                    <div className="bg-muted/50 p-4 rounded-lg h-full hover:bg-primary/5 transition-colors duration-300">
                      <p className="italic">"Baltic's Aquascaphe GMT is my daily driver. The build quality is exceptional for the price."</p>
                      <p className="text-sm text-muted-foreground mt-2 flex items-center">
                        <Star className="h-3 w-3 text-primary mr-1" />
                        Alex M.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="bg-muted/50 p-4 rounded-lg h-full hover:bg-primary/5 transition-colors duration-300">
                      <p className="italic">"Love my new Baltic Bicompax 002. The vintage styling with modern reliability is perfect."</p>
                      <p className="text-sm text-muted-foreground mt-2 flex items-center">
                        <Star className="h-3 w-3 text-primary mr-1" />
                        Sarah T.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="bg-muted/50 p-4 rounded-lg h-full hover:bg-primary/5 transition-colors duration-300">
                      <p className="italic">"Just received my HMS 002 and I'm blown away by the quality and attention to detail."</p>
                      <p className="text-sm text-muted-foreground mt-2 flex items-center">
                        <Star className="h-3 w-3 text-primary mr-1" />
                        James R.
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
