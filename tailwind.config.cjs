/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bpg: 'bpg_arial_2009',
        anonymousPro: 'Anonymous Pro',
      },
    },
  },
  plugins: [],
};
