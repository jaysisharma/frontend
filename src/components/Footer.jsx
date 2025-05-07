import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import logo from '../assets/logo.png'; // Update path if needed

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 text-gray-700">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start  justify-center">
          <div className="flex gap-2 items-center">
          <img src={logo} alt="Tukatuu Logo" className="h-18 mb-3" />
          <p className="text-[12px] mb-1 font-medium text-[#Ffffff] p-1 rounded-full bg-[#FC8019]">Coming Soon</p>
          </div>
          <p className="text-sm text-center md:text-left">
            Building the future of hyperlocal commerce. Join us on the journey!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#FC8019] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FC8019] transition">Who We Are</Link></li>
            <li><Link to="/careers" className="hover:text-[#FC8019] transition">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-[#FC8019] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media + Policies */}
        <div className="text-center md:text-right">
          <h3 className="text-md font-semibold mb-3">Connect with us</h3>
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <a href="https://www.facebook.com/tukatuuhq" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8019]"><FaFacebookF /></a>
             <a href="https://www.linkedin.com/company/tukatuu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8019]"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/tukatuuhq/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8019]"><FaInstagram /></a>
          </div>
          <div className="text-sm">
            <Link to="/privacy" className="mx-2 hover:text-[#FC8019]">Privacy Policy</Link> |
            <Link to="/terms" className="mx-2 hover:text-[#FC8019]">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center py-4 border-t border-gray-200 text-xs">
        © {new Date().getFullYear()} Tukatuu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
