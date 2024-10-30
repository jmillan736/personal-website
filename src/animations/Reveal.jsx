import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); //changes to true or false if 'ref' is in view

  const mainControls = useAnimation();

  // Listens to isInview if isInview is true then animte using 'visible' from variants
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width: {width}, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.oneOf(["fit-content", "100%"]),
};

export default Reveal;
