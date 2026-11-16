// The pop-up with a project's full story. Accessible dialog:
//   - Esc, the close button, or a click on the dark backdrop closes it
//   - focus moves into the dialog, Tab stays inside, and focus goes back to
//     the button that opened it when it closes
//   - the page behind it can't scroll while it's open
import { useEffect, useId, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";
import ToolList from "./ToolList";
import LinkButton from "./LinkButton";
import { links } from "../../../content/site.js";
import { CloseIcon, ExternalLinkIcon, GitHubIcon, MailIcon } from "../../../shared/icons.jsx";

// The card drops in from the top, like on the original site.
const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 25, stiffness: 500 },
  },
  exit: { y: "100vh", opacity: 0 },
};
const fadeOnly = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const ProjectModal = ({ project, onClose }) => {
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  // Lock page scroll and handle focus while the dialog is mounted.
  useEffect(() => {
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      if (opener && typeof opener.focus === "function") opener.focus();
    };
  }, []);

  // Esc closes; Tab / Shift+Tab wrap around inside the dialog.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 px-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative mx-auto my-10 w-full max-w-2xl rounded-lg sm:my-16 bg-card text-copy-primary shadow-lg"
        onClick={(event) => event.stopPropagation()}
        variants={reduceMotion ? fadeOnly : dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img className="w-full rounded-t-lg" src={project.image} alt={project.imageAlt} />

        {/* Title bar: sticks to the top while you scroll a long story, so the
            close button stays in reach without ever covering the text.
            (The backdrop has no vertical padding on purpose: padding there
            would make the bar stick 40px down with text showing above it.) */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-card px-6 py-4 sm:px-8">
          <h2 id={titleId} className="pt-1 text-2xl font-extrabold sm:text-3xl">
            {project.title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-2xl text-copy-primary transition-colors hover:bg-cta-active hover:text-cta-text"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="p-6 pt-5 sm:p-8 sm:pt-6">
          <ToolList tools={project.tools} />

          <div className="my-6 space-y-4 text-base font-medium leading-relaxed">
            {project.long_description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mb-3 text-2xl font-bold">Project Links</h3>
          <div className="mb-8 flex flex-wrap gap-2">
            <LinkButton href={project.link} icon={<GitHubIcon />}>
              Source Code
            </LinkButton>
            {project.more_links.map((extra) => (
              <LinkButton key={extra.url} href={extra.url} icon={<ExternalLinkIcon />}>
                {extra.title}
              </LinkButton>
            ))}
          </div>

          <h3 className="mb-2 text-2xl font-bold">
            Contact Me <span aria-hidden="true">📨</span>
          </h3>
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-2 text-lg font-bold underline decoration-cta underline-offset-4 hover:decoration-2"
          >
            <MailIcon />
            {links.email}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    long_description: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    more_links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
