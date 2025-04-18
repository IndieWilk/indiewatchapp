import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import MainNav from "@/components/MainNav";

const FeedbackPage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }
    
    // For now just show a success message
    toast.success("Thank you for your feedback!");
    setMessage('');
  };

  const handleReportBug = () => {
    if (!message.trim()) {
      toast.error("Please describe the bug");
      return;
    }
    
    // For now just show a success message
    toast.success("Bug report submitted. Thank you!");
    setMessage('');
  };

  return (
    <div>
      <MainNav />
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Need to tell us something?
        </h2>
        <div className="space-y-4">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us how we can improve"
            className="min-h-[150px]"
          />
          <Button 
            onClick={handleSubmit}
            className="w-full"
          >
            Send Feedback
          </Button>
          <Button 
            onClick={handleReportBug}
            variant="outline"
            className="w-full mt-2"
          >
            Report Bug
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
