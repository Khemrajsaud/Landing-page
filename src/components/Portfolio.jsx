export default function Portfolio() {
  const projects = [
     {
      title: "FinTech Dashbord",
      desc: "A comprehensive financial analytics plartform for real-time market data.",
      tech: ["React", "Node.js"],
      img: "https://imgs.search.brave.com/ACYUEqYUCX8mZI4GY2vBh18jdclQHs0W9G7xhBYQn8Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZmluZXJlcG9ydC5j/b20vZW4vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDYvRmlu/YW5jaWFsLUtQSS1E/YXNoYm9hcmQuZ2lm.jpeg",
    },
    {
      title: "HealthTrack App",
      desc: "Mobile solution for tracking daily fitness activities and health metrics.",
      tech: ["Flutter", "Firebase"],
      img: "https://imgs.search.brave.com/_10SAB3uNaO6IZIve-6HEFRcOj9cXQjX1ENc9zP4KdQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3BhY2VvLmNhL19u/ZXh0L2ltYWdlLz91/cmw9aHR0cHM6Ly93/cC5zcGFjZW8uY2Ev/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvRm9vZHVjYXRl/LWFwcC5qcGcmdz0z/ODQwJnE9NzU",
    },
    {
      title: "Social Connect",
      desc: "Communicity plartform connecting proffectioinal across different industries.",
      tech: ["React", "Node.js"],
      img: "https://imgs.search.brave.com/_10SAB3uNaO6IZIve-6HEFRcOj9cXQjX1ENc9zP4KdQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3BhY2VvLmNhL19u/ZXh0L2ltYWdlLz91/cmw9aHR0cHM6Ly93/cC5zcGFjZW8uY2Ev/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvRm9vZHVjYXRl/LWFwcC5qcGcmdz0z/ODQwJnE9NzU",
    },
    {
      title: "Dashboard UI",
      desc: "Admin dashboard design",
      tech: ["React", "Chart"],
      img: "https://imgs.search.brave.com/_10SAB3uNaO6IZIve-6HEFRcOj9cXQjX1ENc9zP4KdQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3BhY2VvLmNhL19u/ZXh0L2ltYWdlLz91/cmw9aHR0cHM6Ly93/cC5zcGFjZW8uY2Ev/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvRm9vZHVjYXRl/LWFwcC5qcGcmdz0z/ODQwJnE9NzU",
    },
     {
      title: "Corporate Portal",
      desc: "Internal Communication portal for a Fortune 500 company",
      tech: ["React", "Tailwind"],
      img: "https://imgs.search.brave.com/_10SAB3uNaO6IZIve-6HEFRcOj9cXQjX1ENc9zP4KdQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3BhY2VvLmNhL19u/ZXh0L2ltYWdlLz91/cmw9aHR0cHM6Ly93/cC5zcGFjZW8uY2Ev/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvRm9vZHVjYXRl/LWFwcC5qcGcmdz0z/ODQwJnE9NzU",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <h2 className="text-blue-600 font-semibold  text-center">Our Work</h2>
      <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-5 text-center">Fetured Project</h1>
      <p className="  text-center mb-10">Explore Our Latest stories and see how we help clients achive their goals.</p>

      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto px-4 ">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white hover:border hover:border-blue-400 p-2 rounded shadow overflow-hidden hover:scale-105  transition"
          >
            <img className=" rounded-md" src={p.img} alt={p.title} />
            <div className="p-4">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
              <div className="flex gap-2 mt-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
