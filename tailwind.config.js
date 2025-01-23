/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all files in src for Tailwind to process
  ],
  theme: {
    extend: {
      colors: {
        greenCustom: "#1B884D", // Add your custom color here
      },
    },
  },
  plugins: [],
};
