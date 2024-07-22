import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <span className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition duration-300 focus:outline-none ${
          theme === "dark" ? "bg-gray-600" : "bg-yellow-300"
        }`}
      >
        <div
          className={`w-6 h-6 rounded-full shadow-md transform transition-transform ${
            theme === "dark"
              ? "translate-x-0 bg-gray-400"
              : "translate-x-8 bg-yellow-500"
          }`}
        ></div>
        <div
          className={`absolute ${
            theme === "dark" ? "text-gray-400" : "text-yellow-500"
          } ml-2`}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </div>
      </button>
    </span>
  );
};

export default ThemeToggle;
