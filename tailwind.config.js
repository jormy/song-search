/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Figtree", "sans-serif"],
      },
      colors: {
        coal: {
          DEFAULT: "#131314",
          950: "#262627",
          900: "#39393C",
          800: "#515156",
          700: "#626267",
          600: "#74747A",
          500: "#84848B",
          400: "#93939B",
          300: "#A1A1AA",
          200: "#B1B1BB",
          100: "#C2C2CC",
          50: "#D4D5E0",
        },
      },
    },
  },
  plugins: [],
};
