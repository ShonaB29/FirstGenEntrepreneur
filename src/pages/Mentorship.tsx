
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Mentor {
  id: string;
  name: string;
  position: string;
  company: string;
  expertise: string[];
  image: string;
  rating: number;
  availability: string[];
}

const Mentorship = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = [
    "All", "Technology", "E-commerce", "Finance", "Marketing", "Leadership"
  ];
  
  const mentors: Mentor[] = [
    {
      id: "1",
      name: "Dr. Sarah Chen",
      position: "CEO & Founder",
      company: "TechVision Inc.",
      expertise: ["Technology", "Leadership", "Scaling"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
      rating: 4.9,
      availability: ["Monday", "Wednesday", "Friday"]
    },
    {
      id: "2",
      name: "Marcus Johnson",
      position: "Serial Entrepreneur",
      company: "Multiple Ventures",
      expertise: ["E-commerce", "Marketing", "Fundraising"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=300&auto=format&fit=crop",
      rating: 4.8,
      availability: ["Tuesday", "Thursday"]
    },
    {
      id: "3",
      name: "Priya Patel",
      position: "Investment Advisor",
      company: "Venture Capital Partners",
      expertise: ["Finance", "Strategy", "Venture Capital"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
      rating: 4.7,
      availability: ["Wednesday", "Friday"]
    },
    {
      id: "4",
      name: "Alex Rivera",
      position: "Marketing Director",
      company: "Growth Accelerator",
      expertise: ["Marketing", "Branding", "Social Media"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=300&auto=format&fit=crop",
      rating: 4.6,
      availability: ["Monday", "Thursday", "Friday"]
    },
    {
      id: "5",
      name: "Jordan Smith",
      position: "Tech Founder",
      company: "InnovateTech",
      expertise: ["Technology", "Product Development", "Startups"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&auto=format&fit=crop",
      rating: 4.8,
      availability: ["Tuesday", "Wednesday"]
    },
    {
      id: "6",
      name: "Lisa Wong",
      position: "E-commerce Director",
      company: "Global Retail Solutions",
      expertise: ["E-commerce", "Supply Chain", "Business Operations"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
      rating: 4.9,
      availability: ["Monday", "Thursday"]
    }
  ];
  
  const filteredMentors = selectedCategory === "All" 
    ? mentors 
    : mentors.filter(mentor => mentor.expertise.includes(selectedCategory));

  const handleScheduleCall = (mentorId: string) => {
    navigate(`/schedule-call/${mentorId}`);
  };

  const handleSendMessage = (mentorName: string) => {
    toast({
      title: "Message Sent",
      description: `Your message to ${mentorName} has been sent. They will respond shortly.`,
    });
    
    // Navigate to chat page after a brief delay
    setTimeout(() => {
      navigate('/chat-with-mentor');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-entrepreneur-primary to-entrepreneur-secondary py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Expert Mentors</h1>
              <p className="text-xl">Get personalized guidance from experienced entrepreneurs and industry experts who understand the unique challenges of first-generation founders.</p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <Button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-entrepreneur-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Mentors Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMentors.map(mentor => (
                <Card key={mentor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-bold flex items-center">
                      <span className="mr-1">★</span> {mentor.rating}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                    <p className="text-entrepreneur-primary">{mentor.position} at {mentor.company}</p>
                    
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {mentor.expertise.map(skill => (
                          <span 
                            key={skill} 
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <p className="text-sm text-gray-600 flex items-center mb-2">
                          <Calendar className="h-4 w-4 mr-2" /> Available on:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {mentor.availability.map(day => (
                            <span 
                              key={day} 
                              className="bg-gray-50 text-gray-600 px-3 py-1 rounded text-sm border border-gray-200"
                            >
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 flex gap-3">
                        <Button 
                          className="w-full bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                          onClick={() => handleScheduleCall(mentor.id)}
                        >
                          Schedule Call
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-entrepreneur-primary text-entrepreneur-primary hover:bg-entrepreneur-light hover:text-entrepreneur-primary"
                          onClick={() => handleSendMessage(mentor.name)}
                        >
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mentorship Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Mentorship</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
                <p>Get personalized advice from professionals who've built successful businesses from the ground up.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Expand Your Network</h3>
                <p>Gain access to valuable connections and industry introductions through your mentor's network.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Avoid Common Pitfalls</h3>
                <p>Learn from someone who's been there before and can help you navigate challenges more efficiently.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Perspective & Feedback</h3>
                <p>Get honest feedback on your ideas and approaches from someone with relevant experience.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Accountability</h3>
                <p>Stay focused on your goals with regular check-ins and support from a mentor who cares about your success.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Specialized Knowledge</h3>
                <p>Access industry-specific insights and strategies that can help accelerate your business growth.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mentorship;
