import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ApplyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const jobId = queryParams.get('jobId');

  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    degree: '',
    skills: '',
    motivation: ''
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (jobId) {
      // Simulate fetching job data based on jobId (or replace with actual API call)
      setJob({ id: jobId, title: `${jobId}` });
    }
  }, [jobId]);

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return !value.trim() ? 'Email is required' :
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email format' : '';
      case 'phone':
        return !value.trim() ? 'Phone number is required' : '';
      default:
        return !value.trim() ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required` : '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const fieldError = validateField(name, value);
    setError(fieldError);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError('');

    if (!file) {
      setResume(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      e.target.value = null;
      return;
    }

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a PDF or Word document');
      e.target.value = null;
      return;
    }

    setResume(file);
  };

  const validateForm = () => {
    for (const [name, value] of Object.entries(formData)) {
      const fieldError = validateField(name, value);
      if (fieldError) return fieldError;
    }
    if (!resume) return 'Resume is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setLoading(true);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value.trim());
    });
    form.append('resume', resume);
    if (job?.title) {
      form.append('position', job.title);
    }
    form.append('jobId', job.id); // include jobId explicitly

    try {
      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        body: form
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error submitting application');
      }

      navigate('/careers', {
        state: { message: 'Application submitted successfully! We will contact you soon.' }
      });
    } catch (err) {
      setError(err.message);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setLoading(false);
    }
  };

  if (!jobId || !job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Job Selected</h1>
          <button
            onClick={() => navigate('/careers')}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            View All Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Fill This Form</h1>
          
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                University/College *
              </label>
              <input
                type="text"
                id="university"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
                Degree/Major *
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                required
                value={formData.degree}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                Relevant Skills *
              </label>
              <textarea
                id="skills"
                name="skills"
                required
                value={formData.skills}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="List your relevant skills, separated by commas"
              />
            </div>

            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                Motivation Letter *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                required
                value={formData.motivation}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Tell us why you're interested in this position and what makes you a great fit"
              />
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                Resume/CV (PDF or Word) *
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                required
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              />
              <p className="mt-1 text-sm text-gray-500">
                Max file size: 5MB. Accepted formats: PDF, DOC, DOCX
              </p>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`bg-orange-500 text-white px-6 py-3 rounded-lg font-medium ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'
                } flex items-center space-x-2`}
              >
                {loading && (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                <span>{loading ? 'Submitting...' : 'Submit Application'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;