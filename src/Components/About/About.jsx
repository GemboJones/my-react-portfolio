import React from "react";
import styles from "./About.module.css";
import aboutInfo from "../../data/about.json";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/girl.png")}
          alt="headshot"
        />
        {/* <div className={styles.emoji}>          
        <p>👩‍🦰</p>
        </div> */}
        <ul className={styles.aboutItems}>
          {aboutInfo.map((about, id) => {
            return (
              <li key={id} className={styles.aboutItem}>
                <img src={getImageUrl(about.imageSrc)} alt="icon" />
                <div className={styles.aboutItemText}>
                  <p>{about.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
