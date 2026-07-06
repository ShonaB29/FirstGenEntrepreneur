
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Rocket, Star, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourceItem = ({ title, description, icon: Icon, category, id, type, onClick }) => (
  <Card className="hover-lift h-full">
    <CardHeader>
      <div className="w-12 h-12 rounded-lg bg-entrepreneur-light flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-entrepreneur-primary" />
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-gray-500">{category}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
    <CardFooter>
      <Button 
        variant="ghost" 
        className="text-entrepreneur-primary hover:text-entrepreneur-secondary hover:bg-entrepreneur-light"
        onClick={() => onClick(id, type)}
      >
        Learn more
      </Button>
    </CardFooter>
  </Card>
);

const ResourcesSection = () => {
  const navigate = useNavigate();
  
  const handleResourceClick = (resourceId: string, resourceType: string) => {
    if (resourceType === 'courses' && resourceId === 'idea-to-launch') {
      navigate(`/course/${resourceId}`);
    } else if (resourceType === 'tools' && resourceId === 'brand-identity-kit') {
      navigate(`/brand-identity/${resourceId}`);
    } else if (resourceType === 'tools' && resourceId === 'pitch-deck-builder') {
      navigate('/pitch-deck-builder');
    } else {
      navigate(`/resource/${resourceId}`);
    }
  };
  
  const resources = {
    guides: [
      {
        id: "business-plan-blueprint",
        title: "Business Plan Blueprint",
        description: "Step-by-step guide to creating a comprehensive business plan that attracts investors.",
        icon: Book,
        category: "Business Planning"
      },
      {
        id: "marketing-essentials",
        title: "Marketing Essentials",
        description: "Core marketing strategies to get your business noticed in today's competitive landscape.",
        icon: Star,
        category: "Marketing"
      },
      {
        id: "legal-navigation-guide",
        title: "Legal Navigation Guide",
        description: "Navigate the legal requirements for starting and running your business.",
        icon: Compass,
        category: "Legal"
      },
      {
        id: "funding-101",
        title: "Funding 101",
        description: "Everything you need to know about securing funding for your startup.",
        icon: Rocket,
        category: "Financing"
      }
    ],
    tools: [
      {
        id: "financial-projections-calculator",
        title: "Financial Projections Calculator",
        description: "Create realistic financial projections for your business plan.",
        icon: Book,
        category: "Finance"
      },
      {
        id: "pitch-deck-builder",
        title: "Pitch Deck Builder",
        description: "Design professional pitch decks that capture investor attention.",
        icon: Rocket,
        category: "Fundraising"
      },
      {
        id: "brand-identity-kit",
        title: "Brand Identity Kit",
        description: "Develop a consistent and professional brand identity for your business.",
        icon: Star,
        category: "Branding"
      },
      {
        id: "business-model-canvas",
        title: "Business Model Canvas",
        description: "Map out your business model on a single, comprehensive page.",
        icon: Compass,
        category: "Strategy"
      }
    ],
    courses: [
      {
        id: "idea-to-launch",
        title: "From Idea to Launch",
        description: "Complete 8-week course on turning your idea into a launched business.",
        icon: Rocket,
        category: "Startup Fundamentals"
      },
      {
        id: "growth-hacking-essentials",
        title: "Growth Hacking Essentials",
        description: "Strategies for rapid business growth with minimal resources.",
        icon: Star,
        category: "Growth"
      },
      {
        id: "financial-literacy-founders",
        title: "Financial Literacy for Founders",
        description: "Master business finance without the accounting degree.",
        icon: Book,
        category: "Finance"
      },
      {
        id: "strategic-networking",
        title: "Strategic Networking",
        description: "Build meaningful connections that accelerate your entrepreneurial journey.",
        icon: Compass,
        category: "Networking"
      }
    ],
  };

  return (
    <section id="resources" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources to Fuel Your Journey</h2>
          <p className="text-xl text-gray-600">
            Everything you need to launch and grow your business, specifically designed for first-time entrepreneurs.
          </p>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="guides" className="text-base">Guides</TabsTrigger>
              <TabsTrigger value="tools" className="text-base">Tools</TabsTrigger>
              <TabsTrigger value="courses" className="text-base">Courses</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="guides" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.guides.map((resource, index) => (
                <ResourceItem 
                  key={index} 
                  {...resource} 
                  type="guides"
                  onClick={handleResourceClick}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.tools.map((resource, index) => (
                <ResourceItem 
                  key={index} 
                  {...resource} 
                  type="tools"
                  onClick={handleResourceClick}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="courses" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.courses.map((resource, index) => (
                <ResourceItem 
                  key={index} 
                  {...resource} 
                  type="courses"
                  onClick={handleResourceClick}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
            onClick={() => navigate('/resources')}
          >
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
