import React from "react";
import "./Button.css"
import Navbar from "./Navbar";
import Hero from "./Hero";
import Partners from "./Partners";
import ProductDialog from "./ProductDialogue";
import Featured from "./Featured"
import WhatsAppChatWidget from "./WhatsAppChatWidget";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Carousel from "./Carousel";
import AboutUs from "./AboutUs";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f6f6f6] p-5">
      {/* Navbar */}
      <Navbar />
      <Hero />
      <div id="about">
      <AboutUs />
      </div>
      <Partners />
      <Carousel />
      <Testimonials />
      <div id="features">
        <Featured />
      </div>
      <Footer />
      <WhatsAppChatWidget />
      {/* Hero Section */}
    </div>
  );
};

export default Home;
