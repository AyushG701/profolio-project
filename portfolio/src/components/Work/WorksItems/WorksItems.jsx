import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const WorksItems = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={item.image} alt="" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
          {item.title}
        </h3>
        <div className="flex justify-between items-center">
          <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-500 hover:text-indigo-700 transition-colors duration-300"
          >
            Demo <AiOutlineArrowRight className="ml-2" />
          </a>
          <Link
            to={`/projectDetails/${item.id}`}
            className="flex items-center text-indigo-500 hover:text-indigo-700 transition-colors duration-300"
          >
            View Details <AiOutlineArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorksItems;
