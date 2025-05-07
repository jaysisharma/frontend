import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import Logo from '../assets/logo.png'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [messageText, setMessageText] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setMessageText('Please fill in all fields.');
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setIsLoading(true);
    emailjs
    .sendForm(
      'tukatuu_contact', // Replace with your service ID
      'tukatuu_auto_reply', // Replace with your template ID
      e.target, // the form element
      'kCRN-O_NI5zM4EZpG' // Replace with your user ID
    )
      .then(() => {
        setStatus('success');
        setMessageText('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
        setMessageText('Oops! Something went wrong. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => setStatus(null), 3000);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Info Section */}
        <div className="md:w-1/2 p-8 bg-orange-50">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2> */}
          <img src={Logo} alt="Logo Tukatuu" className='h-24' />
          <p className="text-gray-600 leading-relaxed mb-6">
            Tukatuu is a tech-driven logistics and delivery platform offering hyperlocal deliveries with real-time tracking and optimized routes.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-orange-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Our Locations</h3>
                <div className="mt-2 space-y-3">
                  {[
                    { country: 'Nepal', address: 'Dhapasi, Kathmandu' },
                    { country: 'United States', address: 'Stony Brook, New York' },
                    { country: 'India', address: 'Tramba, Rajkot' },
                  ].map((loc, idx) => (
                    <div key={idx} className="border-l-2 border-orange-200 pl-3">
                      <p className="text-gray-600 font-medium">{loc.country}</p>
                      <p className="text-gray-600">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-orange-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <a href="mailto:support@tukatuu.com" className="text-orange-500 hover:underline">
                  contact@tukatuu.com
                </a>
              </div>
            </div>

           
          </div>
        </div>

        {/* Right Contact Form Section */}
        <div className="md:w-1/2 p-8">
          {status ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              {status === 'success' ? (
                <>
                  <CheckCircle className="text-green-500 w-16 h-16" />
                  <h2 className="text-2xl font-bold text-green-600">Success</h2>
                  <p className="text-gray-700">{messageText}</p>
                </>
              ) : (
                <>
                  <XCircle className="text-red-500 w-16 h-16" />
                  <h2 className="text-2xl font-bold text-red-600">Error</h2>
                  <p className="text-gray-700">{messageText}</p>
                </>
              )}
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Got questions or feedback? Fill out the form below and we'll get back to you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full ${isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-500'} text-white py-3 px-4 rounded-md hover:bg-orange-600 transition duration-300`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
