'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, DollarSign, Briefcase, MapPin } from 'lucide-react';

export default function HomePage() {
  const [location, setLocation] = useState(null);
  const [showLocationPrompt, setShowLocationPrompt] = useState(true);

  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
      setShowLocationPrompt(false);
    }
  }, []);

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            timestamp: Date.now()
          };
          localStorage.setItem('userLocation', JSON.stringify(userLocation));
          setLocation(userLocation);
          setShowLocationPrompt(false);
        },
        (error) => {
          console.log('Location access denied');
          setShowLocationPrompt(false);
        }
      );
    }
  };

  const dismissLocationPrompt = () => {
    setShowLocationPrompt(false);
  };

  const HeroSection = () => (
    <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="leading-tight text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
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
            <a 
              href="/jobs"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Explore Opportunities
            </a>
            <a 
              href="/resources"
              className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text- px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white border-opacity-30 text-center"
            >
              Free Resources
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );

  const LocationPrompt = () => {
    if (!showLocationPrompt) return null;

    return (
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm border border-gray-200 z-50">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-1">Enable Location</h4>
            <p className="text-sm text-gray-600 mb-3">
              Share your location to see jobs near you and get better recommendations.
            </p>
            <div className="flex space-x-2">
              <button
                onClick={requestLocation}
                className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition-colors"
              >
                Allow
              </button>
              <button
                onClick={dismissLocationPrompt}
                className="text-gray-500 px-3 py-1 rounded text-sm hover:text-gray-700"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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

  return (
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
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Job Opportunities</h3>
              <p className="text-gray-600 mb-4">Discover inclusive workplaces committed to gender equality</p>
              <a href="/jobs" className="text-purple-600 hover:text-purple-700 font-medium">
                Browse Jobs →
              </a>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p className="text-gray-600 mb-4">Access free and paid resources to build digital skills</p>
              <a href="/resources" className="text-pink-600 hover:text-pink-700 font-medium">
                View Resources →
              </a>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Funding Support</h3>
              <p className="text-gray-600 mb-4">Find grants and loans to support your career journey</p>
              <a href="/funding" className="text-purple-600 hover:text-purple-700 font-medium">
                Explore Funding →
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <LocationPrompt />
    </>
  );
}