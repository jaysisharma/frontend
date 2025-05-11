import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseTextColor = isHome && !isScrolled ? "text-white" : "text-black";
  const borderColor = isHome && !isScrolled ? "border-white" : "border-black";
  const hoverText = isHome && !isScrolled ? "text-white" : "text-black";
  const backgroundColor = isScrolled || !isHome ? "bg-white shadow" : "bg-transparent";

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`fixed z-50 top-0 left-0 right-0 transition-all duration-300 ${menuOpen ? "bg-white shadow" : backgroundColor} ${menuOpen ? "text-black" : baseTextColor}`}>
    <div className="flex justify-between items-center px-6 py-4 md:px-20">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-md font-semibold items-center">
          <Link to="/" onClick={handleLinkClick} className={`hover:text-[#FC8019] ${hoverText}`}>Home</Link>
          <Link to="/about" onClick={handleLinkClick} className={`hover:text-[#FC8019] ${hoverText}`}>Who we are</Link>
          <Link to="/careers" onClick={handleLinkClick} className={`hover:text-[#FC8019] ${hoverText}`}>Careers</Link>
          <Link to="/contact" onClick={handleLinkClick} className={`hover:text-[#FC8019] ${hoverText}`}>Contact</Link>
          
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4 text-black font-semibold">
          <Link to="/" onClick={handleLinkClick} className="hover:text-[#FC8019]">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-[#FC8019]">Who we are</Link>
          <Link to="/careers" onClick={handleLinkClick} className="hover:text-[#FC8019]">Careers</Link>
          <Link to="/contact" onClick={handleLinkClick} className="hover:text-[#FC8019]">Contact</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
