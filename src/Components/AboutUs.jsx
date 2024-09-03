import React from "react";

const AboutUs = () => {
     const handleClick = () => {
   window.open(
     "https://instagram.com/_bandhann/",
     "_blank"
   );
 };
  return (
    <div className="bg-white text-black py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg">
          Who We Are
        </h2>
        <p className="mt-6 text-lg md:text-xl leading-relaxed font-light text-justify">
          Welcome,{" "}
          <span className="font-semibold underline decoration-wavy">
            everyone!
          </span>
          &nbsp;It’s a pleasure to have you here with us today. On behalf of the
          entire team, I want to express our sincere gratitude for your
          presence. We’re excited to showcase the innovations and opportunities
          that lie ahead. Today is not just about introducing new ideas; it’s
          about building connections and exploring how we can collaborate to
          achieve shared goals.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed font-light text-justify">
          We believe that with your support and engagement, we can reach new
          heights and make a meaningful impact. So, sit back, relax, and get
          ready to discover what we have in store. We’re thrilled to have you on
          this journey with us.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed font-light text-justify">
          Thank you for being here and for being a part of our vision.
        </p>
        <button className="mt-10 px-8 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out" onClick={handleClick}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
