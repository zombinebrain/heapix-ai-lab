/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
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
      sm: {'max': '600px'}
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
        '22.5': '5.625rem', //90px
        '25': '6.25rem', //100px
        '35': '8.75rem', //140px
      },
      borderRadius: {
        '2.5xl': '20px'
      },
      zIndex: {
        'header': 50,
        'overlay': 999,
        '9999': 9999,
        'max': 99999
      },
      keyframes: {
        'cursor-click': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(.3)', rotate: '360deg' }
        },
        'alert': {
          '0%': { rotate: 0 },
          '33%': { rotate: '3deg' },
          '66%': { rotate: '1.5deg' },
          '100%': { rotate: '2deg' }
        }
      },
      animation: {
        'slow-spin': 'spin 5s linear infinite',
        'cursor-click': 'cursor-click .5s forwards',
        'alert-appearance': 'alert 1.5s forwards'
      }
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: any }) {
      addVariant('child', '& > *');
    }
  ],
};
