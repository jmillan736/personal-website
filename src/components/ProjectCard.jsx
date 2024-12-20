import React, { useState } from "react";
import PropTypes from "prop-types";
import { title } from "framer-motion/client";
import ToolList from "./ToolList";
import Reveal from "../animations/Reveal";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  image,
  tools = [],
  description,
  link,
  onClick,
}) => {
  return (
    <div className="bg-card text-copy-primary p-4 rounded-lg shadow-md">
      <Reveal>
        <button
          className="overflow-hidden w-full h-48 mb-4 rounded-lg bg-gray-500 bg-opacity-10"
          onClick={onClick}
        >
          {image && (
            <motion.img
              whileHover={{
                scale: 1.2,
                rotate: 5,
                y: 20,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              initial={{ scale: 1.2, y: 50 }}
              src={image}
              alt={title}
              className="w-full h-full mb-4 rounded-t-lg object-scale-down"
            />
          )}
        </button>
      </Reveal>
      <Reveal>
        <div className="flex flex-row">
          <h2 className="font-bold text-xl mb-2">{title} 👉🏽</h2>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline mt-1.5 hover:text-copy-secondary"
          >
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
        </div>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-2 mb-4">
          <ToolList tools={tools} />
        </div>
      </Reveal>
      <Reveal>
        <p className="mb-2">{description}</p>
      </Reveal>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
