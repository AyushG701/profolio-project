import React from "react";
import Backend from "./backend";
import Frontend from "./frontend";

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100" id="skills">
      <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
      <span className="block text-center text-gray-600 mb-8">
        My technical level
      </span>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
