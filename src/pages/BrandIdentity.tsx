
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, Download, Palette, Type, MessageSquare, FileText } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BrandIdentity = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    {
      title: "Brand Basics",
      description: "Define your brand's core elements",
      icon: <Palette className="h-6 w-6 text-entrepreneur-primary" />
    },
    {
      title: "Visual Identity",
      description: "Colors, typography, and logo guidelines",
      icon: <Type className="h-6 w-6 text-entrepreneur-primary" />
    },
    {
      title: "Brand Voice",
      description: "Messaging and communication style",
      icon: <MessageSquare className="h-6 w-6 text-entrepreneur-primary" />
    },
    {
      title: "Brand Guidelines",
      description: "Generate your comprehensive guidelines",
      icon: <FileText className="h-6 w-6 text-entrepreneur-primary" />
    }
  ];
  
  const handleDownload = (templateName: string) => {
    toast({
      title: "Template Downloaded",
      description: `${templateName} has been downloaded successfully.`
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center gap-2 text-entrepreneur-primary hover:text-entrepreneur-secondary"
            onClick={() => navigate('/resources')}
          >
            <ChevronLeft size={16} />
            Back to Resources
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Brand Identity Kit</h1>
            <p className="text-xl text-gray-600 mb-8">
              Design a professional and cohesive brand identity with an intuitive step-by-step builder.
            </p>
            
            {/* Steps Progress */}
            <div className="relative mb-12">
              <div className="h-1 bg-gray-200 absolute top-6 left-0 right-0 z-0"></div>
              <div className="flex justify-between relative z-10">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col items-center cursor-pointer`}
                    onClick={() => setCurrentStep(index + 1)}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      currentStep > index + 1 ? 'bg-green-500 text-white' : 
                      currentStep === index + 1 ? 'bg-entrepreneur-primary text-white' : 
                      'bg-white border-2 border-gray-300 text-gray-400'
                    }`}>
                      {currentStep > index + 1 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="text-center">
                      <p className={`font-medium ${currentStep === index + 1 ? 'text-entrepreneur-primary' : 'text-gray-600'}`}>{step.title}</p>
                      <p className="text-xs text-gray-500 hidden md:block">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Step Content */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Define Your Brand Basics</h2>
                  <p className="text-gray-600">Start by defining the foundation elements of your brand identity.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-entrepreneur-primary focus:border-entrepreneur-primary"
                        placeholder="Enter your brand name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Brand Tagline/Slogan</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-entrepreneur-primary focus:border-entrepreneur-primary"
                        placeholder="Your brand's tagline or slogan"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mission Statement</label>
                      <textarea 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-entrepreneur-primary focus:border-entrepreneur-primary min-h-[100px]"
                        placeholder="Describe your brand's mission"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Core Values (comma separated)</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-entrepreneur-primary focus:border-entrepreneur-primary"
                        placeholder="e.g. Innovation, Quality, Integrity, Customer Focus"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button 
                      onClick={() => setCurrentStep(2)}
                      className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Visual Identity</h2>
                  <p className="text-gray-600">Define your brand's visual elements like colors, typography, and logo usage guidelines.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Color Palette</h3>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                        {Array.from({length: 5}).map((_, i) => (
                          <div key={i} className="space-y-2">
                            <div className={`h-16 rounded-md border border-gray-300 bg-white`}></div>
                            <input 
                              type="color" 
                              className="w-full h-8 cursor-pointer"
                              defaultValue={i === 0 ? '#9b87f5' : '#ffffff'}
                            />
                            <input 
                              type="text" 
                              className="w-full text-xs p-1 border border-gray-300 rounded"
                              placeholder="#000000"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Typography</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Heading Font</label>
                          <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option>Outfit</option>
                            <option>Montserrat</option>
                            <option>Roboto</option>
                            <option>Open Sans</option>
                            <option>Playfair Display</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Body Font</label>
                          <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option>Inter</option>
                            <option>Roboto</option>
                            <option>Open Sans</option>
                            <option>Lato</option>
                            <option>Source Sans Pro</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Logo Upload</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                        <input type="file" className="hidden" id="logo-upload" />
                        <label htmlFor="logo-upload" className="cursor-pointer">
                          <div className="text-entrepreneur-primary mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="17 8 12 3 7 8"></polyline>
                              <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                          </div>
                          <p className="text-sm text-gray-600">Click to upload your logo</p>
                          <p className="text-xs text-gray-400 mt-1">SVG, PNG, or JPG (max. 800x800px)</p>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentStep(1)}
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={() => setCurrentStep(3)}
                      className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Brand Voice</h2>
                  <p className="text-gray-600">Define how your brand communicates with your audience.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Brand Voice Description</label>
                      <textarea 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-entrepreneur-primary focus:border-entrepreneur-primary min-h-[100px]"
                        placeholder="How would you describe your brand's communication style?"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Brand Personality Traits</label>
                      <div className="grid grid-cols-2 gap-4">
                        {["Professional", "Friendly", "Authoritative", "Playful", "Formal", "Casual", "Bold", "Conservative"].map((trait, i) => (
                          <div key={i} className="flex items-center">
                            <input type="checkbox" id={`trait-${i}`} className="mr-2" />
                            <label htmlFor={`trait-${i}`}>{trait}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Example Messaging (How you talk to customers)</label>
                      <textarea 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-entrepreneur-primary focus:border-entrepreneur-primary min-h-[100px]"
                        placeholder="Provide an example of your brand messaging"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Communication Do's and Don'ts</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <textarea 
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-entrepreneur-primary focus:border-entrepreneur-primary min-h-[100px]"
                          placeholder="Communication Do's"
                        ></textarea>
                        <textarea 
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-entrepreneur-primary focus:border-entrepreneur-primary min-h-[100px]"
                          placeholder="Communication Don'ts"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentStep(2)}
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={() => setCurrentStep(4)}
                      className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
              
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Brand Guidelines</h2>
                  <p className="text-gray-600">Generate your comprehensive brand guidelines document and download it in your preferred format.</p>
                  
                  <div className="py-4">
                    <div className="bg-entrepreneur-light/30 rounded-lg p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <FileText className="h-12 w-12 text-entrepreneur-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Your Brand Identity Kit is Ready!</h3>
                      <p className="text-gray-600 mb-6">Choose your preferred format to download your complete brand guidelines document.</p>
                      
                      <div className="flex flex-wrap justify-center gap-4">
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2 border-entrepreneur-primary text-entrepreneur-primary hover:bg-entrepreneur-primary hover:text-white"
                          onClick={() => handleDownload("Brand Identity Kit (PDF)")}
                        >
                          <Download className="h-4 w-4" />
                          Download PDF
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2 border-entrepreneur-primary text-entrepreneur-primary hover:bg-entrepreneur-primary hover:text-white"
                          onClick={() => handleDownload("Brand Identity Kit (DOCX)")}
                        >
                          <Download className="h-4 w-4" />
                          Download DOCX
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2 border-entrepreneur-primary text-entrepreneur-primary hover:bg-entrepreneur-primary hover:text-white"
                          onClick={() => handleDownload("Brand Assets Package (ZIP)")}
                        >
                          <Download className="h-4 w-4" />
                          Download Assets (ZIP)
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold mb-3">What's Included in Your Brand Identity Kit:</h3>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Complete brand guidelines document</li>
                      <li>Logo files in multiple formats (PNG, SVG, JPG)</li>
                      <li>Color palette with hex codes and RGB values</li>
                      <li>Typography specifications and font files</li>
                      <li>Business card and letterhead templates</li>
                      <li>Social media profile templates</li>
                      <li>Email signature template</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentStep(3)}
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={() => navigate('/resources')}
                      className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                    >
                      Finish
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrandIdentity;
