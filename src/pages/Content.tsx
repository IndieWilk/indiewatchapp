
import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import { Rss, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Content = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <Rss className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Watch News Feed</h1>
          </div>
          
          <div className="w-full md:w-64">
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="text-center py-16">
          <h3 className="text-lg font-medium mb-2">No articles available</h3>
          <p className="text-muted-foreground">News articles will appear here once added</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
