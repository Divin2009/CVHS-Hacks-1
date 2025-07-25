'use client';
import React, { useState } from 'react';
import { BookOpen, ExternalLink, Search, Filter, Star, Clock, Users } from 'lucide-react';

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const resources = [
  {
    category: "Digital Skills",
    items: [
      { 
        name: "Codecademy", 
        type: "Free/Paid", 
        link: "https://codecademy.com", 
        description: "Interactive coding lessons in Python, JavaScript, HTML/CSS, and more",
        rating: 4.5,
        duration: "Self-paced",
        users: "50M+"
      },
      { 
        name: "freeCodeCamp", 
        type: "Free", 
        link: "https://freecodecamp.org", 
        description: "Comprehensive full-stack web development curriculum with certifications",
        rating: 4.8,
        duration: "300+ hours per cert",
        users: "400M+"
      },
      { 
        name: "Coursera", 
        type: "Free/Paid", 
        link: "https://coursera.org", 
        description: "University-level courses from top institutions worldwide",
        rating: 4.6,
        duration: "4-12 weeks",
        users: "100M+"
      },
      { 
        name: "Khan Academy", 
        type: "Free", 
        link: "https://khanacademy.org", 
        description: "Computer programming fundamentals and math foundations",
        rating: 4.7,
        duration: "Self-paced",
        users: "120M+"
      },
      { 
        name: "Microsoft Azure Fundamentals", 
        type: "Free", 
        link: "https://learn.microsoft.com/en-us/training/azure/", 
        description: "A free self-paced training for beginners in cloud computing and Microsoft Azure.",
        rating: 4.5,
        duration: "6 hours",
        users: "N/A"
      }
    ]
  },
  {
    category: "Professional Development",
    items: [
      { 
        name: "LinkedIn Learning", 
        type: "Paid", 
        link: "https://linkedin.com/learning", 
        description: "Business skills, leadership, and technology courses with certificates",
        rating: 4.4,
        duration: "1-3 hours",
        users: "25M+"
      },
      { 
        name: "Udemy", 
        type: "Paid", 
        link: "https://udemy.com", 
        description: "Diverse skill courses from industry professionals",
        rating: 4.3,
        duration: "2-20 hours",
        users: "52M+"
      },
      { 
        name: "Skillshare", 
        type: "Free/Paid", 
        link: "https://skillshare.com", 
        description: "Creative and business skills with project-based learning",
        rating: 4.2,
        duration: "30-60 min",
        users: "12M+"
      },
      { 
        name: "MasterClass", 
        type: "Paid", 
        link: "https://masterclass.com", 
        description: "Learn from industry leaders and world-class experts",
        rating: 4.5,
        duration: "2-5 hours",
        users: "1M+"
      }
    ]
  },
  {
    category: "Legal Rights & Awareness",
    items: [
      { 
        name: "EEOC Resources", 
        type: "Free", 
        link: "https://eeoc.gov", 
        description: "Employment rights information and discrimination complaint filing",
        rating: 4.9,
        duration: "Variable",
        users: "N/A"
      },
      { 
        name: "Legal Aid Society", 
        type: "Free", 
        link: "https://www.lsc.gov/", 
        description: "Free legal assistance for low-income individuals",
        rating: 4.6,
        duration: "Case-based",
        users: "N/A"
      },
      { 
        name: "Women's Legal Center", 
        type: "Free", 
        link: "https://nwlc.org/", 
        description: "Gender-specific legal help and advocacy services",
        rating: 4.7,
        duration: "Consultation",
        users: "N/A"
      },
      { 
        name: "Know Your IX", 
        type: "Free", 
        link: "https://knowyourix.org", 
        description: "Empowering students to stop sexual violence through Title IX",
        rating: 4.8,
        duration: "Self-paced",
        users: "N/A"
      }
    ]
  },
  {
    category: "Financial Literacy",
    items: [
      { 
        name: "Mint Financial Education", 
        type: "Free", 
        link: "https://mint.intuit.com", 
        description: "Personal finance management and budgeting tools",
        rating: 4.4,
        duration: "Self-paced",
        users: "25M+"
      },
      { 
        name: "Smart About Money", 
        type: "Free", 
        link: "https://smartaboutmoney.org", 
        description: "Comprehensive financial education courses and resources",
        rating: 4.5,
        duration: "1-2 hours per module",
        users: "N/A"
      },
      { 
        name: "National Endowment for Financial Education", 
        type: "Free", 
        link: "https://nefe.org", 
        description: "Evidence-based financial education programs and tools",
        rating: 4.6,
        duration: "Variable",
        users: "N/A"
      },
      { 
        name: "YNAB (You Need A Budget)", 
        type: "Paid", 
        link: "https://youneedabudget.com", 
        description: "Budgeting software with educational resources and methodology",
        rating: 4.7,
        duration: "Self-paced",
        users: "1M+"
      }
    ]
  },
  {
    category: "Mental Health & Wellness",
    items: [
      { 
        name: "Crisis Text Line", 
        type: "Free", 
        link: "https://crisistextline.org", 
        description: "24/7 crisis support via text message",
        rating: 4.8,
        duration: "Immediate",
        users: "N/A"
      },
      { 
        name: "NAMI (National Alliance on Mental Illness)", 
        type: "Free", 
        link: "https://nami.org", 
        description: "Mental health education, support groups, and advocacy",
        rating: 4.7,
        duration: "Variable",
        users: "N/A"
      },
      { 
        name: "Headspace", 
        type: "Free/Paid", 
        link: "https://headspace.com", 
        description: "Guided meditation and mindfulness exercises",
        rating: 4.4,
        duration: "3-60 min",
        users: "70M+"
      },
      { 
        name: "BetterHelp", 
        type: "Paid", 
        link: "https://betterhelp.com", 
        description: "Online therapy and counseling services",
        rating: 4.2,
        duration: "Ongoing",
        users: "2M+"
      }
    ]
  },
  {
    category: "Language Learning",
    items: [
      {
        name: "Duolingo Language Courses",
        type: "Free",
        link: "https://www.duolingo.com/",
        description: "Free, gamified language lessons in English, Spanish, French, Hindi, and more. Supports 30+ languages.",
        rating: 4.6,
        duration: "Self-paced",
        users: "500M+"
      },
      {
        name: "English for the Workplace",
        type: "Free",
        link: "https://www.futurelearn.com/courses/english-for-the-workplace",
        description: "Improve workplace English skills, job applications, and interviews. Ideal for learners in Africa, South Asia, and Latin America.",
        rating: 4.5,
        duration: "4 weeks",
        users: "N/A"
      },
      {
        name: "BBC Learning English",
        type: "Free",
        link: "https://www.bbc.co.uk/learningenglish",
        description: "High-quality English grammar, pronunciation, and vocabulary resources from the BBC.",
        rating: 4.7,
        duration: "Self-paced",
        users: "N/A"
      }
    ]
  },
  {
    category: "Civic Education",
    items: [
      {
        name: "iCivics",
        type: "Free",
        link: "https://www.icivics.org/",
        description: "Games and lessons that teach the fundamentals of U.S. government, civic responsibility, and participation.",
        rating: 4.7,
        duration: "Self-paced",
        users: "N/A"
      },
      {
        name: "Constitution Center Interactive Resources",
        type: "Free",
        link: "https://constitutioncenter.org/",
        description: "Constitutional learning materials and interactive tools for understanding civil rights and government structure.",
        rating: 4.6,
        duration: "Self-paced",
        users: "N/A"
      }
    ]
  },
  {
    category: "Entrepreneurship",
    items: [
      {
        name: "MIT OpenCourseWare: Entrepreneurship",
        type: "Free",
        link: "https://ocw.mit.edu/courses/entrepreneurship/",
        description: "Lectures and course materials from MIT on launching and scaling businesses.",
        rating: 4.8,
        duration: "10-15 weeks",
        users: "N/A"
      },
      {
        name: "Y Combinator Startup School",
        type: "Free",
        link: "https://www.startupschool.org/",
        description: "Free online program by Y Combinator for early-stage startups and aspiring entrepreneurs.",
        rating: 4.7,
        duration: "8-10 weeks",
        users: "N/A"
      }
    ]
  }
];


  const categories = ['all', ...new Set(resources.map(r => r.category))];
  const types = ['all', ...new Set(resources.flatMap(r => r.items.map(item => item.type)))];

  const filteredResources = resources.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || category.category === selectedCategory;
      const matchesType = selectedType === 'all' || item.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesType;
    })
  })).filter(category => category.items.length > 0);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Learning Resources</h1>
          <p className="text-gray-600">Expand your skills with curated educational content</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white min-w-48 appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white min-w-40 appearance-none cursor-pointer"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredResources.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-purple-600" />
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === 'Free' ? 'bg-green-100 text-green-800' : 
                          item.type === 'Paid' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="space-y-1 mb-3 text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="flex">{renderStars(item.rating)}</div>
                          <span>{item.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{item.duration}</span>
                        </div>
                        {item.users !== 'N/A' && (
                          <div className="flex items-center gap-2">
                            <Users className="w-3 h-3" />
                            <span>{item.users} users</span>
                          </div>
                        )}
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium"
                      >
                        Visit Resource <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-8 bg-gray-100 rounded-lg p-4">
          <p className="text-xs text-gray-600 text-center">
            <strong>Disclaimer:</strong> Many of the legal, financial, and educational resources listed here are based in or primarily designed for audiences in the <strong>United States</strong>. While some services may be accessible internationally, laws, rights, and support systems can vary widely by country. <strong>Please consult local authorities, legal experts, or official organizations in your country</strong> for accurate and relevant information regarding your specific rights, services, and opportunities. 
          </p>
        </div>
      </div>
    </div>
  );
}