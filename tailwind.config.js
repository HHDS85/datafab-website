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
          card: '#273248'
        },
        text: {
          primary: '#0B0F19',
          muted: '#5B6372'
        }
      },
      borderRadius: {
        'xl-custom': '24px',
        'card-custom': '16px',
        'pill': '9999px'
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'Helvetica', 'sans-serif'],
        roboto: ['Roboto', 'Helvetica', 'sans-serif'],
        inter: ['Inter', 'Helvetica', 'sans-serif']
      },
      spacing: {
        'section-desktop': '5rem',
        'section-mobile': '3rem'
      },
      maxWidth: {
        'content': '1200px'
      }
    },
    container: {
      center: true,
      padding: '1rem',
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
