/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      transitionDuration: {
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      fontFamily: {
        burtons: 'Burtons, sans-serif'
    },
  },
},
};
