import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  BarChart2,
  Layout,
  Megaphone,
  Cloud,
} from "lucide-react";

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
      "Data-driven strategies to help you navigate the digital landscape and maximize ROI.",
  },
  {
    icon: <Layout className="w-8 h-8 text-blue-500" />,
    title: "UI/UX Design",
    description:
      "User-centric design that creates intuitive, accessible, and beautiful interfaces.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-blue-500" />,
    title: "Digital Marketing",
    description:
      "Targeted campaigns to boost brand awareness and generate quality leads.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure to keep your business secure and online.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-blue-600 font-semibold uppercase">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            What We Provide
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique business needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-xl shadow-md 
                         hover:shadow-[0_20px_40px_rgba(59,130,246,0.25)]
                         transition-all duration-300 text-left"
            >
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <a
                href="#"
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
