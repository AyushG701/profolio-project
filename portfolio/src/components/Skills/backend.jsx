import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
const Backend = () => {
  return (
    <section
      className="bg-white shadow-lg rounded-lg p-6 mb-6"
      data-aos="fade-up"
    >
      <h3 className="text-center text-xl font-semibold mb-4">Backend</h3>
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">Node Js</h3>
              <span className="text-sm text-gray-600">Basic</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">Express</h3>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">Python</h3>
              <span className="text-sm text-gray-600">Basic</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">Django</h3>
              <span className="text-sm text-gray-600"> too Basic</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">Firebase</h3>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BiBadgeCheck className="text-blue-500" />
            <div>
              <h3 className="text-lg">MongoDB</h3>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backend;
