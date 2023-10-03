import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0',
      },
    },
    extend: {
      colors: {
        white: '#fdfef8',
        cream: '#dbd8cc',
        sherd: '#6b576a',
        envy: '#8ca791',
        black: '#0a0a0a',
      },
    },
  },
  plugins: [],
};

export default config;
