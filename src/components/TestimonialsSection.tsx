
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Founder, EcoStyle",
    image: "/placeholder.svg",
    content: "As a first-generation entrepreneur, I was overwhelmed by all the things I needed to learn. This platform gave me clear direction and connected me with mentors who helped me navigate the challenges.",
    initials: "SJ"
  },
  {
    name: "Marcus Chen",
    position: "CEO, TechSolve",
    image: "/placeholder.svg",
    content: "I went from a vague business idea to securing seed funding in just 6 months. The resources and community support made all the difference in my entrepreneurial journey.",
    initials: "MC"
  },
  {
    name: "Priya Patel",
    position: "Founder, Wellness Co.",
    image: "/placeholder.svg",
    content: "Nobody in my family had ever started a business before. This platform helped me build confidence and provided the practical tools I needed to turn my passion into a profitable business.",
    initials: "PP"
  },
  {
    name: "James Wilson",
    position: "Founder, Urban Eats",
    image: "/placeholder.svg",
    content: "The step-by-step guidance helped me avoid common pitfalls that could have cost me thousands. Now my restaurant is thriving, and I'm even mentoring others.",
    initials: "JW"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="success-stories" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-entrepreneur-light/50 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-entrepreneur-accent/20 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">
            Real experiences from entrepreneurs who started with just an idea and built thriving businesses.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border border-gray-100 shadow-sm hover-lift h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <svg className="h-8 w-8 text-entrepreneur-primary" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      
                      <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
                      
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 border border-gray-200">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-entrepreneur-primary text-white">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
