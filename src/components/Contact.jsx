import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Map from "../address/Map";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

      .sendForm("service_113mxno", "template_q8pdeo8", form.current, {
        publicKey: "W8u68MMkBbYMH0yWY",
      })

      .then(
        (result) => {
          console.log(result);
          toast.success("✅ Thank you! Your message has been sent!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("❌ Something went wrong. Please try again!");
        }
      );
  };

  return (
    <section id="contact">
      <div className="bg-gray-100 py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-3">
            <div>
              <h2 className=" text-blue-600 font-semibold">GET IN TOUCH</h2>
              <h1 className="text-3xl md:text-4xl font-bold">
                Let's Discuss Your Project
              </h1>
              <p className=" mt-3">
                We are here to help turn your ideas into reality. Reach out to
                us for a consultation or any queries you may have.
              </p>
            </div>

            <div className=" flex gap-3 items-center ">
              <MapPin className=" bg-blue-100 rounded-full text-blue-800 text-3xl" />

              <div className=" items-center gap-3">
                <p>Our Location</p>
                <p>Lamki Kailali, Nepali</p>
              </div>
            </div>
            <div className=" flex gap-3 items-center ">
              <Phone className=" bg-blue-100 rounded-full text-blue-800 text-3xl" />
              <div className=" items-center gap-3">
                <h1>Phone Number</h1>
                <p>+273627854346</p>
              </div>
            </div>
            <div className=" flex gap-3 items-center ">
              <Mail className=" bg-blue-100 rounded-full text-blue-800 text-3xl" />
              <div className=" items-center gap-3">
                <h1>Email Address</h1>
                <p>hello@innovation.com</p>
              </div>
            </div>

            <div>
              <Map />
            </div>

            <div className="hidden md:block"></div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="fullName"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  Full Name <span className=" text-red-600">*</span>
                </label>
                <input
                  name="fullName"
                  id="fullName"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none py-2 px-3"
                />
              </div>
             
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    Email Address <span className=" text-red-600">*</span>
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    required
                    placeholder="Enter Your Email"
                  className="border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none py-2 px-3"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    Phone(Optional)
                  </label>
                  <input
                    name="phone"
                    id="phone"
                    type="tel"
                    placeholder="Enter Your Phone Number"
                  className="border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none py-2 px-3"
                  />
                </div>
              
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  Subject <span className=" text-red-600">*</span>
                </label>
                <input
                  name="subject"
                  id="subject"
                  type="text"
                  required
                  placeholder="Enter Your subject"
                  className="border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none py-2 px-3"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  Message <span className=" text-red-600">*</span>
                </label>

                <textarea
                  className="border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none py-2 px-3"
                  name="message"
                  id="message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

