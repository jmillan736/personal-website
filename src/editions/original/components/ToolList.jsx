// Row of tool chips ("React", "PyTorch", ...).
import PropTypes from "prop-types";
import Chip from "./Chip";

const ToolList = ({ tools }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Tools used">
    {tools.map((tool) => (
      <li key={tool}>
        <Chip>{tool}</Chip>
      </li>
    ))}
  </ul>
);

ToolList.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ToolList;
