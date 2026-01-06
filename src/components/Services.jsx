
// import { Code, Brush,TabletSmartphone, Rocket } from "lucide-react";

// const services = [
//   { icon: <Code />, title: "Web Development", 
//     desc: "Custom websites and web applications built with the latest technologies for optional performance and user..." ,
//     button: "Learn More"
//   },

//   { icon: <Brush />, title: "UI/UX Design", 
//     desc: "Custom websites and web applications built with the latest technologies for optional performance and user..." ,
//     button: "Learn More"
    
//      },
//   { icon: <TabletSmartphone />, title: "Responsive Design",
//     desc: "Custom websites and web applications built with the latest technologies for optional performance and user..." ,
//     button: "Learn More"
    
//     },
//   { icon: <Rocket />, title: "Performance",
//     desc: "Custom websites and web applications built with the latest technologies for optional performance and user..." ,
//     button: "Learn More"
    
//      },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-20 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-12">Services</h2>

//       <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
//         {services.map((s, i) => (
//           <div
//             key={i}
//             className="bg-white p-6 rounded shadow hover:-translate-y-2 transition"
//           >
//             <div className="text-primary text-3xl mb-4">{s.icon}</div>
//             <h3 className="font-bold mb-2">{s.title}</h3>
//             <p className="text-gray-600">{s.desc}</p>
//             <button>{s.button}</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// Services.jsx
import React from "react";
import { Code, Smartphone, BarChart2, Layout, Megaphone, Cloud } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications designed to engage users and extend your reach on iOS and Android.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-blue-500" />,
    title: "Digital Strategy",
    description:
      "Data-driven strategies to help you navigate the digital landscape, optimize operations, and maximize ROI.",
  },
  {
    icon: <Layout className="w-8 h-8 text-blue-500" />,
    title: "UI/UX Design",
    description:
      "User-centric design that creates intuitive, accessible, and beautiful interfaces for your digital products.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-blue-500" />,
    title: "Digital Marketing",
    description:
      "Targeted campaigns across social media, search engines, and email to boost brand awareness and lead generation.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure setup, migration, and management to ensure your business is always online and secure.",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-blue-500 font-semibold">OUR SERVICES</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">What We Provide</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your unique business needs.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-blue-500 font-medium hover:underline">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
