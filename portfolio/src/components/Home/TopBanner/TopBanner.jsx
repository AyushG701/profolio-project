import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Social from "../Social";
import Data from "../Data";
import ScrollDown from "../ScrollDown";

const TopBanner = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <section
      className="bg-gray-100 min-h-screen flex flex-col justify-center"
      id="home"
    >
      <div className="flex justify-center flex-wrap  items-center  m-8 rounded-md">
        <div className="md:flex flex-row-reverse md:px-0 py-14 md:py-0">
          <Data />
          <Social />
        </div>
        <div className="flex justify-center">
          <div className="bg-gray-300 rounded-full w-60 h-60 animate-pulse"></div>
        </div>
      </div>
      <ScrollDown />
    </section>
  );
};

export default TopBanner;
