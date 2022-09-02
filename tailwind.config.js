/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        38: "150px",
        46: "190px",
        58: "225px",
        68: "275px",
        76: "300px",
        86: "340px",
        88: "350px",
        94: "375px",
        116: "460px",
        128: "508px",
        148: "38rem", //590px
        164: "656px",
        220: "880px",
      },
      height: {
        38: "150px",
        58: "225px",
        76: "300px",
        86: "340px",
        92: "370px",
        106: "420px",
        128: "510px",
        150: "600px",
        162: "650px",
        172: "685px",
        200: "800px",
        "screen-9": "90vh",
      },
      minWidth: {
        10: "40px",
        46: "12rem", //190 px
        52: "210px",
        88: "350px",
        156: "620px",
      },
      minHeight: {
        10: "40px",
      },
      colors: {
        primary: "#515151",
        secondary: "#f5f3f3",
        tertiary: "#e80013",
        quaternary: "#2e2e2e",
        "card-overlay": "rgba(256,256,256,0.4)",
        "primary-light": "#9ca0ab",
      },
      fontSize: {
        xxs: "0.625rem", //10px
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".highlight-remove": {
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
          "-moz-tap-highlight-color": "rgba(0,0,0,0)",
          "-o-tap-highlight-color": "rgba(0,0,0,0)",
          "-ms-tap-highlight-color": "rgba(0,0,0,0)",
        },
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        },
      });
    }),
  ],
};
