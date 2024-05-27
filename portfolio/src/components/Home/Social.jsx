import React from "react";
import { GrInstagram } from "react-icons/gr";
import { GrDribbble } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
const Social = () => {
  return (
    <div
      className="flex absolute flex-col justify-center  items-start space-y-4 mx-3"
      data-aos-delay="700"
      data-aos="fade-right"
    >
      <a
        href="https://instagram.com/"
        className="text-2xl text-gray-900 dark:text-white hover:text-primary transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrInstagram />
      </a>
      <a
        href="https://dribbble.com/"
        className="text-2xl text-gray-900 dark:text-white hover:text-primary transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrDribbble />
      </a>
      <a
        href="https://github.com/sifact"
        className="text-2xl text-gray-900 dark:text-white hover:text-primary transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrGithub />
      </a>
    </div>
  );
};

export default Social;
