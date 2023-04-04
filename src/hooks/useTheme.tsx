import { useState, useEffect } from "react";

function getStorageValue(key: any, defaultValue: any) {
  // getting stored value
  let saved = "";

  if (typeof window !== "undefined") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      window.localStorage.setItem("theme", "dark");
    } else {
      window.localStorage.setItem("theme", "");
    }

    saved = window.localStorage.getItem(key) || "";
  }
  const initial = saved;

  return initial || defaultValue;
}

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return getStorageValue("theme", "");
  });

  const handleTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "");

      setTheme("");
    } else {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");

      setTheme("dark");
    }
  };

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, handleTheme };
};

export default useTheme;
