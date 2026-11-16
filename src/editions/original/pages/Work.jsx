// Work: the project grid. Clicking a card opens ProjectModal.
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Reveal from "../animations/Reveal";
import { projects } from "../../../content/site.js";

const Work = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <Section id="work" title="Work" emoji="🕵🏽‍♂️" align="right">
      <Reveal>
        <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                title={project.title}
                image={project.image}
                imageAlt={project.imageAlt}
                tools={project.tools}
                description={project.description}
                link={project.link}
                onOpen={() => setOpenProject(project)}
              />
            </li>
          ))}
        </ul>
      </Reveal>

      <AnimatePresence>
        {openProject && (
          <ProjectModal
            key={openProject.id}
            project={openProject}
            onClose={() => setOpenProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Work;
