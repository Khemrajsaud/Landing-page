import { motion } from "framer-motion";
import {
  Users,
  FolderKanban,
  Calendar1,
  Award,
  BadgeCheck,
  Rocket,
} from "lucide-react";
import about from "../assets/about.jpg";

export default function About() {
  const stats = [
    { icon: <Calendar1 />, label: "Years Experience", value: "3+" },
    { icon: <FolderKanban />, label: "Projects Live", value: "5+" },
    { icon: <Users />, label: "Happy Clients", value: "10+" },
    { icon: <Award />, label: "Team Members", value: "5+" },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Who We Are
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={about}
              alt="About us"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Driving Innovation Since 2022
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              We are a dedicated team of professionals committed to delivering
              excellence. With years of experience and a passion for innovation,
              we help businesses grow and succeed in an ever-evolving digital
              landscape through smart, scalable, and user-focused solutions.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Our approach blends strategic insight with technical expertise,
              ensuring every project not only meets expectations but exceeds
              them. We focus on long-term partnerships built on trust, results,
              and continuous improvement.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-8 mt-6">
              <div className="flex items-start gap-3">
                <BadgeCheck className="text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Certified Experts</p>
                  <p className="text-sm text-gray-500">
                    Industry recognized professionals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Rocket className="text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Fast Delivery</p>
                  <p className="text-sm text-gray-500">
                    On time, every time
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-blue-600 flex justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold">{item.value}</h4>
              <p className="text-gray-500 text-sm mt-1">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
