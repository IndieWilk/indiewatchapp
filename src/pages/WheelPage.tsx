import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Star, PartyPopper, Award, Timer } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const WheelPage = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showPrize, setShowPrize] = useState(false);
  
  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setShowPrize(true);
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
        
        <Card className="border-primary border-2 overflow-hidden relative">
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
                Spin once a month to win entries to our monthly prize draw
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

        <Dialog open={showPrize} onOpenChange={setShowPrize}>
          <DialogContent className="sm:max-w-md">
            <DialogTitle className="text-center mb-4">This Month's Prize is...</DialogTitle>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[300px] h-[300px] bg-primary/20 rounded-lg flex items-center justify-center">
                <Gift className="h-24 w-24 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Mystery Watch Prize</h3>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default WheelPage;
