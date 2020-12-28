module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: [
        '"IBM Plex Sans"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        body: {
          light: '#f5f6fa',
          DEFAULT: '#17181c',
          dark: '#17181c',
        },
        text: {
          light: '#f5f6fa',
          DEFAULT: '#f5f6fa',
          dark: '#17181c',
        },
        accent: {
          light: '#F79F1F',
          DEFAULT: '#F79F1F',
          dark: '#007bff',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
