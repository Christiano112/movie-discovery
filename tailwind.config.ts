import type { Config } from 'tailwindcss'

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
            DEFAULT: "#BE123C",
            50: "#B91C1C",
        },
    },
    screens: {
        xs: "480px",
        "2xs": "576px",
    },
    },
  },
  plugins: [],
}
export default config
