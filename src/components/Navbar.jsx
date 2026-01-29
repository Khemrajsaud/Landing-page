// import React, { useState, useEffect } from "react";
// import { TableOfContents, X, ArrowRight } from "lucide-react";
// import { NavLink, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Contact", path: "/contact" },
//   ];

//   // KEY FIX: Check if we are on the Home page
//   const isHomePage = location.pathname === "/";
  
//   // The Navbar should look "scrolled" if we have actually scrolled OR if we are not on the home page
//   const shouldShowSolidBg = scrolled || !isHomePage;

//   return (
//     <nav 
//       className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
//         shouldShowSolidBg 
//         ? "bg-white/90 backdrop-blur-md py-4 shadow-lg border-b border-zinc-100" 
//         : "bg-transparent py-7"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
//         {/* Logo */}
//         <NavLink to="/" className="group flex items-center gap-1">
//           <h1 className={`text-2xl font-black uppercase tracking-tighter transition-colors duration-300 ${
//             shouldShowSolidBg ? "text-black" : "text-white"
//           }`}>
//             Nijjo<span className={shouldShowSolidBg ? "text-zinc-400" : "text-zinc-500"}>.</span>
//           </h1>
//         </NavLink>

//         {/* Desktop Menu */}
//         <ul className={`hidden md:flex items-center gap-10 font-bold text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 ${
//           shouldShowSolidBg ? "text-zinc-600" : "text-zinc-300"
//         }`}>
//           {links.map((link, index) => (
//             <li key={index} className="relative group">
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `transition-all duration-300 py-2 flex items-center gap-2 ${
//                     isActive 
//                       ? (shouldShowSolidBg ? "text-black" : "text-white") 
//                       : (shouldShowSolidBg ? "hover:text-black" : "hover:text-white")
//                   } ${
//                     link.name === "Contact" 
//                     ? `ml-4 px-7 py-3 rounded-full transition-all border ${
//                         shouldShowSolidBg 
//                         ? "bg-black text-white border-black hover:bg-zinc-800" 
//                         : "bg-white text-black border-white hover:bg-transparent hover:text-white"
//                       }` 
//                     : ""
//                   }`
//                 }
//               >
//                 {link.name}
//                 {link.name === "Contact" && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
//               </NavLink>

//               {/* Minimalist Underline */}
//               {link.name !== "Contact" && (
//                 <span className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
//                   shouldShowSolidBg ? "bg-black" : "bg-white"
//                 }`}></span>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setOpen(!open)}
//           className={`md:hidden p-2 rounded-lg transition-colors ${
//             shouldShowSolidBg ? "text-gray-600 hover:bg-zinc-100" : "text-white hover:bg-white/10"
//           }`}
//         >
//           {open ? <X size={26} /> : <TableOfContents size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div 
//         className={`fixed inset-0 h-130 bg-black z-[-1] transform transition-all duration-500 ease-in-out md:hidden ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         <div className="flex flex-col justify-center h-full p-5 mt-10 space-y-8">
//           <div className=" h-1 bg-white w-full"></div>
//           {links.map((link, i) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               onClick={() => setOpen(false)}
//               style={{ transitionDelay: `${i * 50}ms` }}
//               className={({ isActive }) => `
//                 text-5xl font-black uppercase tracking-tighter transition-all transform
//                 ${open ? "translate-x-0" : "-translate-x-10"}
//                 ${isActive ? "text-white" : "text-zinc-700 hover:text-white"}
//               `}
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // --- THE FIX LOGIC ---
  const isHomePage = location.pathname === "/";
  
  // 1. Show solid background if: we scrolled OR if we are NOT on the home page
  const shouldShowSolidBg = scrolled || !isHomePage;

  // 2. We only want transparency on the Home Page when NOT scrolled
  const isTransparent = isHomePage && !scrolled && !open;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          isTransparent 
            ? "bg-transparent py-7" 
            : "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-zinc-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" className="relative z-[110]">
            <h1 className={`text-2xl font-black uppercase tracking-tighter transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-black"
            }`}>
              Nijjo<span className="text-zinc-500">.</span>
            </h1>
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className={`hidden md:flex items-center gap-8 font-bold text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
            isTransparent ? "text-zinc-300" : "text-zinc-500"
          }`}>
            {links.map((link) => (
              <li key={link.name} className="relative group">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    transition-all duration-300 py-2 flex items-center gap-2
                    ${isActive 
                      ? (isTransparent ? "text-white" : "text-black") 
                      : (isTransparent ? "hover:text-white" : "hover:text-black")
                    }
                    ${link.name === "Contact" ? `
                      ml-4 px-6 py-2.5 rounded-full border transition-all
                      ${isTransparent 
                        ? "bg-white text-black border-white hover:bg-transparent hover:text-white" 
                        : "bg-black text-white border-black hover:bg-zinc-800"
                      }
                    ` : ""}
                  `}
                >
                  {link.name}
                  {link.name === "Contact" && <ArrowRight size={14} />}
                </NavLink>
                {link.name !== "Contact" && (
                  <span className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                    isTransparent ? "bg-white" : "bg-black"
                  }`}></span>
                )}
              </li>
            ))}
          </ul>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden relative z-[110] p-2 transition-colors ${
              isTransparent ? "text-white" : "text-black"
            }`}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed h-120 inset-0 bg-white z-[105] md:hidden flex flex-col justify-center "
            >
              <div className=" bg-black h-1 w-full"></div>
              <div className="space-y-6 mt-5 px-8">
              
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `
                        text-5xl font-black uppercase tracking-tighter block
                        ${isActive ? "text-black italic" : "text-zinc-300 hover:text-black"}
                      `}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-10 left-10">
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;