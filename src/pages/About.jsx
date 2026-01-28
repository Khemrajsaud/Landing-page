import {
 Users,
  FolderKanban,
  Calendar1,
  Award,
  Target,
  Eye,
  Zap,
  Shield,
} from "lucide-react";
import about from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import leader1 from "../assets/rajan.jpeg";
import leader2 from "../assets/mukesh.jpeg";



export default function About() {
 

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-gray-300"></span>
          <p className="text-xs tracking-widest text-gray-500 uppercase">
            Our Story
          </p>
          <span className="h-px w-8 bg-gray-300"></span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Building <br />
              <span className="text-gray-700">Excellence</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
              Founded in Kailali, Nepal, Niijo is bringing quality software
              development and technical education to our region. We’re committed
              to making technical excellence accessible locally.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition">
              Learn More →
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={about}
              alt="About Niijo"
              className="w-full h-[320px] sm:h-[380px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>



<div className="max-w-6xl mx-auto px-4 py-16">
  <div className="grid md:grid-cols-2 gap-12 items-center  rounded-2xl p-8">

    {/* Image Section */}
    <div className="w-full">
      <img
        src={about2}
        alt="About Niijo"
        className="w-full h-[480px] object-cover rounded-xl shadow-md"
      />
    </div>

    {/* Content Section */}
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        The Genesis of <span className="text-primary">Niijo</span>
      </h1>

      <p className="text-gray-600 leading-relaxed">
        Niijo started with a simple goal: bridge the gap between academic learning
        and real-world software development. Our founders recognized the need
        for quality technical education and professional software services
        within our region.
        <br /><br />
        Today, we are growing as both a software development company and a
        technical training provider—committed to delivering quality work and
        empowering students with real-world skills.
      </p>

      {/* Mission & Vision */}
      <div className="grid sm:grid-cols-2 gap-6 pt-4">

        {/* Mission */}
        <div className="flex gap-4 p-5 rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition">
          <div className="p-3 bg-primary/10 rounded-full">
            <Target className="text-primary w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="text-sm text-gray-600">
              Deliver quality software solutions and technical education locally.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex gap-4 p-5 rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition">
          <div className="p-3 bg-primary/10 rounded-full">
            <Eye className="text-primary w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Our Vision
            </h2>
            <p className="text-sm text-gray-600">
              Build strong technical skills and create opportunities in our region.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>



   <div className="text-center mb-16 mt-10">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-8 bg-gray-300"></span>
          <p className="text-xs tracking-widest text-gray-500 uppercase">
            Our Story
          </p>
          <span className="h-px w-8 bg-gray-300"></span>
        </div>
        <h2 className="text-4xl font-semibold text-gray-900">
          The Niijo DNA
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="group rounded-3xl bg-white p-10 shadow-sm border transition-all duration-300 hover:bg-black hover:shadow-2xl">
          
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-8 transition group-hover:bg-white">
            <Zap className="w-5 h-5 text-black" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 transition group-hover:text-white">
            Technical Rigor
          </h3>

          <p className="text-gray-600 leading-relaxed transition group-hover:text-gray-300">
            We don't accept 'good enough'. We build systems that are bulletproof
            and scalable.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group rounded-3xl bg-white p-10 shadow-sm border transition-all duration-300 hover:bg-black hover:shadow-2xl">
          
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-8 transition group-hover:bg-white">
            <Shield className="w-5 h-5 text-black" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 transition group-hover:text-white">
            Radical Transparency
          </h3>

          <p className="text-gray-600 leading-relaxed transition group-hover:text-gray-300">
            No jargon. No hidden costs. Total visibility into the engineering
            lifecycle.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group rounded-3xl bg-white p-10 shadow-sm border transition-all duration-300 hover:bg-black hover:shadow-2xl">
          
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-8 transition group-hover:bg-white">
            <Users className="w-5 h-5 text-black" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 transition group-hover:text-white">
            Human Centric
          </h3>

          <p className="text-gray-600 leading-relaxed transition group-hover:text-gray-300">
            We build for people. Whether it's a student's career or a client's
            business.
          </p>
        </div>

      </div>



<div className="relative py-28 px-6 mt-20">
<div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black rounded-[3rem]" />

      <div className="relative max-w-7xl mx-auto text-white">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.35em] text-gray-400 uppercase mb-4">
            The Architects
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our Visionary Leaders
          </h2>
        </div>

        {/* Leaders */}
        <div className="grid md:grid-cols-2 gap-20 place-items-center">

          {/* Leader Card */}
          <div className="group text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
              
              <img
                src={leader1}
                alt="Rajan Neupane"
                className="relative w-56 h-56 object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold">
              Rajan Neupane
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Co-Founder
            </p>

            <div className="mt-4 h-[2px] w-10 mx-auto bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          {/* Leader Card */}
          <div className="group text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
              
              <img
                src={leader2}
                alt="Mukesh Adhikari"
                className="relative w-56 h-56 object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold">
              Mukesh Adhikari
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Co-Founder
            </p>

            <div className="mt-4 h-[2px] w-10 mx-auto bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

        </div>
      </div>

</div>


      </div>
    </section>
  );
}
