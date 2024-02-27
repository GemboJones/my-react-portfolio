import React from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project, id) => {
          return (
            <div>
              <div>
                <img src={getImageUrl(project.imageSrc)} alt={project.title} />
                <p>{project.title}</p>
                <p>{project.description}</p>
                <div>
                  <a></a>
                  <a></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
