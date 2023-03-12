import React from "react";
import ProjectCard from "../ProjectCard/Project";
import projects from "../projects.json";
import Background from "../Wrapper/Background";

function ProjectGallery() {
  return (
    <>
      {/* <Background> */}
        <div className="project-title-container">
          <div>
            <h1>Here are some of my recent projects.</h1>
          </div>
        </div>
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
      {/* </Background> */}
    </>
  );
}

export default ProjectGallery;
