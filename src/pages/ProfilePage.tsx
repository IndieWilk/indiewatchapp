
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Mail, Lock, Bell, Shield, CreditCard, Heart } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="container max-w-4xl py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      
      <div className="space-y-4">
        <Card className="p-4 hover:shadow-md transition-shadow">
          <a href="/profile/personal" className="flex items-center">
            <User className="h-5 w-5 mr-4" />
            <div>
              <h2 className="font-semibold">Personal Information</h2>
              <p className="text-sm text-muted-foreground">Manage your personal details</p>
            </div>
          </a>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <a href="/profile/email" className="flex items-center">
            <Mail className="h-5 w-5 mr-4" />
            <div>
              <h2 className="font-semibold">Email Preferences</h2>
              <p className="text-sm text-muted-foreground">Update your email settings</p>
            </div>
          </a>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <a href="/profile/security" className="flex items-center">
            <Lock className="h-5 w-5 mr-4" />
            <div>
              <h2 className="font-semibold">Security</h2>
              <p className="text-sm text-muted-foreground">Manage your password and security settings</p>
            </div>
          </a>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <a href="/profile/notifications" className="flex items-center">
            <Bell className="h-5 w-5 mr-4" />
            <div>
              <h2 className="font-semibold">Notifications</h2>
              <p className="text-sm text-muted-foreground">Choose what updates you receive</p>
            </div>
          </a>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <a href="/profile/privacy" className="flex items-center">
            <Shield className="h-5 w-5 mr-4" />
            <div>
              <h2 className="font-semibold">Privacy</h2>
              <p className="text-sm text-muted-foreground">Manage your privacy settings</p>
            </div>
          </a>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <a href="/profile/payment" className="flex items-center">
            <CreditCard className="h-5 w-5 mr-4" />
            <div>
              <h2 className="font-semibold">Payment Methods</h2>
              <p className="text-sm text-muted-foreground">Manage your payment options</p>
            </div>
          </a>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <a href="/profile/wishlist" className="flex items-center">
            <Heart className="h-5 w-5 mr-4" />
            <div>
              <h2 className="font-semibold">Wishlist</h2>
              <p className="text-sm text-muted-foreground">View your saved items</p>
            </div>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
