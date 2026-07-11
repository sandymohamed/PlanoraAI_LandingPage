import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        planora: {
          bg: '#0A0A0F',
          surface: '#12121A',
          primary: '#7C6CF6',
          accent: '#5EEAD4',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
