import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Jillie Bernard",
      role: "Director of Sales",
      image: "https://i.pravatar.cc/150?img=32",
      quote: "Absolutely love Nijjo! The clean design and ease of use are unmatched in the modern market.",
    },
    {
      name: "John Doe",
      role: "CEO, Techstream",
      image: "https://i.pravatar.cc/150?img=12",
      quote: "They transformed our online presence completely with a professional and bold aesthetic.",
    },
    {
      name: "Sarah Smith",
      role: "Marketing Head",
      image: "https://i.pravatar.cc/150?img=5",
      quote: "Outstanding UI/UX design and very smooth communication throughout the development cycle.",
    },
    {
      name: "Michael Brown",
      role: "Founder, Startup Inc",
      image: "https://i.pravatar.cc/150?img=8",
      quote: "Professional service and excellent post-launch support. Truly a partner in innovation.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Update layout based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);      // Mobile: 1 Card
      else if (window.innerWidth < 1024) setItemsToShow(2); // Tablet: 2 Cards
      else setItemsToShow(3);                              // Desktop/Laptop: 3 Cards
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logic to prevent sliding into empty space
  const maxIndex = reviews.length - itemsToShow;
  const safeIndex = Math.min(currentIndex, maxIndex < 0 ? 0 : maxIndex);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Minimalist Heading */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-black"></div>
            <p className="text-[10px] tracking-[0.4em] text-zinc-400 font-black uppercase">
              Feedback
            </p>
            <div className="h-px w-8 bg-black"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter">
            Voices of <span className="text-zinc-300 italic font-light">Trust.</span>
          </h2>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${safeIndex * (100 / itemsToShow)}% - ${safeIndex * (24 / itemsToShow)}px)`,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              {reviews.map((item, index) => (
                <div 
                  key={index} 
                  className={`shrink-0 transition-opacity duration-500 ${
                    itemsToShow === 1 ? "w-full" : 
                    itemsToShow === 2 ? "w-[calc(50%-12px)]" : 
                    "w-[calc(33.333%-16px)]"
                  }`}
                >
                  <div className="bg-white border border-zinc-100 p-8 md:p-10 h-full min-h-[400px] flex flex-col justify-between hover:border-black transition-all duration-500 group">
                    <div>
                      <Quote className="text-zinc-100 group-hover:text-black mb-8 transition-colors duration-500" size={38} fill="currentColor" />
                      <p className="text-xl font-bold text-black leading-tight tracking-tight italic">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-8 border-t border-zinc-50 group-hover:border-black transition-colors duration-500">
                      <img
                        className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="flex flex-col">
                        <h3 className="text-sm font-black uppercase text-black leading-none mb-1">{item.name}</h3>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Dots Only */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {reviews.slice(0, reviews.length - (itemsToShow - 1)).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`group relative py-4`}
            >
              <div className={`h-[2px] transition-all duration-500 ease-in-out ${
                currentIndex === i ? "w-12 bg-black" : "w-6 bg-zinc-200 group-hover:bg-zinc-400"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}