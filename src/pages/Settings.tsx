import React, { useState, useRef, useEffect } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from "sonner";
import { Slider } from '@/components/ui/slider';
import { Gift, Trophy, Medal } from 'lucide-react';

const Settings = () => {
  // Wheel state
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [canSpin, setCanSpin] = useState(true);
  const [prize, setPrize] = useState("");
  const spinTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const prizes = [
    "Winner: Watch Tool Kit",
    "Unlucky: Try Again",
    "Winner: 10% Discount",
    "Unlucky: No Prize",
    "Winner: Free Shipping",
    "Unlucky: Better Luck Next Time",
    "Winner: Mystery Gift",
    "Unlucky: No Reward"
  ];

  const spinWheel = () => {
    if (isSpinning || !canSpin) return;
    
    setIsSpinning(true);
    setPrize("");
    
    // Random rotation between 2000 and 5000 degrees + offset to ensure it stops at a prize
    const spinDegrees = 2000 + Math.random() * 3000;
    const segmentSize = 360 / prizes.length;
    const stopAt = spinDegrees + (segmentSize / 2);
    
    setRotation(prevRotation => prevRotation + spinDegrees);
    
    // Determine which prize is won after spinning
    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current);
    }
    
    spinTimeoutRef.current = setTimeout(() => {
      setIsSpinning(false);
      setCanSpin(false);
      
      // Calculate which prize was won
      const normalizedRotation = (rotation + spinDegrees) % 360;
      const prizeIndex = Math.floor(normalizedRotation / segmentSize);
      const wonPrize = prizes[prizes.length - 1 - prizeIndex];
      
      setPrize(wonPrize);
      toast.success(`You won: ${wonPrize}!`);
      
      // In a real app, this would be persisted to a database
    }, 5000); // 5 seconds for the wheel to stop spinning
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current) {
        clearTimeout(spinTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">The Wheel</h1>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Monthly Reward Wheel
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-2">
                  Each month, three lucky watch geeks can win a watch from one of our partners. Spin to play!
                </p>
                {canSpin ? (
                  <p className="text-sm text-primary font-medium">You have 1 spin available</p>
                ) : (
                  <p className="text-sm text-muted-foreground">Your next spin will be available on May 1, 2025</p>
                )}
              </div>
              
              <div className="relative w-64 h-64 mb-8">
                {/* Wheel indicator (pointer) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-primary" />
                
                {/* The wheel - just a blue outline */}
                <div 
                  className="w-full h-full rounded-full border-4 border-primary relative overflow-hidden"
                  style={{ 
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning ? 'transform 5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none'
                  }}
                />
              </div>
              
              {prize && (
                <div className="mb-6 text-center animate-fade-in">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Gift className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium">Congratulations!</h3>
                  </div>
                  <p>You won: <span className="text-primary font-bold">{prize}</span></p>
                </div>
              )}
              
              <Button 
                onClick={spinWheel} 
                disabled={isSpinning || !canSpin}
                size="lg"
                className="relative overflow-hidden group"
              >
                {isSpinning ? 'Spinning...' : canSpin ? 'Spin the Wheel' : 'Come back next month'}
                {canSpin && !isSpinning && (
                  <span className="absolute inset-0 flex justify-center items-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Medal className="h-5 w-5 mr-2" /> Win Prizes!
                  </span>
                )}
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="profile">Edit Profile</Label>
                <Button variant="outline" id="profile">Manage</Button>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="payment">Payment Methods</Label>
                <Button variant="outline" id="payment">Manage</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="new-watches" className="block mb-1">New Watches</Label>
                  <p className="text-sm text-muted-foreground">Get notified when new watches are added</p>
                </div>
                <Switch id="new-watches" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="community-posts" className="block mb-1">Community Posts</Label>
                  <p className="text-sm text-muted-foreground">Get notified about new community discussions</p>
                </div>
                <Switch id="community-posts" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="articles" className="block mb-1">New Articles</Label>
                  <p className="text-sm text-muted-foreground">Get notified when new articles are published</p>
                </div>
                <Switch id="articles" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Display</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="theme-mode" className="block mb-1">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Toggle between light and dark mode</p>
                </div>
                <Switch id="theme-mode" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
