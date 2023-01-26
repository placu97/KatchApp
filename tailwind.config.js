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
        light_green_A700_5b: "#24ef035b",
        black_900: "#000000",
        deep_purple_A100_cc: "#b29dffcc",
        light_green_700: "#4cb726",
        deep_orange_A700: "#f91a1a",
        bluegray_100: "#d9d9d9",
        white_A700: "#ffffff",
        green_A200_5b: "#8cf7a35b",
        green_500: "#35e446",
        gray_100: "#f5f4f7",
      },
      borderRadius: {
        radius12: "12px",
        radius34: "34px",
        radius36: "36px",
        radius40: "40px",
        radius70: "70px",
      },
      fontFamily: { inter: "Inter", raleway: "Raleway" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#24ef035b,#8cf7a35b)",
      },
      letterSpacing: {
        ls1: "1px",
        ls036000001430511475: "0.36000001430511475px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
