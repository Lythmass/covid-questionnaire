/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bpg: 'bpg_arial_2009',
        anonymousPro: 'Anonymous Pro',
      },
      dropShadow: {
        'text-anim': [
          '1px 0 white',
          '0 1px white',
          '1.5px 0 rgba(0,0,0, 0.5)',
          '0 1.5px rgba(0,0,0, 0.5)',
        ],
      },
      animation: {
        'big-to-small': 'big-to-small 0.5s linear',
        'up-to-bottom': 'up-to-bottom 1s linear',
      },
      keyframes: {
        'big-to-small': {
          '0%': { width: '100%' },
          '100%': { width: '6rem' },
        },
        'up-to-bottom': {
          '0%': { color: 'rgba(0,0,0,0)', transform: 'translateY(-10rem)' },
          '60%': { color: 'rgba(0,0,0,0)' },
        },
      },
    },
  },
  plugins: [],
};
