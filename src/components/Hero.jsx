import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../assets/hero.jpeg'; // Replace with your image path
function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">
      
      {/* Background Image */}
      <img 
        src={HeroImg} // Replace with your background image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6  text-white"
        >
          Food Delivery at your doorsteps <br />is<span className='text-orange-400'>  Coming Soon! </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl"
        >
           Meals & Snacks — At your doorsteps.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-between items-center md:gap-4 md:w-full w-82 max-w-md bg-white  rounded-full pl-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="md:w-full sm:w-16 md:px-5 py-3 rounded-lg  focus:outline-none  focus:ring-orange-400 transition-shadow   bg-white"
          />
          <button className="md:w-48 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-md">
            Notify Me
          </button>
        </motion.div>
      </div>

    </section>
  );
}

export default HeroSection;
