/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'deep-out': {
          '0%': {
            transform: 'scale(0) translateZ(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1) translateZ(1)',
            opacity: '1',
          },
        },
        rise: {
          '0%': { transform: 'translateY(100vh)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        drop: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '100%': {
            opacity: '1',
          },
          '0%': {
            opacity: '0',
          },
        },
        'deep-in': {
          '0%': {
            transform: 'scale(1) translateZ(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0) translateZ(0)',
            opacity: '0',
          },
        },
      },
      animation: {
        'deep-out': 'deep-out 0.5s ease-out forwards',
        'deep-in': 'deep-in 0.5s ease-out forwards',
        'rise': 'rise 0.5s ease-out forwards',
        'drop': 'drop 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-out': 'fade-out 0.3s ease-out forwards',
      },
      backgroundImage: {
        'custom-top-gradient': 'linear-gradient(180deg, rgba(18,18,18,0.7) 0%, rgba(18,18,18,0) 40%, rgba(18,18,18, 1) 100%)',
        'custom-left-gradient': 'linear-gradient(90deg, rgba(18,18,18,0.9) 0%, rgba(18,18,18,0) 100%)',
        'dark-left-gradient': 'linear-gradient(90deg, rgba(0,0,0,0.99) 25%, rgba(0,0,0,0.1) 100%)',
        'custom-gradient': 'linear-gradient(0, rgba(18,18,18,0.25) 0%, rgba(18,18,18,0.25) 100%)',
        'modal-gradient': 'linear-gradient(0, rgba(18,18,18,1) 15%, rgba(18,18,18, 0) 100%)',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%'
      },
      screens: {
        '2xs': '430px',
        'xs': '575px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1170px',
        '2xl': '1440px',
      },
      colors: {
        dark: {
          DEFAULT: '#121212',
          100: '#424242',
        },
        white: {
          DEFAULT: '#FFFFFF',
          100: '#F8F8F8',
          200: '#F6F7F8',
          300: '#F2F2F2',
          500: '#F7F7F7',
        },
        gray: {
          DEFAULT: '#E5E5E5',
          100: '#F0F0F0',
          200: '#D9D9D9',
          300: '#BFBFBF',
          400: '#A6A6A6',
          500: '#8C8C8C',
          600: '#737373',
          700: '#595959',
          800: '#404040',
          900: '#262626',
        },
        primary: {
          DEFAULT: '#F5C61C',
          100: '#F6CB32',
          200: '#F7D149',
          300: '#F8D760'
        },
        black: {
          DEFAULT: '#000000',
          100: '#202020',
          200: '#2E2E2E',
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          '2xs': '1.5rem',
          '2xl': '1.5rem'
        }
      },
    },
  },
  plugins: [],
}