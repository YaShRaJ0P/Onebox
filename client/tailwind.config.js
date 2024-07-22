/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#25262B",
        secondary: "#14171A",
        google: "#DB4437",
      },
    },
  },
  plugins: [],
};
