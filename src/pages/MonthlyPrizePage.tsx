
import React from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

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
                <div className="w-[300px] h-[300px] bg-primary/20 rounded-lg flex items-center justify-center">
                  <Gift className="h-24 w-24 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C]">Mystery Watch Prize</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MonthlyPrizePage;
