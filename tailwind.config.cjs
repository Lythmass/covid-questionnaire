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
        'personal-info-square': 'personal-info-square 0.35s linear',
        'covid-state-circle': 'covid-state-circle 0.35s linear',
        'vaccinated-star': 'vaccinated-star 0.35s linear',
        'covid-policy-heart': 'covid-policy-heart 0.35s linear',
        'thank-you-star-1': 'thank-you-star-1 0.25s linear',
        'thank-you-star-2': 'thank-you-star-2 0.25s linear',
        'page-fade': 'page-fade 0.35s linear',
        heart: 'heart 0.35s linear',
        'bg-color': 'bg-color 0.35s linear',
      },
      keyframes: {
        'big-to-small': {
          '0%': { transform: 'scale(45)' },
          '100%': { transform: 'scale(1)' },
        },
        'up-to-bottom': {
          '0%': { color: 'rgba(0,0,0,0)', transform: 'translateY(-10rem)' },
          '60%': { color: 'rgba(0,0,0,0)' },
        },
        'personal-info-square': {
          '0%': {
            transform: 'translateX(-20rem) translateY(4rem) scaleX(0.25)',
          },
          '100%': { transform: 'scaleX(1)' },
        },
        'covid-state-circle': {
          '0%': {
            transform:
              'scaleX(2) scaleY(0.125) translateX(10rem) translateY(-10rem)',
            backgroundColor: '#D6D16E',
          },
        },
        'vaccinated-star': {
          '0%': {
            transform:
              'scaleX(0.9) scaleY(0.9) translateY(12rem) translateX(-5rem)',
          },
        },
        'covid-policy-heart': {
          '0%': {
            transform:
              'scaleX(1.25) scaleY(1.25) translateY(-5rem) translateX(-3rem)',
          },
        },
        'thank-you-star-1': {
          '0%': { transform: 'translateY(3rem) translateX(3rem)' },
        },
        'thank-you-star-2': {
          '0%': { transform: 'translateY(-3rem) translateX(-3rem)' },
        },
        'page-fade': {
          '0%': { opacity: '0.1' },
          '100%': { opacity: '1' },
        },
        heart: {
          '0%': { width: '4rem', opacity: '1' },
          '100%': { width: '100%', opacity: '0' },
        },
        'bg-color': {
          '0%': { backgroundColor: 'white' },
        },
      },
    },
  },
  plugins: [],
};
