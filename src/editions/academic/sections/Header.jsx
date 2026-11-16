// Top of the page: portrait beside name, affiliation and links (stacked on
// phones, photo first), then the bio below at a normal reading width.
import { intro, links, media, person } from "../../../content/site.js";
import RichText from "../../../shared/RichText.jsx";
import { DocumentIcon, GitHubIcon, LinkedInIcon, MailIcon, ScholarIcon } from "../../../shared/icons.jsx";
import { ExternalLink } from "../components/bits.jsx";

const Header = () => {
  // CV and Scholar only appear once they are filled in site.js.
  const buttons = [
    { label: "GitHub", href: links.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
    links.scholar && { label: "Scholar", href: links.scholar, Icon: ScholarIcon },
    links.cv && { label: "CV", href: `${import.meta.env.BASE_URL}${links.cv}`, Icon: DocumentIcon },
  ].filter(Boolean);

  return (
    <header id="about" tabIndex={-1} className="scroll-mt-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <img
          src={media.jeffPortrait}
          alt={person.photoAlt}
          width="640"
          height="640"
          loading="eager"
          className="h-36 w-36 flex-none rounded-2xl border border-rule object-cover sm:h-48 sm:w-48"
        />
        <div className="min-w-0">
          <h1 className="font-sans text-[2.25rem] font-extrabold leading-[1.05] tracking-tight sm:text-[2.75rem]">
            {person.name}
          </h1>
          <p className="mt-2 leading-snug">
            {person.role}, {person.field}
            <br />
            {person.university}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 font-sans text-sm">
            <a href={`mailto:${links.email}`} className="btn btn-primary px-3 py-1.5">
              <MailIcon />
              Email
            </a>
            {buttons.map(({ label, href, Icon }) => (
              <ExternalLink key={label} href={href} className="btn px-3 py-1.5">
                <Icon />
                {label}
              </ExternalLink>
            ))}
          </div>
          <p className="mt-2.5 font-sans text-sm text-muted">
            <a href={`mailto:${links.email}`} className="link">
              {links.email}
            </a>
            <span aria-hidden="true"> · </span>
            {person.location}
          </p>
        </div>
      </div>

      {/* Bio: paragraphs are capped at 40rem by academic.css. */}
      <div className="mt-10 space-y-4">
        {intro.formal.map((paragraph) => (
          <RichText key={paragraph} as="p" text={paragraph} linkClassName="link" />
        ))}
      </div>
    </header>
  );
};

export default Header;
