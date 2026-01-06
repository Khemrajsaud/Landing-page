import landing_page from "../assets/landing page.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full">
      
      {/* Background Image */}
      <img
        src={landing_page}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-3xl text-white">
          
          <h2 className="text-lg md:text-xl uppercase tracking-widest text-gray-300 mb-3">
            Innovate Your Business
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            With <span className="text-blue-500">Excellence</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-8">
            We transform digital experiences using cutting-edge technology
            and modern design. Elevate your brand to the next level today.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-medium transition">
              Get Started
            </button>
            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
