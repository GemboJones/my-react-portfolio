import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <>
      <footer className={styles.container} id="contact">
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Let's connect! 🔗</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("footer/githubIcon.png")} alt="icon" />
            <a
              href="https://github.com/GemboJones"
              target="_blank"
              rel="noopener"
            >
              github.com/GemboJones
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("footer/linkedinIcon.png")} alt="icon" />
            <a
              href="https://www.linkedin.com/in/gemma-randall-design"
              target="_blank"
              rel="noopener"
            >
              linkedin.com/in/gemma-randall-design
            </a>
          </li>
        </ul>
      </footer>

      <div className={styles.attribution}>
        <a target="_blank" href="https://www.flaticon.com/authors/freepik">
          Icons created by Freepik - Flaticon
        </a>
      </div>
    </>
  );
};
