// Fades + slides its children up the first time they scroll into view.
// With "reduce motion" turned on, the children are simply shown right away.
import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({ children, width = "100%", className = "" }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} style={{ width }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ width }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      // once: animate a single time; the margin starts it a bit before the
      // block is fully on screen so nothing feels slow.
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOf(["fit-content", "100%"]),
  className: PropTypes.string,
};

export default Reveal;
