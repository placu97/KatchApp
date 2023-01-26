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
        bluegray_50: "#eaecf0",
        black_900_b2: "#000000b2",
        deep_purple_900: "#2811b1",
        blue_A700: "#0061ff",
        black_900_5b: "#0000005b",
        gray_50: "#f9fbff",
        green_500: "#35e446",
        bluegray_900: "#262b35",
        black_900: "#000000",
        bluegray_400: "#74839d",
        light_green_700: "#4cb726",
        black_901: "#090b0d",
        deep_orange_A700: "#f91a1a",
        indigo_900: "#0010a0",
        white_A700: "#ffffff",
      },
      borderRadius: { radius8: "8px", radius40: "40px", radius52: "52px" },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#0000005b,#4cb8265b)",
        gradient1: "linear-gradient(90deg ,#2811b1,#0010a0)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
