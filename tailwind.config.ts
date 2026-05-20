import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burg: {
          DEFAULT: '#6B1234',
          dark:    '#4A0C23',
          light:   '#8B1A42',
        },
        cream: '#F5F0EB',
        near:  '#0F0C0D',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Helvetica Neue', 'sans-serif'],
        sans:    ['var(--font-sans)',    'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.2em',
      },
    },
  },
  plugins: [],
}
export default config
