import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gemma</h1>
        <p className={styles.description}>
          I'm a creative developer who builds websites and apps with
          an emphasis on user experience and design.
        </p>
        <div className={styles.btnContainer}>
          <a href="#projects" className={styles.primaryBtn}>
            Latest work
          </a>
          <a
            href="https://www.linkedin.com/in/gemma-randall-design/"
            target="_blank"
            rel="noopener"
            className={styles.secondaryBtn}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/hero-image.png")}
        alt="headshot"
      />
    </section>
  );
}
