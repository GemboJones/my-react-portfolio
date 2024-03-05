import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let's connect! 🔗</p>
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
    </footer>
  );
};
