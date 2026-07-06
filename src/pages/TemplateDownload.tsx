
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Download, FileText, FileSpreadsheet, FilePieChart, FileCheck } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const TemplateDownload = () => {
  const navigate = useNavigate();
  
  const handleDownload = (templateName: string) => {
    toast({
      title: "Template Downloaded",
      description: `${templateName} has been downloaded successfully.`
    });
  };
  
  const templates = [
    {
      title: "Business Plan Roadmap",
      description: "A comprehensive guide to structure your business plan with key sections and guidelines.",
      icon: <FileText className="h-6 w-6" />,
      type: "PDF",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Financial Projection Sheet",
      description: "Pre-built formulas for sales forecasts, expense projections, and cash flow analysis.",
      icon: <FileSpreadsheet className="h-6 w-6" />,
      type: "Excel",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Market Analysis Template",
      description: "Framework for analyzing market trends, competitors, and target audience segments.",
      icon: <FilePieChart className="h-6 w-6" />,
      type: "PDF",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Executive Summary Builder",
      description: "A structured template to create a compelling executive summary for investors.",
      icon: <FileCheck className="h-6 w-6" />,
      type: "Word",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "SWOT Analysis Template",
      description: "Easy-to-use template to identify strengths, weaknesses, opportunities, and threats.",
      icon: <FileText className="h-6 w-6" />,
      type: "PDF",
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "5-Year Growth Projections",
      description: "Detailed template for long-term business growth planning and financial forecasts.",
      icon: <FileSpreadsheet className="h-6 w-6" />,
      type: "Excel",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Marketing Strategy Planner",
      description: "Structured template to plan your marketing channels, budget, and campaigns.",
      icon: <FileText className="h-6 w-6" />,
      type: "PDF",
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "Operations Manual Template",
      description: "Framework for documenting your business operations, processes, and procedures.",
      icon: <FileCheck className="h-6 w-6" />,
      type: "Word",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center gap-2 text-entrepreneur-primary hover:text-entrepreneur-secondary"
            onClick={() => navigate('/resource/business-plan-blueprint')}
          >
            <ChevronLeft size={16} />
            Back to Business Plan Blueprint
          </Button>
          
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Business Plan Templates</h1>
            <p className="text-xl text-gray-600 mb-12">
              Download our professionally designed templates to help you create a comprehensive business plan that will impress investors and guide your business growth.
            </p>
            
            <div className="bg-gradient-to-r from-entrepreneur-primary/10 to-entrepreneur-secondary/10 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold mb-2">Tips for Using Our Templates</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Customize each template with your specific business information</li>
                <li>Be realistic with your projections and market analysis</li>
                <li>Update your plan regularly as your business evolves</li>
                <li>Use clear, concise language and avoid jargon</li>
                <li>Include visuals like charts and graphs to illustrate key points</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${template.color} flex items-center justify-center mb-4`}>
                      {template.icon}
                    </div>
                    <CardTitle>{template.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{template.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">{template.type}</span>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-entrepreneur-primary text-entrepreneur-primary hover:bg-entrepreneur-primary hover:text-white"
                      onClick={() => handleDownload(template.title)}
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 bg-entrepreneur-light rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Template?</h2>
              <p className="text-gray-600 mb-6">
                Our team can create custom business plan templates tailored to your specific industry and business needs.
              </p>
              <Button className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplateDownload;
