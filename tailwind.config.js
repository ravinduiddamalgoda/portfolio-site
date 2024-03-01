/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: ({ colors }) => ({
        primaryBlue: "#52b4ec",
        secondaryBG: "#F28D35",
      }),
    },
  },
  plugins: [],
}

