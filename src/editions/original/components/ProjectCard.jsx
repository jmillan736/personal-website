// A project tile in the Work grid. Clicking the picture (or "Read more")
// opens the full story in ProjectModal.
import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";
import ToolList from "./ToolList";
import { GitHubIcon } from "../../../shared/icons.jsx";

const ProjectCard = ({ title, image, imageAlt, tools, description, link, onOpen }) => {
  const reduceMotion = useReducedMotion();

  return (
    <article className="orig-card flex h-full flex-col p-4 text-copy-primary">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Read more about ${title}`}
        className="mb-4 h-48 w-full overflow-hidden rounded-lg bg-gray-500/10"
      >
        {/* The picture starts zoomed in and pushed down (the original look)
            and tilts when hovered. */}
        <motion.img
          src={image}
          alt={imageAlt}
          loading="lazy"
          initial={reduceMotion ? false : { scale: 1.2, y: 50 }}
          animate={reduceMotion ? undefined : { scale: 1.2, y: 50 }}
          whileHover={
            reduceMotion
              ? undefined
              : { scale: 1.2, rotate: 5, y: 20, transition: { duration: 0.3, ease: "easeInOut" } }
          }
          className="h-full w-full rounded-t-lg object-scale-down"
        />
      </button>

      {/* Inline (not flex) so the GitHub icon stays right after the last
          word even when a long title wraps. */}
      <div className="mb-2">
        <h3 className="inline text-xl font-bold">
          {title} <span aria-hidden="true">👉🏽</span>
        </h3>{" "}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} source code on GitHub`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg align-middle text-xl transition-colors hover:bg-background hover:text-cta"
        >
          <GitHubIcon />
        </a>
      </div>

      <div className="mb-4">
        <ToolList tools={tools} />
      </div>

      <p className="mb-4 text-base font-medium leading-relaxed">{description}</p>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`Read more about ${title}`}
        className="mt-auto self-start rounded-lg py-1 text-sm font-bold underline decoration-cta underline-offset-4 hover:decoration-2"
      >
        Read more
      </button>
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default ProjectCard;
