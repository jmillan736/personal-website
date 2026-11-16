// Side Projects as compact rows. "Read more" opens the long story in place.
import { useState } from "react";
import PropTypes from "prop-types";
import { projects } from "../../../content/site.js";
import { ChevronDownIcon, GitHubIcon } from "../../../shared/icons.jsx";
import { ChipList, ExternalLink, Section } from "../components/bits.jsx";

const Project = ({ project }) => {
  const [open, setOpen] = useState(false);
  const storyId = `project-${project.id}-story`;

  return (
    // Phones: thumbnail beside the title, the rest full width.
    // Wider screens: thumbnail in its own left column.
    <li className="grid grid-cols-[4.5rem_1fr] items-center gap-x-4 sm:grid-cols-[8rem_1fr] sm:items-start sm:gap-x-6">
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="h-12 w-full rounded-xl border border-rule object-cover sm:row-span-2 sm:mt-1 sm:h-20"
      />
      <h3 className="font-sans text-[1.0625rem] font-bold leading-snug tracking-tight">{project.title}</h3>
      <div className="col-span-2 mt-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:mt-0">
        <p className="text-base">{project.description}</p>
        <ChipList items={project.tools} label="Built with" className="mt-2" />
        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-sm font-bold">
          <ExternalLink href={project.link} className="link inline-flex items-center gap-1.5">
            <GitHubIcon />
            GitHub
          </ExternalLink>
          {project.more_links.map((link) => (
            <ExternalLink key={link.url} href={link.url}>
              {link.title}
            </ExternalLink>
          ))}
          <button
            type="button"
            className="toggle rounded-md"
            aria-expanded={open}
            aria-controls={storyId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Show less" : "Read more"}
            <ChevronDownIcon className="chevron" />
          </button>
        </div>
        <div id={storyId} hidden={!open} className="mt-3 space-y-3 text-base">
          {project.long_description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </li>
  );
};
Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
    long_description: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    more_links: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, url: PropTypes.string })),
  }).isRequired,
};

const Projects = () => (
  <Section id="projects" title="Side Projects">
    <ul className="mt-6 space-y-8">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  </Section>
);

export default Projects;
