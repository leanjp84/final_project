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
        
 "primary": "#2563eb",
  "secondary": "#9333ea",
  "accent": "#581c87",
  "neutral": "#191D24",
  "base-100": "#f3f4f6",
  "info": "#374151",
  "success": "#bfdbfe",
  "warning": "#99f6e4",
  "error": "#fda4af",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
