/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linkedin: '#0077B5',
        accent: '#0077B5',
        black: '#000000',
        dark: '#333333',
        white: '#FFFFFF',
        page: '#FFFFFF',
        line: 'rgba(51, 51, 51, 0.15)',
        muted: 'rgba(51, 51, 51, 0.65)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 4px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
