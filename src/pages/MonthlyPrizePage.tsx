
import React from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';

const MonthlyPrizePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-[#1EAEDB] p-8">
              <h1 className="text-3xl font-bold text-[#1A1F2C] text-center mb-6">
                This Month's Prize...
              </h1>
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1547996160-81dfa6f585aa?q=80&w=500" 
                  alt="Monthly Prize Watch"
                  className="rounded-lg w-full max-w-[300px] shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MonthlyPrizePage;
