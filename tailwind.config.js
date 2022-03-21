module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    base: false,
    themes: [
      {
        mytheme: {
        "primary": "#3b82f6",
        "secondary": "#2dd4bf",
        "accent": "#0ea5e9",
        "neutral": "#191D24",
        "base-100": "#f3f4f6",
        "info": "#374151",
        "success": "#34d399",
        "warning": "#fbbf24",
        "error": "#f43f5e",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
