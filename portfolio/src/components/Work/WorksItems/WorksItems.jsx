import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const WorksItems = ({ item }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 dark:bg-gray-800 dark:border-gray-700">
      <img
        src={item.image}
        alt=""
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-indigo-700 dark:text-white mb-3">
          {item.title}
        </h3>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {/* Add a brief description or any other content you want */}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Demo
            <AiOutlineArrowRight className="w-3.5 h-3.5 ml-2" />
          </a>
          <Link
            to={`/projectDetails/${item.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
            <AiOutlineArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorksItems;
