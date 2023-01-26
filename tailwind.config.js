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
        light_green_700_5b: "#4cb8265b",
        deep_purple_900: "#2811b1",
        black_900_5b: "#0000005b",
        red_200: "#ff9393",
        bluegray_100: "#d9d9d9",
        green_500: "#35e446",
        red_100: "#f8cccc",
        gray_100: "#f5f4f7",
        indigo_200: "#a1a4c1",
        black_900: "#000000",
        deep_purple_A100_cc: "#b29dffcc",
        light_green_700: "#4cb726",
        deep_orange_A700: "#f91a1a",
        indigo_900: "#0010a0",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius12: "12px",
        radius34: "34px",
        radius36: "36px",
        radius40: "40px",
        radius52: "52px",
      },
      fontFamily: { inter: "Inter", raleway: "Raleway" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#0000005b,#4cb8265b)",
        gradient1: "linear-gradient(90deg ,#2811b1,#0010a0)",
        gradient2: "linear-gradient(180deg ,#0000005b,#0000005b,#4cb8265b)",
        gradient3: "linear-gradient(90deg ,#f8cccc,#ff9393)",
      },
      letterSpacing: {
        ls1: "1px",
        ls036000001430511475: "0.36000001430511475px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
