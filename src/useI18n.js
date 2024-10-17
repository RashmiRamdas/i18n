import React from "react";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ko from "./locales/ko.json";
import ja from "./locales/ja.json";

const getLanguage = () => {
  return navigator.language.split("-")[0];
};

const translations = { en, fr, ko, ja };

export const useI18n = () => {
  const [language, setLanguage] = React.useState(getLanguage());

  const t = React.useMemo(() => {
    return (key) => translations[language][key] || translations.en[key] || key;
  }, [language]);

  React.useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(getLanguage());
    };

    window.addEventListener("languagechange", handleLanguageChange);

    return () => {
      window.removeEventListener("languagechange", handleLanguageChange);
    };
  }, []);

  return { t, setLanguage };
};
