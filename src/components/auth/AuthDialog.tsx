
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

interface AuthDialogProps {
  triggerText?: string;
}

const AuthDialog = ({ triggerText = "Join Now" }: AuthDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary transition-colors">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Welcome to Startup Catalyst</DialogTitle>
          <DialogDescription className="text-center">
            Join our community of first-generation entrepreneurs.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin" className="mt-6">
            <SignInForm />
          </TabsContent>
          <TabsContent value="signup" className="mt-6">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
