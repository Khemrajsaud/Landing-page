import { motion } from "framer-motion";
import landing_page from "../assets/hero_image.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src={landing_page}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl text-white"
        >
          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-lg md:text-xl uppercase tracking-widest text-gray-300 mb-3"
          >
            Innovate Your Business
          </motion.h2>

          {/* Title */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            With <span className="text-blue-500">Excellence</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg mb-8"
          >
            We transform digital experiences using cutting-edge technology
            and modern design. Elevate your brand to the next level today.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-medium transition-all duration-300 hover:scale-105">
              Get Started
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
