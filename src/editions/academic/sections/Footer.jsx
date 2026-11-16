// Page footer.
import { person } from "../../../content/site.js";

// Update this whenever the content changes.
const LAST_UPDATED = "November 2026";

const Footer = () => (
  // Extra bottom padding so the fixed "Version" switcher never covers the text.
  <footer className="mt-16 border-t border-rule pb-28 pt-6 font-sans text-sm text-muted">
    <p className="flex flex-wrap gap-x-4 gap-y-1">
      <span>
        © {new Date().getFullYear()} {person.name}
      </span>
      <span>Last updated {LAST_UPDATED}</span>
    </p>
  </footer>
);

export default Footer;
