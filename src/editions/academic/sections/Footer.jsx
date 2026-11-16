// Page footer.
import { config, person } from "../../../content/site.js";

// Update this whenever the content changes.
const LAST_UPDATED = "November 2026";

// When the "Version" switcher is on it floats over the bottom-right corner, so
// the footer needs extra room underneath; otherwise normal padding is enough.
const BOTTOM_PADDING = config.showEditionSwitcher ? "pb-28" : "pb-10";

const Footer = () => (
  <footer className={`mt-16 border-t border-rule ${BOTTOM_PADDING} pt-6 font-sans text-sm text-muted`}>
    <p className="flex flex-wrap gap-x-4 gap-y-1">
      <span>
        © {new Date().getFullYear()} {person.name}
      </span>
      <span>Last updated {LAST_UPDATED}</span>
    </p>
  </footer>
);

export default Footer;
