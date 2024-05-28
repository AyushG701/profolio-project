import React from "react";
import TopBanner from "./TopBanner/TopBanner";
import About from "../About/About";
import Skills from "../Skills/Skills.jsx";
import Services from "../Services/Services.jsx";
import Qualification from "../Qulification/Qualification.jsx";
import Work from "../Work/Work.jsx";

const Home = () => {
  return (
    <>
      <TopBanner />
      <About />

      <Skills />
      <Services />
      <Qualification />
      <Work />
      {/* 
            <Contact /> */}
    </>
  );
};

export default Home;
