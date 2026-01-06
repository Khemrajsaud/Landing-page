import { Star  } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "John Doe",
      company: "Tech Corp",
      quote: "Amazing work! Very professional team.",
    },
    {
      name: "Sarah Smith",
      company: "Startup Inc",
      quote: "Clean design and fast delivery.",
    },
    {
      name: "Alex Brown",
      company: "Agency",
      quote: "Highly recommended for web projects.",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded shadow">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} />
              ))}
            </div>
            <p className="text-gray-600 mb-4">“{r.quote}”</p>
            <h4 className="font-bold">{r.name}</h4>
            <span className="text-sm text-gray-500">{r.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
