import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

      <BackToTop />
    </div>
  );
};

export default App;
