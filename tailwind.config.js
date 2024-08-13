/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
        },
      },
    ],
  },
  plugins: [daisyui],
}
