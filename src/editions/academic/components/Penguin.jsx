// The penguin from the original site. Click it: it hops and honks.
// The hop is a CSS keyframe (see academic.css) that is switched off for
// visitors who prefer reduced motion; the honk still plays.
import { useState } from "react";
import PropTypes from "prop-types";
import { media } from "../../../content/site.js";
import useHonk from "../../../shared/useHonk.js";

const Penguin = ({ className = "" }) => {
  const honk = useHonk();
  const [hopping, setHopping] = useState(false);

  const onClick = () => {
    honk();
    setHopping(true);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Penguin. Click to make it honk."
      title="Honk!"
      className={`flex-none rounded-2xl ${className}`}
    >
      <img
        src={media.penguin}
        alt=""
        width="480"
        height="480"
        loading="lazy"
        onAnimationEnd={() => setHopping(false)}
        className={`h-auto w-full ${hopping ? "hop" : ""}`}
      />
    </button>
  );
};

Penguin.propTypes = { className: PropTypes.string };

export default Penguin;
