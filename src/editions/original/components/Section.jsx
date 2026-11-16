// One page section: a centered container with the big emoji heading.
// `align` flips the heading to the right, so sections alternate like the
// original site (About on the left, Work on the right, ...).
import PropTypes from "prop-types";
import Reveal from "../animations/Reveal";

const Section = ({ id, title, emoji, align = "left", children }) => {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      // scroll-mt keeps the heading clear of the fixed navbar after a nav click.
      className="scroll-mt-20 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2
            id={headingId}
            className={`text-balance mb-10 md:mb-14 text-5xl md:text-7xl font-extrabold tracking-tight ${
              align === "right" ? "text-right" : "text-left"
            }`}
          >
            {title} <span aria-hidden="true">{emoji}</span>
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node,
};

export default Section;
