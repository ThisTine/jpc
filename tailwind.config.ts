import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize:{
        "body1": "1rem",
        "body2": "0.875rem",
        "h6": "1.25rem",
        "h5": "1.5rem",
        "h4": "2.125rem",
        "h3": "3rem",
        "h2": "3.75rem",
        "h1": "6rem"
      },
      colors:{
        "primary":"#87CEFA",
        "secondary":"#FFD700",
        "error":"#FF6961",
        "success":"#A5CE89",
        "eeeWhite": "#EEEEEE"
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ]
};
export default config;
