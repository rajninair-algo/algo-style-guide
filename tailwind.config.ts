import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        "primary-light": "#b388ff",
        primary: "#7c4dff",
        "primary-dark": "#5e35b1",

        "secondary-light": "#fefeff",
        secondary: "#f6f8fa",
        "secondary-dark": "#e4e7eb",

        accent: "#7c4dff",
        muted: "#6b7280",
        "muted-light": "#aeaeae",

        // Status Colors with pastel green
        success: {
          DEFAULT: "oklch(37.8% 0.077 168.94)",
          light: "oklch(50.8% 0.118 165.612)",
          dark: "oklch(43.2% 0.095 166.913)",
        },
        danger: {
          DEFAULT: "#ef4444",
          light: "#fecaca",
          dark: "#b91c1c",
        },
        warning: {
          DEFAULT: "#f59e0b",
          light: "#fde68a",
          dark: "#b45309",
        },
        info: {
          DEFAULT: "#3b82f6",
          light: "#bfdbfe",
          dark: "#1d4ed8",
        },
        dark: {
          DEFAULT: "#1f2937",
          light: "#4b5563",
          dark: "#111827",
        },
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
