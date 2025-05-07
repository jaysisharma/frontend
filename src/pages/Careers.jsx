import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(location.state?.message || '');

  useEffect(() => {
    fetchJobs();
    // Clear success message after 5 seconds
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);
  const truncateDescription = (text, maxWords = 50) => {
    const words = text.split(" ");
    return words.length > maxWords ? `${words.slice(0, maxWords).join(" ")}...` : text;
  };
  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/jobs');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error fetching jobs');
      }
      
      setJobs(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Group jobs by department
  const departments = [...new Set(jobs.map(job => job.department))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Jobs</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchJobs}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="text-[#282C3F] min-h-screen font-sans">
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
          {successMessage}
        </div>
      )}
      
      <section className="py-24 px-6 md:px-20 text-start w-full">
        <p className="inline-block border border-orange-500 text-orange-500 font-semibold px-4 py-1 rounded-full mb-4">
          We're Hiring!
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join the Tukatuu Family
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Build the future of hyperlocal commerce with us.
        </p>
        <hr className="border border-gray-300 mt-8" />

        {departments.map((department, deptIndex) => (
          <div key={deptIndex}>
            <div className="positions w-full flex flex-col md:flex-row p-8">
              <div className="left w-full md:w-2/5 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                  {department}
                </h2>
                <p className="text-gray-600">
                  Explore opportunities in our {department} team
                </p>
              </div>
              <div className="right w-full md:w-3/5">
                {jobs
                  .filter((job) => job.department === department)
                  .map((job) => (
                    <div
                      key={job._id}
                      className="relative flex justify-between items-start border border-gray-300 rounded-lg p-6 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="txt w-[90%]">
                        <div className="flex items-center gap-2 mb-2">
                          <h3
                            className="text-xl cursor-pointer font-semibold text-[#282C3F]"
                            onClick={() =>
                              navigate("/job-description", { state: { job } })
                            }
                          >
                            {job.title}
                          </h3>
                          <span className={`inline-flex items-center text-sm px-2 py-1 rounded-full ${
                            job.salary === "Unpaid"
                              ? "bg-gray-100 text-gray-600"
                              : "bg-green-100 text-green-600"
                          }`}>
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {job.salary}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{truncateDescription(job.description)}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {job.type} • {job.duration}
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            {job.location}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                            Posted: {new Date(job.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          navigate("/job-description", { state: { job } })
                        }
                        className="absolute cursor-pointer bottom-6 right-6 text-orange-500 hover:text-orange-600"
                      >
                        View Details →
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            {deptIndex < departments.length - 1 && (
              <hr className="border border-gray-300 mt-8" />
            )}
          </div>
        ))}
      </section>

      {/* General Application Section */}
      <section className="bg-[#FFECDC] px-6 md:px-20 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Don’t see a role that fits?
        </h2>
        <p className="text-gray-700 mb-6">
          We're always on the lookout for great talent. Send us your resume and
          we'll be in touch!
        </p>
        <a
          href="mailto:careers@tukatuu.com?subject=General Application"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300 inline-flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          Submit a General Application
        </a>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;