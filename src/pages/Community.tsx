import React, { useState } from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, MessageSquare, ThumbsUp, Clock, PenLine, Image } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const COMMUNITY_POSTS: any[] = [];

const CommunityPost = ({ post }: { post: typeof COMMUNITY_POSTS[0] }) => (
  <Card className="overflow-hidden hover:shadow-md transition-all border-primary border-2">
    <CardContent className="p-4">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <User className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-medium">{post.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">Posted by {post.author} • {post.timeAgo}</p>
          <p className="text-sm mb-3">{post.content}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-muted-foreground text-xs gap-4">
            <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
              <ThumbsUp className="h-3 w-3 mr-1" /> {post.upvotes}
            </Button>
            <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
              <MessageSquare className="h-3 w-3 mr-1" /> {post.comments}
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Community = () => {
  const [posts, setPosts] = useState(COMMUNITY_POSTS);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image: null as File | null
  });

  const handlePost = () => {
    if (!newPost.title || !newPost.content) {
      toast.error("Please fill in both title and content");
      return;
    }

    const post = {
      id: posts.length + 1,
      title: newPost.title,
      author: "CurrentUser",
      timeAgo: "Just now",
      content: newPost.content,
      comments: 0,
      upvotes: 0,
      tags: ["New"],
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', image: null });
    toast.success("Post published successfully!");
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewPost(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community</h1>
            <p className="text-muted-foreground">Join discussions about independent watches with fellow enthusiasts</p>
          </div>
          
          <div className="flex gap-3 mt-4 md:mt-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <PenLine className="h-4 w-4" />
                  Create Post
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Create a New Post</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter your post title"
                      value={newPost.title}
                      onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your post content..."
                      value={newPost.content}
                      onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => document.getElementById('photo-input')?.click()}
                    >
                      <Image className="h-4 w-4" />
                      Add Photo
                    </Button>
                    <input
                      type="file"
                      id="photo-input"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageSelect}
                    />
                    {newPost.image && (
                      <span className="text-sm text-muted-foreground">
                        {newPost.image.name}
                      </span>
                    )}
                  </div>
                  <Button onClick={handlePost} className="mt-2">
                    Publish Post
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">All Posts</Button>
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">Hot</Button>
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">New</Button>
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">Top</Button>
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">Reviews</Button>
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">Questions</Button>
            </div>
            
            <div className="space-y-4">
              {posts.length > 0 ? (
                posts.map(post => (
                  <CommunityPost key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-lg font-medium mb-2">No posts yet</h3>
                  <p className="text-muted-foreground">Be the first to start a discussion!</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-primary border-2">
              <CardContent className="p-4">
                <h3 className="font-medium mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["Baltic", "Brew", "Farer", "Halios", "Lorier", "Monta", "Reviews", "New Releases", "Questions", "Vintage", "Diving", "GMT", "Collection"].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary border-2">
              <CardContent className="p-4">
                <h3 className="font-medium mb-4">Community Guidelines</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>Focus on independent watch brands only</li>
                  <li>Be respectful to other members</li>
                  <li>No counterfeit watch discussion</li>
                  <li>No buying/selling in the main forum</li>
                  <li>Use spoiler tags for new releases</li>
                  <li>Share high-quality images</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
