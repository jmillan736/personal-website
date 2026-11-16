// One job/research position. The bullet points stay hidden until the
// visitor clicks "Show details", so the page stays light.
import { useId, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDownIcon } from "../../../shared/icons.jsx";

const ExperienceItem = ({ role, org, unit, url, dates, bullets }) => {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelId = useId();

  // Link the most specific name (the lab if there is one, else the company).
  const linked = unit || org;
  const orgLink = url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-cta underline-offset-4 hover:decoration-2"
    >
      {linked}
    </a>
  ) : (
    linked
  );

  return (
    <li className="orig-card p-5 sm:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h4 className="text-lg md:text-xl font-bold">{role}</h4>
        <p className="text-muted text-sm font-semibold sm:whitespace-nowrap">{dates}</p>
      </div>
      <p className="mt-1 text-base font-medium">
        {unit ? (
          <>
            {org} · {orgLink}
          </>
        ) : (
          orgLink
        )}
      </p>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="mt-3 -ml-2 inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-bold hover:bg-background"
      >
        {open ? "Hide details" : "Show details"}
        <ChevronDownIcon
          className={`text-base transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="details"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-2 max-w-3xl list-disc space-y-2 pl-5 text-base font-medium leading-relaxed marker:text-cta">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

ExperienceItem.propTypes = {
  role: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  unit: PropTypes.string,
  url: PropTypes.string,
  dates: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceItem;
