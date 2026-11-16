// The little purple tag used for tools, paper status and awards.
// "filled" is the classic purple chip; "outline" is a quieter version.
import PropTypes from "prop-types";

const STYLES = {
  filled: "bg-cta-active text-cta-text border-transparent",
  outline: "bg-transparent text-copy-primary border-cta",
};

const Chip = ({ children, variant = "filled" }) => (
  <span
    className={`inline-block rounded border px-2 py-1 text-xs font-semibold leading-snug ${STYLES[variant]}`}
  >
    {children}
  </span>
);

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["filled", "outline"]),
};

export default Chip;
