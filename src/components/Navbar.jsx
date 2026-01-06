import React, { useState } from "react";
import logo from "../assets/logo.png";
import { TableOfContents, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const links = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Testimonials",
    "Contact",
  ];

  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
     
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-36 md:w-40" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold">
          {links.map((link) => (
            <li key={link} className="relative group">
              <a
                href={`#${link.toLowerCase()}`}
                className={`transition ${
                  link === "Contact"
                    ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link}
              </a>

              {/* Underline animation (except Contact) */}
              {link !== "Contact" && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <TableOfContents size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow-inner px-6 py-4"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`block py-3 border-b last:border-none ${
                  link === "Contact"
                    ? "text-blue-600 font-bold"
                    : "text-gray-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
