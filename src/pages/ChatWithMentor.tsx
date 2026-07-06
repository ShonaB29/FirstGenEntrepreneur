
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  sender: 'user' | 'mentor';
  content: string;
  timestamp: Date;
}

const ChatWithMentor = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'mentor',
      content: 'Hello! I\'m Dr. Sarah Chen, your mentor for today. How can I help you with your entrepreneurial journey?',
      timestamp: new Date(Date.now() - 60000)
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');

    // Simulate mentor response after a delay
    setTimeout(() => {
      const mentorResponses = [
        "That's a great question. When I started my business, I focused on validating my idea with potential customers first.",
        "I'd recommend researching your target market thoroughly before making any big decisions.",
        "From my experience, it's important to stay flexible and be willing to pivot if necessary.",
        "That's an interesting challenge. Have you considered approaching it from a different angle?",
        "I faced a similar obstacle in my early days. Let me share what worked for me."
      ];
      
      const randomResponse = mentorResponses[Math.floor(Math.random() * mentorResponses.length)];
      
      const newMentorMessage: Message = {
        id: Date.now().toString(),
        sender: 'mentor',
        content: randomResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMentorMessage]);
      
      toast({
        title: "New Message",
        description: "Dr. Sarah Chen has responded to your message",
      });
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-entrepreneur-primary to-entrepreneur-secondary py-6 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                className="text-white mr-2" 
                onClick={() => navigate(-1)}
              >
                &larr;
              </Button>
              <Avatar className="h-12 w-12 border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h1 className="font-bold text-xl">Dr. Sarah Chen</h1>
                <p className="text-sm text-white/80">CEO & Founder, TechVision Inc.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="flex-grow bg-gray-50 py-6">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex flex-col space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-end gap-2">
                    {msg.sender === 'mentor' && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                    )}
                    
                    <div 
                      className={`max-w-xs sm:max-w-md px-4 py-3 rounded-lg ${
                        msg.sender === 'user' 
                          ? 'bg-entrepreneur-primary text-white rounded-br-none' 
                          : 'bg-white border border-gray-200 rounded-bl-none'
                      }`}
                    >
                      <p>{msg.content}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/80' : 'text-gray-500'}`}>
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                    
                    {msg.sender === 'user' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-entrepreneur-secondary text-white">ME</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Message Input */}
        <div className="border-t bg-white py-4">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex gap-2">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="min-h-12 resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button 
                className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary self-end"
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatWithMentor;
