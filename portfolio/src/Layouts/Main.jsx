import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import useLocalStorage from "use-local-storage";

const Main = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div data-theme={theme}>
      <Header switchTheme={switchTheme} theme={theme} />
      <Outlet />
    </div>
  );
};

export default Main;
