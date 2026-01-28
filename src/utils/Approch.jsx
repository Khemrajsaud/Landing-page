import { CheckCircle, Shield, Zap, Users, MessageCircle } from "lucide-react";


const OurApproach = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-black"></div>

            <p className="text-xs tracking-widest text-gray-500 uppercase whitespace-nowrap">
              Our Approach
            </p>

            <div className="h-px w-10 bg-black"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Quality Software, <br /> Local Expertise.
          </h2>

          <p className="text-gray-600 mb-10 max-w-xl">
            Based in Kailali, Nepal, we're building professional software
            solutions and training aspiring developers. We focus on quality over
            quantity, bringing modern development practices to our region.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Feature
              icon={<Shield />}
              title="Quality First"
              desc="Clean code, tested thoroughly."
            />
            <Feature
              icon={<Zap />}
              title="Modern Stack"
              desc="React, Node.js, TypeScript."
            />
            <Feature
              icon={<Users />}
              title="Client Focused"
              desc="Your goals drive our work."
            />
            <Feature
              icon={<MessageCircle />}
              title="Direct Communication"
              desc="Clear, honest collaboration."
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md  hover:animate-bounce">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-black text-white  p-3 rounded-xl">
                <CheckCircle size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 hover:text-white">
                  What We’re Building
                </h4>
                <p className="text-sm text-gray-500">
                  Growing with every project.
                </p>
              </div>
            </div>

            <hr className="mb-8" />

            <div className="grid grid-cols-3 text-center mb-8">
              <Stat value="2025" label="Founded" />
              <Stat value="1" label="Active Project" />
              <Stat value="100%" label="Committed" />
            </div>

            <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
              Our Story ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="bg-gray-100 p-3 rounded-xl text-gray-900">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

const Stat = ({ value, label }) => (
  <div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
      {label}
    </p>
  </div>
);

export default OurApproach;
