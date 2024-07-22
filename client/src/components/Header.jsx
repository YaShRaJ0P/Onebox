import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
export const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div
      className="bg-[#1F1F1F] border-[#343A40] border text-white px-6 py-2 flex justify-between items-center "
      style={{ boxShadow: "0px -186px 120px 0px #2527381A inset" }}
    >
      <span className=" font-bold">Onebox</span>
      <div className="flex flex-row gap-2 justify-center items-center">
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <span> Tim's Workspace ▾</span>
      </div>
    </div>
  );
};
