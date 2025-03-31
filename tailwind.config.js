/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      },
      backgroundImage: {
        'green-radial': 'radial-gradient(90.16% 56.57% at 50% 38.63%, rgba(158, 216, 91, 0.71) 0%, #86CD35 100%)'
      },
      colors: {
        black: '#041827',
        title: '#555',
        'social-media': '#E6E6E6',
        card: '#F5F7FC'
      },
      fontSize: {
        '3xl': ['1.75rem', '1.875rem']
      },
      boxShadow: {
        card: '4px 4px 3px 0px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: []
}
