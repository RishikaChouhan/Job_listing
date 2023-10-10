/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gainsboro: "#e5e5e5",
        black: "#000",
        white: "#fff",
        primary: "#219653",
        silver: "#bbb",
        seagreen: "rgba(33, 150, 83, 0.3)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        karantina: "Karantina",
      },
      borderRadius: {
        "231xl": "250px",
        mid: "17px",
        "81xl-5": "100.5px",
      },
    },
    fontSize: {
      xl: "20px",
      "7xl": "26px",
      "31xl": "50px",
      base: "16px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
