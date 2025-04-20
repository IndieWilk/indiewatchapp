import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rss, Newspaper } from 'lucide-react';
import { Input } from '@/components/ui/input';

const ARTICLES = [
  {
    id: 1,
    title: "The Rise of Independent Watchmaking",
    snippet: "How small brands are challenging the Swiss giants with innovation and craftsmanship",
    image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=500",
    date: "April 10, 2025",
    readTime: "8 min read",
    author: "James Stacey",
    category: "Industry"
  },
  {
    id: 2,
    title: "Hands-On: Baltic Aquascaphe Titanium",
    snippet: "A deeper look at one of the most anticipated micro-brand releases of the year",
    image: "https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=500",
    date: "April 8, 2025",
    readTime: "12 min read",
    author: "Zach Weiss",
    category: "Reviews"
  },
  {
    id: 3,
    title: "The History of Dive Watches",
    snippet: "From military necessity to desk diving: the evolution of underwater timepieces",
    image: "https://images.unsplash.com/photo-1589439108763-8c9a58c154b3?q=80&w=500",
    date: "April 3, 2025",
    readTime: "15 min read",
    author: "Jason Heaton",
    category: "History"
  },
  {
    id: 4,
    title: "Material Science: Titanium vs. Steel",
    snippet: "Understanding the pros and cons of different case materials in modern watches",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=500",
    date: "March 28, 2025",
    readTime: "10 min read",
    author: "Jack Forster",
    category: "Technical"
  },
  {
    id: 5,
    title: "Interview: The Founder of Brew Watches",
    snippet: "Jonathan Ferrer on his journey from industrial designer to watch brand owner",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=500",
    date: "March 20, 2025",
    readTime: "14 min read",
    author: "Ilya Ryvin",
    category: "Interviews"
  },
  {
    id: 6,
    title: "Vintage-Inspired Modern Watches",
    snippet: "How contemporary brands are drawing from the past while innovating for the future",
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=500",
    date: "March 15, 2025",
    readTime: "9 min read",
    author: "Cole Pennington",
    category: "Trends"
  }
];

const FEATURED_ARTICLE = {
  id: 7,
  title: "The New Wave of Independent Watchmaking",
  snippet: "Inside the workshops of the most innovative independent watchmakers reshaping the industry with bold designs and mechanical mastery",
  image: "https://images.unsplash.com/photo-1556813317-32e8c59c1648?q=80&w=2000",
  date: "April 15, 2025",
  readTime: "20 min read",
  author: "Benjamin Clymer",
  category: "Feature"
};

const ArticleCard = ({ article }: { article: typeof ARTICLES[0] }) => (
  <Card className="hover:shadow-md transition-all border-primary/50 border">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="hidden sm:block shrink-0">
          <Newspaper className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.category}</span>
          </div>
          <h3 className="text-lg font-semibold hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground">{article.snippet}</p>
          <div className="pt-2 text-sm">
            By <span className="text-primary">{article.author}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

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
        
        <div className="grid grid-cols-1 gap-4">
          {ARTICLES.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="gap-2">
            <Rss className="h-4 w-4" />
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
