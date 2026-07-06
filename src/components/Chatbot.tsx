
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your Startup Catalyst assistant. How can I help with your entrepreneurial journey today?", isBot: true, timestamp: new Date() }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now(),
        text: message.trim(),
        isBot: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setMessage('');
      
      // Generate bot response based on keywords
      setTimeout(() => {
        const userQuery = message.toLowerCase();
        let botResponse = "";
        
        if (userQuery.includes("hello") || userQuery.includes("hi") || userQuery.includes("hey")) {
          botResponse = "Hello! Welcome to Startup Catalyst. I'm here to help you navigate your entrepreneurial journey. Feel free to ask about our resources, idea validation, or goal setting!";
        }
        else if (userQuery.includes("idea validation") || userQuery.includes("validate")) {
          botResponse = "Our Idea Validation platform helps you test the viability of your business concept. Submit your idea through our form, and our mentors will provide expert feedback and a detailed report you can download as PDF.";
        }
        else if (userQuery.includes("goal") || userQuery.includes("setting") || userQuery.includes("goals")) {
          botResponse = "Our Goal Setting feature helps you establish clear business objectives and track your progress. We send reminders to keep you accountable and on path to achieving your entrepreneurial milestones.";
        }
        else if (userQuery.includes("resource") || userQuery.includes("tools") || userQuery.includes("guide")) {
          botResponse = "We offer various resources like Financial Projection Calculator, Pitch Deck Builder, Brand Identity Kit, and Business Model Canvas. Check out our Resources section to access these tools and more!";
        }
        else if (userQuery.includes("financial") || userQuery.includes("projection") || userQuery.includes("calculator")) {
          botResponse = "Our Financial Projections Calculator helps you plan your business future with accurate projections for revenue, expenses, profits, and cash flow. Perfect for making informed financial decisions!";
        }
        else if (userQuery.includes("pitch") || userQuery.includes("deck") || userQuery.includes("investor")) {
          botResponse = "The Pitch Deck Builder helps you create compelling presentations to capture investor attention. It guides you through structuring your pitch with engaging storytelling and clear financial projections.";
        }
        else if (userQuery.includes("brand") || userQuery.includes("identity") || userQuery.includes("logo")) {
          botResponse = "Our Brand Identity Kit helps you develop a cohesive brand presence with logo design, color palette, typography, and messaging guidelines. Essential for creating recognition and consistency!";
        }
        else if (userQuery.includes("business model") || userQuery.includes("canvas")) {
          botResponse = "The Business Model Canvas tool helps you visualize your entire business strategy on a single page. Great for defining your value proposition, revenue streams, customer segments, and more.";
        }
        else if (userQuery.includes("about") || userQuery.includes("team") || userQuery.includes("who")) {
          botResponse = "Startup Catalyst was founded by a passionate team of entrepreneurs led by Sharmisthaa (CEO), along with Srinithi, and Shona. Visit our About Us page to learn more about our mission and team!";
        }
        else if (userQuery.includes("mentor") || userQuery.includes("expert") || userQuery.includes("advice")) {
          botResponse = "Our platform connects you with experienced mentors who can provide valuable insights on your business ideas and strategies. Submit your idea through our validation form to get expert feedback.";
        }
        else if (userQuery.includes("start") || userQuery.includes("begin") || userQuery.includes("first step")) {
          botResponse = "To begin your entrepreneurial journey with us, I recommend starting with our Idea Validation platform to test your concept, then use our resources to develop your business plan and brand identity.";
        }
        else {
          const genericResponses = [
            "That's an interesting question about entrepreneurship. Could you provide more details so I can better assist you?",
            "As your startup assistant, I'd be happy to help with that. Could you elaborate a bit more so I can provide specific guidance?",
            "That's a great entrepreneurial question. Let me guide you to the right resources on our platform to help with that.",
            "Building a successful startup involves many aspects. I can help you navigate specific areas if you could clarify your question.",
            "Every entrepreneur faces unique challenges. Could you tell me more about your specific situation so I can offer targeted advice?"
          ];
          
          botResponse = genericResponses[Math.floor(Math.random() * genericResponses.length)];
        }
        
        const botMessage: Message = {
          id: Date.now(),
          text: botResponse,
          isBot: true,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Chat toggle button */}
      <Button
        className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 p-0 flex items-center justify-center bg-entrepreneur-primary hover:bg-entrepreneur-secondary shadow-lg"
        onClick={toggleChat}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </Button>
      
      {/* Chat window */}
      <div className={cn(
        "fixed bottom-20 right-4 z-50 w-72 md:w-80 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )} style={{ height: '400px', maxHeight: 'calc(100vh - 120px)' }}>
        {/* Header */}
        <div className="bg-entrepreneur-primary text-white p-3 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle size={18} />
            <h3 className="font-medium">Startup Assistant</h3>
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-entrepreneur-secondary" onClick={toggleChat}>
            <ChevronDown size={16} />
          </Button>
        </div>
        
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {messages.map(msg => (
            <div key={msg.id} className={cn(
              "max-w-[80%] p-3 rounded-lg",
              msg.isBot 
                ? "bg-gray-100 text-gray-800 self-start" 
                : "bg-entrepreneur-primary text-white self-end ml-auto"
            )}>
              <p>{msg.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Message input */}
        <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
          <Input
            placeholder="Ask about resources, ideas, goals..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary">
            <Send size={16} />
          </Button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
