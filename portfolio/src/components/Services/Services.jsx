import React from "react";
import { GoBrowser } from "react-icons/go";
import { AiFillApi, AiFillDatabase } from "react-icons/ai";

const Services = () => {
  return (
    <section
      className="py-16 bg-gradient-to-r from-blue-100 to-purple-100"
      id="services"
    >
      <h2 className="text-4xl font-bold text-center mb-4 text-purple-800 font-funky">
        Services
      </h2>
      <span className="block text-center text-gray-700 mb-8 font-funky">
        What I offer
      </span>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 h-72 justify-center transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl">
          <GoBrowser className="text-5xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-4 font-funky text-purple-800">
            User Interfaces
          </h3>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 h-72 justify-center transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl">
          <AiFillApi className="text-5xl text-green-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-4 font-funky text-purple-800">
            API Integration
          </h3>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 h-72 justify-center transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl">
          <AiFillDatabase className="text-5xl text-yellow-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-4 font-funky text-purple-800">
            Back-end
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
