import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Cpu, Globe, Layout } from 'lucide-react';

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Our Creative Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Crafting Digital <span className="text-slate-400">Masterpieces.</span>
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg md:max-w-xs font-medium"
          >
            A curated selection of our most impactful engineering challenges and visual solutions.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Image Wrapper */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  {p.icon}
                  <h4 className="font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h4>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {p.desc}
                </p>

                {/* Footer: Tech & Links */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 text-center"
        >
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-500/20">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}