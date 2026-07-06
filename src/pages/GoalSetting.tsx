
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Target, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const goalFormSchema = z.object({
  title: z.string().min(3, {
    message: "Goal title must be at least 3 characters.",
  }),
  deadline: z.date({
    required_error: "A deadline is required.",
  }),
});

type Goal = {
  id: string;
  title: string;
  deadline: Date;
  milestones: string[];
  completed: boolean;
};

const GoalSetting = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [milestones, setMilestones] = useState<string[]>([]);
  const [newMilestone, setNewMilestone] = useState('');

  const form = useForm<z.infer<typeof goalFormSchema>>({
    resolver: zodResolver(goalFormSchema),
    defaultValues: {
      title: "",
    },
  });

  function addMilestone() {
    if (newMilestone.trim()) {
      setMilestones([...milestones, newMilestone.trim()]);
      setNewMilestone('');
    }
  }

  function onSubmit(values: z.infer<typeof goalFormSchema>) {
    const newGoal: Goal = {
      id: Date.now().toString(),
      title: values.title,
      deadline: values.deadline,
      milestones: [...milestones],
      completed: false,
    };
    
    setGoals([...goals, newGoal]);
    setMilestones([]);
    form.reset();
    
    toast({
      title: "Goal Created",
      description: "Your new goal has been successfully created.",
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Goal Setting Framework
            </h1>
            <p className="text-xl">
              Set, track, and achieve your business goals with our structured approach to
              goal setting and milestone tracking.
            </p>
          </div>
        </section>

        {/* Goal Setting Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Set New Goal */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-6">
                  <Target className="text-green-600" />
                  <h2 className="text-2xl font-bold">Set New Goal</h2>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Goal Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your goal..." {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="deadline"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Deadline</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                                className="p-3 pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      )}
                    />
                    
                    <div className="space-y-2">
                      <FormLabel>Milestones</FormLabel>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Add a milestone..." 
                          value={newMilestone} 
                          onChange={(e) => setNewMilestone(e.target.value)}
                          className="flex-1"
                        />
                        <Button 
                          type="button" 
                          onClick={addMilestone}
                          variant="outline"
                          className="bg-green-100 text-green-600 hover:bg-green-200 border-green-300"
                        >
                          Add
                        </Button>
                      </div>
                      
                      {milestones.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {milestones.map((milestone, index) => (
                            <li key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                                {index + 1}
                              </span>
                              <span className="flex-1">{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Set Goal
                    </Button>
                  </form>
                </Form>
              </div>
              
              {/* Your Goals */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-6">
                  <ArrowUp className="text-green-600" />
                  <h2 className="text-2xl font-bold">Your Goals</h2>
                </div>
                
                {goals.length === 0 ? (
                  <div className="text-center py-16 text-gray-500">
                    No goals set yet. Start by creating a new goal!
                  </div>
                ) : (
                  <div className="space-y-4">
                    {goals.map((goal) => (
                      <div key={goal.id} className="border rounded-lg p-4">
                        <h3 className="font-semibold text-lg">{goal.title}</h3>
                        <p className="text-sm text-gray-600">
                          Deadline: {format(goal.deadline, "PPP")}
                        </p>
                        {goal.milestones.length > 0 && (
                          <div className="mt-2">
                            <p className="text-sm font-medium">Milestones:</p>
                            <ul className="mt-1">
                              {goal.milestones.map((milestone, idx) => (
                                <li key={idx} className="text-sm flex items-center gap-2">
                                  <span className="w-4 h-4 rounded-full border border-green-500 flex-shrink-0"></span>
                                  {milestone}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GoalSetting;
