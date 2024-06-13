/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ed217c",
        button: "#00a676",
      },
      fontFamily: {
        arialblack: ["ArialBlack", "sans-serif"],
      },
      screens: {
        xs: "200px",
        sm: "768px",
      },
    },
  },
  plugins: [],
};
