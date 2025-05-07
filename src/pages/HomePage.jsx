import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
// import AboutSection from '../components/About';
import HowItWorksSection from '../components/HowWorks';
import FeaturesSection from '../components/Features';
import CountdownSection from '../components/Countdown';
import EarlyAccessSection from '../components/EarlyAccess';
import Footer from '../components/Footer';
import CareersSection from '../components/Careers';

const HomePage = () => {
  return (
    <div>
   
    <HeroSection />
    {/* <AboutSection /> */}
    <HowItWorksSection />
    <FeaturesSection />
    <CareersSection/>
    {/* <CountdownSection /> */}
    <EarlyAccessSection />
    <Footer />
  </div>
  )
}

export default HomePage