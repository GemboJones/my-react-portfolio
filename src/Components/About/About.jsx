import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("hero/hero-image.png")}
          alt="headshot"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Developer</h3>
              <p>
                I'm skilled in designing and building beautiful and responsive sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed website landing pages and new features for web
                apps, including creating user flows, wireframes and prototypes
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-End Developer</h3>
              <p>
                I have experience developing back-end systems
                and APIs using the MVC design pattern
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
