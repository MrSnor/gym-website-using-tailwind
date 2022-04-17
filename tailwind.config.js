module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        darkgymtheme: {
          "primary": "#ffffff",
          "secondary": "#343232",
          "accent": "#343232",
          "neutral": "#272626",
          "base-100": "#000000",
          "info": "#0000FF",
          "success": "#008000",
          "warning": "#FFFF00",
          "error": "#FF0000",
        }
      },
      {
        facebook: {
          "primary": "#1877f2",
          "primary-content": "#ffffff",
          "secondary": "#00a400",
          "secondary-content": "#ffffff",
          "accent": "#FFB86B",
          "neutral": "#414558",
          "base-100": "#ffffff",
          "base-200": "#f5f6f7",
          "info": "#fffbe2",
          "info-content": "#3b5998",
          "success": "#52FA7C",
          "warning": "#F1FA89",
          "error": "#FF5757",
        },
      },
      "dark",
      "light",
      "dracula",
      "black"
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "du-",
    darkTheme: "darkgymtheme",
  },
}
