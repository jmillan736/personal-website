// Small footer: copyright plus one line in my voice.
import { person } from "../../../content/site.js";

// Extra bottom padding leaves room for the "Version" switcher pill.
const Footer = () => (
  <footer className="text-muted px-5 pb-28 pt-6 text-center text-sm font-medium sm:px-8">
    <p>
      © {new Date().getFullYear()} {person.name}
    </p>
    <p className="mt-1">
      Built with React, Tailwind, and one loud{" "}
      <span className="whitespace-nowrap">
        penguin <span aria-hidden="true">🐧</span>
      </span>
    </p>
  </footer>
);

export default Footer;
