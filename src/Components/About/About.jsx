import React from "react";
import styles from "../About/About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
      <h2>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("hero/hero-image.png")} alt="headshot" />
        <ul>
          <li>
            <h1 className={styles.title}>Front-End Dev</h1>
            <p className={styles.description}>I'm a front-end dev</p>
          </li>
          <li>
            <h1 className={styles.title}>Front-End Dev</h1>
            <p className={styles.description}>I'm a front-end dev</p>
          </li>
          <li>
            <h1 className={styles.title}>Front-End Dev</h1>
            <p className={styles.description}>I'm a front-end dev</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
