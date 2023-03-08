import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import ProjectCard from "../ProjectCard/Project";
import projects from "../projects.json";

function ProjectGallery() {
  return (
    <>
      <h1>Projects</h1>
      <Wrapper>
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
      </Wrapper>
    </>
  );
}

export default ProjectGallery;
