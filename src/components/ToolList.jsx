import React from 'react'
import PropTypes from 'prop-types';

const ToolList = ({ tools }) => {
    return (
      <div className="text-cta-text flex flex-wrap gap-2">
        {tools.map((toolName, index) => (
          <span
            key={index}
            className="text-xs font-normal px-2 py-1 rounded bg-cta-active border hover:bg-card hover:text-copy-primary"
          >
            {toolName}
          </span>
        ))}
      </div>
    );
  };
  ToolList.propTypes = {
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
  export default ToolList;