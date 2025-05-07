import React from 'react';

function EarlyAccessSection() {
  return (
    <section className="py-20 px-6  text-center flex items-center justify-center flex-col">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
      <p className="text-lg mb-8">
        Be the first to experience Tukatuu and get exclusive launch day offers!
      </p>
      <div className="flex  justify-center space-x-4 bg-white shadow-2xl w-[30rem] h-14 p-2 rounded-full border border-amber-50">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 w-full md:w-80 focus:outline-none "
        />
        <button
          className="px-6 py-2  bg-[#FF6347] text-center text-white font-semibold rounded-full hover:bg-[#FF4C36] transition duration-300"
        >
          Join Now
        </button>
      </div>
    </section>
  );
}

export default EarlyAccessSection;
