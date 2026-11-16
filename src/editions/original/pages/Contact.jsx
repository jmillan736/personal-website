// Contact: the purple block from the original site (it flips to the card
// color on hover).
import Reveal from "../animations/Reveal";
import { links } from "../../../content/site.js";
import { MailIcon } from "../../../shared/icons.jsx";

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="scroll-mt-20 px-5 py-16 sm:px-8 md:py-24"
  >
    <Reveal>
      <div className="focus-current mx-auto flex max-w-xl flex-col items-center gap-5 rounded-3xl border-2 border-cta-active bg-cta-active p-8 text-center text-cta-text shadow-md transition-colors hover:border-border hover:bg-card hover:text-copy-primary sm:p-10">
        <h2 id="contact-heading" className="text-4xl font-extrabold md:text-5xl">
          Contact <span aria-hidden="true">📮</span>
        </h2>
        <p className="text-lg font-medium">
          Feel free to send an email or message through{" "}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-4 hover:decoration-2"
          >
            LinkedIn
          </a>
        </p>
        <a
          href={`mailto:${links.email}`}
          className="inline-flex items-center gap-3 break-all text-xl font-bold underline-offset-4 hover:underline sm:text-2xl"
        >
          <MailIcon className="shrink-0 text-3xl" />
          {links.email}
        </a>
      </div>
    </Reveal>
  </section>
);

export default Contact;
