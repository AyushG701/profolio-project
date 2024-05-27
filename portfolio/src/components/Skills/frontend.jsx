import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
const Frontend = () => {
  return (
    <section
      className="bg-white shadow-lg rounded-lg p-6 mb-6"
      data-aos="fade-up"
    >
      <h3 className="text-center text-xl font-semibold mb-4">Frontend</h3>
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">HTML</h3>
              <span className="text-sm text-gray-600">Basic</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">CSS</h3>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">JavaScript</h3>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">Bootstrap</h3>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">Git</h3>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">React</h3>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontend;
