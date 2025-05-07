import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaMapMarkerAlt, FaGift, FaHeadset } from 'react-icons/fa';

function FeaturesSection() {
  const features = [
    {
      icon: <FaBolt size={24} className="text-orange-600" />,
      title: "Fast Delivery",
      description: "Get your orders delivered in 30 minutes",
    },
    {
      icon: <FaMapMarkerAlt size={24} className="text-orange-600" />,
      title: "Live Order Tracking",
      description: "Know exactly where your delivery is, in real-time.",
    },
    {
      icon: <FaGift size={24} className="text-orange-600" />,
      title: "Exclusive Deals",
      description: "Save more with regular offers and bundle discounts.",
    },
    {
      icon: <FaHeadset size={24} className="text-orange-600" />,
      title: "24/7 Customer Support",
      description: "We're here for you anytime you need help.",
    },
  ];

  return (
    <section className="py-20 px-6 text-center bg-white">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6"
      >
        Why Choose Tukatuu?
      </motion.h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Discover what makes Tukatuu your go-to delivery app for speed, reliability, and care.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
          >
            <div className="bg-orange-100 w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-inner">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
