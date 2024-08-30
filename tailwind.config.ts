import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        128: '32rem'
      },
      width: {
        128: '32rem'
      }
    },
  },
  plugins: [],
} satisfies Config

