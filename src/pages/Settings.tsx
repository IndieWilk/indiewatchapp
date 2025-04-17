
import React from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Settings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        <div className="grid gap-6">
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
