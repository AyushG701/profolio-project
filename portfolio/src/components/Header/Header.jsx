import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const [toggle, showMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("light"); // assuming you have a theme switcher function

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // Implement your theme switching logic here
  };

  const showMenu = (value) => {
    setToggle(value);
  };
  return (
    // <header className=" min-w-full fixed top-0  left-9 z-50 bg-white dark:bg-gray-800 transition-colors duration-300">
    //   <nav className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
    //     <Link
    //       to="/"
    //       className="text-2xl font-semibold text-gray-900 dark:text-white"
    //     >
    //       AG
    //     </Link>
    //     <div
    //       className={`${
    //         toggle ? "block" : "hidden"
    //       } fixed inset-0 bg-white dark:bg-gray-800 z-40 flex flex-col items-center justify-center md:static md:flex md:flex-row md:bg-transparent md:dark:bg-transparent md:z-auto`}
    //     >
    //       <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
    //         <li>
    //           <a
    //             href="#home"
    //             className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
    //           >
    //             <i className="uil uil-estate text-lg md:text-base mr-2"></i>
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#about"
    //             className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
    //           >
    //             <i className="uil uil-user text-lg md:text-base mr-2"></i>
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#skills"
    //             className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
    //           >
    //             <i className="uil uil-file-alt text-lg md:text-base mr-2"></i>
    //             Skills
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#services"
    //             className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
    //           >
    //             <i className="uil uil-briefcase-alt text-lg md:text-base mr-2"></i>
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#portfolio"
    //             className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
    //           >
    //             <i className="uil uil-scenery text-lg md:text-base mr-2"></i>
    //             Portfolio
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#contact"
    //             className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
    //           >
    //             <i className="uil uil-message text-lg md:text-base mr-2"></i>
    //             Contact
    //           </a>
    //         </li>
    //         <li>
    //           <button
    //             onClick={switchTheme}
    //             className="flex items-center text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
    //           >
    //             <i
    //               className={`uil ${
    //                 theme === "dark" ? "uil-sun" : "uil-moon"
    //               } text-lg md:text-base mr-2`}
    //             ></i>
    //             {theme === "dark" ? "Light" : "Dark"}
    //           </button>
    //         </li>
    //       </ul>
    //       <button
    //         className="absolute top-6 right-6 md:hidden"
    //         onClick={() => showMenu(!toggle)}
    //       >
    //         <i className="uil uil-times text-2xl text-gray-900 dark:text-white"></i>
    //       </button>
    //     </div>
    //     <button className="md:hidden" onClick={() => showMenu(!toggle)}>
    //       <i className="uil uil-apps text-2xl text-gray-900 dark:text-white"></i>
    //     </button>
    //   </nav>
    // </header>
    <header className="min-w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-800 transition-colors duration-300">
      <nav className="container  mx-8 flex items-center justify-between h-16 px-7 md:px-8">
        <Link
          to="/"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          AG
        </Link>
        <div
          className={`${
            toggle ? "block" : "hidden"
          } fixed inset-0 bg-white dark:bg-gray-800 z-40 flex flex-col items-center justify-center md:static md:flex md:flex-row md:bg-transparent md:dark:bg-transparent md:z-auto`}
        >
          <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
            <li>
              <a
                href="#home"
                className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                <i className="uil uil-estate text-lg md:text-base mr-2"></i>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                <i className="uil uil-user text-lg md:text-base mr-2"></i>
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                <i className="uil uil-file-alt text-lg md:text-base mr-2"></i>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                <i className="uil uil-briefcase-alt text-lg md:text-base mr-2"></i>
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                <i className="uil uil-scenery text-lg md:text-base mr-2"></i>
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                <i className="uil uil-message text-lg md:text-base mr-2"></i>
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={switchTheme}
                className="flex items-center text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                <i
                  className={`uil ${
                    theme === "dark" ? "uil-sun" : "uil-moon"
                  } text-lg md:text-base mr-2`}
                ></i>
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
          <button
            className="absolute top-6 right-6 md:hidden"
            onClick={() => showMenu(!toggle)}
          >
            <i className="uil uil-times text-2xl text-gray-900 dark:text-white"></i>
          </button>
        </div>
        <button className="md:hidden" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps text-2xl text-gray-900 dark:text-white"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
