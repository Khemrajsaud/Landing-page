import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap, Users, MessageCircle, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const OurApproach = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-12 bg-black"></span>
            <p className="text-[11px] tracking-[0.5em] text-zinc-400 font-black uppercase">
              Our Methodology
            </p>
          </div>

          <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.85] uppercase tracking-tighter mb-10">
            Quality <br />
            <span className="text-zinc-200 italic font-light">Software.</span> <br />
            Local <span className="text-outline-black text-white" style={{ WebkitTextStroke: '1px black' }}>Pride.</span>
          </h2>

          <p className="text-zinc-500 text-xl mb-16 max-w-2xl font-medium leading-relaxed">
            Based in <span className="text-black underline underline-offset-4 decoration-1">Kailali, Nepal.</span> We engineer high-performance software 
            while mentoring the next wave of developers. We prioritize 
            <span className="text-black"> architectural integrity</span> over rapid scaling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 border-t border-zinc-100 pt-16">
            <Feature icon={<Shield size={22} />} title="Quality First" desc="Immutable code standards and rigorous testing cycles." />
            <Feature icon={<Zap size={22} />} title="Modern Stack" desc="React, Node.js, and Type-safe development." />
            <Feature icon={<Users size={22} />} title="Client Focus" desc="Your business objectives define our roadmap." />
            <Feature icon={<MessageCircle size={22} />} title="Transparent" desc="Direct engineer-to-client collaboration." />
          </div>
        </motion.div>

        {/* IMPROVED RIGHT CARD - Inspired by image_1818b0.png */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="relative p-1 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <div className="bg-white rounded-[38px] p-10 md:p-12 border border-zinc-100">
              
              {/* Card Header */}
              <div className="flex items-center gap-5 mb-12">
                <div className="bg-black p-4 rounded-2xl shadow-lg">
                  <CheckCircle className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-zinc-900 tracking-tight">
                    What We’re Building
                  </h4>
                  <p className="text-zinc-400 font-medium">
                    Growing with every project.
                  </p>
                </div>
              </div>

              <div className="h-px bg-zinc-100 w-full mb-12" />

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mb-14 text-center">
                <Stat value="2025" label="Founded" />
                <Stat value="1" label="Active Project" />
                <Stat value="100%" label="Committed" />
              </div>

              {/* Action Button */}
              <Link 
                to="/about" 
                className="group relative flex w-full items-center justify-center gap-3 bg-[#0f172a] hover:bg-black py-5 rounded-2xl text-white font-bold uppercase text-[13px] tracking-widest transition-all active:scale-95 shadow-xl shadow-zinc-200"
              >
                Our Story
                <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex flex-col gap-5 group">
    <div className="text-black bg-zinc-50 w-14 h-14 flex items-center justify-center border border-zinc-100 group-hover:bg-black group-hover:text-white transition-all duration-500 rounded-xl">
      {icon}
    </div>
    <div>
      <h4 className="font-black text-black uppercase tracking-tighter text-base mb-2">{title}</h4>
      <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[240px]">{desc}</p>
    </div>
  </div>
);

const Stat = ({ value, label }) => (
  <div className="flex flex-col">
    <p className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tighter">
      {value}
    </p>
    <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mt-2">
      {label}
    </p>
  </div>
);

export default OurApproach;