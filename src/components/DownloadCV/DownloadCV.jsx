import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./DownloadCV.module.css";
import { getImageUrl } from "../../utils";

export const DownloadCV = () => {
  const { t, i18n } = useTranslation();

  const handleDownload = () => {
    const cvFiles = {
      fr: "CV_Nabil_Ettihadi_FR.pdf",
      en: "CV_Nabil_Ettihadi_EN.pdf",
      de: "Lebenslauf_Nabil_Ettihadi.pdf"
    };

    const currentLang = i18n.language;
    const cvFile = cvFiles[currentLang] || cvFiles.fr;
    
    const link = document.createElement('a');
    link.href = `/assets/cv/${cvFile}`;
    link.download = `CV_Nabil_Ettihadi_${currentLang.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className={styles.downloadBtn}>
      <img 
        src={getImageUrl("icons/download.png")} 
        alt="download icon" 
        className={styles.downloadIcon}
      />
      {t('hero.downloadCV')}
    </button>
  );
}; 