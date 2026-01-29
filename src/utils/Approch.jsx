import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap, Users, MessageCircle, ArrowUpRight } from "lucide-react";

const OurApproach = () => {
  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-black"></span>
            <p className="text-[10px] tracking-[0.4em] text-zinc-400 font-black uppercase">
              Our Methodology
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-black leading-[0.9] uppercase tracking-tighter mb-8">
            Quality <br />
            <span className="text-zinc-300 italic font-light">Software.</span> <br />
            Local Expertise.
          </h2>

          <p className="text-zinc-500 text-lg mb-12 max-w-xl font-medium leading-relaxed">
            Based in Kailali, Nepal. We engineer high-performance software 
            while mentoring the next wave of developers. We prioritize 
            <span className="text-black"> architectural integrity</span> over rapid scaling.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            <Feature
              icon={<Shield size={20} />}
              title="Quality First"
              desc="Immutable code standards and rigorous testing cycles."
            />
            <Feature
              icon={<Zap size={20} />}
              title="Modern Stack"
              desc="React, Node.js, and Type-safe development."
            />
            <Feature
              icon={<Users size={20} />}
              title="Client Focus"
              desc="Your business objectives define our roadmap."
            />
            <Feature
              icon={<MessageCircle size={20} />}
              title="Transparent"
              desc="Direct engineer-to-client collaboration."
            />
          </div>
        </motion.div>

        {/* RIGHT CARD - Floating Brutalist Design */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative background shape */}
          <div className="absolute -inset-4 bg-zinc-50 rounded-none -z-10 transform rotate-2"></div>
          
          <div className="bg-black text-white p-12 rounded-none shadow-[30px_30px_0px_0px_rgba(228,228,231,1)] group">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-white text-black p-3">
                  <CheckCircle size={24} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">
                    Development Pulse
                  </h4>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                    Real-time status
                  </p>
                </div>
              </div>
              <ArrowUpRight className="text-zinc-700 group-hover:text-white transition-colors" />
            </div>

            <div className="h-px bg-zinc-800 w-full mb-10" />

            <div className="grid grid-cols-3 gap-4 text-center mb-12">
              <Stat value="2025" label="Est." />
              <Stat value="01" label="Active" />
              <Stat value="100%" label="Focus" />
            </div>

            <button className="w-full bg-white text-black py-5 font-black uppercase text-xs tracking-[0.3em] hover:bg-zinc-200 transition-all active:scale-95">
              Read Our Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex flex-col gap-4 group"
  >
    <div className="text-black group-hover:scale-110 transition-transform duration-300 w-fit">
      {icon}
    </div>
    <div>
      <h4 className="font-black text-black uppercase tracking-tight text-sm mb-1">
        {title}
      </h4>
      <p className="text-xs text-zinc-500 font-medium leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Stat = ({ value, label }) => (
  <div className="group">
    <p className="text-3xl font-black text-white tracking-tighter group-hover:italic transition-all">
      {value}
    </p>
    <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold mt-2">
      {label}
    </p>
  </div>
);

export default OurApproach;