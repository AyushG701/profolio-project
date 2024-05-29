import React from "react";
import Works from "./Works/Works";

const Work = () => {
  return (
    <section
      className="py-12  bg-slate-50  p-6 mb-6  text-blue-500"
      id="portfolio"
    >
      <h2 className="text-4xl font-bold text-center mb-4 ">Portfolio</h2>
      <span className="block text-xl text-center mb-8">Most recent works</span>
      <Works />
    </section>
  );
};

export default Work;
