/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#050C9C',
          light: '#3572EF',
          lighter: '#3ABEF9',
          lightest: '#A7E6FF',
        }
      },
      backgroundImage: {
        'gradient-space': 'linear-gradient(to right, #050C9C, #3572EF, #3ABEF9, #A7E6FF)',
      },
    },
  },
  plugins: [],
};