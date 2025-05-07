import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaShareAlt, FaTimes } from 'react-icons/fa';

const JobDescription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);

  const job = location.state?.job;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = job ? `${job.title} at Tukatuu` : 'Job Opportunity at Tukatuu';
    switch (platform) {
      case Branson:
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this job: ${url}`)}`, '_blank');
        break;
      default:
        break;
    }
    setIsShareDropdownOpen(false); // Close dropdown after sharing
  };

  const handleApplyNow = () => {
    if (job) navigate(`/apply?jobId=${job._id}`);
  };

  const toggleShareDropdown = () => {
    setIsShareDropdownOpen(!isShareDropdownOpen);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-inter">
        <div className="animate-pulse space-y-6">
          <div className="h-10 bg-gray-200 rounded-lg w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-full"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center font-inter">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Job Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">The job listing you're looking for could not be found.</p>
        <button
          onClick={() => navigate('/careers')}
          className="mt-6 inline-flex items-center px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="View all job listings"
        >
          View All Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <header className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{job.title}</h1>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <h2 className="text-xl font-semibold text-gray-700">Tukatuu</h2>
                  <p className="text-gray-500">{`Kathmandu, Nepal (${job.location})`}</p>
                </div>
              </div>
              {/* Desktop Header Actions */}
              <div className="hidden lg:flex items-center gap-4">
                <span className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium ${job.salary === 'Unpaid' ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-600'}`}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.unpaid ? 'Unpaid' : job.salary}
                </span>
                <button
                  onClick={handleApplyNow}
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105"
                  aria-label="Apply for this job"
                >
                  Apply Now
                </button>
                <div className="relative">
                  <button
                    onClick={toggleShareDropdown}
                    className="p-3 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label={isShareDropdownOpen ? 'Close share menu' : 'Share job'}
                    aria-expanded={isShareDropdownOpen}
                  >
                    {isShareDropdownOpen ? <FaTimes className="text-xl" /> : <FaShareAlt className="text-xl" />}
                  </button>
                  {isShareDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl p-4 w-56 animate-fade-in z-10">
                      <p className="text-gray-600 font-medium mb-3 text-sm">Share this job</p>
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="p-3 rounded-full bg-gray-100 text-blue-600 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                          aria-label="Share on LinkedIn"
                        >
                          <FaLinkedin className="text-xl" />
                        </button>
                        <button
                          onClick={() => handleShare('whatsapp')}
                          className="p-3 rounded-full bg-gray-100 text-green-600 hover:bg-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                          aria-label="Share on WhatsApp"
                        >
                          <FaWhatsapp className="text-xl" />
                        </button>
                        <button
                          onClick={() => handleShare('email')}
                          className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                          aria-label="Share via Email"
                        >
                          <FaEnvelope className="text-xl" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">{job.type}</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Duration: {job.duration}</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                Posted: {new Date(job.createdAt).toLocaleDateString()}
              </span>
            </div>
          </header>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">About the Role</h3>
            <p className="text-gray-600 leading-relaxed text-base">{job.description}</p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-3 text-lg">•</span>
                  <span className="text-gray-600 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h3>
            <ul className="space-y-3">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-3 text-lg">•</span>
                  <span className="text-gray-600 text-base">{requirement}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {job.skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {job.whatWeOffer && job.whatWeOffer.length > 0 && (
            <section className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {job.whatWeOffer.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-3 text-lg">•</span>
                    <span className="text-gray-600 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {job.whatWeDontOffer && job.whatWeDontOffer.length > 0 && (
            <section className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Don’t Offer</h3>
              <ul className="space-y-3">
                {job.whatWeDontOffer.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-3 text-lg">•</span>
                    <span className="text-gray-600 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Application Process</h3>
            <p className="text-gray-600 mb-6 text-base">{job.applicationProcess.instructions}</p>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Selection Process</h4>
            <ul className="space-y-3">
              {job.applicationProcess.requirements.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-3 text-lg">•</span>
                  <span className="text-gray-600 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-4">After Review</h4>
            <ul className="space-y-3">
              {job.applicationProcess.afterReview.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 text-lg">✔</span>
                  <span className="text-gray-600 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Mobile Fixed Bottom Action Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center z-50">
          <button
            onClick={handleApplyNow}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Apply for this job"
          >
            Apply Now
          </button>
          <button
            onClick={toggleShareDropdown}
            className="ml-4 p-3 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[48px] min-h-[48px]"
            aria-label="Share job"
          >
            <FaShareAlt className="text-xl" />
          </button>
        </div>

        {/* Mobile Share Overlay */}
        {isShareDropdownOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
            <div className="w-full bg-white rounded-t-2xl p-6 animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Share this job</h3>
                <button
                  onClick={toggleShareDropdown}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 min-w-[48px] min-h-[48px]"
                  aria-label="Close share menu"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <span className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-full text-sm font-medium ${job.salary === 'Unpaid' ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-600'}`}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.unpaid ? 'Unpaid' : job.salary}
                  </span>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-3 rounded-full bg-gray-100 text-blue-600 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[48px] min-h-[48px]"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="p-3 rounded-full bg-gray-100 text-green-600 hover:bg-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 min-w-[48px] min-h-[48px]"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="text-xl" />
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 min-w-[48px] min-h-[48px]"
                    aria-label="Share via Email"
                  >
                    <FaEnvelope className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tailwind Animation for Slide-Up and Fade-In */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JobDescription;