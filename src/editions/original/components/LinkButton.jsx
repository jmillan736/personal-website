// Small outlined button-style link (DOI, PDF, Source Code, Live Demo...).
// External links open in a new tab.
import PropTypes from "prop-types";

const LinkButton = ({ href, children, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-bold text-copy-primary transition-colors hover:border-cta-active hover:bg-cta-active hover:text-cta-text"
  >
    {icon}
    {children}
  </a>
);

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  // Optional longer accessible name (should start with the visible text).
  label: PropTypes.string,
  icon: PropTypes.node,
};

export default LinkButton;
