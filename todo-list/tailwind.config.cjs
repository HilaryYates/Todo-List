/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        complete: "#D0D2DA",
        todo: "#606372",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
