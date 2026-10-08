import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        accent: '#E50914',
        panel: '#111111',
        soft: '#f5f5f5',
        muted: '#8a8a8a'
      },
      boxShadow: {
        redGlow: '0 0 30px rgba(229, 9, 20, 0.22)'
      }
    }
  },
  plugins: []
};

export default config;
