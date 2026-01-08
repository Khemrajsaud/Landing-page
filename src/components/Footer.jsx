
import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <img src={logo} alt="Logo" className="w-40 mb-4" />
          <p className="text-sm leading-relaxed mb-4">
            We build digital products that help brands grow and succeed in the modern economy. Your partner in innovation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
            <a href="#" className="hover:text-white"><Linkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Our Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Web Development</a></li>
            <li><a href="#" className="hover:text-white">App Development</a></li>
            <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-white">Cloud Services</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Join our newsletter to stay updated with the latest news and special offers.
          </p>
          <div className="flex gap-2 md: flex-col">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-l bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 py-4  text-center">
        <span className=" ">© {new Date().getFullYear()} InnovateCorp. All rights reserved.</span>
        
      </div>
    </footer>
  );
};

export default Footer;

