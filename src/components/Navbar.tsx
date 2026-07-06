
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import AuthDialog from './auth/AuthDialog';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Idea Validation", href: "/idea-validation" },
    { name: "Goal Setting", href: "/goal-setting" },
    { name: "Resources", href: "/resources" },
    { name: "About Us", href: "/about-us" },
    { name: "Community", href: "/community" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold gradient-text">SparkStart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-entrepreneur-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <AuthDialog />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "fixed inset-x-0 top-[4rem] bottom-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="container mt-8 flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-800 hover:text-entrepreneur-primary text-lg font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <AuthDialog triggerText="Sign In / Sign Up" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
