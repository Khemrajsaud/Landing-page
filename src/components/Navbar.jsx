import React, { useState } from "react";
import logo from "../assets/logo.png";
import { TableOfContents, X } from "lucide-react";

const Navbar = () => {
  const links = [
    "Home",
    "About",
    "Sercices",
    "Portfolio",
    "Testimonials",
    "Contact",
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className=" shadow shadow-md">
      <div className="flex items-center justify-between gap-6 mx-5  ">
        <div>
          <img className=" w-40" src={logo} alt="" />
        </div>
       
        <div className=" hidden  md:flex gap-6">
          {links.map((link, index) => (
            <li className=" list-none" key={index}>
              <a href={`#${link.toLowerCase()}`}  className={` rounded-md transition
      ${
        link === "Contact"
          ? "bg-blue-600 text-white hover:bg-blue-700 px-3 py-1"
          : "text-gray-700 hover:text-blue-600"
      }`}  >{link}</a>
            </li>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className=" md:hidden">
          {open ? <X /> : <TableOfContents />}
        </button>
      </div>
     
      {open && (
        <div className="md:hidden bg-white p-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};


export default Navbar;
