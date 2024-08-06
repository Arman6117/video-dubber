import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'btn':'linear-gradient(227deg,#ff4582,#ff6154)'
      },
      colors : {
        "dark-gray": 'rgb(33 41 60/1)',
        'light-gray':'rgb(75 88 124/1)',
        'blue': 'rgb(0 94 246/1)'
      },
      
    },
  },
  plugins: [],
};
export default config;
