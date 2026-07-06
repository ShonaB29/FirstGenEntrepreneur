import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, Calendar, Compass } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from 'react-router-dom';

const CommunitySection = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showQAForm, setShowQAForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Peer Networking",
      description: "Connect with other first-generation entrepreneurs facing similar challenges and opportunities.",
      action: () => navigate('/peer-network')
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Expert Q&A Sessions",
      description: "Regular sessions with successful entrepreneurs and industry experts to answer your questions.",
      action: () => setShowQAForm(true)
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Virtual Events",
      description: "Workshops, webinars, and networking events designed to help you grow your business.",
      action: () => document.getElementById('virtualEvents')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: <Compass className="h-8 w-8 text-white" />,
      title: "Mentorship Matching",
      description: "Get paired with experienced mentors who can guide you through your entrepreneurial journey.",
      action: () => navigate('/mentorship')
    }
  ];

  // Registration form schema
  const registrationSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" })
  });

  // Expert Q&A form schema
  const qaSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    question: z.string().min(10, { message: "Question must be at least 10 characters" })
  });

  // Registration form
  const registrationForm = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: ""
    }
  });

  // Expert Q&A form
  const qaForm = useForm<z.infer<typeof qaSchema>>({
    resolver: zodResolver(qaSchema),
    defaultValues: {
      name: "",
      email: "",
      question: ""
    }
  });

  // Handle registration form submission
  const onSubmitRegistration = (data: z.infer<typeof registrationSchema>) => {
    toast({
      title: "Registration Successful!",
      description: `Thank you ${data.name}! You're registered for our virtual event. Check your email for confirmation.`,
    });
    setShowRegistrationForm(false);
    registrationForm.reset();
  };

  // Handle Q&A form submission
  const onSubmitQA = (data: z.infer<typeof qaSchema>) => {
    toast({
      title: "Question Submitted!",
      description: "Our experts will answer your question. You'll receive a notification when the answer is available.",
    });
    setShowQAForm(false);
    qaForm.reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleJoinCommunity = () => {
    if (formData.firstName && formData.lastName && formData.email) {
      navigate('/discord-community');
    } else {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to join the community.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="community" className="py-16 md:py-24 bg-gradient-hero text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl opacity-90">
            You don't have to build your business alone. Connect with fellow entrepreneurs who understand your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur border-white/20 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4 bg-white/20 p-3 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80 mb-4">{feature.description}</p>
                {feature.action && (
                  <Button 
                    onClick={feature.action} 
                    variant="outline" 
                    className="border-white bg-white/10 backdrop-blur text-white hover:bg-entrepreneur-primary hover:text-white hover:border-transparent"
                  >
                    Learn More
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Virtual Events Section */}
        <div id="virtualEvents" className="bg-white/5 backdrop-blur rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Upcoming Virtual Events</h3>
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-entrepreneur-primary font-semibold mb-2">May 12, 2025 • Virtual</div>
                  <h4 className="text-xl font-bold mb-2">First-Gen Founder Fireside Chat</h4>
                  <p className="mb-4">Join our monthly discussion with successful first-generation entrepreneurs as they share their journeys, challenges, and insights.</p>
                  <Button 
                    onClick={() => setShowRegistrationForm(true)} 
                    className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary text-white"
                  >
                    Register Now
                  </Button>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-entrepreneur-primary font-semibold mb-2">May 18, 2025 • Chicago</div>
                  <h4 className="text-xl font-bold mb-2">Funding Workshop for First-Gen Founders</h4>
                  <p className="mb-4">Learn how to navigate funding options when you don't have family connections or generational wealth to fall back on.</p>
                  <Button 
                    onClick={() => setShowRegistrationForm(true)} 
                    className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary text-white"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Join Form */}
        <div className="max-w-lg mx-auto bg-white rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Ready to Connect?</h3>
          <p className="text-gray-600 mb-6 text-center">
            Join thousands of entrepreneurs building the future today.
          </p>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-entrepreneur-primary focus:border-entrepreneur-primary"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-entrepreneur-primary focus:border-entrepreneur-primary"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-entrepreneur-primary focus:border-entrepreneur-primary"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Button 
              className="w-full bg-entrepreneur-primary hover:bg-entrepreneur-secondary py-6 text-lg"
              onClick={handleJoinCommunity}
            >
              Join the Community
            </Button>
            <p className="text-xs text-gray-500 text-center">
              By joining, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>

        {/* Event Registration Modal */}
        {showRegistrationForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Register for Event</h3>
              
              <Form {...registrationForm}>
                <form onSubmit={registrationForm.handleSubmit(onSubmitRegistration)} className="space-y-4">
                  <FormField
                    control={registrationForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registrationForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setShowRegistrationForm(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Register</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        )}

        {/* Q&A Submission Modal */}
        {showQAForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Submit Your Question</h3>
              
              <Form {...qaForm}>
                <form onSubmit={qaForm.handleSubmit(onSubmitQA)} className="space-y-4">
                  <FormField
                    control={qaForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={qaForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={qaForm.control}
                    name="question"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Question</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What would you like our experts to answer?" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setShowQAForm(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Submit Question</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunitySection;
