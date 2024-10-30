import React from "react";
import Reveal from "../animations/Reveal";
import projects from "../assets/projects/projects.json";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  return (
    <section
      id="work"
      className="w-screen h-max flex flex-col text-copy-primary px-[5%] mb-[25vh]"
    >
      <h1 className="font-extrabold text-7xl mb-12 text-right">Work 🕵🏽‍♂️</h1>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            tools={project.tools}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
