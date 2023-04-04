import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { create } from "@storybook/theming";
import i18n from "./i18next.js";

const lightTheme = create({
  base: "light",
  brandTitle: "WEBSITE",
});

const darkTheme = create({
  base: "dark",
  brandTitle: "WEBSITE",
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
  i18n,
  locale: "en",
  locales: {
    en: "English",
    es: "Español",
  },
};
