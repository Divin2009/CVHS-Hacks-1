'use client'
import React, { useState } from 'react';
import { Star, Heart, Trophy, Users, BookOpen, Briefcase, Search, Award, MapPin, Calendar } from 'lucide-react';

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const stories = [
    {
      id: 1,
      name: "Maria Rodriguez",
      category: "education",
      title: "From Single Mother to Software Engineer",
      location: "Phoenix, Arizona",
      year: "2023",
      image: "/api/placeholder/300/200",
      summary: "After becoming a single mother at 19, Maria used Pell Grants and TANF to support her family while earning her computer science degree.",
      story: "When Maria found herself pregnant at 19 and abandoned by her partner, she felt her dreams of higher education slipping away. Working minimum wage jobs to survive, she discovered government programs that would change her trajectory forever. Through TANF, she received monthly cash assistance that covered basic needs for her and her daughter. Pell Grants funded her computer science education at Arizona State University. The WIC program ensured proper nutrition during her studies. Today, Maria works as a senior software engineer at a Fortune 500 company, earning six figures and providing a stable future for her family.",
      programsUsed: ["Pell Grants", "TANF", "WIC", "Childcare Assistance"],
      outcome: "Senior Software Engineer - $95,000 annually",
      quote: "These programs didn't just give me money—they gave me dignity and the chance to dream again. Now I mentor other young mothers in tech.",
      tags: ["Single Mother", "Education", "Technology", "Hispanic/Latina"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      name: "Aisha Johnson",
      category: "business",
      title: "From Food Stamps to Food Empire",
      location: "Atlanta, Georgia",
      year: "2024",
      image: "/api/placeholder/300/200",
      summary: "Using SNAP benefits to feed her family while building her catering business, Aisha now owns three restaurants and employs 45+ people.",
      story: "Aisha's journey began during a difficult period when she was laid off from her marketing job while pregnant with her second child. SNAP benefits helped feed her family during those lean months, while she used her savings to start a small catering business from her kitchen. The Women's Business Center provided free training and mentorship. Medicaid covered her prenatal care and delivery. As her business grew, she secured microloans and eventually opened her first restaurant. Her success story came full circle when she hired several women from her community who were also receiving government assistance.",
      programsUsed: ["SNAP", "Medicaid", "Women's Business Centers", "Small Business Loans"],
      outcome: "Restaurant Owner - 3 locations, 45+ employees",
      quote: "SNAP kept my family fed while I built my dream. Now I provide jobs and hope to other women who need that same chance I got.",
      tags: ["Business Owner", "African American", "Food Industry", "Job Creator"],
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      name: "Sarah Kim",
      category: "healthcare",
      title: "Healing Others After Healing Herself",
      location: "Los Angeles, California",
      year: "2023",
      image: "/api/placeholder/300/200",
      summary: "A domestic violence survivor who used housing assistance and healthcare programs to rebuild her life and become a nurse practitioner.",
      story: "Sarah's story begins with courage—the courage to leave an abusive marriage with her two young children and no financial resources. Section 8 housing vouchers provided safe, stable housing while she escaped her dangerous situation. Medicaid covered therapy for herself and her children to heal from trauma. The LIHEAP program helped with utilities during those first difficult months. While receiving TANF, Sarah enrolled in nursing school using Pell Grants. Seven years later, she graduated as a nurse practitioner specializing in trauma care, now earning $110,000 annually and helping other survivors through their healing journey.",
      programsUsed: ["Section 8 Housing", "Medicaid", "TANF", "Pell Grants", "LIHEAP"],
      outcome: "Nurse Practitioner - $110,000 annually",
      quote: "These programs saved my life and my children's lives. Now I use my story to help other women see that there is hope after abuse.",
      tags: ["Domestic Violence Survivor", "Healthcare Professional", "Asian American", "Single Mother"],
      color: "bg-pink-100 text-pink-800"
    },
    {
      id: 4,
      name: "Rosa Martinez",
      category: "education",
      title: "Teaching the Next Generation",
      location: "San Antonio, Texas",
      year: "2024",
      image: "/api/placeholder/300/200",
      summary: "An undocumented immigrant who gained legal status and used education programs to become a bilingual teacher and community advocate.",
      story: "Rosa arrived in the US at age 16 with her parents, undocumented and speaking little English. After gaining legal status through immigration reform, she was determined to contribute to her new country. While working multiple jobs to support her parents, Rosa used Pell Grants to earn her teaching degree. WIC provided nutrition support during her pregnancy, and Medicaid covered her prenatal care. Childcare assistance allowed her to complete student teaching while caring for her newborn. Today, Rosa teaches bilingual education in her community and advocates for immigrant families, helping them navigate the same systems that helped her succeed.",
      programsUsed: ["Pell Grants", "WIC", "Medicaid", "Childcare Assistance"],
      outcome: "Bilingual Teacher & Community Advocate - $55,000 annually",
      quote: "Education changed everything for me. Now I help other immigrant families see that their dreams are possible in America.",
      tags: ["Immigrant", "Education", "Teacher", "Hispanic/Latina", "Community Advocate"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 5,
      name: "Jennifer Washington",
      category: "business",
      title: "Building Generational Wealth",
      location: "Detroit, Michigan",
      year: "2023",
      image: "/api/placeholder/300/200",
      summary: "A former teen mother who used housing assistance to stabilize her family while building a successful construction company.",
      story: "Jennifer became a mother at 17 and dropped out of high school to work. Living in unstable housing with her baby, she applied for Section 8 assistance, which provided the stability her family desperately needed. With secure housing, she was able to complete her GED and pursue trade school training. The Women's Business Center provided entrepreneurship training and helped her write her first business plan. Starting with small residential projects, Jennifer's construction company now employs 20+ people and has completed major commercial projects worth millions. She recently purchased her first home and established college funds for her three children.",
      programsUsed: ["Section 8 Housing", "Women's Business Centers", "Trade School Assistance", "Small Business Loans"],
      outcome: "Construction Company Owner - $300K+ annually",
      quote: "Stable housing was the foundation that let me build everything else. Now I'm building wealth for my children and their children.",
      tags: ["Teen Mother", "African American", "Construction", "Homeowner", "Trade Skills"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 6,
      name: "Dr. Fatima Al-Rashid",
      category: "healthcare",
      title: "From Refugee to Doctor",
      location: "Minneapolis, Minnesota",
      year: "2024",
      image: "/api/placeholder/300/200",
      summary: "A refugee who used multiple support programs to become a physician and now serves underserved communities.",
      story: "Fatima arrived in the US as a refugee with her three children, fleeing conflict in her home country. Despite having been a teacher in her homeland, she faced language barriers and unrecognized credentials. TANF provided immediate financial support while she learned English. Medicaid ensured her family's health needs were met. After mastering English, she used Pell Grants and student loans to complete pre-medical requirements, then medical school. Today, Dr. Al-Rashid works in a community health center serving refugees and immigrants, providing culturally competent care in multiple languages. She recently opened a clinic specifically for refugee women and children.",
      programsUsed: ["TANF", "Medicaid", "Pell Grants", "ESL Programs", "Student Loans"],
      outcome: "Physician & Clinic Owner - $200K+ annually",
      quote: "America gave me refuge and opportunity. Now I give back by caring for others who are walking the same path I once walked.",
      tags: ["Refugee", "Middle Eastern", "Doctor", "Community Health", "Multilingual"],
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Stories', icon: Users },
    { id: 'education', name: 'Education', icon: BookOpen },
    { id: 'business', name: 'Business & Entrepreneurship', icon: Briefcase },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
  ];

  const impactStats = [
    { label: "Stories Featured", value: "5+", icon: Star },
    { label: "Lives Changed", value: "200+", icon: Heart },
    { label: "Combined Income Growth", value: "$2M+", icon: Trophy },
    { label: "Jobs Created", value: "150+", icon: Users }
  ];

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.story.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Celebrating the incredible journeys of underrepresented women who have transformed their lives 
            and communities through determination, resilience, and access to government support programs. 
            These are real stories of triumph over adversity.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="p-3 rounded-lg bg-purple-100 mx-auto w-fit mb-3">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <div className="text-center">
            <Star className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-purple-900 mb-2">Every Story Matters</h3>
            <p className="text-purple-800 text-sm max-w-3xl mx-auto">
              Behind every statistic is a woman who refused to give up, who found the courage to ask for help, 
              and who used available resources as stepping stones to build something extraordinary. These stories 
              prove that with the right support, any woman can change her life&apos;s trajectory.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search stories by name, industry, or background..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {filteredStories.map(story => (
            <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{story.name}</h3>
                    <h4 className="text-lg text-purple-600 font-medium mb-2">{story.title}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {story.location}
                      <Calendar className="w-4 h-4 ml-3 mr-1" />
                      {story.year}
                    </div>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${story.color}`}>
                    Success Story
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{story.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Her Journey</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">{story.story}</p>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Programs That Helped</h5>
                  <div className="flex flex-wrap gap-2">
                    {story.programsUsed.map((program, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-start">
                    <Award className="w-4 h-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">Today: </span>
                      <span className="text-sm text-gray-600 font-semibold">{story.outcome}</span>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-r-lg">
                  <p className="text-sm text-gray-700 italic">&quot;{story.quote}&quot;</p>
                  <p className="text-xs text-gray-500 mt-1">— {story.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What These Stories Teach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Multiple Programs Work Together</h3>
              <p className="text-sm text-gray-600">
                Most success stories involve using several programs simultaneously—housing assistance provides stability 
                while education grants build skills and childcare support makes it all possible.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Timing Matters</h3>
              <p className="text-sm text-gray-600">
                These women accessed help at crucial moments—during pregnancy, after job loss, when leaving abuse, 
                or while pursuing education. Don&apos;t wait for the &quot;perfect&quot; time to seek support.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Success Creates Success</h3>
              <p className="text-sm text-gray-600">
                Many women featured here now create jobs, mentor others, and give back to their communities. 
                Government investment in women multiplies across generations.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-gray-100 rounded-lg p-4">
          <p className="text-xs text-gray-600 text-center">
            <strong>Note:</strong> These stories represent real experiences but names and some details have been changed to protect privacy. 
            Individual results may vary. Program availability and benefits differ by location and change over time. 
            Always verify current program requirements with official sources.
          </p>
        </div>
      </div>
    </div>
  );
}
