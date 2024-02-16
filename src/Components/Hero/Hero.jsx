import React from 'react'
import styles from "../Hero/Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gemma 👋</h1>
        <p className={styles.description}>
          I'm a highly collaborative full stack developer who builds websites and apps with an emphasis on user experience and design. Reach out if you'd like to learn more!
        </p>
        <a
          href="https://www.linkedin.com/in/gemma-randall-design/"
          target="_blank"
          rel="noopener"
          className={styles.contactBtn}
        >
          Let's connect! ↗️
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage500.png")}
        alt="headshot"
      />
    </section>
  );
}
