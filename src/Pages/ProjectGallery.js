import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import ProjectCard from "../ProjectCard/Project";
import projects from "../projects.json";
import Background from "../Wrapper/Background";

function ProjectGallery() {
  return (
    <>
      <Background>
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
      </Background>
    </>
  );
}

export default ProjectGallery;
