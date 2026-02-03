module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#071B3A',
          secondary: '#0A2348',
          tertiary: '#122F57',
          card: '#273248',
          'card-alt': '#273247'
        },
        dark: {
          primary: '#1e1d1b',
          button: '#242528',
          'button-hover': '#323438'
        },
        text: {
          primary: '#0B0F19',
          secondary: '#1e1d1b',
          muted: '#5B6372',
          black: '#0f0e0e'
        },
        bg: {
          base: '#F4F5F7',
          light: '#E8E9EB'
        }
      },
      borderRadius: {
        'xs': '8px',
        'card': '16px',
        'xl-custom': '24px',
        '2xl-custom': '32px',
        '3xl-custom': '40px',
        '4xl-custom': '48px',
        'pill': '9999px'
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'Helvetica', 'sans-serif'],
        roboto: ['Roboto', 'Helvetica', 'sans-serif'],
        inter: ['Inter', 'Helvetica', 'sans-serif']
      },
      spacing: {
        'section-desktop': '5rem',
        'section-mobile': '3rem',
        'header-height': '80px'
      },
      maxWidth: {
        'content': '1200px',
        'container': '1440px'
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
        '900': '900ms'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
        xl: '4rem'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    }
  },
  plugins: [],
};
