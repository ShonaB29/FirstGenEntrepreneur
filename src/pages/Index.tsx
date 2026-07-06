
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ResourcesSection from '../components/ResourcesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ResourcesSection />
        <TestimonialsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
