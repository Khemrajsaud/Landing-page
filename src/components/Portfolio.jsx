import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "FinTech Dashboard",
      desc: "A comprehensive financial analytics platform for real-time market insights and reporting.",
      tech: ["React", "Node.js"],
      img: "https://imgs.search.brave.com/ACYUEqYUCX8mZI4GY2vBh18jdclQHs0W9G7xhBYQn8Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZmluZXJlcG9ydC5j/b20vZW4vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDYvRmlu/YW5jaWFsLUtQSS1E/YXNoYm9hcmQuZ2lm.jpeg",
    },
    {
      title: "HealthTrack App",
      desc: "Mobile solution for tracking daily fitness activities and health metrics efficiently.",
      tech: ["Flutter", "Firebase"],
      img: "https://imgs.search.brave.com/_10SAB3uNaO6IZIve-6HEFRcOj9cXQjX1ENc9zP4KdQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3BhY2VvLmNhL19u/ZXh0L2ltYWdlLz91/cmw9aHR0cHM6Ly93/cC5zcGFjZW8uY2Ev/d3AtY29udGVudC91cGxvYWRzLzIwMjQv/MDgvRm9vZHVjYXRl/LWFwcC5qcGcmdz0z/ODQwJnE9NzU",
    },
    {
      title: "Social Connect",
      desc: "Community platform connecting professionals across multiple industries worldwide.",
      tech: ["React", "Node.js"],
      img: "https://imgs.search.brave.com/rXqOPtceiM8eYIAkj3lgOF5ka0jLJHgF_HsYVNYchUU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/MDY2MzQxOC92ZWN0/b3IvdmlyYWwtY29u/dGVudC1zb2NpYWwt/YWN0aXZpdHktYW5k/LXNtbS1saWtlcy1z/aGFyZXMtYW5kLWNv/bW1lbnRzLXBvcHBp/bmctdXAtb24tdGhl/LW1vYmlsZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bnRI/NUstZHV6QkVEX293/T0VXRFlCbnNaRDVm/QnZOdlJzTHQ2SUdV/bk5oST0",
    },
    {
      title: "Dashboard UI",
      desc: "Modern admin dashboard UI with charts and data visualization.",
      tech: ["React", "Charts"],
      img: "https://imgs.search.brave.com/FYnzvpl_ok7H1MW7lQE7sczyU0u82okQAX7ygOTQhhc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbW9kZXJuLWRh/c2hib2FyZC11aS1k/ZXNpZ24td2l0aC1k/YXRhLXZpc3VhbGl6/YXRpb25fMjU0NDQt/NzgzLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA",
    },
    {
      title: "Corporate Portal",
      desc: "Internal communication portal built for enterprise-level organizations.",
      tech: ["React", "Tailwind"],
      img: "https://imgs.search.brave.com/aBt4F9xW4q-okkkZIIogCl4UCtEaAOM4s6Hg5xYud9Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2Nuc29mdC5jb20v/YmxvZy1waWN0dXJl/cy93ZWItcG9ydGFs/cy8yNDA5Ny9pbWFn/ZS10aHVtYl9fMjQw/OTdfX2F1dGhvcl9w/YWdlLXRvcC1hcnRp/Y2xlL3dlYi1wb3J0/YWxzLXR5cGVzLnBuZw",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-blue-600 font-semibold uppercase tracking-wide">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Featured Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Explore our latest projects and discover how we help businesses achieve
          digital success.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/40 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
