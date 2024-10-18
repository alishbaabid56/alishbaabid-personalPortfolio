import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        typewriter: "typewriter 3s steps(40) 1s forwards, blink 1s infinite step-end",  // Typewriter animation
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },  // Starts with no text
          '100%': { width: '100%' },  // Ends with full text
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
    },
  },
  plugins: [],
};

export default config;