/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pregular: "Poppins-Regular",
        pbold: "Poppins-Bold",
        pthin: "Poppins-Thin",
        plight: "Poppins-Light",
        pextrabold: "Poppins-ExtraBold",
      },
    },
  },
  plugins: [],
};
