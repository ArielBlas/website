import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function getStorageValue(key: any, defaultValue: any) {
  let saved = "";
  if (typeof window !== "undefined") {
    saved = window.localStorage.getItem(key) || "";
  }
  const initial = saved;

  return initial || defaultValue;
}

const useTranslate = () => {
  const [translation, setTranslation] = useState(() => {
    return getStorageValue("translation", "en");
  });
  const router = useRouter();

  useEffect(() => {
    // storing input name
    window.localStorage.setItem("translation", translation);
    if (router.locale !== translation)
      router.push(router.pathname, router.asPath, { locale: translation });
  }, [translation, router]);

  return [translation, setTranslation];
};

export default useTranslate;
