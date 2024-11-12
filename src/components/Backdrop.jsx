import React from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="fixed z-50 flex justify-center top-0 left-0 h-full w-full bg-black bg-opacity-95 overflow-y-scroll"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
