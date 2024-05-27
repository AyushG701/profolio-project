import React from "react";
// import aboutImage from "../../assets/sifat.png";
// import CV from "../../assets/ayush-resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="py-16 bg-gray-100" id="about">
      <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-down">
        About Me
      </h2>
      <span className="block text-center text-gray-600 mb-8">
        My introduction
      </span>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={"aboutImage"}
          alt="About me"
          className="w-64 h-64 md:w-88 md:h-88 rounded-full mx-auto"
        />
        <div className="text-center md:text-left">
          <Info />
          <p className="text-gray-700 mb-6 px-4 md:px-0">
            MERN stack developer, I develop eye catching UI, satisfactory
            responsive front-end and back-end functionalities. I have more than
            one and a half years of learning and developing experience.
          </p>
          <a
            download=""
            href={"CV"}
            className="inline-flex items-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 px-4 py-2 transition-all duration-300"
          >
            Resume
            <svg
              className="w-6 h-6 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
