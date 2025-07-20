'use client';
import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Clock, Building, DollarSign, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6);
  
  const [filters, setFilters] = useState({
    search: '',
    city: '',
    country: 'us',
    industry: '',
    experience: '',
    remote: false,
    fullTime: false,
    salaryMin: ''
  });

  useEffect(() => {
    // Load user location from localStorage
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setUserLocation(JSON.parse(savedLocation));
    }

    loadJobs();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [jobs, filters]);
  
  const loadJobs = async () => {
    try {
      setLoading(true);
      const what = filters.search.trim() || '';
      const city = filters.city.trim() || '';
      const country = filters.country.trim() || '';
      const query = new URLSearchParams({ what, city, country });

      const res = await fetch(`/api/adzuna?${query.toString()}`);
      if (!res.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      setError('Failed to load jobs. Please try again later.');
      console.error('Error loading jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...jobs];

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(job => 
        job.title?.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company?.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description?.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Location filter (checks city or country in job location string)
    if (filters.city) {
      filtered = filtered.filter(job => 
        job.location?.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    // Industry filter (you might need to add industry field to your API response)
    if (filters.industry) {
      filtered = filtered.filter(job => 
        job.category?.toLowerCase().includes(filters.industry.toLowerCase())
      );
    }

    // Salary filter
    if (filters.salaryMin) {
      const minSalary = parseInt(filters.salaryMin);
      filtered = filtered.filter(job => 
        job.salaryMin && job.salaryMin >= minSalary
      );
    }

    // Experience filter
    if (filters.experience) {
      const level = filters.experience.toLowerCase();
      filtered = filtered.filter(job =>
        job.title?.toLowerCase().includes(level) ||
        job.description?.toLowerCase().includes(level)
      );
    }

    // Remote filter
    if (filters.remote) {
      filtered = filtered.filter(job => 
        job.location?.toLowerCase().includes('remote') ||
        job.title?.toLowerCase().includes('remote') ||
        job.description?.toLowerCase().includes('remote')
      );
    }

    // Full-time filter
    if (filters.fullTime) {
      filtered = filtered.filter(job =>
        job.contract_time === 'full_time'
      )
    }


    setFilteredJobs(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  

  useEffect(() => {
    if (filters.country) {
      loadJobs();
    }
  }, [filters.country]);


  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  async function getCityCountry(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;

    const response = await fetch(url,)

    if (!response.ok) {
      throw new Error('Failed to reverse geocode');
    }

    const data = await response.json();

    const city = data.address.city || data.address.town || data.address.village || '';
    const country = data.address.country_code || '';

    return { city, country };
  }


  const useMyLocation = async () => {
    if (userLocation) {
      let location = await getCityCountry(userLocation.lat, userLocation.lng)
      handleFilterChange('city', location['city']);
      handleFilterChange('country', location['country']);
    } else {
      alert('Location not available. Please enable location services.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            <span className="ml-4 text-gray-600">Loading opportunities...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
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

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
            {/* City Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="City"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
              />
              {userLocation && (
                <button
                  onClick={useMyLocation}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-700"
                  title="Use my location"
                >
                  <MapPin className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Country Select */}
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              value={filters.country}
              onChange={(e) => handleFilterChange('country', e.target.value)}
            >
              <option value="">Select Country</option>
              <option value="au">Australia</option>
              <option value="at">Austria</option>
              <option value="be">Belgium</option>
              <option value="br">Brazil</option>
              <option value="ca">Canada</option>
              <option value="ch">Switzerland</option>
              <option value="fr">France</option>
              <option value="de">Germany</option>
              <option value="es">Spain</option>
              <option value="in">India</option>
              <option value="it">Italy</option>
              <option value="mx">Mexico</option>
              <option value="nl">Netherlands</option>
              <option value="nz">New Zealand</option>
              <option value="pl">Poland</option>
              <option value="sg">Singapore</option>
              <option value="za">South Africa</option>
              <option value="gb">United Kingdom</option>
              <option value="us">United States</option>
            </select>

            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              value={filters.industry}
              onChange={(e) => handleFilterChange('industry', e.target.value)}
            >
              <option value="">All Industries</option>
              <option value="IT Jobs">IT Jobs</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="finance">Finance</option>
              <option value="marketing">Marketing</option>
            </select>

            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              value={filters.experience}
              onChange={(e) => handleFilterChange('experience', e.target.value)}
            >
              <option value="">All Experience</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
              <option value="executive">Executive</option>
            </select>

            <input
              type="number"
              placeholder="Min Salary"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              value={filters.salaryMin}
              onChange={(e) => handleFilterChange('salaryMin', e.target.value)}
            />
          </div>

          {/* Employment Type Checkboxes */}
          <div className="flex flex-wrap items-center gap-6 mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remote"
                className="mr-2 text-purple-600 focus:ring-purple-500 rounded"
                checked={filters.remote}
                onChange={(e) => handleFilterChange('remote', e.target.checked)}
              />
              <label htmlFor="remote" className="text-sm font-medium text-gray-700">Remote</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="fullTime"
                className="mr-2 text-purple-600 focus:ring-purple-500 rounded"
                checked={filters.fullTime}
                onChange={(e) => handleFilterChange('fullTime', e.target.checked)}
              />
              <label htmlFor="fullTime" className="text-sm font-medium text-gray-700">Full-Time</label>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} jobs
            </span>
            <button
              onClick={() => setFilters({
                search: '', city: '', country: '', industry: '', experience: '', 
                remote: false, fullTime: false, contractType: '', salaryMin: ''
              })}
              className="text-sm text-purple-600 hover:text-purple-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">{error}</p>
            <button 
              onClick={loadJobs}
              className="mt-2 text-red-600 hover:text-red-700 font-medium"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Job Listings */}
        {currentJobs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more opportunities.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {currentJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center text-gray-600 space-x-4 text-sm mb-2">
                      <span className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {job.company}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                    </div>
                    {job.salaryMin && job.salaryMax && (
                      <div className="flex items-center text-green-600 text-sm font-medium mb-2">
                        <DollarSign className="w-4 h-4 mr-1" />
                        ${job.salaryMin?.toLocaleString()} - ${job.salaryMax?.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex flex-wrap gap-1 justify-end">
                      {job.location?.toLowerCase().includes('remote') && (
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full font-semibold">
                          Remote
                        </span>
                      )}
                      {job.contract_type && (
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                          {job.contract_type}
                        </span>
                      )}
                    </div>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 flex items-center text-sm font-semibold"
                      title="Apply now"
                    >
                      Apply Now <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 text-sm line-clamp-3">{job.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredJobs.length > jobsPerPage && (
          <nav
            className="mt-8 flex justify-center items-center space-x-2"
            aria-label="Pagination"
          >
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === i + 1
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}