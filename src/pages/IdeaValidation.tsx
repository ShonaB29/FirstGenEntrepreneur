import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Circle, Download, FileCheck, FileText } from "lucide-react";

const formSchema = z.object({
  businessIdea: z.string().min(10, {
    message: "Business idea must be at least 10 characters.",
  }),
  targetMarket: z.string().min(10, {
    message: "Target market must be at least 10 characters.",
  }),
  problemSolved: z.string().min(10, {
    message: "Problem description must be at least 10 characters.",
  }),
  uniqueValue: z.string().min(10, {
    message: "Unique value proposition must be at least 10 characters.",
  }),
  competitorAnalysis: z.string().min(10, {
    message: "Competitor analysis must be at least 10 characters.",
  }),
});

const IdeaValidation = () => {
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(null);
  const [reportGenerated, setReportGenerated] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessIdea: "",
      targetMarket: "",
      problemSolved: "",
      uniqueValue: "",
      competitorAnalysis: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFormData(values);
    toast({
      title: "Idea submitted for validation",
      description: "Our experts will review your idea and provide feedback soon.",
    });
    
    // Simulate validation process (in a real app, this would be an API call)
    setTimeout(() => {
      setReportGenerated(true);
      toast({
        title: "Validation report ready",
        description: "Your idea has been reviewed. Download your detailed report.",
      });
    }, 3000);
  }

  const handleDownloadReport = () => {
    // In a real application, this would generate a proper PDF
    // For now, we'll simulate a download by showing a success message
    toast({
      title: "Report downloaded",
      description: "Your validation report has been downloaded successfully.",
    });
  };

  const handleViewReport = () => {
    setShowReport(true);
  };

  // Mock validation report data
  const validationReport = formData ? {
    overallScore: 85,
    marketPotential: 80,
    innovationScore: 90,
    feasibilityScore: 85,
    feedback: "Your business idea shows strong potential with a clear value proposition and defined target market. The solution addresses a genuine need, though we recommend further research on competition to strengthen your market position.",
    recommendations: [
      "Conduct customer interviews to validate assumptions about your target market",
      "Develop a minimum viable product to test core functionality",
      "Refine your pricing strategy based on competitive analysis",
      "Consider expanding your target market to include adjacent segments"
    ],
    nextSteps: [
      "Create a detailed business plan using our Business Plan Blueprint",
      "Develop financial projections with our calculator tool",
      "Build a pitch deck to present to potential investors",
      "Schedule a mentorship session to refine your strategy"
    ]
  } : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Idea Validation Platform
            </h1>
            <p className="text-xl">
              Test and validate your business ideas with our comprehensive validation
              framework and get expert feedback.
            </p>
          </div>
        </section>

        {/* Validation Form */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Validate Your Idea</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="businessIdea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What's your business idea?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your business idea in detail..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Be specific about what product or service you want to offer.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="targetMarket"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Who is your target market?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Define your target audience..." 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Describe your ideal customers, their demographics, behaviors, and needs.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="problemSolved"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What problem does it solve?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the problem you're solving..." 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Clearly identify the pain point or need that your business addresses.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="uniqueValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What's your unique value proposition?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Explain what makes your solution unique..." 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Describe why customers would choose your solution over alternatives.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="competitorAnalysis"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Who are your competitors?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List your main competitors and how your solution differs..." 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Identify direct and indirect competitors in your market.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <Button type="submit" className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary">
                      Submit for Validation
                    </Button>
                    
                    {reportGenerated && (
                      <div className="flex gap-2">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="flex items-center gap-2"
                          onClick={handleViewReport}
                        >
                          <FileText size={16} />
                          View Report
                        </Button>
                        <Button 
                          type="button" 
                          variant="secondary" 
                          className="flex items-center gap-2"
                          onClick={handleDownloadReport}
                        >
                          <Download size={16} />
                          Download PDF
                        </Button>
                      </div>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Validation Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-entrepreneur-light flex items-center justify-center rounded-full mb-4">
                  <span className="text-entrepreneur-primary text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Submit Your Idea</h3>
                <p className="text-gray-600">Fill out our comprehensive validation form with details about your business idea, target market, and value proposition.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-entrepreneur-light flex items-center justify-center rounded-full mb-4">
                  <span className="text-entrepreneur-primary text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Review</h3>
                <p className="text-gray-600">Our team of experienced entrepreneurs and industry experts will analyze your idea and provide detailed feedback.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-entrepreneur-light flex items-center justify-center rounded-full mb-4">
                  <span className="text-entrepreneur-primary text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Receive Detailed Report</h3>
                <p className="text-gray-600">Get a comprehensive validation report with actionable feedback, recommendations, and next steps to refine and launch your business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Report Dialog */}
        <Dialog open={showReport} onOpenChange={setShowReport}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <FileCheck className="text-entrepreneur-primary" />
                Idea Validation Report
              </DialogTitle>
              <DialogDescription>
                Expert assessment of your business idea and recommendations for next steps
              </DialogDescription>
            </DialogHeader>

            {validationReport && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-entrepreneur-primary mb-1">{validationReport.marketPotential}%</div>
                      <div className="text-sm text-gray-500">Market Potential</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-entrepreneur-primary mb-1">{validationReport.innovationScore}%</div>
                      <div className="text-sm text-gray-500">Innovation Score</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-entrepreneur-primary mb-1">{validationReport.feasibilityScore}%</div>
                      <div className="text-sm text-gray-500">Feasibility Score</div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Overall Assessment</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-16 h-16 rounded-full bg-entrepreneur-light flex items-center justify-center mr-4">
                        <span className="text-entrepreneur-primary text-2xl font-bold">{validationReport.overallScore}%</span>
                      </div>
                      <div>
                        <div className="font-medium">Overall Score</div>
                        <div className="text-sm text-gray-500">Based on market potential, innovation, and feasibility</div>
                      </div>
                    </div>
                    <p className="text-gray-700">{validationReport.feedback}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Recommendations</h3>
                  <ul className="space-y-2">
                    {validationReport.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-4 w-4 text-entrepreneur-primary mt-1" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Next Steps</h3>
                  <ul className="space-y-2">
                    {validationReport.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-4 w-4 text-entrepreneur-primary mt-1" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <DialogFooter>
              <Button variant="outline" onClick={() => setShowReport(false)}>Close</Button>
              <Button 
                className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary flex items-center gap-2"
                onClick={handleDownloadReport}
              >
                <Download size={16} />
                Download PDF
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default IdeaValidation;
