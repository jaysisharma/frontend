import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CountdownSection() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-06-01') - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    // Cleanup the interval when component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-center text-white">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Launching In
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center space-x-4 text-4xl md:text-6xl font-mono"
      >
        <div className="bg-black px-4 py-2 rounded-lg shadow-lg">
          <span>{String(timeLeft.days).padStart(2, '0')}</span>
          <div className="mt-2 text-sm text-gray-300">Days</div>
        </div>
        <span className="text-4xl md:text-6xl">:</span>
        <div className="bg-black px-4 py-2 rounded-lg shadow-lg">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <div className="mt-2 text-sm text-gray-300">Hours</div>
        </div>
        <span className="text-4xl md:text-6xl">:</span>
        <div className="bg-black px-4 py-2 rounded-lg shadow-lg">
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <div className="mt-2 text-sm text-gray-300">Minutes</div>
        </div>
        <span className="text-4xl md:text-6xl">:</span>
        <div className="bg-black px-4 py-2 rounded-lg shadow-lg">
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <div className="mt-2 text-sm text-gray-300">Seconds</div>
        </div>
      </motion.div>
    </section>
  );
}

export default CountdownSection;
