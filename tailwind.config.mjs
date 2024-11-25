/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      brand: {
        DEFAULT: '#FB581C',
      },
      cream: {
        DEFAULT: '#F4F3EF',
      },
      beige: {
        DEFAULT: '#E5E2DB',
      },
      black: {
        DEFAULT: '#373737',
        50: '#f9f9f9', // Tonalidad más clara
        100: '#e5e5e5',
        200: '#cccccc',
        300: '#b3b3b3',
        400: '#808080',
        500: '#4d4d4d',
        600: '#3a3a3a',
        700: '#2c2c2c', // Más oscuro que el DEFAULT
        800: '#1f1f1f',
        900: '#0d0d0d', // Tonalidad más oscura
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        DEFAULT: '#636363',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
