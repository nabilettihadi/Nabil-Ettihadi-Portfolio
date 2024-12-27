import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { DownloadCV } from "../DownloadCV/DownloadCV";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.description}>{t('hero.description')}</p>
        <div className={styles.buttonContainer}>
          <a href="mailto:nettihadi@gmail.com" className={styles.contactBtn}>
            {t('hero.contactBtn')}
          </a>
          <DownloadCV />
        </div>
      </div>
      <div className={styles.heroImgContainer}>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Photo de Nabil Ettihadi"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
