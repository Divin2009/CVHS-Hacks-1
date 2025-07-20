'use client'
import React from 'react';
import { Mail, Heart, Users, BookOpen, Award, MapPin, Calendar, Star } from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Divin Giddaluru",
      role: "Co-Founder & Lead Developer",
      image: "#",
      bio: "A developer and AI enthusiast passionate about using technology to break down barriers to education and information. With experience in web development, machine learning, and digital accessibility, I build tools that make complex topics—like legal rights or math problems—more approachable for everyone. I’ve worked on AI-powered apps, real-time chatbots, and inclusive learning platforms that center both usability and equity.",
      expertise: [
      "Artificial Intelligence",
      "Full Stack Development",
      "Programming",
      "Machine Learning",
      "Computer Vision",
      "Digital Learning Tools",
      "Cloud Integration",
      "Real-Time AI Applications",
      ],      
      achievements: [
        "PCAP™ Certified Associate in Python Programming",
        "Developed accessible tools for legal, financial, and digital literacy",
        "Created educational games and simulations in science & technology",
        "Led full-stack development of resource discovery platforms",
        "Deployed AI apps using Streamlit, SQL, and PyTorch",
        "Designed cloud-based tools with Azure authentication integration",
      ],
      location: "Houston, TX",
      joinedYear: "2025",
      email: "divin.giddaluru@gmail.com",
      personalNote: "I believe technology should lift people up—not leave them behind. That’s why I focus on creating tools that are not just smart, but truly helpful. Whether it's helping someone learn their rights, solve a problem, or access resources with ease, I want my work to empower people—especially those who are often overlooked."
    },
    {
      id: 2,
      name: "Arpan Datta",
      role: "Co-Founder & Research Lead",
      image: "",
      bio: "I'm a developer and aspiring technologist focused on building inclusive, impact-driven tools. With a background in web development, AI integration, and educational outreach, I work on creating platforms that connect people to opportunity",
      expertise: ["Artificial Intelligence",
        "Large Language Models",
        "Front-End Development",
        "Digital Learning Tools",
        "Digital Marketing",
        "CAD",
        "Political Science"],
      achievements: [
       "Co-developed an AI-based social media platform",
       "Marketed for BrightSTEM JA company through Wordpress",
       "Deployed CNN-LSTM and CNNs for paleobiology research",
       "CAD certified by OnShape",
       "Intern at TurnUP for political science/activism"
      ],
      location: "Houston, TX",
      joinedYear: "2025",
      email: "arpan.dutta4192@gmail.com",
      personalNote: "To me, technology isn't just about what it can do—it's about who it can reach. I'm driven to design systems that make life simpler, fairer, and more accessible, especially for underrepresented communities."
    }
  ];

  const stats = [
    { label: "Combined Experience", value: "1+ Years", icon: Award },
    { label: "People Helped", value: "200M+", icon: BookOpen },
    { label: "Communities Served", value: "180+ Countries", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            We&apos;re two passionate advocates working to bridge the gap between women and the government resources 
            they deserve. Our combined expertise in policy, technology, and community outreach drives our mission 
            to make support accessible to all.
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <Heart className="w-6 h-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-purple-900 mb-2">Our Shared Mission</h3>
              <p className="text-purple-800 text-sm">
                We believe that access to government resources shouldn&apos;t depend on who you know or how well you can 
                navigate bureaucracy. Every woman—regardless of background, education level, or circumstances—deserves 
                clear, comprehensive information about the support available to her and her family.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-10 h-10 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {member.location}
                      <Calendar className="w-4 h-4 ml-3 mr-1" />
                      Since {member.joinedYear}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-purple-600 transition-colors p-2"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-3 h-3 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 bg-gray-50 p-3 rounded-r-lg">
                  <p className="text-sm text-gray-700 italic">{member.personalNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Partnerships</h3>
              <p className="text-sm text-gray-600">
                We collaborate with community organizations, nonprofits, and government agencies to expand our reach and impact.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Media & Speaking</h3>
              <p className="text-sm text-gray-600">
                Available for interviews, panel discussions, and speaking engagements about women&apos;s access to government resources.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Feedback</h3>
              <p className="text-sm text-gray-600">
                Have suggestions for improving our platform? Know of programs we should include? We&apos;d love to hear from you.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="mailto:divin.giddaluru@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Accessibility First</h4>
              <p className="text-xs text-gray-600">Every feature we build prioritizes ease of use and inclusivity</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Data-Driven Impact</h4>
              <p className="text-xs text-gray-600">We measure our success by the women we help connect with resources</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Community Centered</h4>
              <p className="text-xs text-gray-600">Real women&apos;s experiences guide every decision we make</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
