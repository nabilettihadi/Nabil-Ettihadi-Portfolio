import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-spring-3d-carousel";
import { config } from "@react-spring/web";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { t } = useTranslation();
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(true);

  const slides = projects.map((project, index) => ({
    key: index,
    content: (
      <div className={styles.slideWrapper}>
        <ProjectCard project={project} />
      </div>
    ),
    onClick: () => setGoToSlide(index)
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t("projects.title")}</h2>
      <div className={styles.carouselWrapper}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config.gentle}
        />
      </div>
    </section>
  );
};
