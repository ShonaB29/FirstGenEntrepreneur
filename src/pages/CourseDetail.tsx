
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Play, Lock, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

interface CourseWeek {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  isFree: boolean;
}

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<CourseWeek | null>(null);
  
  // Sample course data
  const courseData = {
    "idea-to-launch": {
      title: "From Idea to Launch",
      instructor: "Sarah Chen",
      description: "Complete 8-week course on turning your idea into a launched business.",
      price: 199,
      weeks: [
        {
          id: 1,
          title: "Week 1: Idea Validation",
          description: "Learn how to validate your business idea through market research and customer discovery.",
          videoUrl: "https://youtu.be/H6uiJxNtXB0?feature=shared",
          duration: "45 minutes",
          isFree: true
        },
        {
          id: 2,
          title: "Week 2: Market Research",
          description: "Understand your target market, competition, and positioning strategy.",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "52 minutes",
          isFree: false
        },
        {
          id: 3,
          title: "Week 3: Business Model Development",
          description: "Create a sustainable business model that drives revenue and growth.",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "48 minutes",
          isFree: false
        },
        {
          id: 4,
          title: "Week 4: Branding & Marketing",
          description: "Build a compelling brand and marketing strategy to reach your audience.",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "55 minutes",
          isFree: false
        },
        {
          id: 5,
          title: "Week 5: Financial Planning",
          description: "Create financial projections and understand startup costs.",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "50 minutes",
          isFree: false
        },
        {
          id: 6,
          title: "Week 6: Legal Considerations",
          description: "Navigate legal requirements for starting your business.",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "47 minutes",
          isFree: false
        },
        {
          id: 7,
          title: "Week 7: Building Your MVP",
          description: "Develop a minimum viable product to test with real customers.",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "58 minutes",
          isFree: false
        },
        {
          id: 8,
          title: "Week 8: Launch Strategy",
          description: "Create a comprehensive launch plan to introduce your business to the world.",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "60 minutes",
          isFree: false
        }
      ]
    }
  };
  
  const course = courseData[id as keyof typeof courseData];
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <Button onClick={() => navigate('/resources')}>Back to Resources</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleWatchVideo = (week: CourseWeek) => {
    if (week.isFree) {
      setCurrentVideo(week);
    } else {
      setShowPaymentDialog(true);
    }
  };
  
  const handlePaymentSubmit = () => {
    // Simulate successful payment
    toast({
      title: "Payment Successful!",
      description: "You now have full access to the course.",
    });
    setShowPaymentDialog(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course Header */}
        <section className="bg-gradient-to-r from-entrepreneur-primary to-entrepreneur-secondary py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <Button 
              variant="outline" 
              className="mb-6 text-white border-white hover:bg-white/20"
              onClick={() => navigate('/resources')}
            >
              <ChevronLeft size={16} className="mr-2" />
              Back to Resources
            </Button>
            
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
              <p className="text-xl mb-4">Instructor: {course.instructor}</p>
              <p className="opacity-90 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span>8 weeks</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span>24 video lessons</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span>Certificate included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Video Player */}
              <div className="lg:col-span-2">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-6">
                  {currentVideo ? (
                    <iframe
                      className="w-full h-full"
                      src={currentVideo.videoUrl}
                      title={currentVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <div className="text-center">
                        <div className="bg-entrepreneur-light w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                          <Play className="h-8 w-8 text-entrepreneur-primary" />
                        </div>
                        <p className="text-gray-500 font-medium">Select a video to begin</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {currentVideo && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">{currentVideo.title}</h2>
                    <p className="text-gray-600 mb-2">{currentVideo.description}</p>
                    <p className="text-sm text-gray-500">Duration: {currentVideo.duration}</p>
                  </div>
                )}
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <p>Validate your business idea with proven methods</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <p>Create a solid business plan that attracts investors</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <p>Build an effective marketing strategy</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <p>Navigate legal requirements with confidence</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <p>Develop an MVP to test your concept</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <p>Create a successful launch strategy</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Course Curriculum */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">Course Price</h3>
                      <p className="text-3xl font-bold text-entrepreneur-primary">${course.price}</p>
                      <p className="text-sm text-gray-500">One-time payment, lifetime access</p>
                      <Button 
                        className="w-full mt-4 bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                        onClick={() => setShowPaymentDialog(true)}
                      >
                        Get Full Access
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4">Course Curriculum</h3>
                      <div className="space-y-3">
                        {course.weeks.map((week) => (
                          <div 
                            key={week.id}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => handleWatchVideo(week)}
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">{week.title}</h4>
                              {week.isFree ? (
                                <Button size="sm" variant="outline" className="text-entrepreneur-primary border-entrepreneur-primary">
                                  <Play size={14} className="mr-1" />
                                  Watch
                                </Button>
                              ) : (
                                <div className="flex items-center text-gray-500">
                                  <Lock size={14} className="mr-1" />
                                  <span className="text-sm">Locked</span>
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Duration: {week.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Purchase</DialogTitle>
            <DialogDescription>
              Get full access to "{course.title}" and start your entrepreneurial journey today.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex justify-between">
              <span>Course Fee</span>
              <span>${course.price}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${course.price}</span>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Payment Method</h3>
              <div className="space-y-3">
                <div className="border rounded-md p-3 flex items-center">
                  <input type="radio" id="card" name="payment" className="mr-2" defaultChecked />
                  <label htmlFor="card">Credit/Debit Card</label>
                </div>
                <div className="border rounded-md p-3 flex items-center">
                  <input type="radio" id="paypal" name="payment" className="mr-2" />
                  <label htmlFor="paypal">PayPal</label>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>Cancel</Button>
            <Button onClick={handlePaymentSubmit} className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary">
              Complete Payment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseDetail;
