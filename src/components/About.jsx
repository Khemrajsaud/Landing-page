import { Users, FolderKanban, Calendar1, Award, BadgeCheck, Rocket } from "lucide-react";
import about from "../assets/about.jpg";

export default function About() {
  const stats = [
    { icon: <Calendar1 />, label: "Years Experience", value: "10+" },
    { icon: <FolderKanban />, label: "Projects Done", value: "500+" },
    { icon: <Users />, label: "Happy Clients", value: "200+" },
    { icon: <Award />, label: "Team Members", value: "50+" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Who We Are
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div>
            <img
              src={about}
              alt="About us"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Driving Innovation Since 2014
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a dedicated team of professionals committed to delivering
              excellence. With years of experience and a passion for innovation,
              we help businesses grow and succeed in an ever-evolving digital
              landscape.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our approach combines strategic insight with technical expertise,
              ensuring that every project we undertake not only meets but
              exceeds expectations. We believe in building lasting partnerships
              based on trust and results.
            </p>

            {/* Features */}
            <div className="flex gap-8 mt-6">
              <div className="flex items-center gap-2">
                <BadgeCheck className="text-blue-600" />
                <div>
                  <p className="font-semibold">Certified Experts</p>
                  <p className="text-sm text-gray-500">
                    Industry recognized pros
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Rocket className="text-blue-600" />
                <div>
                  <p className="font-semibold">Fast Delivery</p>
                  <p className="text-sm text-gray-500">
                    On time, every time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-blue-600 flex justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold">{item.value}</h4>
              <p className="text-gray-500 text-sm mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
