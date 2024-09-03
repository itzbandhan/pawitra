import React from 'react'
import ProductDialog from './ProductDialogue';

const Hero = () => {
    const handleClick = () => {
      window.open(
        "https://wa.me/9707441333?text=I%27m%20interested%20in%20your%20product.%20Can%20I%20know%20more%20about%20your%20product%20PAWITRA?", '_blank'
   )};
  return (
    <div className="flex flex-col md:flex-row items-center justify-center flex-grow w-full max-w-7xl">
      {/* Product Info */}
      <div className="bg-primary-bg rounded-lg shadow-neumorphism p-8 md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-5xl font-bold text-gray-700 mb-6">
          Introducing, <span className="text-[#37ff8b]">PAWITRA</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Pure hands, Pure confidence.
        </p>
        <div className="space-x-4">
          {/* <button className="btn__main">Details</button> */}
          <ProductDialog />

          <button class="btn__sec" data-text="Awesome" onClick={handleClick}>
            <span class="actual-text">&nbsp;Purchase&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;Purchase&nbsp;
            </span>
          </button>
        </div>
      </div>

      {/* Product Image */}
      <div className="flex justify-center md:justify-end md:ml-10">
        <div className="bg-primary-bg rounded-lg shadow-neumorphism p-6">
          <img
            src="https://cdn.jsdelivr.net/gh/itzbandhan/projectvids/prod.jpeg"
            alt="Product Image"
            className="max-15 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero