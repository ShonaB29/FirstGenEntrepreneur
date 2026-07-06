
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, Calendar as CalendarIcon, Bell, ChevronRight, X, Edit } from "lucide-react";
import { format } from "date-fns";

interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  progress: number;
  category: string;
  milestones: Milestone[];
  reminderFrequency: string;
}

interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  dueDate: Date;
}

const GoalTracking = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: "1",
      title: "Complete Business Plan",
      description: "Develop a comprehensive business plan including market analysis, financial projections, and operational strategy.",
      deadline: new Date(2025, 5, 30),
      progress: 65,
      category: "Planning",
      milestones: [
        { id: "m1", title: "Complete executive summary", completed: true, dueDate: new Date(2025, 4, 15) },
        { id: "m2", title: "Finalize market analysis", completed: true, dueDate: new Date(2025, 5, 1) },
        { id: "m3", title: "Create financial projections", completed: false, dueDate: new Date(2025, 5, 15) },
        { id: "m4", title: "Draft operational strategy", completed: false, dueDate: new Date(2025, 5, 25) },
      ],
      reminderFrequency: "weekly"
    },
    {
      id: "2",
      title: "Launch MVP",
      description: "Design, develop, and launch a minimum viable product to test in the market and gather initial user feedback.",
      deadline: new Date(2025, 7, 15),
      progress: 30,
      category: "Product",
      milestones: [
        { id: "m5", title: "Complete product design", completed: true, dueDate: new Date(2025, 5, 30) },
        { id: "m6", title: "Develop core functionality", completed: false, dueDate: new Date(2025, 6, 20) },
        { id: "m7", title: "Conduct user testing", completed: false, dueDate: new Date(2025, 7, 5) },
        { id: "m8", title: "Deploy MVP version", completed: false, dueDate: new Date(2025, 7, 15) },
      ],
      reminderFrequency: "daily"
    },
    {
      id: "3",
      title: "Secure Initial Funding",
      description: "Prepare pitch materials, network with potential investors, and secure seed funding for business growth.",
      deadline: new Date(2025, 8, 30),
      progress: 15,
      category: "Finance",
      milestones: [
        { id: "m9", title: "Create pitch deck", completed: true, dueDate: new Date(2025, 6, 15) },
        { id: "m10", title: "Attend networking events", completed: false, dueDate: new Date(2025, 7, 15) },
        { id: "m11", title: "Schedule investor meetings", completed: false, dueDate: new Date(2025, 8, 15) },
        { id: "m12", title: "Secure funding commitment", completed: false, dueDate: new Date(2025, 8, 30) },
      ],
      reminderFrequency: "monthly"
    },
  ]);

  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);

  // Calculate upcoming milestones
  const upcomingMilestones = goals
    .flatMap(goal => goal.milestones
      .filter(milestone => !milestone.completed)
      .map(milestone => ({
        ...milestone,
        goalTitle: goal.title
      }))
    )
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
    .slice(0, 5);

  const toggleMilestoneCompletion = (goalId: string, milestoneId: string) => {
    setGoals(
      goals.map(goal => {
        if (goal.id === goalId) {
          const updatedMilestones = goal.milestones.map(milestone => {
            if (milestone.id === milestoneId) {
              return { ...milestone, completed: !milestone.completed };
            }
            return milestone;
          });
          
          // Calculate new progress
          const completedCount = updatedMilestones.filter(m => m.completed).length;
          const progress = Math.round((completedCount / updatedMilestones.length) * 100);
          
          return { ...goal, milestones: updatedMilestones, progress };
        }
        return goal;
      })
    );
  };

  const viewGoalDetails = (goal: Goal) => {
    setSelectedGoal(goal);
    setShowDetailsDialog(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-entrepreneur-primary to-entrepreneur-secondary py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Goal Tracking</h1>
            <p className="text-xl">Track your progress, stay motivated, and achieve your entrepreneurial milestones</p>
          </div>
        </section>

        {/* Dashboard */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Your Goals</h2>
                
                <Tabs defaultValue="active" className="mb-8">
                  <TabsList>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="all">All Goals</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="active" className="mt-4">
                    <div className="space-y-4">
                      {goals.filter(goal => goal.progress < 100).map((goal) => (
                        <Card key={goal.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle>{goal.title}</CardTitle>
                                <CardDescription>{goal.category}</CardDescription>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-entrepreneur-primary hover:text-entrepreneur-secondary hover:bg-entrepreneur-light"
                                onClick={() => viewGoalDetails(goal)}
                              >
                                View Details
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="mb-2">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{goal.progress}%</span>
                              </div>
                              <Progress value={goal.progress} className="h-2" />
                            </div>
                            <div className="text-sm text-gray-500">
                              Deadline: {format(goal.deadline, "MMMM d, yyyy")}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <div className="flex items-center gap-2">
                              <Bell size={14} className="text-entrepreneur-secondary" />
                              <span className="text-sm text-gray-500">
                                Reminder: {goal.reminderFrequency.charAt(0).toUpperCase() + goal.reminderFrequency.slice(1)}
                              </span>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="completed" className="mt-4">
                    <div className="space-y-4">
                      {goals.filter(goal => goal.progress === 100).length > 0 ? (
                        goals.filter(goal => goal.progress === 100).map((goal) => (
                          <Card key={goal.id} className="bg-gray-50">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle className="flex items-center">
                                    <Check className="h-5 w-5 mr-2 text-green-500" />
                                    {goal.title}
                                  </CardTitle>
                                  <CardDescription>{goal.category}</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <div className="mb-2">
                                <Progress value={100} className="h-2 bg-gray-200" />
                              </div>
                              <div className="text-sm text-gray-500">
                                Completed on: {format(new Date(), "MMMM d, yyyy")}
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <p>No completed goals yet. Keep working towards your objectives!</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="all" className="mt-4">
                    <div className="space-y-4">
                      {goals.map((goal) => (
                        <Card key={goal.id} className={goal.progress === 100 ? "bg-gray-50" : ""}>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="flex items-center">
                                  {goal.progress === 100 && <Check className="h-5 w-5 mr-2 text-green-500" />}
                                  {goal.title}
                                </CardTitle>
                                <CardDescription>{goal.category}</CardDescription>
                              </div>
                              {goal.progress < 100 && (
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-entrepreneur-primary hover:text-entrepreneur-secondary hover:bg-entrepreneur-light"
                                  onClick={() => viewGoalDetails(goal)}
                                >
                                  View Details
                                  <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="mb-2">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{goal.progress}%</span>
                              </div>
                              <Progress value={goal.progress} className="h-2" />
                            </div>
                            <div className="text-sm text-gray-500">
                              {goal.progress === 100 
                                ? `Completed on: ${format(new Date(), "MMMM d, yyyy")}` 
                                : `Deadline: ${format(goal.deadline, "MMMM d, yyyy")}`
                              }
                            </div>
                          </CardContent>
                          {goal.progress < 100 && (
                            <CardFooter>
                              <div className="flex items-center gap-2">
                                <Bell size={14} className="text-entrepreneur-secondary" />
                                <span className="text-sm text-gray-500">
                                  Reminder: {goal.reminderFrequency.charAt(0).toUpperCase() + goal.reminderFrequency.slice(1)}
                                </span>
                              </div>
                            </CardFooter>
                          )}
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="col-span-1">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Milestones</CardTitle>
                      <CardDescription>Track your next action items</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {upcomingMilestones.length > 0 ? (
                        <ul className="space-y-3">
                          {upcomingMilestones.map((milestone) => (
                            <li key={milestone.id} className="flex gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <button 
                                  className={`w-5 h-5 rounded-full border ${milestone.completed ? 'bg-entrepreneur-primary border-entrepreneur-primary' : 'border-gray-300'} flex items-center justify-center`}
                                  onClick={() => {
                                    const goal = goals.find(g => 
                                      g.milestones.some(m => m.id === milestone.id)
                                    );
                                    if (goal) {
                                      toggleMilestoneCompletion(goal.id, milestone.id);
                                    }
                                  }}
                                >
                                  {milestone.completed && <Check className="h-3 w-3 text-white" />}
                                </button>
                              </div>
                              <div className="flex-1">
                                <p className={`text-sm font-medium ${milestone.completed ? 'line-through text-gray-400' : ''}`}>
                                  {milestone.title}
                                </p>
                                <div className="flex items-center gap-1 mt-1">
                                  <CalendarIcon className="h-3 w-3 text-gray-400" />
                                  <span className="text-xs text-gray-500">
                                    {format(milestone.dueDate, "MMM d")}
                                  </span>
                                  <span className="text-xs text-gray-400 mx-1">•</span>
                                  <span className="text-xs text-gray-500">{milestone.goalTitle}</span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 text-center py-4">No upcoming milestones</p>
                      )}
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Calendar</CardTitle>
                      <CardDescription>Your upcoming deadlines</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={new Date()}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Goal Details Dialog */}
        <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
          {selectedGoal && (
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedGoal.title}</DialogTitle>
                <DialogDescription>
                  <span className="inline-block bg-entrepreneur-light text-entrepreneur-primary px-2 py-1 rounded text-xs font-medium mt-1">
                    {selectedGoal.category}
                  </span>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
                  <p>{selectedGoal.description}</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-500">Progress</h3>
                    <span className="text-sm font-medium">{selectedGoal.progress}%</span>
                  </div>
                  <Progress value={selectedGoal.progress} className="h-2" />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Deadline</h3>
                  <div className="flex items-center gap-2 text-entrepreneur-primary">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{format(selectedGoal.deadline, "MMMM d, yyyy")}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Milestones</h3>
                  <ul className="space-y-3">
                    {selectedGoal.milestones.map((milestone) => (
                      <li key={milestone.id} className="flex items-start gap-3">
                        <button 
                          className={`w-5 h-5 mt-0.5 rounded-full border ${milestone.completed ? 'bg-entrepreneur-primary border-entrepreneur-primary' : 'border-gray-300'} flex items-center justify-center`}
                          onClick={() => toggleMilestoneCompletion(selectedGoal.id, milestone.id)}
                        >
                          {milestone.completed && <Check className="h-3 w-3 text-white" />}
                        </button>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className={`font-medium ${milestone.completed ? 'line-through text-gray-400' : ''}`}>
                              {milestone.title}
                            </p>
                            <span className="text-sm text-gray-500">
                              {format(milestone.dueDate, "MMM d")}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Reminder Settings</h3>
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-entrepreneur-secondary" />
                    <span>{selectedGoal.reminderFrequency.charAt(0).toUpperCase() + selectedGoal.reminderFrequency.slice(1)} reminders</span>
                  </div>
                </div>
              </div>

              <DialogFooter className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" onClick={() => setShowDetailsDialog(false)}>Close</Button>
                <Button className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary flex items-center gap-2">
                  <Edit size={16} />
                  Edit Goal
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default GoalTracking;
