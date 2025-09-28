const tokens = require('./tokens.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          default: tokens['Color/SDS Light'].Background.Default.Default.value,
          secondary: tokens['Color/SDS Light'].Background.Default.Secondary.value,
        },
        text: {
          default: tokens['Color/SDS Light'].Text.Default.Default.value,
          secondary: tokens['Color/SDS Light'].Text.Default.Secondary.value,
        },
        brand: {
          default: tokens['Color/SDS Light'].Background.Brand.Default.value,
          text: tokens['Color/SDS Light'].Text.Brand.Default.value,
        },
        gray: {
          100: tokens.global.Gray['100'].value,
          200: tokens.global.Gray['200'].value,
          300: tokens.global.Gray['300'].value,
          400: tokens.global.Gray['400'].value,
          500: tokens.global.Gray['500'].value,
          600: tokens.global.Gray['600'].value,
          700: tokens.global.Gray['700'].value,
          800: tokens.global.Gray['800'].value,
          900: tokens.global.Gray['900'].value,
        },
      },
      fontFamily: {
        sans: [tokens['Typography Primitives/Default']['Family Sans'].value, 'sans-serif'],
        mono: [tokens['Typography Primitives/Default']['Family Mono'].value, 'monospace'],
      },
    },
  },
  plugins: [],
};
