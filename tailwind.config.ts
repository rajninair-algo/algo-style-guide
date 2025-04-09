import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#b388ff", // lighter purple for hover/soft bg
        primary: "#7c4dff", // your main purple
        "primary-dark": "#5e35b1", // deeper purple for header/sidebar
        "secondary-light": "#fefeff", // subtle light, almost white
        secondary: "#f6f8fa", // your base color
        "secondary-dark": "#e4e7eb", // darker variant for contrast
        accent: "#7c4dff",
        muted: "#6b7280",
        "muted-light": "#aeaeae",
      },

      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
