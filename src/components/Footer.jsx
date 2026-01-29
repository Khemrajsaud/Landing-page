import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <section
      className="bg-black text-white border-t border-zinc-900"
    >
      <footer className="max-w-7xl mx-auto px-6 pt-15 pb-6">
        {/* Main Footer Grid */}
        <div className="grid lg:grid-cols-12 gap-16 mb-7">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <h1 className="text-4xl font-black uppercase tracking-tighter ">
              Nijjo<span className="text-zinc-600">.</span>
            </h1>
            <p className="text-zinc-400 leading-relaxed max-w-sm font-medium">
              Architecting the future of digital experiences from Kailali,
              Nepal. We blend precision engineering with minimalist aesthetics.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, link: "#" },
                { icon: <Twitter size={18} />, link: "#" },
                { icon: <Linkedin size={18} />, link: "#" },
                { icon: <Instagram size={18} />, link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                Navigation
              </h3>
              

<ul className="space-y-4">
  {["About", "Services", "Portfolio", "Contact"].map((item) => (
    <li key={item}>
      <Link
        // This points to the route path, e.g., "/about"
        to={`/${item.toLowerCase().replace(" ", "")}`} 
        className="text-zinc-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-1 group"
      >
        {item}
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1"
        />
      </Link>
    </li>
  ))}
</ul>

            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                Solutions
              </h3>
              <ul className="space-y-4 text-sm font-semibold text-zinc-400">
                {[
                  "Web Development",
                  "App Development",
                  "UI/UX Design",
                  "Cloud Services",
                ].map((service) => (
                  <li
                    key={service}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2 md:col-span-1 space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:niijo.info@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span className="text-sm font-semibold">
                    niijo.info@gmail.com
                  </span>
                </a>
                <p className="flex items-center text-sm gap-3 text-zinc-400 hover:text-white transition-colors">
                  +977 9705967452
                </p>

                <p className="text-zinc-500 text-xs leading-5">
                  Lamki, Kailali Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            © {currentYear} NIIJOTECH. MADE IN NEPAL.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            Top
            <div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white transition-colors">
              ↑
            </div>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
