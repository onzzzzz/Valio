/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-1': '1fr 1fr 1fr',
        'custom-2': '0.5fr 2fr 0.5fr',
        'custom-3': '0.5fr 0.5fr 2fr',
      }
      
    },
  },
  plugins: [],
};
