'use client'
import React, { useState } from 'react';
import { Search, Filter, Users, BookOpen, DollarSign, Briefcase, Globe, Award, ChevronDown, ChevronRight, ExternalLink, MapPin, Clock, Building } from 'lucide-react';

const WomensEmpowermentPlatform = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [jobFilters, setJobFilters] = useState({
    location: '',
    industry: '',
    experience: '',
    remote: false
  });

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: true,
      experience: "Entry Level",
      industry: "Technology",
      description: "Join our diverse team building innovative solutions...",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "GrowthCo",
      location: "New York, NY",
      type: "Full-time",
      remote: false,
      experience: "Mid Level",
      industry: "Marketing",
      description: "Lead marketing campaigns in an inclusive environment...",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Austin, TX",
      type: "Contract",
      remote: true,
      experience: "Senior Level",
      industry: "Design",
      description: "Create user-centered designs for social impact...",
      posted: "3 days ago"
    }
  ];

  // Sample resources
  const resources = [
    {
      category: "Digital Skills",
      items: [
        { name: "Codecademy", type: "Free/Paid", link: "#", description: "Learn coding fundamentals" },
        { name: "Coursera", type: "Free/Paid", link: "#", description: "University-level courses" },
        { name: "freeCodeCamp", type: "Free", link: "#", description: "Full-stack development" }
      ]
    },
    {
      category: "Professional Development",
      items: [
        { name: "LinkedIn Learning", type: "Paid", link: "#", description: "Business and tech skills" },
        { name: "Udemy", type: "Paid", link: "#", description: "Diverse skill courses" },
        { name: "Khan Academy", type: "Free", link: "#", description: "Educational foundation" }
      ]
    },
    {
      category: "Legal Rights & Awareness",
      items: [
        { name: "EEOC Resources", type: "Free", link: "#", description: "Employment rights information" },
        { name: "Legal Aid Society", type: "Free", link: "#", description: "Free legal assistance" },
        { name: "Women's Legal Center", type: "Free", link: "#", description: "Gender-specific legal help" }
      ]
    }
  ];

  // Sample funding opportunities
  const fundingOpportunities = [
    {
      type: "Government Grant",
      name: "Women's Business Centers (SBA)",
      amount: "Up to $50,000",
      description: "Support for women entrepreneurs and small business owners",
      eligibility: "Women-owned businesses",
      deadline: "Rolling applications"
    },
    {
      type: "Federal Grant",
      name: "STEM Education Grant",
      amount: "Up to $25,000",
      description: "Funding for women pursuing STEM education and careers",
      eligibility: "Women in STEM fields",
      deadline: "March 2025"
    },
    {
      type: "Business Loan",
      name: "Microloans for Women",
      amount: "Up to $10,000",
      description: "Small business loans with favorable terms for women",
      eligibility: "Women entrepreneurs",
      deadline: "Ongoing"
    }
  ];

  const teamMembers = [
    { name: "Sarah Johnson", role: "Project Lead", bio: "Passionate about gender equality in tech" },
    { name: "Maria Rodriguez", role: "Developer", bio: "Full-stack developer advocating for diversity" },
    { name: "Aisha Patel", role: "UX Designer", bio: "Designing inclusive user experiences" },
    { name: "Emily Chen", role: "Researcher", bio: "Studying barriers to women's employment" }
  ];

  const Navbar = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EmpowerHer
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('jobs')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === 'jobs' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Jobs
            </button>
            <button 
              onClick={() => setCurrentPage('resources')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === 'resources' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Resources
            </button>
            <button 
              onClick={() => setCurrentPage('funding')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === 'funding' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Funding
            </button>
            <button 
              onClick={() => setCurrentPage('team')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === 'team' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Team
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Empowering Women in the
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Breaking barriers, creating opportunities, and building a more inclusive workforce. 
            Discover jobs, resources, and funding opportunities designed for underrepresented women.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('jobs')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Opportunities
            </button>
            <button 
              onClick={() => setCurrentPage('resources')}
              className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white border-opacity-30"
            >
              Free Resources
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );

  const StatsSection = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">10k+</div>
            <div className="text-gray-600">Job Opportunities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
            <div className="text-gray-600">Learning Resources</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">$2M+</div>
            <div className="text-gray-600">Funding Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );

  const JobsPage = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Opportunities</h1>
          <p className="text-gray-600">Discover inclusive workplaces committed to gender equality</p>
        </div>

        {/* Legal Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Know Your Rights</h3>
          <p className="text-blue-800 text-sm">
            BFOQ (Bona Fide Occupational Qualification) laws may restrict certain positions based on gender only in very limited circumstances. 
            Most job restrictions based on gender are illegal under Title VII of the Civil Rights Act.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filter Jobs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>All Industries</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Education</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>All Locations</option>
              <option>Remote</option>
              <option>New York</option>
              <option>California</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>All Experience</option>
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
            <div className="flex items-center">
              <input type="checkbox" id="remote" className="mr-2" />
              <label htmlFor="remote">Remote Only</label>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex items-center text-gray-600 space-x-4 text-sm">
                    <span className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {job.company}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.posted}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {job.type}
                  </span>
                  {job.remote && (
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                      Remote
                    </div>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{job.experience} • {job.industry}</span>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ResourcesPage = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Learning Resources</h1>
          <p className="text-gray-600">Expand your skills with curated educational content</p>
        </div>

        <div className="space-y-8">
          {resources.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-purple-600" />
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.type === 'Free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <button className="flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Visit Resource <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const FundingPage = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Funding Opportunities</h1>
          <p className="text-gray-600">Government grants, business loans, and funding programs for women</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {fundingOpportunities.map((opportunity, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {opportunity.type}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{opportunity.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">{opportunity.amount}</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>
              <div className="space-y-2 text-sm">
                <div><strong>Eligibility:</strong> {opportunity.eligibility}</div>
                <div><strong>Deadline:</strong> {opportunity.deadline}</div>
              </div>
              <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Application Tips</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Start your application early - funding cycles are competitive</li>
            <li>• Prepare detailed business plans and financial projections</li>
            <li>• Highlight your commitment to gender equality and community impact</li>
            <li>• Seek mentorship from previous grant recipients</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const TeamPage = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals working to create equal opportunities for women in the workplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-purple-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">EmpowerHer</span>
            </div>
            <p className="text-gray-400">
              Building a more inclusive future for women in the workforce.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('jobs')} className="hover:text-white">Jobs</button></li>
              <li><button onClick={() => setCurrentPage('resources')} className="hover:text-white">Resources</button></li>
              <li><button onClick={() => setCurrentPage('funding')} className="hover:text-white">Funding</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Legal Rights</a></li>
              <li><a href="#" className="hover:text-white">Career Guide</a></li>
              <li><a href="#" className="hover:text-white">Skill Building</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>support@empowerher.com</li>
              <li>1-800-EMPOWER</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EmpowerHer. Built for gender equality and opportunity.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {currentPage === 'home' && (
        <>
          <HeroSection />
          <StatsSection />
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Breaking Barriers Together</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our platform connects underrepresented women with opportunities, resources, and support 
                  to build successful careers in today's digital economy.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Job Opportunities</h3>
                  <p className="text-gray-600">Discover inclusive workplaces committed to gender equality</p>
                </div>
                <div className="text-center p-6 bg-pink-50 rounded-lg">
                  <BookOpen className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                  <p className="text-gray-600">Access free and paid resources to build digital skills</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Funding Support</h3>
                  <p className="text-gray-600">Find grants and loans to support your career journey</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {currentPage === 'jobs' && <JobsPage />}
      {currentPage === 'resources' && <ResourcesPage />}
      {currentPage === 'funding' && <FundingPage />}
      {currentPage === 'team' && <TeamPage />}
      
      <Footer />
    </div>
  );
};

export default WomensEmpowermentPlatform;