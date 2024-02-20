import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("hero/hero-image.png")}
          alt="headshot"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/closeIcon.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Dev</h3>
              <p>I'm a front-end dev</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/closeIcon.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Dev</h3>
              <p>I'm a front-end dev</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/closeIcon.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Dev</h3>
              <p>I'm a front-end dev</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
