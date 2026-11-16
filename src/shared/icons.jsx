// Small inline SVG icons. They size themselves with the surrounding text
// (1em) and are hidden from screen readers: always pair them with visible
// text or an aria-label on the link/button.
import PropTypes from "prop-types";

// Shared wrapper for the filled brand icons (24x24 viewBox).
const Filled = ({ d, className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    className={className}
  >
    <path d={d} />
  </svg>
);

// Shared wrapper for the outline icons (24x24 viewBox, 2px stroke).
const Outline = ({ children, className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

Filled.propTypes = { d: PropTypes.string.isRequired, className: PropTypes.string };
Outline.propTypes = { children: PropTypes.node, className: PropTypes.string };

const iconProps = { className: PropTypes.string };

export const GitHubIcon = ({ className }) => (
  <Filled className={className} d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
);
GitHubIcon.propTypes = iconProps;

export const LinkedInIcon = ({ className }) => (
  <Filled className={className} d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
);
LinkedInIcon.propTypes = iconProps;

// Google Scholar mark (simple-icons).
export const ScholarIcon = ({ className }) => (
  <Filled
    className={className}
    d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
  />
);
ScholarIcon.propTypes = iconProps;

export const MailIcon = ({ className }) => (
  <Outline className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Outline>
);
MailIcon.propTypes = iconProps;

export const ExternalLinkIcon = ({ className }) => (
  <Outline className={className}>
    <path d="M14 4h6v6" />
    <path d="M20 4l-9 9" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </Outline>
);
ExternalLinkIcon.propTypes = iconProps;

export const DocumentIcon = ({ className }) => (
  <Outline className={className}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h6" />
  </Outline>
);
DocumentIcon.propTypes = iconProps;

export const ChevronDownIcon = ({ className }) => (
  <Outline className={className}>
    <path d="M6 9l6 6 6-6" />
  </Outline>
);
ChevronDownIcon.propTypes = iconProps;

export const CloseIcon = ({ className }) => (
  <Outline className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Outline>
);
CloseIcon.propTypes = iconProps;
