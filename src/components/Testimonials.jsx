import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Jillie Bernard",
      role: "Director of Sales",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 5,
      quote:
        "Absolutely love UI Box! The clean design and ease of use are unmatched.",
    },
    {
      name: "John Doe",
      role: "CEO, Techstream",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      quote:
        "InnovateCorp transformed our online presence completely.",
    },
    {
      name: "Sarah Smith",
      role: "Marketing Head",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 4,
      quote:
        "Outstanding UI/UX design and very smooth communication.",
    },
    {
      name: "Michael Brown",
      role: "Founder, Startup Inc",
      image: "https://i.pravatar.cc/150?img=8",
      rating: 5,
      quote:
        "Professional service and excellent post-launch support.",
    },
  ];

  const settings = {
    dots: true, 
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-[#0f172a]">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-500 text-sm font-semibold">TESTIMONIALS</p>
        <h2 className="text-3xl font-bold text-white">Client Feedback</h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {reviews.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-[#111827] p-6 rounded-xl h-full shadow-lg">
                
                {/* Stars */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm mb-6">
                  “{item.quote}”
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
