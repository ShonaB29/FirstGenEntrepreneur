
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import FinancialProjectionsCalculator from '../components/FinancialProjectionsCalculator';

interface ResourceContentType {
  [key: string]: {
    title: string;
    category: string;
    description: string;
    content: React.ReactNode;
  };
}

const ResourceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Special case for financial projections calculator
  if (id === 'financial-projections-calculator') {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="container mx-auto py-8">
            <Button 
              variant="ghost" 
              className="mb-4 flex items-center gap-2 text-entrepreneur-primary hover:text-entrepreneur-secondary"
              onClick={() => navigate('/resources')}
            >
              <ChevronLeft size={16} />
              Back to Resources
            </Button>
            
            <FinancialProjectionsCalculator />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const resourcesContent: ResourceContentType = {
    "business-plan-blueprint": {
      title: "Business Plan Blueprint",
      category: "Business Planning",
      description: "Step-by-step guide to creating a comprehensive business plan that attracts investors.",
      content: (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">What is a Business Plan?</h2>
            <p>A business plan is a formal document that outlines the goals of a business, the strategies it will use to achieve those goals, and the timeline within which these goals should be reached. It is essentially a roadmap that provides direction to your business and is critical when seeking investment.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Components of a Business Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Executive Summary</h3>
                <p>A brief overview of your business plan, highlighting the key points.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Company Description</h3>
                <p>Detailed information about your company, including its mission, vision, and values.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Market Analysis</h3>
                <p>An overview of your target market, including its size, trends, and potential.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Products and Services</h3>
                <p>Detailed information about the products or services your company offers.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Marketing and Sales Strategy</h3>
                <p>How you plan to market and sell your products or services.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Management Team</h3>
                <p>Information about the key members of your management team.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Financial Projections</h3>
                <p>Projected financial statements, including income statements, balance sheets, and cash flow statements.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Funding Request</h3>
                <p>If you are seeking funding, this section will outline the amount of funding you need and how you plan to use it.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Templates and Resources</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Business Plan Template</h3>
                <p>Download our free business plan template to help you get started.</p>
                <Button 
                  className="mt-2 bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                  onClick={() => navigate('/template-download')}
                >
                  Download Template
                </Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Financial Projection Template</h3>
                <p>Use our financial projection template to create accurate financial forecasts.</p>
                <Button 
                  className="mt-2 bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
                  onClick={() => navigate('/template-download')}
                >
                  Download Template
                </Button>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Expert Tips</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Tip #1: Keep it Concise</h3>
                <p>Your business plan should be clear, concise, and easy to read. Avoid jargon and technical terms.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Tip #2: Know Your Audience</h3>
                <p>Tailor your business plan to your audience. If you are seeking funding, focus on the financial aspects of your business.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Tip #3: Be Realistic</h3>
                <p>Your financial projections should be realistic and based on sound assumptions.</p>
              </div>
            </div>
          </section>
        </div>
      )
    },
    "funding-101": {
      title: "Funding 101",
      category: "Financing",
      description: "Everything you need to know about securing funding for your startup.",
      content: (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Understanding Startup Funding</h2>
            <p>Startup funding is the lifeblood of new businesses, providing the necessary capital to launch, grow, and scale. Securing the right funding can be a game-changer for startups, enabling them to bring their innovative ideas to life and compete in the market.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Types of Funding</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Bootstrapping</h3>
                <p>Using personal savings and revenue generated by the business to fund operations.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Angel Investors</h3>
                <p>Individuals who invest their own money in startups, typically in exchange for equity.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Venture Capital</h3>
                <p>Firms that invest in startups with high growth potential, usually in exchange for a significant equity stake.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Crowdfunding</h3>
                <p>Raising small amounts of money from a large number of people, typically through online platforms.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Small Business Loans</h3>
                <p>Loans from banks or other financial institutions, often backed by government guarantees.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Grants</h3>
                <p>Non-repayable funds provided by government agencies or private organizations.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Funding Stages</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Pre-Seed Funding</h3>
                <p>Initial funding to get the business off the ground, often from friends and family.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Seed Funding</h3>
                <p>Early-stage funding to develop the product and gain initial traction.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Series A Funding</h3>
                <p>Funding to scale the business and expand into new markets.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Series B, C, and Beyond</h3>
                <p>Later-stage funding to continue scaling and potentially prepare for an IPO.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Preparing for Funding</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Develop a Solid Business Plan</h3>
                <p>A well-researched and comprehensive business plan is essential for attracting investors.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Create a Compelling Pitch Deck</h3>
                <p>A visually appealing and informative pitch deck can help you tell your story and showcase your business.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Build a Strong Team</h3>
                <p>Investors want to see that you have a capable and experienced team in place.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Know Your Numbers</h3>
                <p>Be prepared to answer detailed questions about your financial projections and key metrics.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="#" className="text-entrepreneur-primary hover:text-entrepreneur-secondary">SBA Funding Resources</a></li>
              <li><a href="#" className="text-entrepreneur-primary hover:text-entrepreneur-secondary">AngelList</a></li>
              <li><a href="#" className="text-entrepreneur-primary hover:text-entrepreneur-secondary">Crunchbase</a></li>
            </ul>
          </section>
        </div>
      )
    },
    "marketing-essentials": {
      title: "Marketing Essentials",
      category: "Marketing",
      description: "Core marketing strategies to get your business noticed in today's competitive landscape.",
      content: (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Fundamentals of Startup Marketing</h2>
            <p>Marketing is the process of creating, communicating, and delivering value to customers. For startups, effective marketing is crucial for building brand awareness, attracting customers, and driving growth.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Marketing Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Search Engine Optimization (SEO)</h3>
                <p>Optimizing your website to rank higher in search engine results pages (SERPs).</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Content Marketing</h3>
                <p>Creating and distributing valuable, relevant, and consistent content to attract and engage your target audience.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Social Media Marketing</h3>
                <p>Using social media platforms to connect with your audience, build brand awareness, and drive traffic to your website.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Email Marketing</h3>
                <p>Sending targeted emails to your subscribers to promote your products or services, share valuable content, and build relationships.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Paid Advertising</h3>
                <p>Using paid advertising platforms like Google Ads and social media ads to reach a wider audience and drive targeted traffic to your website.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Influencer Marketing</h3>
                <p>Collaborating with influencers to promote your products or services to their followers.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Building Your Marketing Plan</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Define Your Target Audience</h3>
                <p>Identify the specific group of people you want to reach with your marketing efforts.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Set Clear Goals</h3>
                <p>Determine what you want to achieve with your marketing efforts, such as increasing brand awareness, driving traffic to your website, or generating leads.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Choose the Right Channels</h3>
                <p>Select the marketing channels that are most effective for reaching your target audience.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Create Compelling Content</h3>
                <p>Develop high-quality content that resonates with your target audience and provides value.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Track Your Results</h3>
                <p>Monitor your marketing performance and make adjustments as needed to optimize your results.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Low-Cost Marketing Tactics for Startups</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Leverage Social Media</h3>
                <p>Use social media platforms to connect with your audience, share valuable content, and build brand awareness.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Create a Blog</h3>
                <p>Share your expertise and insights with your audience by creating a blog on your website.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Participate in Online Communities</h3>
                <p>Engage with your target audience by participating in online communities and forums.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Offer Free Resources</h3>
                <p>Attract leads by offering free resources such as ebooks, templates, and checklists.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Network with Other Businesses</h3>
                <p>Build relationships with other businesses in your industry to expand your reach and generate referrals.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Marketing Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="#" className="text-entrepreneur-primary hover:text-entrepreneur-secondary">HubSpot Marketing Blog</a></li>
              <li><a href="#" className="text-entrepreneur-primary hover:text-entrepreneur-secondary">Neil Patel's Blog</a></li>
              <li><a href="#" className="text-entrepreneur-primary hover:text-entrepreneur-secondary">Social Media Examiner</a></li>
            </ul>
          </section>
        </div>
      )
    },
    "legal-navigation-guide": {
      title: "Legal Navigation Guide",
      category: "Legal",
      description: "Navigate the legal requirements for starting and running your business.",
      content: (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Essential Legal Considerations for Startups</h2>
            <p>Starting a business involves navigating a complex web of legal requirements. Understanding these considerations is crucial for protecting your business and ensuring compliance.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Business Structure Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Sole Proprietorship</h3>
                <p>A simple business structure where the business is owned and run by one person.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Partnership</h3>
                <p>A business structure where two or more people agree to share in the profits or losses of a business.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Limited Liability Company (LLC)</h3>
                <p>A business structure that combines the pass-through taxation of a partnership or sole proprietorship with the limited liability of a corporation.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Corporation</h3>
                <p>A legal entity that is separate and distinct from its owners.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Legal Requirements</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Business Licenses and Permits</h3>
                <p>Obtaining the necessary licenses and permits to operate your business legally.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Contracts</h3>
                <p>Creating and reviewing contracts with customers, suppliers, and employees.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Intellectual Property Protection</h3>
                <p>Protecting your trademarks, copyrights, and patents.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Data Privacy</h3>
                <p>Complying with data privacy laws such as GDPR and CCPA.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Employment Law</h3>
                <p>Complying with employment laws related to hiring, firing, and employee compensation.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Common Legal Pitfalls to Avoid</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Not Having a Written Agreement</h3>
                <p>Always have a written agreement with your business partners, customers, and suppliers.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Violating Intellectual Property Rights</h3>
                <p>Make sure you are not infringing on the intellectual property rights of others.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Not Complying with Data Privacy Laws</h3>
                <p>Comply with data privacy laws to avoid fines and legal action.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Misclassifying Employees</h3>
                <p>Properly classify your workers as employees or independent contractors to avoid legal issues.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Legal Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="#" className="text-entrepreneur-primary hover:text-entrepreneur-secondary">U.S. Small Business Administration (SBA)</a></li>
              <li><a href="#" className="text-entrepreneur-primary hover:text-entrepreneur-secondary">LegalZoom</a></li>
              <li><a href="#" className="text-entrepreneur-primary hover:text-entrepreneur-secondary">Nolo</a></li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">When to Consult a Lawyer</h2>
            <p>It is always a good idea to consult with a lawyer when starting a business. A lawyer can help you choose the right business structure, draft contracts, and comply with legal requirements.</p>
          </section>
        </div>
      )
    },
    "financial-projections-calculator": {
      title: "Financial Projections Calculator",
      category: "Finance",
      description: "Create realistic financial projections for your business plan.",
      content: (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Financial Projections Calculator</h2>
            <p>Plan your business future with accurate financial projections. Enter key financial details to estimate revenue, expenses, profits, and cash flow. Get insights that help you make informed decisions and achieve sustainable growth!</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">User Inputs</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Required Information</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-medium">Revenue Details:</span> Estimated sales per month/year.</li>
                  <li><span className="font-medium">Fixed Expenses:</span> Rent, salaries, utilities.</li>
                  <li><span className="font-medium">Variable Expenses:</span> Raw materials, marketing costs.</li>
                  <li><span className="font-medium">Investment & Funding:</span> Loans, external funding, startup costs.</li>
                  <li><span className="font-medium">Projected Growth Rate:</span> Expected percentage increase in revenue.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Calculator Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-entrepreneur-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Interactive Inputs</h3>
                <p>User-friendly input fields with clear labels to enter your financial data with ease.</p>
              </div>
              <div className="bg-entrepreneur-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Dynamic Charts</h3>
                <p>Visual representations of your financial projections to better understand trends and patterns.</p>
              </div>
              <div className="bg-entrepreneur-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Real-time Calculations</h3>
                <p>Instant results that update as you adjust your inputs for quick scenario planning.</p>
              </div>
              <div className="bg-entrepreneur-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Downloadable Reports</h3>
                <p>Save and export your financial projections in PDF or Excel format for presentations or further analysis.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Make data-driven decisions based on realistic financial forecasts</li>
              <li>Identify potential cash flow issues before they become problems</li>
              <li>Create professional financial documents for investors and lenders</li>
              <li>Test different business scenarios to find optimal strategies</li>
              <li>Plan for sustainable growth with accurate revenue and expense projections</li>
              <li>Better understand your business's financial health and trajectory</li>
            </ul>
          </section>
          
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Access the Calculator</h2>
            <p className="mb-4">Ready to create your financial projections? Use our interactive calculator to get started!</p>
            <Button 
              className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
              onClick={() => navigate('/resource/financial-projections-calculator')}
            >
              Launch Calculator
            </Button>
          </section>
        </div>
      )
    },
    "pitch-deck-builder": {
      title: "Pitch Deck Builder",
      category: "Fundraising",
      description: "Design professional pitch decks that capture investor attention.",
      content: (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Pitch Deck Builder</h2>
            <p>Create a high-impact pitch deck that captures investor attention. Use our interactive tools to craft compelling slides with clear financial projections. Highlight market insights and showcase your competitive edge. Structure your pitch with engaging storytelling—problem, solution, business model, traction, and ask. Build a presentation that stands out and persuades investors to support your vision!</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Essential Pitch Deck Slides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Title Slide</h3>
                <p>Your company name, logo, and contact information.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Problem</h3>
                <p>Clearly define the problem you are solving.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Solution</h3>
                <p>Explain how your product or service solves the problem.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Market Opportunity</h3>
                <p>Show the size and potential of your target market.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Business Model</h3>
                <p>Describe how your company will generate revenue.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Traction</h3>
                <p>Highlight your key achievements and milestones.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Team</h3>
                <p>Introduce your team and their relevant experience.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Financial Projections</h3>
                <p>Present your financial forecasts and key metrics.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Ask</h3>
                <p>State the amount of funding you are seeking and how you will use it.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Pitch Deck Builder Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-entrepreneur-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Slide Templates</h3>
                <p>Professionally designed slide templates to help you create a visually appealing pitch deck.</p>
              </div>
              <div className="bg-entrepreneur-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Financial Projection Tools</h3>
                <p>Interactive tools to create accurate financial projections for your pitch deck.</p>
              </div>
              <div className="bg-entrepreneur-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Content Suggestions</h3>
                <p>Helpful content suggestions to guide you through each slide of your pitch deck.</p>
              </div>
              <div className="bg-entrepreneur-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Design Elements</h3>
                <p>Access to a library of icons, charts, and graphics to enhance your pitch deck.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits of a Great Pitch Deck</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Captures Investor Attention</h3>
                <p>A well-designed pitch deck grabs investor attention and keeps them engaged.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Communicates Clearly</h3>
                <p>A good pitch deck clearly communicates your business idea, value proposition, and growth potential.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Builds Credibility</h3>
                <p>A professional pitch deck builds credibility and trust with potential investors.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Facilitates Decision Making</h3>
                <p>Investors can quickly evaluate your business opportunity and make informed decisions.</p>
              </div>
            </div>
          </section>
          
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Pitch Deck?</h2>
            <p className="mb-4">Create a professional pitch deck that will impress investors and help you secure funding for your startup.</p>
            <Button className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary">
              Start Building
            </Button>
          </section>
        </div>
      )
    },
    "business-model-canvas": {
      title: "Business Model Canvas",
      category: "Strategy",
      description: "Map out your business model on a single, comprehensive page.",
      content: (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Business Model Canvas</h2>
            <p>The Business Model Canvas is a strategic management tool that allows you to visualize, design, and update your business model on a single page. It provides a holistic view of your business, helping you understand the key elements and how they relate to each other.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Nine Building Blocks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Customer Segments</h3>
                <p>The different groups of people or organizations you aim to reach and serve.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Value Propositions</h3>
                <p>The products and services that create value for your specific customer segments.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Channels</h3>
                <p>How you communicate with and reach your customer segments to deliver your value proposition.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Customer Relationships</h3>
                <p>The types of relationships you establish with specific customer segments.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Revenue Streams</h3>
                <p>The revenue your company generates from each customer segment.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Key Resources</h3>
                <p>The most important assets required to make your business model work.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Key Activities</h3>
                <p>The most important things your company must do to make its business model work.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Key Partnerships</h3>
                <p>The network of suppliers and partners that make your business model work.</p>
              </div>
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">Cost Structure</h3>
                <p>All costs incurred to operate your business model.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits of Using the Business Model Canvas</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Visual and Concise</h3>
                <p>The canvas provides a clear, visual representation of your business model on a single page.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Holistic View</h3>
                <p>It gives you a holistic view of your business, showing how different elements interact.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Identify Gaps</h3>
                <p>The canvas helps you identify gaps in your business model and areas for improvement.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Facilitate Discussion</h3>
                <p>It serves as a common language for discussing business models with your team and stakeholders.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Test Assumptions</h3>
                <p>The canvas allows you to test hypotheses and assumptions about your business model.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">How to Use the Business Model Canvas</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Step 1: Print or Draw the Canvas</h3>
                <p>Start by printing out or drawing the Business Model Canvas on a large sheet of paper.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Step 2: Fill Out Each Section</h3>
                <p>Work through each of the nine building blocks, filling them out with sticky notes or markers.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Step 3: Review and Refine</h3>
                <p>Review your canvas, looking for inconsistencies or areas that need further development.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">Step 4: Iterate and Improve</h3>
                <p>The Business Model Canvas is a living document. Update it as your business evolves and you gain new insights.</p>
              </div>
            </div>
          </section>
          
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Get Started with the Business Model Canvas</h2>
            <p className="mb-4">Ready to map out your business model? Download our interactive Business Model Canvas template to get started.</p>
            <Button className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary">
              Download Template
            </Button>
          </section>
        </div>
      )
    },
  };

  if (!id || !resourcesContent[id]) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="container mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
            <p className="text-xl mb-8">We couldn't find the resource you're looking for.</p>
            <Button 
              onClick={() => navigate('/resources')}
              className="bg-entrepreneur-primary hover:bg-entrepreneur-secondary"
            >
              Back to Resources
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const resource = resourcesContent[id];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-8">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center gap-2 text-entrepreneur-primary hover:text-entrepreneur-secondary"
            onClick={() => navigate('/resources')}
          >
            <ChevronLeft size={16} />
            Back to Resources
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{resource.title}</h1>
              <p className="text-xl text-gray-600 mb-2">{resource.description}</p>
              <div className="inline-block px-3 py-1 bg-entrepreneur-light text-entrepreneur-primary text-sm font-medium rounded-full">
                {resource.category}
              </div>
            </div>
            
            {resource.content}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceDetail;
