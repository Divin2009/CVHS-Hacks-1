'use client';
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Building, DollarSign, ChevronLeft, ChevronRight, ExternalLink, Calendar, Star } from 'lucide-react';

export default function InternshipsPage() {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [internshipsPerPage] = useState(6);
  
  const [filters, setFilters] = useState({
    search: '',
    city: '',
    type: '',
    duration: '',
    field: '',
    remote: false,
    paid: false,
    minStipend: ''
  });

  const sampleInternships = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'TechForward Inc.',
      location: 'San Francisco, CA',
      type: 'Paid',
      duration: '12 weeks',
      stipend: 6000,
      stipendMax: 6000,
      deadline: '2025-08-15',
      featured: true,
      description: 'Join our diverse engineering team and work on cutting-edge web applications. You\'ll collaborate with senior developers, contribute to real products used by millions, and gain hands-on experience with modern tech stack including React, Node.js, and cloud technologies.',
      field: 'Engineering',
      url: '#apply',
      skills: ['React', 'JavaScript', 'Python', 'Git'],
      remote: true
    },
    {
      id: 2,
      title: 'UX Design Intern',
      company: 'Inclusive Design Co.',
      location: 'Remote',
      type: 'Paid',
      duration: '16 weeks',
      stipend: 4500,
      stipendMax: 4500,
      deadline: '2025-08-20',
      featured: false,
      description: 'Design user experiences for products that serve underrepresented communities. Work directly with our design team to create accessible, inclusive interfaces and conduct user research.',
      field: 'Design',
      url: '#apply',
      skills: ['Figma', 'User Research', 'Prototyping', 'Accessibility'],
      remote: true
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'EqualData Labs',
      location: 'Austin, TX',
      type: 'Paid',
      duration: '10 weeks',
      stipend: 5500,
      stipendMax: 5500,
      deadline: '2025-08-10',
      featured: true,
      description: 'Analyze data to identify and address bias in AI systems. You\'ll work with machine learning models, statistical analysis, and data visualization to promote fairness in technology.',
      field: 'Data Science',
      url: '#apply',
      skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      remote: false
    },
    {
      id: 4,
      title: 'Marketing Strategy Intern',
      company: 'WomenTech Media',
      location: 'New York, NY',
      type: 'Unpaid',
      duration: '12 weeks',
      stipend: 0,
      stipendMax: 0,
      deadline: '2025-09-01',
      featured: false,
      description: 'Develop marketing campaigns to promote women in technology initiatives. Gain experience in social media marketing, content creation, and campaign analytics.',
      field: 'Marketing',
      url: '#apply',
      skills: ['Social Media', 'Content Creation', 'Analytics', 'Strategy'],
      remote: false
    },
    {
      id: 5,
      title: 'Product Management Intern',
      company: 'DiverseTech Solutions',
      location: 'Seattle, WA',
      type: 'Paid',
      duration: '14 weeks',
      stipend: 5000,
      stipendMax: 5000,
      deadline: '2025-08-25',
      featured: false,
      description: 'Learn product management while working on tools for inclusive hiring. You\'ll define product requirements, work with engineering teams, and analyze user feedback.',
      field: 'Product',
      url: '#apply',
      skills: ['Product Strategy', 'Agile', 'User Stories', 'Analytics'],
      remote: false
    },
    {
      id: 6,
      title: 'Cybersecurity Intern',
      company: 'SecureWomen Tech',
      location: 'Washington, DC',
      type: 'Paid',
      duration: '12 weeks',
      stipend: 5800,
      stipendMax: 5800,
      deadline: '2025-08-12',
      featured: true,
      description: 'Protect digital infrastructure while learning cutting-edge security practices. Work on penetration testing, security audits, and incident response procedures.',
      field: 'Cybersecurity',
      url: '#apply',
      skills: ['Network Security', 'Penetration Testing', 'Risk Assessment', 'Compliance'],
      remote: false
    },
    {
      id: 7,
      title: 'AI Research Intern',
      company: 'FairAI Institute',
      location: 'Boston, MA',
      type: 'Paid',
      duration: '16 weeks',
      stipend: 6500,
      stipendMax: 6500,
      deadline: '2025-08-18',
      featured: true,
      description: 'Contribute to cutting-edge AI research focused on reducing algorithmic bias. Work with PhD researchers on published papers and real-world AI applications.',
      field: 'Research',
      url: '#apply',
      skills: ['Machine Learning', 'Python', 'Research', 'Statistics'],
      remote: false
    },
    {
      id: 8,
      title: 'Mobile Development Intern',
      company: 'AppWomen Collective',
      location: 'Los Angeles, CA',
      type: 'Paid',
      duration: '10 weeks',
      stipend: 4800,
      stipendMax: 4800,
      deadline: '2025-08-22',
      featured: false,
      description: 'Build mobile applications that empower women entrepreneurs. Work with React Native and native iOS/Android development in an agile environment.',
      field: 'Engineering',
      url: '#apply',
      skills: ['React Native', 'iOS', 'Android', 'JavaScript'],
      remote: true
    }
  ];

  useEffect(() => {
    loadInternships();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [internships, filters]);
  
  const loadInternships = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setInternships(sampleInternships);
    } catch (err) {
      setError('Failed to load internships. Please try again later.');
      console.error('Error loading internships:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...internships];

    if (filters.search) {
      filtered = filtered.filter(internship => 
        internship.title?.toLowerCase().includes(filters.search.toLowerCase()) ||
        internship.company?.toLowerCase().includes(filters.search.toLowerCase()) ||
        internship.description?.toLowerCase().includes(filters.search.toLowerCase()) ||
        internship.skills?.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()))
      );
    }
    if (filters.city) {
      filtered = filtered.filter(internship => 
        internship.location?.toLowerCase().includes(filters.city.toLowerCase())
      );
    }
    if (filters.type) {
      filtered = filtered.filter(internship => 
        internship.type?.toLowerCase() === filters.type.toLowerCase()
      );
    }
    if (filters.duration) {
      const weeks = parseInt(internships.duration);
      filtered = filtered.filter(internship => {
        const internshipWeeks = parseInt(internship.duration);
        if (filters.duration === 'short') return internshipWeeks <= 10;
        if (filters.duration === 'medium') return internshipWeeks > 10 && internshipWeeks <= 14;
        if (filters.duration === 'long') return internshipWeeks > 14;
        return true;
      });
    }
    if (filters.field) {
      filtered = filtered.filter(internship => 
        internship.field?.toLowerCase().includes(filters.field.toLowerCase())
      );
    }
    if (filters.minStipend) {
      const minStipend = parseInt(filters.minStipend);
      filtered = filtered.filter(internship => 
        internship.stipend && internship.stipend >= minStipend
      );
    }
    if (filters.remote) {
      filtered = filtered.filter(internship => 
        internship.location?.toLowerCase().includes('remote') ||
        internship.remote === true
      );
    }
    if (filters.paid) {
      filtered = filtered.filter(internship =>
        internship.type === 'Paid'
      );
    }

    setFilteredInternships(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const indexOfLastInternship = currentPage * internshipsPerPage;
  const indexOfFirstInternship = indexOfLastInternship - internshipsPerPage;
  const currentInternships = filteredInternships.slice(indexOfFirstInternship, indexOfLastInternship);
  const totalPages = Math.ceil(filteredInternships.length / internshipsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const useMyLocation = async () => {
    if (userLocation) {
      handleFilterChange('city', 'Current Location');
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
            <span className="ml-4 text-gray-600">Loading internship opportunities...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Internship Opportunities</h1>
          <p className="text-gray-600">Launch your career with inclusive companies committed to empowering women in tech</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Internship Rights & Guidelines</h3>
          <p className="text-blue-800 text-sm">
            All internships should provide valuable learning experiences. Unpaid internships must meet specific legal criteria 
            and provide academic credit or substantial educational benefit. Know your rights regarding fair compensation and workplace treatment.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search internships, companies, or skills..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
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
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">All Types</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              value={filters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
            >
              <option value="">All Durations</option>
              <option value="short">Short (≤10 weeks)</option>
              <option value="medium">Medium (11-14 weeks)</option>
              <option value="long">Long (&gt;14 weeks)</option>
            </select>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              value={filters.field}
              onChange={(e) => handleFilterChange('field', e.target.value)}
            >
              <option value="">All Fields</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="data science">Data Science</option>
              <option value="marketing">Marketing</option>
              <option value="product">Product</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="research">Research</option>
            </select>
            <input
              type="number"
              placeholder="Min Monthly Stipend"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              value={filters.minStipend}
              onChange={(e) => handleFilterChange('minStipend', e.target.value)}
            />
          </div>
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
                id="paid"
                className="mr-2 text-purple-600 focus:ring-purple-500 rounded"
                checked={filters.paid}
                onChange={(e) => handleFilterChange('paid', e.target.checked)}
              />
              <label htmlFor="paid" className="text-sm font-medium text-gray-700">Paid Only</label>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              Showing {indexOfFirstInternship + 1}-{Math.min(indexOfLastInternship, filteredInternships.length)} of {filteredInternships.length} internships
            </span>
            <button
              onClick={() => setFilters({
                search: '', city: '', type: '', duration: '', field: '', 
                remote: false, paid: false, minStipend: ''
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
              onClick={loadInternships}
              className="mt-2 text-red-600 hover:text-red-700 font-medium"
            >
              Try Again
            </button>
          </div>
        )}
        {currentInternships.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No internships found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more opportunities.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {currentInternships.map((internship) => (
              <div key={internship.id} className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${internship.featured ? 'border-l-4 border-l-purple-500' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                        {internship.title}
                      </h3>
                      {internship.featured && (
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <div className="flex items-center text-gray-600 space-x-4 text-sm mb-2">
                      <span className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {internship.company}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {internship.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {internship.duration}
                      </span>
                    </div>
                    {internship.stipend > 0 && (
                      <div className="flex items-center text-green-600 text-sm font-medium mb-2">
                        <DollarSign className="w-4 h-4 mr-1" />
                        ${internship.stipend?.toLocaleString()}/month
                      </div>
                    )}
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      Apply by {new Date(internship.deadline).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex flex-wrap gap-1 justify-end">
                      {internship.remote && (
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full font-semibold">
                          Remote
                        </span>
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        internship.type === 'Paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {internship.type}
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                        {internship.field}
                      </span>
                    </div>
                    <a
                      href={internship.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 flex items-center text-sm font-semibold"
                      title="Apply now"
                    >
                      Apply Now <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">{internship.description}</p>
                <div className="flex flex-wrap gap-2">
                  {internship.skills?.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {filteredInternships.length > internshipsPerPage && (
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