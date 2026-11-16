// Small building blocks shared by the academic sections.
import PropTypes from "prop-types";

/** A page section with an h2. Focusable (tabIndex -1) so the nav can move focus to it. */
export const Section = ({ id, title, children, className = "" }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    tabIndex={-1}
    className={`scroll-mt-24 ${className}`}
  >
    <h2 id={`${id}-title`} className="font-sans text-2xl font-extrabold tracking-tight">
      {title}
    </h2>
    {children}
  </section>
);
Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

/** Link that opens in a new tab (safely). */
export const ExternalLink = ({ href, className = "link", children, ...rest }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
    {children}
  </a>
);
ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

/** A row of chips. variant "outline" (topics, skills) or "accent" (tools, notes). */
export const ChipList = ({ items, variant = "outline", label, className = "" }) => (
  <ul aria-label={label} className={`flex flex-wrap gap-1.5 font-sans ${className}`}>
    {items.map((item) => (
      <li key={item} className={`chip chip-${variant}`}>
        {item}
      </li>
    ))}
  </ul>
);
ChipList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(["outline", "accent"]),
  label: PropTypes.string,
  className: PropTypes.string,
};
