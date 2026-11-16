// LinkedIn / GitHub / email icons (plus CV and Scholar once they are set in
// site.js). Each icon has a 44px hit area and a screen-reader label.
import { links } from "../../../content/site.js";
import {
  DocumentIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ScholarIcon,
} from "../../../shared/icons.jsx";

const iconLink =
  "inline-flex h-11 w-11 items-center justify-center rounded-lg text-2xl transition-colors hover:bg-card hover:text-cta";
const textLink =
  "inline-flex h-11 items-center gap-2 rounded-lg px-2 text-base font-bold transition-colors hover:bg-card hover:text-cta";

const SocialLinks = () => (
  <ul className="flex flex-wrap items-center gap-1">
    <li>
      <a
        className={iconLink}
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </a>
    </li>
    <li>
      <a
        className={iconLink}
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </a>
    </li>
    {links.scholar && (
      <li>
        <a
          className={textLink}
          href={links.scholar}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ScholarIcon className="text-2xl" />
          Scholar
        </a>
      </li>
    )}
    {links.cv && (
      <li>
        <a
          className={textLink}
          href={`${import.meta.env.BASE_URL}${links.cv}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DocumentIcon className="text-2xl" />
          CV
        </a>
      </li>
    )}
    <li>
      {/* The address is visible text, so it still works where mailto: doesn't. */}
      <a className={textLink} href={`mailto:${links.email}`}>
        <MailIcon className="text-2xl" />
        {links.email}
      </a>
    </li>
  </ul>
);

export default SocialLinks;
