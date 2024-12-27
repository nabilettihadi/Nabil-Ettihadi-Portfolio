import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('experience.title')}</h2>
      <div className={styles.content}>
        {/* Section des compétences */}
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        {/* Section de l'historique */}
        <div className={styles.history}>
          {/* Expérience professionnelle */}
          <div className={styles.historyItem}>
            <img src={getImageUrl("history/geerd.png")} alt="GEERD logo" />
            <div className={styles.historyItemDetails}>
              <h3>{t('experience.positions.geerd.title')}</h3>
              <p>{t('experience.positions.geerd.company')}</p>
              <p>{t('experience.positions.geerd.period')}</p>
            </div>
          </div>
          
          {/* Formation Youcode */}
          <div className={styles.historyItem}>
            <img src={getImageUrl("history/youcode.png")} alt="Youcode logo" />
            <div className={styles.historyItemDetails}>
              <h3>{t('experience.positions.youcode.title')}</h3>
              <p>{t('experience.positions.youcode.company')}</p>
              <p>{t('experience.positions.youcode.period')}</p>
            </div>
          </div>

          {/* Université */}
          <div className={styles.historyItem}>
            <img src={getImageUrl("history/university.png")} alt="University logo" />
            <div className={styles.historyItemDetails}>
              <h3>{t('experience.education.university.title')}</h3>
              <p>{t('experience.education.university.school')}</p>
              <p>{t('experience.education.university.period')}</p>
            </div>
          </div>

          {/* Baccalauréat */}
          <div className={styles.historyItem}>
            <img src={getImageUrl("history/lycee.png")} alt="High school logo" />
            <div className={styles.historyItemDetails}>
              <h3>{t('experience.education.bac.title')}</h3>
              <p>{t('experience.education.bac.option')}</p>
              <p>{t('experience.education.bac.school')}</p>
              <p>{t('experience.education.bac.period')}</p>
            </div>
          </div>

          {/* Certificat MoroccoAI */}
          <div className={styles.historyItem}>
            <img src={getImageUrl("history/moroccoai.png")} alt="MoroccoAI logo" />
            <div className={styles.historyItemDetails}>
              <h3>{t('experience.education.certificate.title')}</h3>
              <p>{t('experience.education.certificate.organization')}</p>
              <p>{t('experience.education.certificate.school')}</p>
              <p>{t('experience.education.certificate.period')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
