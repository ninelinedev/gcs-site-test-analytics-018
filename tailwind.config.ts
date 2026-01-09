import type { Config } from 'tailwindcss';

const colorVar = (name: string) => `var(--color-${name})`;

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: colorVar('primary-50'),
          100: colorVar('primary-100'),
          200: colorVar('primary-200'),
          300: colorVar('primary-300'),
          400: colorVar('primary-400'),
          500: colorVar('primary-500'),
          600: colorVar('primary-600'),
          700: colorVar('primary-700'),
          800: colorVar('primary-800'),
          900: colorVar('primary-900'),
        },
        accent: {
          50: colorVar('accent-50'),
          100: colorVar('accent-100'),
          200: colorVar('accent-200'),
          300: colorVar('accent-300'),
          400: colorVar('accent-400'),
          500: colorVar('accent-500'),
          600: colorVar('accent-600'),
          700: colorVar('accent-700'),
          800: colorVar('accent-800'),
          900: colorVar('accent-900'),
        }
      },
    },
  },
  plugins: [],
};

export default config;
