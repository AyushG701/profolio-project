import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Social from "../Social";
import Data from "../Data";
import ScrollDown from "../ScrollDown";
import ayuImage from "../../../assets/aayush.jpg";
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
      <Social />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center items-center flex-col-reverse md:flex-row m-6">
          <div className="w-full md:w-1/2 lg:w-2/3 mb-8 md:mb-0">
            <Data />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="bg-gray-300 rounded-full w-48 h-48 md:w-60 md:h-60 animate-pulse">
              <div
                data-aos="fade-down"
                data-aos-delay="500"
                className="bg-cover bg-center w-full h-full animate-profileAnimate shadow-insetWhite"
                style={{ backgroundImage: `url(${ayuImage})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <ScrollDown />
    </section>
  );
};

export default TopBanner;
