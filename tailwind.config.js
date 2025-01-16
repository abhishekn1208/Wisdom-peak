/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",      // Ensure Tailwind scans your index.html file
    "./src/**/*.{js,ts,jsx,tsx}",  // Add all your React files here
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
}

