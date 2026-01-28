import { Code, Smartphone, Brain } from "lucide-react";
import ServiceCard from "./HeroServicsCard";

const WhatWeBuild = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
          Our Capabilities
        </p>

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            What We Build.
          </h2>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 transition"
          >
            View all services →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <ServiceCard
            icon={<Code />}
            title="Custom Web Development"
            desc="Modern, responsive web applications built with React and Node.js."
          />

          <ServiceCard
            icon={<Smartphone />}
            title="Mobile Development"
            desc="Cross-platform mobile applications for Android and iOS."
          />

          <ServiceCard
            icon={<Brain />}
            title="AI / ML Integration"
            desc="Machine learning solutions to automate tasks and analyze data."
          />
        </div>

        {/* CTA */}
       <div className="  max-w-3xl mx-auto bg-black rounded-xl h-101 text-white">
        <h1 className=" text-center pt-20 text-7xl font-bold">  Ready to Start  </h1>
        <h1 className=" text-center pt-5 text-7xl font-bold">Your Project?</h1>
        <button className=" bg-white rounded-full ml-[300px] mt-10 text-black font-semibold px-6 text-xl py-4">Get In Touch</button>
       </div>

      </div>
    </section>
  );
};

export default WhatWeBuild;
