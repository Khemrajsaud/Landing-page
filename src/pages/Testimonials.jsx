// import { Star } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Testimonials() {
//   const reviews = [
//     {
//       name: "Jillie Bernard",
//       role: "Director of Sales",
//       image: "https://i.pravatar.cc/150?img=32",
//       rating: 5,
//       quote:
//         "Absolutely love UI Box! The clean design and ease of use are unmatched.",
//     },
//     {
//       name: "John Doe",
//       role: "CEO, Techstream",
//       image: "https://i.pravatar.cc/150?img=12",
//       rating: 5,
//       quote:
//         "InnovateCorp transformed our online presence completely.",
//     },
//     {
//       name: "Sarah Smith",
//       role: "Marketing Head",
//       image: "https://i.pravatar.cc/150?img=5",
//       rating: 4,
//       quote:
//         "Outstanding UI/UX design and very smooth communication.",
//     },
//     {
//       name: "Michael Brown",
//       role: "Founder, Startup Inc",
//       image: "https://i.pravatar.cc/150?img=8",
//       rating: 5,
//       quote:
//         "Professional service and excellent post-launch support.",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     autoplaySpeed: 3000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section  className="py-20 bg-white">
//       {/* Heading */}
//      <div className="flex items-center justify-center gap-4 mb-4 ml-8 ">
//                 <div className="h-px w-10 bg-black"></div>
    
//                 <p className="text-xs  tracking-widest text-gray-500 uppercase whitespace-nowrap">
//               Client Feedback
//                 </p>
    
//                 <div className="h-px w-10 bg-black"></div>
//               </div>

//       <div className=" ">
//         <Slider {...settings}
        
//   appendDots={(dots) => (
//     <ul className="mt-6">{dots}</ul>  
//   )}
//         >
//           {reviews.map((item, index) => (
//             <div
//               key={index}
//               className="p-6 mx-2  text-black gap-10  flex flex-col justify-between h-full"
//             >
//               {/* Stars */}
//               <div className="flex mb-2 text-black ">
//                 {Array.from({ length: item.rating }).map((_, i) => (
//                   <Star key={i} className="text-yellow-400 w-5 h-5" />
//                 ))}
//               </div>

//               {/* Quote */}
//               <p className="text-black mb-4  italic flex-1">{item.quote}</p>

//               {/* Reviewer Info */}
//               <div className="flex items-center gap-3 mt-4">
//                 <img
//                   className="rounded-full w-12 h-12 object-cover"
//                   src={item.image}
//                   alt={item.name}
//                 />
//                 <div className="flex flex-col">
//                   <h3 className="text-white font-semibold">{item.name}</h3>
//                   <p className="text-gray-400 text-sm">{item.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { Quote } from "lucide-react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "cubic-bezier(0.25, 1, 0.5, 1)", // Premium smooth transition
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-50px" }}>
        <ul className="custom-dots flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-[2px] bg-zinc-200 mt-10 transition-all hover:bg-black active-dot:bg-black"></div>
    ),
  };

  return (
    <section className=" pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-black"></div>
            <p className="text-[10px] tracking-[0.4em] text-zinc-400 font-black uppercase">
              Client Feedback
            </p>
            <div className="h-px w-10 bg-black"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">
            Voices of <br />
            <span className="text-zinc-300 italic font-light">Trust.</span>
          </h2>
        </motion.div>

        {/* Slider Container */}
        <div className="testimonial-slider-wrapper">
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <div key={index} className="px-4">
                <div className="group relative bg-white border border-zinc-100 p-10 h-full flex flex-col justify-between transition-all duration-500 hover:border-black">
                  
                  {/* Icon */}
                  <div className="mb-8 text-zinc-100 group-hover:text-black transition-colors duration-500">
                    <Quote size={40} fill="currentColor" />
                  </div>

                  {/* Quote */}
                  <p className="text-xl font-bold text-black leading-tight tracking-tight mb-10 italic">
                    "{item.quote}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 pt-8 border-t border-zinc-50 group-hover:border-black transition-colors duration-500">
                    <img
                      className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-none object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex flex-col">
                      <h3 className="text-sm font-black uppercase tracking-tighter text-black">
                        {item.name}
                      </h3>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Internal CSS for the slider dots */}
      <style jsx global>{`
        .slick-dots li.slick-active div {
          background-color: #000 !important;
          width: 30px !important;
        }
        .testimonial-slider-wrapper .slick-list {
          overflow: visible; /* Allows hover effects to not get clipped */
        }
      `}</style>
    </section>
  );
}