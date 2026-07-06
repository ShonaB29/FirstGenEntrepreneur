
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const AboutUs = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Ms Sharmishthaa R",
      position: "CEO & Founder",
      bio: "Sharmishthaa is the visionary CEO driving the success of our first-generation entrepreneur project. With her dynamic leadership and strategic foresight, Sharmishthaa has transformed challenges into opportunities, empowering individuals to bring their ideas to life. She combines deep expertise in business development and marketing with a compassionate approach to mentorship, fostering an inclusive environment where innovation thrives.",
      image: "/lovable-uploads/6ab0f2ef-bf22-48ce-96d8-fe11bf0370af.png"
    },
    {
      name: "Ms Srinithi K",
      position: "Chief Operating Officer",
      bio: "As COO, Srinithi ensures smooth daily operations, improves efficiency, and drives business growth. She oversees teams, optimizes workflows, and aligns operations with company goals, fostering collaboration and innovation.",
      image: "/lovable-uploads/fc17a105-4fa0-4cb6-b753-0accec607f7a.png"
    },
    {
      name: "Ms Tarika P",
      position: "Strategy Director",
      bio: "Tarika plays a key role in shaping the project's vision. Her passion for refining ideas and ensuring their simplicity and effectiveness makes her an invaluable contributor to empowering aspiring entrepreneurs.",
      image: "/lovable-uploads/4788e1a2-6cbd-4d27-9ccd-8905ce9d7449.png"
    },
    {
      name: "Ms Shona B",
      position: "Membership Officer",
      bio: "Shona is our dedicated Membership Officer, playing a pivotal role in building and maintaining strong relationships with our members. Her organizational skills and friendly approach ensure seamless communication and engagement within the community. Shona's commitment to fostering collaboration makes her an essential part of our team's success.",
      image: "/lovable-uploads/79be6bea-e847-48ef-8bfc-b621d5434913.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-entrepreneur-primary to-entrepreneur-secondary py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
              <p className="text-xl">Meet the team behind Startup Catalyst, dedicated to empowering first-generation entrepreneurs.</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                At Startup Catalyst, we're committed to breaking barriers for first-generation entrepreneurs. We believe everyone deserves access to high-quality resources, mentorship, and community support to transform their business ideas into reality, regardless of background or experience.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover-lift shadow-sm">
                  <div className="w-24 h-24 mx-auto mt-6 rounded-full overflow-hidden border-2 border-entrepreneur-light">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-entrepreneur-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
