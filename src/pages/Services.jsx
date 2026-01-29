import React from "react";
import {
  Monitor,
  Smartphone,
  Cpu,
  Users,
  Layers,
  Code2,
  School,
  BookOpen,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  
  const softwareServices = [
    {
      title: "Custom Web Development",
      description:
        "Modern, responsive web applications built with React and Node.js.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications for Android and iOS.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "AI/ML Integration",
      description:
        "Machine learning solutions to automate tasks and analyze data.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: "Technical Consulting",
      description:
        "Guidance on technology decisions and software architecture.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const academyServices = [
    {
      title: "Modern Web Development",
      description:
        "Hands-on training in industry-standard technologies for aspiring engineers.",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      title: "School Programs",
      description:
        "Customized technology curriculums for schools and colleges across Nepal.",
      icon: <School className="w-5 h-5" />,
    },
    {
      title: "IT Fundamentals",
      description:
        "Core concepts for beginners to build a strong foundation in the tech industry.",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  return (
    <main className="bg-white font-sans text-slate-900 overflow-x-hidden mt-10 ">
      {/* 1. HERO SECTION (CAPABILITIES) */}
      <section className="relative py-16  lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                Capabilities
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter">
              Quality <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400">
                Solutions.
              </span>
            </h1>
            <p className="max-w-md mx-auto lg:mx-0 text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              We deliver professional software development and technical
              education, helping businesses grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold transition-all hover:bg-blue-600 hover:-translate-y-1 hover:shadow-xl active:scale-95">
                Get Started
              </button>
            </div>
          </div>

          <div className="relative group max-w-2xl mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-gradient-to-tr from-slate-200 to-transparent rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-100 bg-slate-200 aspect-video lg:aspect-square xl:aspect-video">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
                alt="Tech"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOFTWARE & ARCHITECTURE SECTION */}
      <section className="py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="bg-black p-2.5 rounded-xl shadow-lg shrink-0">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-white rounded-[2px]"></div>
              <div className="w-2 h-2 bg-white/40 rounded-[2px]"></div>
              <div className="w-2 h-2 bg-white/40 rounded-[2px]"></div>
              <div className="w-2 h-2 bg-white rounded-[2px]"></div>
            </div>
          </div>
          <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.4em] whitespace-nowrap">
            Software & Architecture
          </h2>
          <div className="h-[1px] w-full bg-slate-100"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softwareServices.map((item, i) => (
            <div
              key={i}
              className="group p-8 md:p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-6 w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ACADEMY SECTION (HOVER BLACK CARDS) */}
      <section className="py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="bg-[#1a1c2e] p-2.5 rounded-xl shadow-lg shrink-0">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.4em]">
            Niijo Academy
          </h2>
          <div className="h-[1px] flex-grow bg-slate-100"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {academyServices.map((item, i) => (
            <div
              key={i}
              className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 transition-all duration-500 hover:bg-black cursor-pointer hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Corner Accent Decoration */}
              <div className="absolute top-8 left-8 w-10 h-10 border-t-2 border-l-2 border-transparent group-hover:border-white/20 transition-all duration-500 rounded-tl-xl"></div>

              <div className="mb-8 w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-900 group-hover:text-white group-hover:border-slate-800 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4. CTA BANNER */}
        <div className="relative overflow-hidden bg-black rounded-[3rem] p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left group">
          {/* Visual Flair: Animated Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-600/30 transition-colors duration-700"></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Need a bespoke <br className="hidden md:block" /> technical
              strategy?
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
              Our senior engineers are ready to analyze your existing stack and
              propose high-impact performance optimizations.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              to="/contact"
              className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase hover:bg-slate-200 transition-all active:scale-95 shadow-xl shadow-white/5"
            >
              Get Consulted
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Space */}
      <footer className="py-12 text-center text-slate-400 text-xs tracking-widest uppercase">
        © 2026 Quality Solutions • Built for Engineers
      </footer>
    </main>
  );
};

export default Services;
