import type { Config } from "tailwindcss";
import { green, indigo } from "tailwindcss/colors";

export default {
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
        green: {
          ...green,
          350: "#28d3a0",
        },
        indigo: {
         ...indigo,
          650: "#4814b0",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
