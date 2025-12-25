import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-saas-black border-t border-gray-800 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-saas-orange">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                📞{" "}
                <a href="tel:+917697770437" className="hover:text-saas-orange">
                  +91 7697770437
                </a>
              </li>

              <li>
                📧{" "}
                <a
                  href="mailto:rkfireconsultant@gmail.com"
                  className="hover:text-saas-orange"
                >
                  rkfireconsultant@gmail.com
                </a>
              </li>

              <li>
                📧{" "}
                <a
                  href="mailto:Narayan.consultancy@hotmail.com"
                  className="hover:text-saas-orange"
                >
                  Narayan.consultancy@hotmail.com
                </a>
              </li>

              <li>
                📍 174, Maharana Pratap Nagar,
                <br />
                Indore (M.P.)
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-saas-orange">
                  Fire Safety Audit
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-saas-orange">
                  HSE Audit
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-saas-orange">
                  Fire NOC
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-saas-orange">
                  Training Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company (HashLink added here) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <HashLink smooth to="/#home" className="hover:text-saas-orange">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#about" className="hover:text-saas-orange">
                  About Us
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#contact" className="hover:text-saas-orange">
                  Contact
                </HashLink>
              </li>
              <li className="hover:text-saas-orange cursor-pointer">
               <HashLink smooth to="/#services" className="hover:text-saas-orange">
                  Services
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-saas-orange">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-saas-orange">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-saas-orange">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
<div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} Narayan Fire Safety Consultancy.
  All rights reserved. | Designed by{" "}
  <a
    href="https://bheemainfotech.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-saas-orange hover:underline"
  >
    Bheema Infotech
  </a>
</div>


      </div>
    </footer>
  );
};

export default Footer;
