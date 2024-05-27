import React from "react";

const infos = [
  {
    id: 1,
    title: "Experience",
    time: "1.5 Years learning",
    icon: "bx bxs-award text-2xl text-gray-700 mb-2",
    delay: 500,
  },
  {
    id: 2,
    title: "Completed",
    time: "24 + projects",
    icon: "bx bx-briefcase text-2xl text-gray-700 mb-2",
    delay: 800,
  },
  {
    id: 3,
    title: "Support",
    time: "online 24/7",
    icon: "bx bx-support text-2xl text-gray-700 mb-2",
    delay: 1000,
  },
];

const Info = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {infos.map((info) => (
        <div
          key={info.id}
          className="bg-white shadow-md rounded-lg p-4 text-center"
          data-aos-delay={info.delay}
          data-aos="fade-up"
        >
          <i className={info.icon}></i>
          <h3 className="text-lg font-medium">{info.title}</h3>
          <span className="text-sm text-gray-500">{info.time}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
