// Contact: email first, then the profiles. The penguin lives here now.
import { links } from "../../../content/site.js";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../../../shared/icons.jsx";
import { ExternalLink, Section } from "../components/bits.jsx";
import Penguin from "../components/Penguin.jsx";

const Contact = () => (
  <Section id="contact" title="Contact">
    <div className="mt-4 flex items-end justify-between gap-4 sm:gap-8">
      <div className="min-w-0">
        <p>
          Email is the best way to reach me. I&apos;m happy to talk about research, collaborations, or
          anything on this page.
        </p>
        <ul className="mt-4 space-y-1.5 font-sans text-[0.9375rem] font-bold">
          <li>
            <a href={`mailto:${links.email}`} className="link inline-flex items-center gap-2 break-all">
              <MailIcon />
              {links.email}
            </a>
          </li>
          <li>
            <ExternalLink href={links.linkedin} className="link inline-flex items-center gap-2">
              <LinkedInIcon />
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={links.github} className="link inline-flex items-center gap-2">
              <GitHubIcon />
              GitHub
            </ExternalLink>
          </li>
        </ul>
      </div>
      <Penguin className="w-24 sm:w-32" />
    </div>
  </Section>
);

export default Contact;
