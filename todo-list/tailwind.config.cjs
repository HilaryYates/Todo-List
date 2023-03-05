/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        300: "300px",
      },
      height: {
        510: "510px",
      },
      colors: {
        complete: "#D0D2DA",
        todo: "#606372",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
