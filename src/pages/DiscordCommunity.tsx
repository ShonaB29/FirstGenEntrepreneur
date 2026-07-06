
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const DiscordCommunity = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-in mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-entrepreneur-primary to-entrepreneur-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Community!</h1>
              <p className="text-xl text-gray-600 mb-8">
                You've successfully joined the SparkStart entrepreneur community. 
                Connect with fellow founders, mentors, and industry experts.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-entrepreneur-primary/10 to-entrepreneur-secondary/10 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">Join our Discord Server</h2>
              <p className="mb-6">
                Our Discord server is where all the action happens! Get instant access to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-5 shadow-sm hover-lift">
                  <h3 className="font-bold mb-2">Live Discussions</h3>
                  <p className="text-gray-600">Join voice channels for real-time networking and problem-solving.</p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm hover-lift">
                  <h3 className="font-bold mb-2">Resource Library</h3>
                  <p className="text-gray-600">Access exclusive templates, guides, and learning materials.</p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm hover-lift">
                  <h3 className="font-bold mb-2">Founder Support</h3>
                  <p className="text-gray-600">Get advice and encouragement from people who understand your journey.</p>
                </div>
              </div>
              
              <Button 
                className="bg-[#5865F2] hover:bg-[#4752c4] text-white py-6 px-8 text-lg flex items-center gap-2"
                onClick={() => window.open("https://discord.gg/entrepreneur-community", "_blank")}
              >
                <MessageSquare className="h-5 w-5" />
                Join Discord Server
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-entrepreneur-primary rounded-full text-white w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <span className="font-medium">Complete your profile</span> - Help others understand your business and expertise
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-entrepreneur-primary rounded-full text-white w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <span className="font-medium">Introduce yourself</span> - Share your story in the #introductions channel
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-entrepreneur-primary rounded-full text-white w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <span className="font-medium">Join an event</span> - Check our calendar for upcoming networking sessions
                  </div>
                </li>
              </ul>
              
              <Button 
                variant="outline" 
                className="border-entrepreneur-primary text-entrepreneur-primary hover:bg-entrepreneur-primary hover:text-white"
                onClick={() => navigate('/')}
              >
                Back to Homepage
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiscordCommunity;
