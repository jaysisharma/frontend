import React, { useState } from 'react';
import { api } from '../services/api';

function EarlyAccessSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await api.subscribe(email);
      setStatus({
        type: 'success',
        message: 'Thanks for joining! We\'ll keep you updated.'
      });
      setEmail('');
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 text-center flex items-center justify-center flex-col">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
      <p className="text-lg mb-8">
        Be the first to experience Tukatuu and get exclusive launch day offers!
      </p>
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-[30rem]"
      >
        <div className="flex justify-center space-x-4 bg-white shadow-2xl h-14 p-2 rounded-full border border-amber-50">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 w-full md:w-80 focus:outline-none rounded-full"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 bg-[#FF6347] text-center text-white font-semibold rounded-full hover:bg-[#FF4C36] transition duration-300 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Joining...' : 'Join Now'}
          </button>
        </div>
      </form>
      
      {status.message && (
        <div className={`mt-4 p-3 rounded-lg ${
          status.type === 'success' 
            ? 'text-green-700 bg-green-100' 
            : 'text-red-700 bg-red-100'
        }`}>
          {status.message}
        </div>
      )}
    </section>
  );
}

export default EarlyAccessSection;
