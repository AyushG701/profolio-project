import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const Qualification = () => {
  return (
    <section className="qualification section py-12">
      <h2 className="text-3xl font-bold text-center mb-4 text-indigo-600 font-kalam">
        Education
      </h2>
      <span className="block text-xl text-center mb-8 text-gray-500">
        My personal journey
      </span>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          {/* Tabs can be re-enabled if needed */}
          {/* <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div> */}
          {/* <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">
              BSC in Statistics
            </h3>
            <span className="block text-gray-500 mb-4">
              Jatiya Kabi Kazi Nazrul Islam University
            </span>
            <div className="flex items-center text-gray-400">
              <AiOutlineCalendar className="mr-2" />
              2019-present
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">
              Web Development
            </h3>
            <span className="block text-gray-500 mb-4">Programming Hero</span>
            <div className="flex items-center text-gray-400">
              <AiOutlineCalendar className="mr-2" />
              July 30, 2020 - present
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
