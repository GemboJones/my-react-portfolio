import React from 'react'
import styles from "./ProjectCard.module.css"
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: {title, description, imageSrc, skills, demo, source} }) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
      <div className={styles.contentContainer}>
      <ul>
        {skills.map((skill, id) => {
          return <li key={id}>{skill}</li>;
        })}
      </ul>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.btnContainer}>
        <a
          href={demo}
          target="_blank"
          rel="noopener"
          className={styles.primaryBtn}
        >
          Demo
        </a>
        <a
          href={source}
          target="_blank"
          rel="noopener"
          className={styles.secondaryBtn}
        >
          GitHub
        </a>
      </div>
      </div>
    </div>
  );
};
