
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background gradient decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-entrepreneur-light rounded-full opacity-60 blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-entrepreneur-accent/30 rounded-full opacity-60 blur-3xl translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Turn Your Vision Into <span className="gradient-text">Reality</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            A comprehensive platform designed specifically for first-generation entrepreneurs to build, launch, and grow your business with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary text-white" asChild>
              <Link to="/idea-validation">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-entrepreneur-primary text-entrepreneur-primary hover:bg-entrepreneur-light" asChild>
              <Link to="/resources">
                Explore Resources
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats/Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
          {[
            {
              title: "50+",
              description: "Curated resources for entrepreneurs at every stage"
            },
            {
              title: "100+",
              description: "Entrepreneurs in our supportive community"
            },
            {
              title: "87%",
              description: "Of members report accelerated business growth"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover-lift border border-gray-100">
              <h3 className="text-3xl font-bold text-entrepreneur-primary mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
