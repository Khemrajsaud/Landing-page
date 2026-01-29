import Particles from "../components/Particles";
import about from "../assets/world.png";
import Testimonials from "../pages/Testimonials";
import Valocity from "./ValocitText";
import OurApproach from "../utils/Approch";
import CrousalLogo from "./CrousalLogo";
import WhatWeBuild from "../utils/WhatWeBuild";
import { MonitorCloud, School, Cpu, ArrowRight } from "lucide-react";
import TypeWritter from "../utils/TypeWritter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white">
      <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center">
        {/* PARTICLES BACKGROUND - Darkened for better contrast */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={150}
            particleSpread={12}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={true}
            disableRotation={false}
            pixelRatio={window.devicePixelRatio}
          />
          {/* Subtle radial gradient overlay to focus center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Engineering from Nepal
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl xl:text-4xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              <TypeWritter />
            </h1>

            <p className="mt-8 text-zinc-400 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl font-medium leading-relaxed">
              Based in {/* This ensures a space exists */}
              <span className="text-white underline underline-offset-4 decoration-1">
                Kailali, Nepal
              </span>{" "}
              . we engineer high-performance software and empower the next generation of developers.
            </p>

            {/* FEATURES - Minimalist Style */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8">
              {[
                { icon: <MonitorCloud size={18} />, label: "Software" },
                { icon: <School size={18} />, label: "Education" },
                { icon: <Cpu size={18} />, label: "Innovation" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="text-zinc-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-200 transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTONS - High Contrast */}
            <div className="mt-14 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-white/5"
              >
                {" "}
                Start a Project
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/services"
                className="px-10 py-5 rounded-full border border-zinc-800 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all active:scale-95"
              >
                Our Solutions
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE - Subtle Float Animation */}
          <div className="hidden lg:flex flex-1 justify-end">
            <div className="relative">
              {/* Blurred Glow behind image */}
              <div className="absolute inset-0 bg-white/10 blur-[100px] rounded-full" />
              <img
                src={about}
                alt="Global Network"
                className="relative max-w-lg drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] grayscale brightness-125 animate-pulse-slow"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animation for the Image (Add this to your index.css or a style tag) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `,
        }}
      />

      {/* OTHER SECTIONS - Ensuring they sit on white or black backgrounds for consistency */}
      <div className="bg-white">
        <Valocity />

        <OurApproach />
        <CrousalLogo />
        <WhatWeBuild />
        <Testimonials />
      </div>
    </div>
  );
};

export default Hero;
