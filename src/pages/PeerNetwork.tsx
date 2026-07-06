
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface Entrepreneur {
  id: string;
  name: string;
  company: string;
  industry: string;
  achievement: string;
  bio: string;
  image: string;
}

const PeerNetwork = () => {
  const navigate = useNavigate();
  
  const entrepreneurs: Entrepreneur[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "EcoStyle",
      industry: "Sustainable Fashion",
      achievement: "Secured $500K in seed funding and launched successful product line in over 20 retail locations",
      bio: "First-generation entrepreneur who transformed her passion for sustainable fashion into a thriving business that promotes ethical manufacturing practices.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: "2",
      name: "Miguel Rodriguez",
      company: "FreshFarm",
      industry: "AgTech",
      achievement: "Developed proprietary technology that increases crop yield by 40% while using 30% less water",
      bio: "Coming from a family of farm workers, Miguel used his agricultural knowledge and engineering degree to revolutionize small-scale farming practices.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: "3",
      name: "Aisha Patel",
      company: "MindfulTech",
      industry: "Health & Wellness",
      achievement: "App reached 1 million downloads in first year and was featured in Forbes 30 Under 30",
      bio: "After witnessing the impact of stress on her community, Aisha developed an accessible mental health platform that combines technology with traditional wellness practices.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: "4",
      name: "Jamal Williams",
      company: "UrbanEdu",
      industry: "EdTech",
      achievement: "Partnership with 50+ schools nationwide, improving academic outcomes for underserved students by 25%",
      bio: "A former teacher who created an innovative education platform to bridge the gap in educational resources for students in urban communities.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: "5",
      name: "Lin Chen",
      company: "GreenTransit",
      industry: "Transportation",
      achievement: "Raised $2.5M in Series A funding and reduced carbon emissions by 15K tons in pilot cities",
      bio: "First in her family to attend college, Lin used her environmental engineering background to develop sustainable transportation solutions for growing urban areas.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: "6",
      name: "David Okafor",
      company: "FinLift",
      industry: "Financial Services",
      achievement: "Helped over 10,000 small businesses access affordable loans totaling $25M in funding",
      bio: "From immigrant roots to fintech innovator, David created accessible financial tools for underbanked communities and small businesses typically overlooked by traditional banks.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-entrepreneur-primary to-entrepreneur-secondary py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Peer Networking</h1>
              <p className="text-xl">Connect with other first-generation entrepreneurs facing similar challenges and opportunities.</p>
            </div>
          </div>
        </section>

        {/* Mentor Chat Component */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-entrepreneur-light flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-entrepreneur-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Connect with Mentors</h2>
                  <p className="text-gray-600">Start a conversation with experienced entrepreneurs who can guide your journey</p>
                </div>
              </div>
              <Button 
                className="w-full bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                onClick={() => navigate('/chat-with-mentor')}
              >
                Chat with a Mentor
              </Button>
            </div>
          </div>
        </section>

        {/* Entrepreneurs Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {entrepreneurs.map((entrepreneur) => (
                <Card key={entrepreneur.id} className="overflow-hidden hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={entrepreneur.image} alt={entrepreneur.name} />
                        <AvatarFallback>{entrepreneur.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-xl">{entrepreneur.name}</h3>
                        <p className="text-entrepreneur-primary">{entrepreneur.company}</p>
                        <p className="text-sm text-gray-500">{entrepreneur.industry}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-gray-700 mb-2">Key Achievement</h4>
                      <p className="text-gray-600 mb-4">{entrepreneur.achievement}</p>
                      <h4 className="font-bold text-gray-700 mb-2">Background</h4>
                      <p className="text-gray-600">{entrepreneur.bio}</p>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <Button 
                        variant="outline" 
                        className="text-entrepreneur-primary border-entrepreneur-primary hover:bg-entrepreneur-light"
                        onClick={() => navigate('/chat-with-mentor')}
                      >
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeerNetwork;
