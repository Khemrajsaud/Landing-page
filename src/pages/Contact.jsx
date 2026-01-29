import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { MapPin, Phone, Mail, SendHorizontal } from "lucide-react";
import Map from "../address/Map";

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_113mxno",
        "template_q8pdeo8",
        form.current,
        "W8u68MMkBbYMH0yWY"
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("❌ Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bg-white mt-8 py-16 md:py-24 transition-all">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="mb-16 border-l-4 border-black pl-6">
          <p className="text-xs font-bold tracking-[0.4em] text-zinc-400 uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">
            Let’s Discuss <br /> 
            <span className="text-zinc-400 italic font-light">Your Project</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* --- Left Side: Info & Map --- */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-8">
              {[
                { icon: <MapPin size={20}/>, title: "Our Location", content: "Lamki, Kailali, Nepal" },
                { icon: <Phone size={20}/>, title: "Phone Number", content: "+977 9705967452" },
                { icon: <Mail size={20}/>, title: "Email Address", content: "niijo.info@gmail.com" }
              ].map((item, index) => (
                <div key={index} className="flex gap-5 items-center group">
                  <div className="bg-black text-white p-4 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-zinc-800">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{item.title}</h4>
                    <p className="text-lg font-bold text-black">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map with Grayscale effect */}
            <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700 h-72">
              <Map />
            </div>
          </div>

          {/* --- Right Side: Minimalist Form --- */}
          <div className="lg:col-span-7 bg-zinc-50 rounded-[2rem] p-8 md:p-12 border border-zinc-100">
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="bg-transparent border-b-2 border-zinc-200 py-2 focus:border-black outline-none transition-colors text-black font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="example@email.com"
                    className="bg-transparent border-b-2 border-zinc-200 py-2 focus:border-black outline-none transition-colors text-black font-medium"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+977..."
                    className="bg-transparent border-b-2 border-zinc-200 py-2 focus:border-black outline-none transition-colors text-black font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Inquiry"
                    className="bg-transparent border-b-2 border-zinc-200 py-2 focus:border-black outline-none transition-colors text-black font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Your Message</label>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder="How can we help you?"
                  className="bg-transparent border-b-2 border-zinc-200 py-2 focus:border-black outline-none transition-colors text-black font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full group relative flex items-center justify-center gap-3 bg-black text-white font-bold py-5 rounded-xl overflow-hidden transition-all active:scale-95
                ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-zinc-900 shadow-xl"}`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  <>
                    <span className="uppercase tracking-[0.2em] text-sm">Send Message</span>
                    <SendHorizontal className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;