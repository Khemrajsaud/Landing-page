import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Cpu, Globe, Layout, Plus } from 'lucide-react';

const projects = [
  {
    title: "FinTech Insight",
    category: "Web Platform",
    desc: "Real-time financial analytics with interactive data visualization and predictive modeling.",
    tech: ["React", "Node.js", "D3.js"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    icon: <Layout className="w-5 h-5" />
  },
  {
    title: "HealthTrack Pro",
    category: "Mobile App",
    desc: "A holistic wellness companion featuring biometric tracking and personalized AI coaching.",
    tech: ["Flutter", "Firebase", "ML Kit"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "Nexus Social",
    category: "Networking",
    desc: "High-performance social infrastructure connecting tech professionals globally.",
    tech: ["Next.js", "PostgreSQL", "Socket.io"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "Solaris Admin",
    category: "SaaS Dashboard",
    desc: "Modern enterprise resource planning UI designed for speed and minimalist aesthetic.",
    tech: ["React", "Tailwind", "Zustand"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    icon: <Layout className="w-5 h-5" />
  },
  {
    title: "CryptoVault",
    category: "Blockchain",
    desc: "Secure multi-sig wallet interface with real-time gas price tracking and asset swaps.",
    tech: ["TypeScript", "Web3.js", "Solidity"],
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    title: "OmniPortal",
    category: "Enterprise",
    desc: "A unified communication hub for distributed teams in large-scale organizations.",
    tech: ["React", "GraphQL", "AWS"],
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    icon: <Globe className="w-5 h-5" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-black"></span>
              <h2 className="text-black font-black uppercase tracking-[0.3em] text-[10px]">
                Selected Works
              </h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.9] uppercase">
              Digital <br />
              <span className="text-zinc-300 italic font-light">Excellence.</span>
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-lg md:max-w-xs font-medium leading-relaxed"
          >
            Engineering robust solutions with a focus on minimalist design and maximum performance.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 rounded-none mb-6">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition duration-700 ease-out"
                />
                
                {/* Overlay Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Plus className="text-black" />
                   </div>
                </div>

                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-black text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-none">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-2xl text-black uppercase tracking-tighter group-hover:tracking-normal transition-all duration-500">
                    {p.title}
                  </h4>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <Github size={18} className="text-zinc-400 hover:text-black cursor-pointer" />
                    <ExternalLink size={18} className="text-zinc-400 hover:text-black cursor-pointer" />
                  </div>
                </div>
                
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest group-hover:text-zinc-800 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-24 text-center"
        >
          <button className="group relative overflow-hidden bg-black text-white px-12 py-5 rounded-none font-black uppercase text-xs tracking-[0.3em] hover:bg-zinc-800 transition-all">
            <span className="relative z-10">Archive 2024</span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-difference"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}