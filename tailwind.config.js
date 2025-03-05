import {fonts, colors as _colors} from "./src/theme.json";

let font_base = Number(fonts.font_size.base.replace("px", ""));
let font_scale = Number(fonts.font_size.scale);
let h6 = font_scale;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;

let fontPrimaryType, fontSecondaryType;
if (fonts.font_family.primary) {
  fontPrimaryType = fonts.font_family.primary_type;
}
if (fonts.font_family.secondary) {
  fontSecondaryType = fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"];
export const safelist = [{pattern: /^swiper-/}];
export const darkMode = "class";
export const theme = {
  screens: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  container: {
    center: true,
    padding: "2rem",
  },
  extend: {
    colors: {
      text: _colors.default.text_color.default,
      light: _colors.default.text_color.light,
      dark: _colors.default.text_color.dark,
      primary: _colors.default.theme_color.primary,
      secondary: _colors.default.theme_color.secondary,
      body: _colors.default.theme_color.body,
      border: _colors.default.theme_color.border,
      "theme-light": _colors.default.theme_color.theme_light,
      "theme-dark": _colors.default.theme_color.theme_dark,
      darkmode: {
        text: _colors.darkmode.text_color.default,
        light: _colors.darkmode.text_color.light,
        dark: _colors.darkmode.text_color.dark,
        primary: _colors.darkmode.theme_color.primary,
        secondary: _colors.darkmode.theme_color.secondary,
        body: _colors.darkmode.theme_color.body,
        border: _colors.darkmode.theme_color.border,
        "theme-light": _colors.darkmode.theme_color.theme_light,
        "theme-dark": _colors.darkmode.theme_color.theme_dark,
      },
    },
    fontSize: {
      base: font_base + "px",
      "base-sm": font_base * 0.8 + "px",
      h1: h1 + "rem",
      "h1-sm": h1 * 0.9 + "rem",
      h2: h2 + "rem",
      "h2-sm": h2 * 0.9 + "rem",
      h3: h3 + "rem",
      "h3-sm": h3 * 0.9 + "rem",
      h4: h4 + "rem",
      h5: h5 + "rem",
      h6: h6 + "rem",
    },
    fontFamily: {
      primary: ["var(--font-primary)", fontPrimaryType],
      secondary: ["var(--font-secondary)", fontSecondaryType],
    },
  },
};
export const plugins = [
  require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  require("tailwind-bootstrap-grid")({
    generateContainer: false,
    gridGutterWidth: "2rem",
    gridGutters: {
      1: "0.25rem",
      2: "0.5rem",
      3: "1rem",
      4: "1.5rem",
      5: "3rem",
    },
  }),
];
