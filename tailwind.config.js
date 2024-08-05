/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./src/assets/herobg.png')",
        "getintouchcenter": "url('./src/assets/Torus_Standing.svg')",
      },
      textDecoration: {
        'none': 'none',
      },
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

