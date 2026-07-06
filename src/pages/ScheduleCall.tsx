
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon } from "lucide-react";

const ScheduleCall = () => {
  const { mentorId } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);

  // This would typically come from an API based on the mentor's availability
  const availableTimeSlots = [
    "09:00 AM - 09:30 AM",
    "10:00 AM - 10:30 AM",
    "11:30 AM - 12:00 PM",
    "02:00 PM - 02:30 PM",
    "03:30 PM - 04:00 PM",
    "05:00 PM - 05:30 PM"
  ];

  // Sample mentor data - would normally be fetched based on ID
  const mentor = {
    id: mentorId || "1",
    name: mentorId === "2" ? "Marcus Johnson" : "Dr. Sarah Chen",
    position: mentorId === "2" ? "Serial Entrepreneur" : "CEO & Founder",
    company: mentorId === "2" ? "Multiple Ventures" : "TechVision Inc.",
    image: mentorId === "2" 
      ? "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=300&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop"
  };

  const handleSchedule = () => {
    if (!date || !timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please select both a date and time slot for your call.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send this to an API
    toast({
      title: "Call Scheduled!",
      description: `Your call with ${mentor.name} is scheduled for ${date.toLocaleDateString()} at ${timeSlot}.`,
    });

    // Redirect back to the mentorship page after a short delay
    setTimeout(() => {
      navigate('/mentorship');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              className="mb-6" 
              onClick={() => navigate(-1)}
            >
              &larr; Back
            </Button>
            
            <h1 className="text-3xl font-bold mb-8">Schedule a Call with {mentor.name}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mentor Info */}
              <Card className="md:col-span-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-bold">{mentor.name}</h2>
                    <p className="text-entrepreneur-primary">{mentor.position}</p>
                    <p className="text-gray-600">{mentor.company}</p>
                    
                    <div className="mt-6 pt-6 border-t w-full">
                      <h3 className="font-medium mb-2">About This Call</h3>
                      <p className="text-sm text-gray-600">
                        One-on-one video call to discuss your business challenges, 
                        get expert advice, and receive personalized guidance.
                      </p>
                      <p className="text-sm font-medium mt-4">30 minutes • Free</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Calendar */}
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <CalendarIcon className="mr-2 h-5 w-5 text-entrepreneur-primary" />
                    <h2 className="text-xl font-bold">Select Date & Time</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-medium mb-4">1. Choose a Date</h3>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                        disabled={(date) => {
                          // Disable dates in the past and weekends for this example
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          const day = date.getDay();
                          return date < today || day === 0 || day === 6;
                        }}
                      />
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-4">2. Select a Time Slot</h3>
                      {!date ? (
                        <p className="text-gray-500">Please select a date first</p>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-sm text-gray-600">
                            Available time slots for {date.toLocaleDateString()}:
                          </p>
                          <Select onValueChange={setTimeSlot}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {availableTimeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>
                                  {slot}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <Button 
                      className="w-full bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                      disabled={!date || !timeSlot}
                      onClick={handleSchedule}
                    >
                      Schedule Call
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      You'll receive a confirmation email with a video link once scheduled.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleCall;
