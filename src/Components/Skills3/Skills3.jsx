import React from "react";
import styles from "./Skills3.module.css";
import techSkills from "../../data/tech.json";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";

export const Skills3 = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {techSkills.map((tech, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(tech.imageSrc)} alt={tech.title} />
                </div>
                <p>{tech.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
