module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat, sans-serif"],
        Poppins: ["Poppins, sans-serif"],
      },
      colors: {
        "custom-red": "#e54a35",
        "custom-blue": "#081b33",
        "custom-gray": "#f2f2f2",
        "custom-gray2": "#dedede",
        "custom-gray3": "#ced2d3",
        "custom-gray4": "#333333",
        "custom-gray5": "#d9d9d9",
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1788px",
        xl: "1788px",
        "2xl": "1788px",
      },
    },
  },
  plugins: [],
};
