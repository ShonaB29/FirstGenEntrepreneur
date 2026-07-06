import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, Presentation, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PitchDeckBuilder = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const templates = [
    { 
      id: "startup", 
      name: "Startup Pitch", 
      description: "Perfect for early-stage startups seeking seed funding", 
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=300&auto=format&fit=crop" 
    },
    { 
      id: "growth", 
      name: "Growth Series", 
      description: "Ideal for established startups looking for Series A/B funding", 
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=300&auto=format&fit=crop" 
    },
    { 
      id: "tech", 
      name: "Tech Innovation", 
      description: "Designed for technology and SaaS companies", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&auto=format&fit=crop" 
    },
    { 
      id: "social", 
      name: "Social Impact", 
      description: "For mission-driven organizations and social enterprises", 
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300&auto=format&fit=crop" 
    }
  ];

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    setCurrentStep(2);
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      toast({
        title: "Success!",
        description: "Your pitch deck has been generated and is ready for download.",
      });
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-entrepreneur-primary to-entrepreneur-secondary py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Presentation className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Pitch Deck Builder</h1>
              <p className="text-xl">Create a professional pitch deck that captures investor attention</p>
            </div>
          </div>
        </section>

        {/* Step Indicator */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-entrepreneur-primary' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 1 ? 'bg-entrepreneur-primary text-white' : 'bg-gray-200'}`}>1</div>
                  <span className="text-sm">Select Template</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-entrepreneur-primary' : 'bg-gray-200'}`}></div>
                <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-entrepreneur-primary' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 2 ? 'bg-entrepreneur-primary text-white' : 'bg-gray-200'}`}>2</div>
                  <span className="text-sm">Enter Content</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? 'bg-entrepreneur-primary' : 'bg-gray-200'}`}></div>
                <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-entrepreneur-primary' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 3 ? 'bg-entrepreneur-primary text-white' : 'bg-gray-200'}`}>3</div>
                  <span className="text-sm">Design</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${currentStep >= 4 ? 'bg-entrepreneur-primary' : 'bg-gray-200'}`}></div>
                <div className={`flex flex-col items-center ${currentStep >= 4 ? 'text-entrepreneur-primary' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 4 ? 'bg-entrepreneur-primary text-white' : 'bg-gray-200'}`}>4</div>
                  <span className="text-sm">Preview & Download</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Step 1: Select Template */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Select a Template</h2>
                  <p className="text-gray-600 mb-8">Choose a tailored template that aligns with your industry and brand identity.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {templates.map(template => (
                      <Card 
                        key={template.id} 
                        className={`cursor-pointer overflow-hidden transition-all hover:shadow-lg ${selectedTemplate === template.id ? 'ring-2 ring-entrepreneur-primary' : ''}`}
                        onClick={() => handleTemplateSelect(template.id)}
                      >
                        <div className="relative h-40">
                          <img 
                            src={template.image} 
                            alt={template.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold">{template.name}</h3>
                          <p className="text-sm text-gray-500">{template.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Step 2: Enter Content */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Enter Key Business Details</h2>
                  <p className="text-gray-600 mb-8">Fill in the essential information about your business for your pitch deck.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <Input id="company-name" placeholder="Enter your company name" />
                    </div>
                    
                    <div>
                      <label htmlFor="tagline" className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                      <Input id="tagline" placeholder="A short, catchy tagline that describes your business" />
                    </div>
                    
                    <div>
                      <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">The Problem</label>
                      <Textarea id="problem" placeholder="Describe the problem your product/service solves" className="min-h-24" />
                    </div>
                    
                    <div>
                      <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-1">Your Solution</label>
                      <Textarea id="solution" placeholder="Explain how your product/service solves the problem" className="min-h-24" />
                    </div>
                    
                    <div>
                      <label htmlFor="market" className="block text-sm font-medium text-gray-700 mb-1">Target Market & Opportunity</label>
                      <Textarea id="market" placeholder="Describe your target audience and market size" className="min-h-24" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Design */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Customize Design</h2>
                  <p className="text-gray-600 mb-8">Personalize your pitch deck with your brand colors, fonts, and visual elements.</p>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Brand Colors</h3>
                      <div className="flex flex-wrap gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-blue-500"></div>
                        <div className="w-12 h-12 bg-red-500 rounded cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-red-500"></div>
                        <div className="w-12 h-12 bg-green-500 rounded cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-green-500"></div>
                        <div className="w-12 h-12 bg-purple-500 rounded cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-purple-500"></div>
                        <div className="w-12 h-12 bg-yellow-500 rounded cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-yellow-500"></div>
                        <div className="w-12 h-12 bg-pink-500 rounded cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-pink-500"></div>
                        <div className="w-12 h-12 bg-gray-500 rounded cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-gray-500"></div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Typography</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border p-4 rounded cursor-pointer hover:bg-gray-50">
                          <p className="font-sans text-lg">Modern Sans-Serif</p>
                          <p className="font-sans text-sm text-gray-500">Clean and contemporary</p>
                        </div>
                        <div className="border p-4 rounded cursor-pointer hover:bg-gray-50">
                          <p className="font-serif text-lg">Classic Serif</p>
                          <p className="font-serif text-sm text-gray-500">Traditional and established</p>
                        </div>
                        <div className="border p-4 rounded cursor-pointer hover:bg-gray-50">
                          <p className="font-mono text-lg">Monospace</p>
                          <p className="font-mono text-sm text-gray-500">Technical and precise</p>
                        </div>
                        <div className="border p-4 rounded cursor-pointer hover:bg-gray-50">
                          <p className="font-sans text-lg font-light">Light Sans-Serif</p>
                          <p className="font-sans text-sm font-light text-gray-500">Minimalist and elegant</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Layout Style</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="border p-4 rounded cursor-pointer hover:bg-gray-50 flex flex-col items-center">
                          <div className="w-full h-24 bg-gray-200 mb-2 flex flex-col">
                            <div className="w-full h-6 bg-gray-300 mb-2"></div>
                            <div className="flex-1 flex">
                              <div className="w-1/2 bg-gray-300 mr-2"></div>
                              <div className="w-1/2 bg-gray-300"></div>
                            </div>
                          </div>
                          <span className="text-sm">Split Content</span>
                        </div>
                        <div className="border p-4 rounded cursor-pointer hover:bg-gray-50 flex flex-col items-center">
                          <div className="w-full h-24 bg-gray-200 mb-2 flex flex-col">
                            <div className="w-full h-6 bg-gray-300 mb-2"></div>
                            <div className="flex-1 bg-gray-300"></div>
                          </div>
                          <span className="text-sm">Full Width</span>
                        </div>
                        <div className="border p-4 rounded cursor-pointer hover:bg-gray-50 flex flex-col items-center">
                          <div className="w-full h-24 bg-gray-200 mb-2 flex flex-col">
                            <div className="w-full h-6 bg-gray-300 mb-2"></div>
                            <div className="flex-1 flex flex-col gap-2">
                              <div className="h-2 bg-gray-300"></div>
                              <div className="h-2 bg-gray-300"></div>
                              <div className="h-2 bg-gray-300"></div>
                            </div>
                          </div>
                          <span className="text-sm">Minimalist</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 4: Preview & Download */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Preview & Download</h2>
                  <p className="text-gray-600 mb-8">Review your pitch deck and download it in your preferred format.</p>
                  
                  <div className="bg-gray-100 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-medium mb-4">Your Pitch Deck Preview</h3>
                    <div className="aspect-video bg-white rounded-lg border shadow flex items-center justify-center">
                      <div className="text-center">
                        <Presentation className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Preview of your custom pitch deck</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Download Options</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary h-auto py-6 flex flex-col">
                        <span className="text-lg">PDF Format</span>
                        <span className="text-xs opacity-80">Best for sharing and presenting</span>
                      </Button>
                      <Button variant="outline" className="border-entrepreneur-primary text-entrepreneur-primary hover:bg-entrepreneur-light h-auto py-6 flex flex-col">
                        <span className="text-lg">PowerPoint Format</span>
                        <span className="text-xs opacity-80">Best for editing and customizing</span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between mt-12">
                {currentStep > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={handlePreviousStep}
                  >
                    Back
                  </Button>
                )}
                {currentStep === 1 && <div></div>}
                
                <Button 
                  onClick={handleNextStep}
                  className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                >
                  {currentStep < 4 ? 'Continue' : 'Download'} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PitchDeckBuilder;
