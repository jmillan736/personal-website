// Little "Version: Original | Academic" pill in the bottom-right corner, used
// while comparing the two editions. Hidden when config.showEditionSwitcher
// is false. Sits at z-40: above the page, below modals (z-50).
import PropTypes from "prop-types";
import { config } from "../content/site.js";

const EDITIONS = [
  { id: "original", label: "Original" },
  { id: "academic", label: "Academic" },
];

const EditionSwitcher = ({ edition, onChange }) => {
  if (!config.showEditionSwitcher) return null;

  return (
    <div
      role="group"
      aria-label="Site version"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-1 rounded-2xl border border-border bg-card p-1 pl-3 text-xs sm:text-sm text-copy-primary shadow-lg"
    >
      <span className="mr-1 font-semibold">Version:</span>
      {EDITIONS.map(({ id, label }) => {
        const active = id === edition;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(id)}
            className={`rounded-xl px-3 py-1.5 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta ${
              active
                ? "bg-cta-active text-cta-text"
                : "bg-transparent text-copy-primary hover:bg-background"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

EditionSwitcher.propTypes = {
  edition: PropTypes.oneOf(["original", "academic"]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EditionSwitcher;
