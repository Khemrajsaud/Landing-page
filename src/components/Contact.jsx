import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { MapPin, Phone, Mail } from "lucide-react";
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
        toast.success("✅ Thank you! Your message has been sent.");
        form.current.reset();
      })
      .catch(() => {
        toast.error("❌ Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let’s Discuss Your Project
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            We are here to help turn your ideas into reality.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
                <MapPin />
              </div>
              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p className="text-gray-600">Lamki, Kailali, Nepal</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
                <Phone />
              </div>
              <div>
                <h4 className="font-semibold">Phone Number</h4>
                <p className="text-gray-600">+273627854346</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
                <Mail />
              </div>
              <div>
                <h4 className="font-semibold">Email Address</h4>
                <p className="text-gray-600">hello@innovation.com</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <Map />
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="John Doe"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="example@email.com"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project discussion"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder="Write your message..."
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Submit Button with Loader */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 
                bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition
                ${loading && "opacity-70 cursor-not-allowed"}`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
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
