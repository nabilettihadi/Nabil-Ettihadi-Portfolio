import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.css";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' }
  ];

  return (
    <div className={styles.languageSelector}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`${styles.langButton} ${i18n.language === lang.code ? styles.active : ''}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}; 