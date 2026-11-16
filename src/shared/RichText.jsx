// Renders a content string from site.js:
//   - "{year}" becomes the computed PhD year word ("second", ...)
//   - "[label](https://url)" becomes a real link that opens in a new tab
// Everything else is plain text (no HTML is ever injected).
import PropTypes from "prop-types";
import { fillYear } from "./phdYear.js";

const LINK = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

const RichText = ({ text, as: Tag = "span", className, linkClassName }) => {
  const filled = fillYear(text);
  const parts = [];
  let last = 0;

  for (const match of filled.matchAll(LINK)) {
    const [whole, label, url] = match;
    if (match.index > last) parts.push(filled.slice(last, match.index));
    parts.push(
      <a
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {label}
      </a>
    );
    last = match.index + whole.length;
  }
  if (last < filled.length) parts.push(filled.slice(last));

  return <Tag className={className}>{parts}</Tag>;
};

RichText.propTypes = {
  text: PropTypes.string.isRequired,
  as: PropTypes.elementType,
  className: PropTypes.string,
  linkClassName: PropTypes.string,
};

export default RichText;
