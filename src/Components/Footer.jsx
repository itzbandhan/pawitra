import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4bg-[#f6f6f6]">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://instagram.com/_bandhann/"
            target={"_blank"}
            className="hover:underline"
          >
            Pawitra™
          </a>
        </span>
        &nbsp; &nbsp; &nbsp;
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://wa.me/9707441333"
              target={"_blank"}
              className="hover:underline"
            >
              Contact
            </a>
          </li>
          {""}
          &nbsp; &nbsp;
          <li>
            <a href="#" className="hover:underline">
              Top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
