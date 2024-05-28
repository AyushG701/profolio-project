import React, { useState, useEffect } from "react";
import { projectData, projectsNav } from "../Data";
import WorksItems from "../WorksItems/WorksItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectData);
    } else {
      const newProjects = projectData.filter(
        (project) => project.category.toLowerCase() === item.name,
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="flex justify-center mb-6">
        {projectsNav.map((item, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`cursor-pointer text-lg px-4 py-2 rounded-lg transition-colors duration-300 ${
              active === index
                ? "bg-indigo-700 text-white"
                : "bg-indigo-100 text-indigo-700"
            } mx-2`}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((item) => (
          <WorksItems item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Works;
