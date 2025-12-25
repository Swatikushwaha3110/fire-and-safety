import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Active link check using hash
  const isActive = (hash: string) => location.hash === hash;

  // ✅ Common classes
  const linkClasses = (hash: string) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive(hash)
        ? "text-saas-orange"
        : "text-white hover:text-saas-orange"
    }`;

  return (
    <nav className="bg-saas-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
            Fire Safety Solutions
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <HashLink smooth to="/#home" className={linkClasses("#home")}>
              Home
            </HashLink>
            <HashLink smooth to="/#about" className={linkClasses("#about")}>
              About
            </HashLink>
            <HashLink smooth to="/#services" className={linkClasses("#services")}>
              Services
            </HashLink>
            <HashLink smooth to="/#contact" className={linkClasses("#contact")}>
              Contact
            </HashLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-saas-darkGray px-4 py-3 space-y-2">
          <HashLink
            smooth
            to="/#home"
            onClick={() => setIsOpen(false)}
            className={linkClasses("#home")}
          >
            Home
          </HashLink>

          <HashLink
            smooth
            to="/#about"
            onClick={() => setIsOpen(false)}
            className={linkClasses("#about")}
          >
            About
          </HashLink>

          <HashLink
            smooth
            to="/#services"
            onClick={() => setIsOpen(false)}
            className={linkClasses("#services")}
          >
            Services
          </HashLink>

          <HashLink
            smooth
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className={linkClasses("#contact")}
          >
            Contact
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
