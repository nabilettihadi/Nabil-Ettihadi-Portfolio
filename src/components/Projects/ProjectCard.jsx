import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const { t } = useTranslation();
  
  // Fonction pour obtenir la clé de traduction à partir du titre
  const getTranslationKey = (projectTitle) => {
    const titleToKey = {
      "RecycleHub": "recyclehub",
      "WRM - Waiting Room Management": "wrm",
      "CCH API": "cch",
      "Bati-Cuisine": "baticuisine",
      "EcoMove": "ecomove",
      "Citronix": "citronix",
      "ITLens": "itlens"
    };
    
    return titleToKey[projectTitle] || projectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '');
  };
  
  const translationKey = getTranslationKey(title);
  
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${t(`projects.${translationKey}.title`)}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{t(`projects.${translationKey}.title`)}</h3>
      <p className={styles.description}>{t(`projects.${translationKey}.description`)}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          {t("projects.viewDemo")}
        </a>
        <a href={source} className={styles.link}>
          {t("projects.viewCode")}
        </a>
      </div>
    </div>
  );
};
