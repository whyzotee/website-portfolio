/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blackdot1': "radial-gradient(circle farthest-corner at center, #000 18%, #fff 18%)",
        'blackdot2': "radial-gradient(circle farthest-corner at center, #000 27%, #fff 27%)"
      },
      backgroundSize: {
        'blackdot1': "10px 10px",
        'blackdot2': "10px 10px"
      }
    },
  },
  plugins: [],
}