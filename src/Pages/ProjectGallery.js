import React from "react";
import ProjectCard from "../ProjectCard/Project";
import projects from "../projects.json";
import Background from "../Wrapper/Background";
import "./style.css";

function ProjectGallery() {
  return (
    <>
      <Background>
        <div className="project-gallery">
          {projects.map((p) => {
            return (
              <ProjectCard
                title={p.title}
                image={p.image}
                description={p.description}
                liveGithub={p.liveGithub}
              />
            );
          })}
        </div>
      </Background>
    </>
  );
}

export default ProjectGallery;
