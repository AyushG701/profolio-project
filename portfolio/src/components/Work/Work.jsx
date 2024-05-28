import React from "react";
import Works from "./Works/Works";

const Work = () => {
  return (
    <section
      className="py-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
      id="portfolio"
    >
      <h2 className="text-4xl font-bold text-center mb-4">Portfolio</h2>
      <span className="block text-xl text-center mb-8">Most recent works</span>
      <Works />
    </section>
  );
};

export default Work;
