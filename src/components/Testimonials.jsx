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
    <section id="testimonials" className="py-20 bg-[#0f172a]">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-500 text-sm font-semibold">TESTIMONIALS</p>
        <h2 className="text-3xl font-bold text-white">Client Feedback</h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {reviews.map((item, index) => (
            <div
              key={index}
              className="p-6 mx-2 bg-gray-900 rounded-lg shadow-lg flex flex-col justify-between h-full"
            >
              {/* Stars */}
              <div className="flex mb-2">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-4 flex-1">{item.quote}</p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 mt-4">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="flex flex-col">
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
