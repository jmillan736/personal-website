import React, { useState } from "react";
import Reveal from "../animations/Reveal";
import projects from "./projects.json";
import ProjectCard from "../components/ProjectCard";
import ProjectCardExpanded from "../components/ProjectCardExpanded";
import { AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSeletectedProject] = useState(null);

  const [projectCardOpen, setProjectCardOpen] = useState(false);

  const handleCardClick = (project) => {
    setSeletectedProject(project);
    setProjectCardOpen(true);
  };
  //prevents scrolling when projectCardOpen is true
  projectCardOpen?document.body.style.overflow='hidden':document.body.style.overflow='auto';

  return (
    <section
      id="work"
      className="w-screen h-max flex flex-col text-copy-primary px-[5%] mb-[25vh]"
    >
      <h1 className="font-extrabold text-7xl mb-12 text-right">Work 🕵🏽‍♂️</h1>

      <div className="px-[10%] max-md:px-[5%]">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="flex">
              <ProjectCard
                title={project.title}
                image={project.image}
                tools={project.tools}
                description={project.description}
                link={project.link}
                onClick={() => handleCardClick(project)}
              />
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {selectedProject && projectCardOpen && (
          <ProjectCardExpanded
            title={selectedProject.title}
            image={selectedProject.image}
            tools={selectedProject.tools}
            description={selectedProject.long_description}
            link={selectedProject.link}
            more_links={selectedProject.more_links}
            handleClose={() => setProjectCardOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
