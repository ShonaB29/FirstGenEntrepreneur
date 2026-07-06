
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    resources: [
      { name: "Guides", href: "#" },
      { name: "Tools", href: "#" },
      { name: "Courses", href: "#" },
      { name: "Blog", href: "#" }
    ],
    community: [
      { name: "Events", href: "#" },
      { name: "Forum", href: "#" },
      { name: "Mentorship", href: "#" },
      { name: "Success Stories", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold gradient-text">SparkStart</span>
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering first-generation entrepreneurs with the resources, knowledge, and community they need to build successful businesses.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons */}
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-entrepreneur-primary hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-entrepreneur-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-entrepreneur-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-entrepreneur-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-200 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SparkStart. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-500 hover:text-gray-700 text-sm">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
