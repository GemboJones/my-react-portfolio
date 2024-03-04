import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>Contact</h1>
        <p>Come say hi!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("footer/githubIcon.png")} alt="icon" />
          <a href="https://github.com/GemboJones">github.com/GemboJones</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("footer/linkedinIcon.png")} alt="icon" />
          <a href="https://www.linkedin.com/in/gemma-randall-design">
            linkedin.com/in/gemma-randall-design
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("footer/emailIcon.png")} alt="icon" />
          <a href="mailto: myemail@hotmail.com">myemail@hotmail.com</a>
        </li>
      </ul>
    </section>
  );
};
