'use client'
import React, { useState } from 'react';
import { DollarSign, Users, BookOpen, Home, Heart, Baby, Search, ExternalLink, Info, CheckCircle, AlertCircle } from 'lucide-react';

export default function FundingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const programs = [
    {
      id: 1,
      name: "Temporary Assistance for Needy Families (TANF)",
      category: "cash",
      description: "Provides cash assistance to families with dependent children. Priority given to single mothers and pregnant women.",
      amount: "$200-$500/month",
      eligibility: "Low-income families with children, pregnant women in their third trimester",
      application: "State welfare offices or online portals",
      repayment: "No repayment required",
      link: "https://www.acf.hhs.gov/ofa/programs/tanf",
      icon: DollarSign,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      name: "Earned Income Tax Credit (EITC)",
      category: "tax",
      description: "Refundable tax credit for low- to moderate-income workers, with higher credits for women with children.",
      amount: "Up to $6,935 (2023)",
      eligibility: "Workers earning under $59,187 (married filing jointly with 3+ children)",
      application: "File tax return with IRS",
      repayment: "No repayment required",
      link: "https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit",
      icon: DollarSign,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      name: "Women, Infants, and Children (WIC)",
      category: "nutrition",
      description: "Provides nutrition education, healthy food, and healthcare referrals for pregnant women, new mothers, and young children.",
      amount: "$40-$80/month in food benefits",
      eligibility: "Pregnant/postpartum women, infants, children under 5 at nutritional risk",
      application: "Local WIC offices",
      repayment: "No repayment required",
      link: "https://www.fns.usda.gov/wic",
      icon: Heart,
      color: "bg-pink-100 text-pink-800"
    },
    {
      id: 4,
      name: "Child Care and Development Block Grant (CCDBG)",
      category: "childcare",
      description: "Helps low-income working parents pay for child care, particularly supporting single mothers entering the workforce.",
      amount: "Covers 70-90% of childcare costs",
      eligibility: "Working parents below 85% of state median income",
      application: "State childcare agencies",
      repayment: "No repayment required",
      link: "https://www.acf.hhs.gov/occ/ccdf-program",
      icon: Baby,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 5,
      name: "Section 8 Housing Choice Voucher Program",
      category: "housing",
      description: "Rental assistance program with priority for female-headed households and victims of domestic violence.",
      amount: "Pays 70% of rent costs on average",
      eligibility: "Very low-income families (below 50% area median income)",
      application: "Local Public Housing Agencies",
      repayment: "No repayment required",
      link: "https://www.hud.gov/program_offices/public_indian_housing/programs/hcv",
      icon: Home,
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      id: 6,
      name: "Pell Grants",
      category: "education",
      description: "Federal grants for undergraduate education, with 60% of recipients being women, especially single mothers.",
      amount: "Up to $7,395 per academic year",
      eligibility: "Undergraduate students with exceptional financial need",
      application: "Complete FAFSA application",
      repayment: "No repayment required",
      link: "https://studentaid.gov/understand-aid/types/grants/pell",
      icon: BookOpen,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 7,
      name: "SNAP (Food Stamps)",
      category: "nutrition",
      description: "Food assistance program serving primarily women and children, with 75% of adult recipients being women.",
      amount: "$200-$400/month for families",
      eligibility: "Households at or below 130% of federal poverty level",
      application: "State SNAP offices or online",
      repayment: "No repayment required",
      link: "https://www.fns.usda.gov/snap",
      icon: Heart,
      color: "bg-pink-100 text-pink-800"
    },
    {
      id: 8,
      name: "Medicaid",
      category: "healthcare",
      description: "Healthcare coverage with expanded eligibility for pregnant women and special programs for women's health.",
      amount: "Full healthcare coverage",
      eligibility: "Varies by state, expanded for pregnant women up to 138% FPL",
      application: "State Medicaid offices or Healthcare.gov",
      repayment: "No repayment required",
      link: "https://www.medicaid.gov/",
      icon: Heart,
      color: "bg-red-100 text-red-800"
    },
    {
      id: 9,
      name: "Women's Business Centers (WBC)",
      category: "business",
      description: "SBA-funded centers providing training, counseling, and access to credit for women entrepreneurs.",
      amount: "Free or low-cost training and counseling",
      eligibility: "Women interested in starting or growing a business",
      application: "Contact local WBC directly",
      repayment: "No repayment required for services",
      link: "https://www.sba.gov/local-assistance/resource-partners/womens-business-centers-wbc",
      icon: Users,
      color: "bg-teal-100 text-teal-800"
    },
    {
      id: 10,
      name: "Low Income Home Energy Assistance Program (LIHEAP)",
      category: "utilities",
      description: "Helps low-income households pay heating and cooling bills, with priority for households with elderly or disabled women.",
      amount: "$300-$800 per year",
      eligibility: "Households at or below 150% of federal poverty level",
      application: "State and local LIHEAP offices",
      repayment: "No repayment required",
      link: "https://www.acf.hhs.gov/ocs/programs/liheap",
      icon: Home,
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Programs', icon: Users },
    { id: 'cash', name: 'Cash Assistance', icon: DollarSign },
    { id: 'tax', name: 'Tax Credits', icon: DollarSign },
    { id: 'nutrition', name: 'Food & Nutrition', icon: Heart },
    { id: 'childcare', name: 'Childcare Support', icon: Baby },
    { id: 'housing', name: 'Housing Assistance', icon: Home },
    { id: 'education', name: 'Education Grants', icon: BookOpen },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'business', name: 'Business Support', icon: Users },
    { id: 'utilities', name: 'Utilities', icon: Home }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Funding & Support Programs</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive guide to federal programs and laws designed to provide financial support and resources 
            for underrepresented women and families. These programs offer assistance without requiring repayment.
          </p>
        </div>

        {/* Important Legal Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Info className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Know Your Rights</h3>
              <p className="text-blue-800 text-sm mb-3">
                Under federal law, these programs cannot discriminate based on gender, race, religion, or national origin. 
                Many programs specifically prioritize or provide enhanced benefits for women, particularly single mothers, 
                pregnant women, and victims of domestic violence.
              </p>
              <p className="text-blue-800 text-sm">
                <strong>Legal Basis:</strong> Programs are established under various acts including the Social Security Act, 
                Food and Nutrition Act, Fair Housing Act, and Higher Education Act.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search programs..."
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

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredPrograms.map(program => {
            const Icon = program.icon;
            return (
              <div key={program.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-purple-100 mr-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{program.name}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${program.color}`}>
                        {program.amount}
                      </span>
                    </div>
                  </div>
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 p-2"
                    title="Learn more"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-700 text-sm mb-4">{program.description}</p>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">Eligibility: </span>
                      <span className="text-sm text-gray-600">{program.eligibility}</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">How to Apply: </span>
                      <span className="text-sm text-gray-600">{program.application}</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <DollarSign className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">Repayment: </span>
                      <span className="text-sm text-green-600 font-semibold">{program.repayment}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources & Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Application Tips</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Apply for multiple programs - you may qualify for several</li>
                  <li>• Keep copies of all documentation</li>
                  <li>• Follow up on applications regularly</li>
                  <li>• Ask about emergency or expedited processing if needed</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Required Documents</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Social Security cards for all household members</li>
                  <li>• Proof of income (pay stubs, tax returns)</li>
                  <li>• Birth certificates for children</li>
                  <li>• Proof of residence (utility bills, lease agreement)</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Women-Specific Priorities</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pregnant women receive priority in many programs</li>
                  <li>• Single mothers often qualify for enhanced benefits</li>
                  <li>• Domestic violence survivors have special protections</li>
                  <li>• Women veterans have additional program access</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Get Help</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Call 211 for local assistance program information</li>
                  <li>• Visit your local Department of Social Services</li>
                  <li>• Contact community organizations and nonprofits</li>
                  <li>• Use Benefits.gov to find programs you qualify for</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-gray-100 rounded-lg p-4">
          <p className="text-xs text-gray-600 text-center">
            <strong>Disclaimer:</strong> These rules are found in the US. Other countries may have different rules.
            <br />
            <strong>Disclaimer:</strong> Program benefits, eligibility requirements, and application processes <strong>VARY</strong> by country and change over time. 
            Always verify current information with official program websites or local offices. This information is for educational purposes only and 
            does not constitute legal or financial advice.
            <br />
            <strong>Please note:</strong> This is a work in progress. For more information, <strong>Please Contact Officials Directly</strong>. 
          </p>
        </div>
      </div>
    </div>
  );
}