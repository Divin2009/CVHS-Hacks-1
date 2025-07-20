'use client'
import React, { useState } from 'react';
import { Users, Heart, Star, BookOpen, Briefcase, Trophy, MessageCircle, Calendar, Clock, MapPin, Search, ChevronRight, UserPlus, Lightbulb, Target, CheckCircle } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

export default function MentorshipPage() {
  const [activeTab, setActiveTab] = useState('find-mentor');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const mentors = [
    {
      id: 1,
      name: "Dr. Carmen Rodriguez",
      title: "Senior Software Engineer & Tech Advocate",
      category: "technology",
      location: "Austin, TX",
      experience: "12 years",
      specialties: ["Career Transition", "Single Motherhood", "Tech Industry", "Education Funding"],
      background: "Former TANF recipient who earned CS degree through Pell Grants. Now mentors women entering tech while raising children.",
      languages: ["English", "Spanish"],
      menteeCount: 25,
      successStories: 18,
      image: "/api/placeholder/100/100",
      availability: "Evenings & Weekends",
      preferredFormat: "Video calls, Text messaging",
      quote: "I've walked this path. Let me help you navigate it with confidence.",
      tags: ["Hispanic/Latina", "Single Mother", "STEM", "Government Programs Alumni"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      name: "Aisha Thompson",
      title: "Restaurant Owner & Entrepreneur",
      category: "business",
      location: "Atlanta, GA",
      experience: "8 years",
      specialties: ["Business Development", "Food Industry", "Financial Literacy", "SNAP to Success"],
      background: "Built restaurant empire after relying on SNAP. Specializes in helping women start food-based businesses while managing government benefits.",
      languages: ["English"],
      menteeCount: 30,
      successStories: 22,
      image: "/api/placeholder/100/100",
      availability: "Flexible weekdays",
      preferredFormat: "In-person (Atlanta area), Phone calls",
      quote: "Your current situation is not your final destination. Let's build your business together.",
      tags: ["African American", "Business Owner", "Food Industry", "Financial Empowerment"],
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      name: "Sarah Kim, NP",
      title: "Nurse Practitioner & Trauma Specialist",
      category: "healthcare",
      location: "Los Angeles, CA",
      experience: "10 years",
      specialties: ["Healthcare Careers", "Domestic Violence Recovery", "Mental Health", "Educational Pathways"],
      background: "Domestic violence survivor who rebuilt her life through government programs. Now helps other survivors navigate healthcare careers and healing.",
      languages: ["English", "Korean"],
      menteeCount: 15,
      successStories: 12,
      image: "/api/placeholder/100/100",
      availability: "Weekend mornings",
      preferredFormat: "Video calls (trauma-informed approach)",
      quote: "Healing and growth are possible. I'm here to support your journey to independence.",
      tags: ["Asian American", "Domestic Violence Survivor", "Healthcare", "Trauma-Informed"],
      color: "bg-pink-100 text-pink-800"
    },
    {
      id: 4,
      name: "Rosa Martinez",
      title: "Bilingual Teacher & Community Advocate",
      category: "education",
      location: "San Antonio, TX",
      experience: "6 years",
      specialties: ["Education Careers", "Immigration Support", "Bilingual Resources", "Community Advocacy"],
      background: "Former undocumented immigrant who became a teacher. Helps immigrant women navigate education systems and career development.",
      languages: ["English", "Spanish"],
      menteeCount: 20,
      successStories: 16,
      image: "/api/placeholder/100/100",
      availability: "After school hours",
      preferredFormat: "Video calls, In-person meetups",
      quote: "Education is the key that unlocks every door. Let me help you find yours.",
      tags: ["Hispanic/Latina", "Immigrant", "Education", "Community Leader"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 5,
      name: "Jennifer Washington",
      title: "Construction Company Owner",
      category: "trades",
      location: "Detroit, MI",
      experience: "15 years",
      specialties: ["Trade Careers", "Business Ownership", "Generational Wealth", "Teen Motherhood"],
      background: "Former teen mother who built successful construction company. Mentors women interested in trades and business ownership.",
      languages: ["English"],
      menteeCount: 12,
      successStories: 10,
      image: "/api/placeholder/100/100",
      availability: "Evenings",
      preferredFormat: "Phone calls, Text support",
      quote: "Trades built my wealth and my confidence. Let me show you the opportunities waiting for you.",
      tags: ["African American", "Teen Mother Alumni", "Construction", "Business Owner"],
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  const mentorshipPrograms = [
    {
      id: 1,
      name: "New Beginnings",
      type: "1-on-1 Mentoring",
      duration: "6 months",
      format: "Monthly video calls + weekly text support",
      focus: "Women starting their journey with government programs",
      description: "Personalized guidance for women just beginning to navigate government support systems. Your mentor will help you identify relevant programs, complete applications, and create a step-by-step action plan.",
      benefits: ["Program identification", "Application assistance", "Goal setting", "Emotional support"],
      commitment: "2-3 hours per month",
      icon: UserPlus,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      name: "Career Catalyst",
      type: "Industry-Specific Mentoring",
      duration: "12 months",
      format: "Bi-weekly sessions + networking opportunities",
      focus: "Professional development and career advancement",
      description: "Intensive mentoring for women pursuing specific career goals. Includes industry insights, skill development, networking connections, and professional growth strategies.",
      benefits: ["Industry guidance", "Skill development", "Network building", "Career planning"],
      commitment: "4-6 hours per month",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      name: "Entrepreneur's Circle",
      type: "Group Mentoring + 1-on-1 Support",
      duration: "9 months",
      format: "Monthly group sessions + individual mentoring",
      focus: "Starting and scaling businesses while managing benefits",
      description: "Combines group learning with personalized business mentoring. Learn from successful entrepreneurs while receiving individual guidance on your unique business journey.",
      benefits: ["Business planning", "Financial literacy", "Legal guidance", "Peer network"],
      commitment: "6-8 hours per month",
      icon: Target,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      name: "Academic Achievement",
      type: "Educational Support",
      duration: "Flexible (semester-based)",
      format: "Weekly check-ins + study support",
      focus: "Educational success while managing family and work",
      description: "Support for women pursuing education at any level. Mentors help with study strategies, time management, financial aid navigation, and balancing school with family responsibilities.",
      benefits: ["Study strategies", "Time management", "Financial aid help", "Academic planning"],
      commitment: "3-4 hours per week",
      icon: BookOpen,
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Mentors', icon: Users },
    { id: 'technology', name: 'Technology & STEM', icon: Lightbulb },
    { id: 'business', name: 'Business & Entrepreneurship', icon: Briefcase },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'education', name: 'Education', icon: BookOpen },
    { id: 'trades', name: 'Trades & Construction', icon: Trophy }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesCategory = selectedCategory === 'all' || mentor.category === selectedCategory;
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         mentor.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: "Active Mentors", value: "5+", icon: Users },
    { label: "Successful Matches", value: "500+", icon: Heart },
    { label: "Combined Experience", value: "1+ Years", icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mentorship Network</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Connect with successful women who have navigated government programs and built thriving careers. 
            Our mentors understand your journey because they've walked the same path. Get guidance, support, 
            and inspiration from those who want to see you succeed.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
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
        <div className="bg-white rounded-lg shadow-md p-1 mb-8 flex overflow-x-auto">
          <button
            onClick={() => setActiveTab('find-mentor')}
            className={`flex-1 px-6 py-3 text-sm font-medium rounded-lg transition-colors min-w-fit ${
              activeTab === 'find-mentor'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Find a Mentor
          </button>
          <button
            onClick={() => setActiveTab('programs')}
            className={`flex-1 px-6 py-3 text-sm font-medium rounded-lg transition-colors min-w-fit ${
              activeTab === 'programs'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Mentorship Programs
          </button>
          <button
            onClick={() => setActiveTab('become-mentor')}
            className={`flex-1 px-6 py-3 text-sm font-medium rounded-lg transition-colors min-w-fit ${
              activeTab === 'become-mentor'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Become a Mentor
          </button>
        </div>
        {activeTab === 'find-mentor' && (
          <>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-purple-900 mb-4 text-center">How Mentorship Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="p-3 rounded-lg bg-purple-100 mx-auto w-fit mb-3">
                    <Search className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-purple-800 mb-1">1. Find Your Match</h4>
                  <p className="text-sm text-purple-700">Browse mentors by expertise, background, and location to find someone who understands your journey.</p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-lg bg-purple-100 mx-auto w-fit mb-3">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-purple-800 mb-1">2. Connect & Plan</h4>
                  <p className="text-sm text-purple-700">Have an initial conversation to set goals, expectations, and create your personalized mentorship plan.</p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-lg bg-purple-100 mx-auto w-fit mb-3">
                    <Trophy className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-purple-800 mb-1">3. Grow Together</h4>
                  <p className="text-sm text-purple-700">Regular sessions, ongoing support, and celebrate milestones as you progress toward your goals.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search mentors by specialty, industry, or background..."
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {filteredMentors.map(mentor => (
                <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                      <p className="text-purple-600 font-medium text-sm">{mentor.title}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {mentor.location}
                        <Clock className="w-3 h-3 ml-3 mr-1" />
                        {mentor.experience} experience
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{mentor.background}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {mentor.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{mentor.menteeCount}</div>
                      <div className="text-xs text-gray-600">Women Mentored</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{mentor.successStories}</div>
                      <div className="text-xs text-gray-600">Success Stories</div>
                    </div>
                  </div>
                  <div className="mb-4 text-xs text-gray-600">
                    <strong>Available:</strong> {mentor.availability} | <strong>Preferred:</strong> {mentor.preferredFormat}
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3 bg-purple-50 p-2 rounded-r-lg mb-4">
                    <p className="text-sm text-gray-700 italic">"{mentor.quote}"</p>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium" onClick={() => toast.success(`Request sent to ${mentor.name}`)}>
                    Request Mentorship
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === 'programs' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {mentorshipPrograms.map(program => {
              const Icon = program.icon;
              return (
                <div key={program.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-purple-100 mr-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${program.color} mt-1`}>
                        {program.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">{program.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <Calendar className="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-gray-900">Duration: </span>
                        <span className="text-sm text-gray-600">{program.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MessageCircle className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-gray-900">Format: </span>
                        <span className="text-sm text-gray-600">{program.format}</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Target className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-gray-900">Focus: </span>
                        <span className="text-sm text-gray-600">{program.focus}</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-gray-900">Time Commitment: </span>
                        <span className="text-sm text-gray-600">{program.commitment}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 text-sm mb-2">What You'll Gain:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    Apply for Program
                  </button>
                </div>
              );
            })}
          </div>
        )}
        {activeTab === 'become-mentor' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center text-white">
              <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-2xl font-bold mb-4">Share Your Success, Transform Lives</h2>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Your journey from struggle to success is exactly what another woman needs to hear. 
                By becoming a mentor, you're not just sharing advice—you're providing hope, 
                guidance, and proof that dreams are achievable.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mentor Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Personal experience with government assistance programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Achieved measurable success in career or personal goals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Minimum 3 years of professional or business experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Commitment to 6+ months of mentoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Passion for helping other women succeed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Completion of our mentor training program</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Provide</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Comprehensive mentor training and resources</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Ongoing support and coaching</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Matched mentees based on compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Flexible scheduling and communication tools</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Recognition and appreciation events</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Professional development opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Mentor Application Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 rounded-lg bg-purple-100 mx-auto w-fit mb-3">
                    <span className="text-xl font-bold text-purple-600">1</span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Submit Application</h4>
                  <p className="text-sm text-gray-600">Complete our online application sharing your story and expertise</p>
                </div>
                <div className="text-center">
                  <div className="p-4 rounded-lg bg-purple-100 mx-auto w-fit mb-3">
                    <span className="text-xl font-bold text-purple-600">2</span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Interview Process</h4>
                  <p className="text-sm text-gray-600">Virtual interview with our team to discuss your experience and goals</p>
                </div>
                <div className="text-center">
                  <div className="p-4 rounded-lg bg-purple-100 mx-auto w-fit mb-3">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Training Program</h4>
                  <p className="text-sm text-gray-600">Complete our comprehensive mentor training to enhance your mentoring skills</p>
                </div>
                <div className="text-center">
                  <div className="p-4 rounded-lg bg-purple-100 mx-auto w-fit mb-3">
                    <span className="text-xl font-bold text-purple-600">4</span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Begin Mentoring</h4>
                  <p className="text-sm text-gray-600">Get matched with your first mentee and start making a difference</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium inline-flex items-center" onClick={() => toast.info('Application form coming soon!')}>
                  <span>Apply to Become a Mentor</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  )
}