
import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Clock, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
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
  <Card className="overflow-hidden group transition-all hover:shadow-md">
    <div className="aspect-video bg-muted relative overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title} 
        className="object-cover w-full h-full transition-transform group-hover:scale-105"
      />
      <div className="absolute top-3 left-3">
        <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
          {article.category}
        </span>
      </div>
    </div>
    <CardContent className="p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <span>{article.date}</span>
        <span>•</span>
        <Clock className="h-3 w-3" />
        <span>{article.readTime}</span>
      </div>
      <h3 className="font-medium mb-1">{article.title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{article.snippet}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm">By {article.author}</span>
        <Link to={`/content/${article.id}`} className="text-primary text-sm font-medium inline-flex items-center">
          Read <ChevronRight className="h-3 w-3 ml-1" />
        </Link>
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
        <div className="bg-primary/10 rounded-lg p-8 text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-foreground">
            Independent Watch News Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            IndieWatch pulls all the latest news of the independent watch world into one place.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Latest News</h2>
          
          <div className="relative w-full md:w-auto md:max-w-xs">
            <div className="flex items-center rounded-md border bg-background pr-3">
              <Input
                type="search"
                placeholder="Search brands..."
                className="border-0 focus-visible:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="rounded-full">All</Button>
            <Button variant="outline" size="sm" className="rounded-full">Reviews</Button>
            <Button variant="outline" size="sm" className="rounded-full">Industry</Button>
            <Button variant="outline" size="sm" className="rounded-full">History</Button>
            <Button variant="outline" size="sm" className="rounded-full">Interviews</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h3>
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground mb-4">Get the latest articles, reviews, and news from the world of independent watchmaking.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
