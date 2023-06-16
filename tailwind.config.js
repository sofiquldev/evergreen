/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {
        primary: '#07BEB8',
        secondary: '#202A2B',
      },
      container: {
        center: true,
        screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '1024px',
          'xl': '1296px',
          // '2xl': '1600px',
        }
      },
      fontFamily: {
        'generalSans': ['GeneralSans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
