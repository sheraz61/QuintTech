/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
        manrope: ["Manrope", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
