import React from "react";
import PropTypes from "prop-types";
import ToolList from "./ToolList";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const ProjectCardExpanded = ({
  handleClose,
  title,
  image,
  tools = [],
  description,
  link,
  more_links,
}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.section
        className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-card shadow-lg cursor-auto max-md:mx-12 my-14"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img className="w-full" src={image} />
        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2">{title}</h4>
          <ToolList tools={tools} />

          <div className="space-y-4 my-6 leading-relaxed text-sm text-copy-primary">
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <h4 className="text-2xl font-bold mb-2">Project Links</h4>
          <div className="flex flex-row gap-2 mb-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline mt-1.5 hover:text-copy-secondary flex flex-row gap-2 items-center"
            >
              Source Code
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
            {more_links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline mt-1.5 hover:text-copy-secondary"
              >{link.title}</a>
            ))}
            
          </div>
          <a
              href="mailto:millanj@usc.edu"
              className="text-copy-primary hover:text-cta"
            >
              <h4 className="text-2xl font-bold mb-2"> Contact Me 📨</h4>
            </a>
        </div>
      </motion.section>
    </Backdrop>
  );
};

ProjectCardExpanded.propTypes = {
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  more_links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectCardExpanded;
