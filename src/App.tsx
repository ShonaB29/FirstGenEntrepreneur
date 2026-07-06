
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IdeaValidation from "./pages/IdeaValidation";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import GoalSetting from "./pages/GoalSetting";
import GoalTracking from "./pages/GoalTracking";
import AboutUs from "./pages/AboutUs";
import Community from "./pages/Community";
import Mentorship from "./pages/Mentorship";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";
import PeerNetwork from "./pages/PeerNetwork";
import CourseDetail from "./pages/CourseDetail";
import DiscordCommunity from "./pages/DiscordCommunity";
import BrandIdentity from "./pages/BrandIdentity";
import TemplateDownload from "./pages/TemplateDownload";
import PitchDeckBuilder from "./pages/PitchDeckBuilder";
import ChatWithMentor from "./pages/ChatWithMentor";
import ScheduleCall from "./pages/ScheduleCall";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/idea-validation" element={<IdeaValidation />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resource/:id" element={<ResourceDetail />} />
          <Route path="/goal-setting" element={<GoalSetting />} />
          <Route path="/goal-tracking" element={<GoalTracking />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/peer-network" element={<PeerNetwork />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/discord-community" element={<DiscordCommunity />} />
          <Route path="/brand-identity/:id" element={<BrandIdentity />} />
          <Route path="/template-download" element={<TemplateDownload />} />
          <Route path="/pitch-deck-builder" element={<PitchDeckBuilder />} />
          <Route path="/chat-with-mentor" element={<ChatWithMentor />} />
          <Route path="/schedule-call/:mentorId" element={<ScheduleCall />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
