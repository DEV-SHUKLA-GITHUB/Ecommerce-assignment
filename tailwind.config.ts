// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontSize: {
        'tab': ['1rem', { lineHeight: '1.21rem' }],
        'heading': ['2rem', { lineHeight: '2.375rem' }],
        'heading2': ['1.5rem', { lineHeight: '2rem' }],
      },
      colors:{
        'header-bg':'#F4F4F4'
      },
      spacing: {
        'signup-width': '36rem',
        'sub-signup-width': '28.5rem',
        'verify-box-width':'2.875rem',
      },
      height: {
        'signup-height': '43.188rem',
        'verify-height':'28.313rem',
        'login-height':'38.375rem',
        'home-height':'41.125rem',
      }
    },
  },
  plugins: [],
};
