
import React from "react";
import { Card } from "@/components/ui/card";
import { Shield, Key, Bell, Eye, Lock } from "lucide-react";
import MainNav from "@/components/MainNav";

const SecurityPage = () => {
  return (
    <div>
      <MainNav />
      <div className="container max-w-4xl py-8">
        <h1 className="text-3xl font-bold mb-6">Security and Safety</h1>
        
        <div className="space-y-4">
          <Card className="p-4 hover:shadow-md transition-shadow">
            <a href="/security/password" className="flex items-center">
              <Lock className="h-5 w-5 mr-4" />
              <div>
                <h2 className="font-semibold">Password Settings</h2>
                <p className="text-sm text-muted-foreground">Update your password and security preferences</p>
              </div>
            </a>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow">
            <a href="/security/2fa" className="flex items-center">
              <Key className="h-5 w-5 mr-4" />
              <div>
                <h2 className="font-semibold">Two-Factor Authentication</h2>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
            </a>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow">
            <a href="/security/privacy" className="flex items-center">
              <Eye className="h-5 w-5 mr-4" />
              <div>
                <h2 className="font-semibold">Privacy Settings</h2>
                <p className="text-sm text-muted-foreground">Control your data and privacy preferences</p>
              </div>
            </a>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow">
            <a href="/security/alerts" className="flex items-center">
              <Bell className="h-5 w-5 mr-4" />
              <div>
                <h2 className="font-semibold">Security Alerts</h2>
                <p className="text-sm text-muted-foreground">Manage your security notifications</p>
              </div>
            </a>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow">
            <a href="/security/activity" className="flex items-center">
              <Shield className="h-5 w-5 mr-4" />
              <div>
                <h2 className="font-semibold">Account Activity</h2>
                <p className="text-sm text-muted-foreground">Review your recent account activity</p>
              </div>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
