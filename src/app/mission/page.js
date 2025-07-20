'use client';
import React from 'react';
import { Target, Heart, Users, Lightbulb, TrendingUp, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation'


export default function OurMissionPage() {
  const barriers = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Limited Time",
      description: "Balancing work, family, and personal responsibilities leaves little time for skill development and career advancement."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Financial Constraints",
      description: "High costs of education, training programs, and professional development create significant financial barriers."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lack of Access to Resources",
      description: "Limited access to quality educational materials, mentorship, and professional networks."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Restrictive Social Norms",
      description: "Cultural and societal expectations that limit opportunities and discourage pursuing certain career paths."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Limited Opportunities",
      description: "Fewer chances for career advancement, leadership roles, and professional growth in many industries."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Economic Independence Challenges",
      description: "Difficulty achieving financial stability and independence due to wage gaps and limited access to capital."
    }
  ];

  const solutions = [
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Access to Knowledge",
      description: "Curating and providing free, high-quality educational resources that are accessible anytime, anywhere. Our platform brings together the best learning materials in one place.",
      impact: "Breaking down knowledge barriers"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Opportunity Creation",
      description: "Connecting women with scholarships, grants, job opportunities, and professional development programs that can transform their careers and lives.",
      impact: "Opening doors to new possibilities"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Community Support",
      description: "Building a supportive network where women can share experiences, mentor each other, and find encouragement during their journey.",
      impact: "Creating lasting connections"
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "Motivation & Empowerment",
      description: "Providing inspirational stories, success cases, and practical guidance to help women believe in themselves and take action towards their goals.",
      impact: "Igniting inner strength"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering underrepresented women by addressing the barriers we can influence: 
            access to knowledge, opportunity, support, and motivation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            The Challenge We're Addressing
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Underrepresented women face a complex web of barriers that limit their potential and opportunities. 
            While we can't solve every challenge, we focus on the areas where we can make a meaningful impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barriers.map((barrier, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-purple-600 mr-3">
                    {barrier.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{barrier.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{barrier.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Our Solution Approach
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            We focus on the four key areas where we can create the most significant impact for underrepresented women.
          </p>
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  {solution.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-2">{solution.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {solution.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow-md p-8 mb-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-xl mb-6 max-w-4xl mx-auto">
              A world where every woman, regardless of her background or circumstances, 
              has access to the resources, opportunities, and support she needs to achieve her full potential.
            </p>
            <div className="text-lg opacity-90">
              <strong>We believe</strong> that by removing barriers to knowledge and opportunity, 
              we can help create a more equitable future for all women.
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're looking to grow your own skills or help other women in their journey, 
            you're part of our community working towards positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-6 py-6 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors" onClick={() => redirect('/resources')}>
              Explore Resources
            </Button>
            <Button className="px-6 py-6 border border-purple-600 text-purple-600 rounded-lg font-medium bg-white hover:bg-purple-50 transition-colors" onClick={() => redirect('/jobs')}>
              Get Involved
            </Button>
          </div>
        </div>
        <div className="mt-8 bg-gray-100 rounded-lg p-4">
          <p className="text-xs text-gray-600 text-center">
            <strong>Our Commitment:</strong> We are dedicated to creating an inclusive platform that serves women from all backgrounds, 
            cultures, and circumstances. We continuously work to ensure our resources and support are accessible, 
            relevant, and respectful of diverse experiences and needs.
          </p>
        </div>
      </div>
    </div>
  );
}
