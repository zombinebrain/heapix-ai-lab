/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      'grey-200': '#E4E5E7',
      'grey-400': '#82858C',
      'grey-600': '#3D3F43',
      'grey-800': '#2B2B2B',
      black: '#1A1A1A',
      lemon: '#FFEF42',
      orange: '#E86E30'
    },
    screens: {
      md: {'max': '1200px'},
      tablet: {'max': '900px'},
      sm: {'max': '600px'},
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)']
      },
      borderWidth: {
        DEFAULT: '0.063rem'
      },
      spacing: {
        '3.75': '0.938rem', //15px
        '4.5': '1.125rem', //18px
        '7.5': '1.875rem', //30px
        '12.5': '3.125rem', //50px
        '13.75': '3.438rem', //55px
        '15': '3.75rem', //60px
        '25': '6.25rem', //100px
        '35': '8.75rem', //140px
      },
      zIndex: {
        '9999': 9999
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],
};
