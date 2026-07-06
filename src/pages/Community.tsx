
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommunitySection from '../components/CommunitySection';

const Community = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Community;
