
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Rocket, Star, Compass, Search } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
}

const Resources = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResources, setFilteredResources] = useState<{
    guides: Resource[];
    tools: Resource[];
    courses: Resource[];
  }>({ guides: [], tools: [], courses: [] });
  
  const allResources: Record<string, Resource[]> = {
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

  useEffect(() => {
    filterResourcesByQuery(searchQuery);
  }, [searchQuery]);

  const filterResourcesByQuery = (query: string) => {
    if (!query.trim()) {
      setFilteredResources({
        guides: allResources.guides,
        tools: allResources.tools,
        courses: allResources.courses
      });
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    
    const filterResourceList = (resources: Resource[]) => 
      resources.filter(resource => 
        resource.title.toLowerCase().includes(lowercaseQuery) || 
        resource.description.toLowerCase().includes(lowercaseQuery) || 
        resource.category.toLowerCase().includes(lowercaseQuery)
      );
    
    setFilteredResources({
      guides: filterResourceList(allResources.guides),
      tools: filterResourceList(allResources.tools),
      courses: filterResourceList(allResources.courses)
    });
  };

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

  const ResourceItem = ({ resource, type }: { resource: Resource, type: string }) => (
    <Card className="hover-lift h-full">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-entrepreneur-light flex items-center justify-center mb-4">
          <resource.icon className="h-6 w-6 text-entrepreneur-primary" />
        </div>
        <CardTitle>{resource.title}</CardTitle>
        <CardDescription className="text-gray-500">{resource.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{resource.description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="text-entrepreneur-primary hover:text-entrepreneur-secondary hover:bg-entrepreneur-light"
          onClick={() => handleResourceClick(resource.id, type)}
        >
          Learn more
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-entrepreneur-primary to-entrepreneur-secondary py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Entrepreneur Resources</h1>
              <p className="text-xl">Comprehensive tools, guides, and courses to help you succeed in your entrepreneurial journey</p>
              
              <div className="mt-8 relative">
                <div className="flex items-center border-2 border-white/30 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">
                  <Search className="h-5 w-5 text-white/70 mr-2" />
                  <Input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 bg-transparent text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto">
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
                  {filteredResources.guides.map((resource, index) => (
                    <ResourceItem key={index} resource={resource} type="guides" />
                  ))}
                  {filteredResources.guides.length === 0 && (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No guides match your search.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="tools" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredResources.tools.map((resource, index) => (
                    <ResourceItem key={index} resource={resource} type="tools" />
                  ))}
                  {filteredResources.tools.length === 0 && (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No tools match your search.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="courses" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredResources.courses.map((resource, index) => (
                    <ResourceItem key={index} resource={resource} type="courses" />
                  ))}
                  {filteredResources.courses.length === 0 && (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No courses match your search.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
