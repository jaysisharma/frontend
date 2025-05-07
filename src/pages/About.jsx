import React from "react";
import Navbar from "../components/Navbar";
import Abhi from '../assets/abhi.jpg';
import Asmi from '../assets/asmi.jpg';
import Puskar from '../assets/puskar.jpg';
import Jaysi from '../assets/jaysi.jpg';
import Swaraj from '../assets/swaraj.jpeg';
import { FaBolt, FaHandsHelping, FaWallet, FaMobileAlt, FaUsers, FaShieldAlt, FaLightbulb, FaMapMarkedAlt, FaBrain, FaStore, FaLeaf } from 'react-icons/fa';
import Footer from "../components/Footer";
const About = () => {
  const teamMembers = [
    {
      name: "Swaraj Sagar Pradhan",
      role: "Co-founder & Chief Executive Officer (CEO)",
      image: Swaraj,
    },
    {
      name: "Abhishek Sah",
      role: "Co-founder & Chief Business and Financial Officer (CBFO)",
      image: Abhi,
    },
    {
      name: "Jaysi Sharma",
      role: "Co-founder & Chief Technology Officer (CTO)",
      image: Jaysi,
    },
    {
      name: "Pushkar Dhami",
      role: "Co-founder & Chief Operating Officer (COO)",
      image: Puskar,
    },
    {
      name: "Asmi K.C.",
      role: "Co-founder & Chief Impact and Growth Officer (CIGO)",
      image: Asmi,
    },
  ];

  const values = [
    { title: "Customer First", description: "Our users are at the heart of every decision, ensuring satisfaction and trust in every interaction.", icon: <FaUsers /> },
    { title: "Integrity", description: "We uphold transparency and ethical practices, building trust with our community and partners.", icon: <FaShieldAlt /> },
    { title: "Innovation", description: "We leverage cutting-edge technology to solve real-world problems and enhance local commerce.", icon: <FaLightbulb /> },
  ];

  const futureGoals = [
    { goal: "Expand into rural delivery networks", description: "Reach underserved areas to empower local economies with accessible delivery services.", icon: <FaMapMarkedAlt /> },
    { goal: "Integrate AI for smart order routing", description: "Optimize deliveries with intelligent technology for faster, more efficient service.", icon: <FaBrain /> },
    { goal: "Onboard 1,000+ local businesses", description: "Support small businesses by connecting them to a wider customer base.", icon: <FaStore /> },
    { goal: "Eco-friendly logistics partnerships", description: "Promote sustainability through green delivery solutions and partnerships.", icon: <FaLeaf /> },
  ];

  return (
    <main className="bg-[#FFF7F0] text-[#282C3F] min-h-screen font-sans">
      {/* <Navbar /> */}

      {/* Hero Section (Odd - #FC8019) */}
      <section className="relative bg-gradient-to-br from-[#FC8019] to-[#e66b00] text-white py-36 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#282C3F]/10 opacity-30"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight animate-slide-up">About Tukatuu</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Tukatuu is redefining local commerce by seamlessly connecting communities with food, goods, and services — delivered with speed, affordability, and care.
          </p>
        </div>
      </section>

      {/* Mission Section (Even - #FFF7F0) */}
      <section className="py-20 bg-[#FFF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center min-h-[400px] gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#282C3F] mb-4">Our Mission</h2>
              <p className="text-lg text-[#4B5563] max-w-md mx-auto lg:mx-0 leading-relaxed">
                To empower communities by providing fast, affordable, and reliable access to local goods and services, driving economic growth and convenience for everyone.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Mission - Community Delivery"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section (Odd - White) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center min-h-[400px] gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#282C3F] mb-4">Our Vision</h2>
              <p className="text-lg text-[#4B5563] max-w-md mx-auto lg:mx-0 leading-relaxed">
                To build a connected world where local businesses thrive, and customers enjoy seamless, sustainable, and innovative delivery solutions.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Vision - Connected Commerce"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Even - #FFF7F0) */}
      <section className="py-20 bg-[#FFF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#282C3F] mb-12">Why Choose Tukatuu?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaBolt className="text-4xl text-[#FC8019]" />,
                title: "Lightning-Fast Delivery",
                desc: "Get groceries, meals, and essentials delivered to your door in 30 minutes or less.",
              },
              {
                icon: <FaHandsHelping className="text-4xl text-[#FC8019]" />,
                title: "Empowering Locals",
                desc: "We uplift local shops and service providers, strengthening community economies.",
              },
              {
                icon: <FaWallet className="text-4xl text-[#FC8019]" />,
                title: "Unbeatable Value",
                desc: "Enjoy competitive pricing without sacrificing speed or quality.",
              },
              {
                icon: <FaMobileAlt className="text-4xl text-[#FC8019]" />,
                title: "Seamless Experience",
                desc: "Navigate with ease using our intuitive app and real-time tracking.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#FC8019]/10 shadow-md hover:shadow-xl hover:border-[#FC8019]/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#282C3F] mb-3">{item.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Founders (Odd - White) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#282C3F]">Our Founders</h2>
            <p className="text-[#6B7280] text-sm mt-2">Meet the visionaries driving Tukatuu’s mission</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border-2 border-[#FC8019]/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-72 h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#282C3F]/70"></div>
                <div className="absolute bottom-0 left-0 right-0 text-center p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-white/90">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values (Even - #FFF7F0) */}
      <section className="py-20 bg-[#FFF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#282C3F] mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl text-[#FC8019] mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#282C3F] mb-3">{value.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals (Odd - White) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#282C3F] mb-12">Our Future Goals</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2  transform -translate-x-1/2 w-1 bg-[#FC8019]/20 h-full"></div>
            {futureGoals.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'justify-start' : 'justify-end'} sm:pr-4 sm:pl-4`}
              >
                <div className={`w-full sm:w-1/2 mt-24 ${i % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-[#FFF7F0] p-6 rounded-2xl border border-[#FC8019]/10 shadow-md hover:shadow-xl hover:border-[#FC8019]/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#FC8019]/10 rounded-full mb-4">
                      <div className="text-xl text-[#FC8019]">{item.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-[#282C3F] mb-2">{item.goal}</h3>
                    <p className="text-[#4B5563] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FC8019] rounded-full border-2 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Even - #282C3F) */}

            <Footer/>


    </main>
  );
};

export default About;