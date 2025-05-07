import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiShoppingCart, FiTruck } from 'react-icons/fi';

function HowItWorksSection() {
  const steps = [
    {
      title: 'Browse Nearby Options',
      description: 'Discover local stores and restaurants in your area with ease.',
      icon: <FiSearch size={28} className="text-orange-500" />,
    },
    {
      title: 'Place Your Order',
      description: 'Add items to cart and checkout in just a few taps.',
      icon: <FiShoppingCart size={28} className="text-orange-500" />,
    },
    {
      title: 'Get It Delivered',
      description: 'Track your order live and receive it quickly at your doorstep.',
      icon: <FiTruck size={28} className="text-orange-500" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#fffdf9] to-[#fef4e8]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          How It Works
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-16">
          Ordering with Tukatuu is quick, simple, and delightful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-orange-100 flex items-center justify-center rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
