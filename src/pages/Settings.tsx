
import React from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Compass, Newspaper, MessageSquare } from 'lucide-react';

const Settings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Watch Geek Wheel</h1>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Card className="col-span-1 md:col-span-2 border-primary border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-6 w-6 text-primary" />
                The Watch Geek Wheel
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center p-12">
              <div className="w-64 h-64 rounded-full border-4 border-primary-400 flex items-center justify-center mb-6">
                <div className="text-center px-8">
                  <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-medium">Spin The Wheel</p>
                </div>
              </div>
              <p className="mt-4 text-base text-muted-foreground max-w-md">
                Three lucky watch geeks can win a watch from one of our partners each month.
              </p>
              <Button className="mt-6">Spin Now</Button>
            </CardContent>
          </Card>
          
          <Card className="border-primary border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-6 w-6 text-primary" />
                Discover Baltic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn about Baltic watches, our featured partner this month. Explore their unique craftsmanship and signature designs.
              </p>
              <Button variant="outline" className="mt-4">Learn More</Button>
            </CardContent>
          </Card>
          
          <Card className="border-primary border-2">
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
              <Button variant="outline" className="mt-4">Read More</Button>
            </CardContent>
          </Card>
          
          <Card className="col-span-1 md:col-span-2 border-primary border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                What the Community Are Saying
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="italic">"Baltic's Aquascaphe GMT is my daily driver. The build quality is exceptional for the price."</p>
                  <p className="text-sm text-muted-foreground mt-2">- Alex M.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="italic">"Love my new Baltic Bicompax 002. The vintage styling with modern reliability is perfect."</p>
                  <p className="text-sm text-muted-foreground mt-2">- Sarah T.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="italic">"Just received my HMS 002 and I'm blown away by the quality and attention to detail."</p>
                  <p className="text-sm text-muted-foreground mt-2">- James R.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
