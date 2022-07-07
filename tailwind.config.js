/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        lightgreen: "#BDD542",
        darkblue: "#00385E",
        beige: "#EEEEEE",
      },
      fontFamily: {
        body: ["Mulish"],
      },
      backgroundImage: {
        arrows: "url('./img/Arrows-bg.svg')",
      },
    },
  },
  plugins: [],
};
