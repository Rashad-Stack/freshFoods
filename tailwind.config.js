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
        148: "38rem",
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
        46: "12rem",
        52: "210px",
        76: "18rem",
        86: "22rem",
        88: "350px",
        156: "620px",
      },
      maxWidth: {
        15: "4rem",
      },
      minHeight: {
        10: "40px",
      },
      maxHeight: {
        86: "22rem",
      },
      colors: {
        primary: "#515151",
        "primary-light": "#9ca0ab",
        secondary: "#f5f3f3",
        tertiary: "#e80013",
        quaternary: "#2e2e2e",
        "card-overlay": "rgba(256,256,256,0.4)",
        "card-overlay-light": "rgba(255,255,255,0.8)",
      },
      fontSize: {
        xxs: "0.625rem", //10px
      },
      zIndex: {
        60: 60,
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
        ".scrollbar-none": {
          "-webkit-overflow-style": "none",
          "-moz-overflow-style": "none",
          "-o-overflow-style": "none",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-none::-webkit-scrollbar": { display: "none" },
      });
    }),
  ],
};
