module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        indigo_200: "#a1a4c1",
        black_900: "#000000",
        indigo_A700: "#1e1af9",
        deep_purple_A100_cc: "#b29dffcc",
        bluegray_100: "#d9d9d9",
        deep_orange_A700: "#f91a1a",
        white_A700: "#ffffff",
        gray_100: "#f5f4f7",
      },
      borderRadius: { radius12: "12px", radius34: "34px", radius36: "36px" },
      fontFamily: { inter: "Inter", raleway: "Raleway" },
      letterSpacing: {
        ls1: "1px",
        ls036000001430511475: "0.36000001430511475px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
