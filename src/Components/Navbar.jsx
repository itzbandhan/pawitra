import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full max-w-7xl bg-primary-bg rounded-lg shadow-neumorphism p-4 flex justify-between items-center mb-10 relative">
      <div className="text-gray-700 text-2xl font-bold">Pawitra</div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div
            className={`w-6 h-0.5 bg-gray-700 mb-1 transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-700 transform transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-700 mt-1 transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`md:flex md:space-x-4 text-gray-600 absolute md:static top-16 left-0 w-full md:w-auto bg-[#f6f6f6] p-5 md:p-0 flex-col md:flex-row space-y-5 md:space-y-0 transform transition duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li>
          <a href="#about" className="hover:text-gray-800">
            About
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-gray-800">
            Features
          </a>
        </li>
        <li>
          <a href="https://wa.me/9707441333/" target={"_blank"} className="hover:text-gray-800">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
