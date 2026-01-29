import React from "react";

import { Code, Smartphone, Brain, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const WhatWeBuild = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Custom Web Development",
      desc: "Modern, high-performance web applications built with the precision of React and Node.js.",
      tag: "Development",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Development",
      desc: "Native-feel cross-platform applications that deliver seamless experiences on iOS and Android.",
      tag: "Application",
    },
    {
      icon: <Brain size={32} />,
      title: "AI / ML Integration",
      desc: "Intelligent automation and predictive modeling designed to turn your data into an asset.",
      tag: "Intelligence",
    },
  ];

  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-black"></span>
              <p className="text-[10px] tracking-[0.4em] text-zinc-400 font-black uppercase">
                Expertise
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-black leading-[0.9] uppercase tracking-tighter">
              What We <br />
              <span className="text-zinc-300 italic font-light">Build.</span>
            </h2>
          </motion.div>
<MotionLink
      to="/services"
      className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black mt-8 md:mt-0"
      // Framer Motion props
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      View all services
      <ArrowUpRight
        size={16}
        className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
      />
    </MotionLink>
          
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-zinc-100 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 border-b md:border-b-0 md:border-r border-zinc-100 hover:bg-black transition-colors duration-500"
            >
              <div className="text-black group-hover:text-white mb-8 transition-colors duration-500">
                {service.icon}
              </div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4 block">
                {service.tag}
              </span>
              <h3 className="text-2xl font-black text-black group-hover:text-white uppercase tracking-tighter mb-4 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed font-medium transition-colors duration-500">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cinematic CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-black py-24 px-6 overflow-hidden text-center group"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-200 via-transparent to-transparent"></div>

          <h2 className="relative z-10 text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12">
            Ready to Start <br />
            <span className="text-zinc-700 italic group-hover:text-white transition-colors duration-700">
              Your Project?
            </span>
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 bg-white text-black px-12 py-5 font-black uppercase text-xs tracking-[0.3em] hover:bg-zinc-200 transition-all shadow-2xl"
          >
            Get In Touch
          </motion.button>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-zinc-800 m-8"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-zinc-800 m-8"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
