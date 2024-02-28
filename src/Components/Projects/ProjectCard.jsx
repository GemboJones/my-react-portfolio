import React from 'react'
import styles from "./ProjectCard.module.css"
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: {title, description, imageSrc, skills, demo, source} }) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {skills.map((skill, id) => {
          return <li key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a
          href={demo}
          target="_blank"
          rel="noopener"
          className={styles.projectBtn}
        >
          Demo 🡕
        </a>
        <a
          href={source}
          target="_blank"
          rel="noopener"
          className={styles.projectBtn}
        >
          GitHub 🡕
        </a>
      </div>
    </div>
  );
};
