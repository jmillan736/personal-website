// Research: what I work on (three cards), then my research experience.
import Section from "../components/Section";
import ExperienceItem from "../components/ExperienceItem";
import Reveal from "../animations/Reveal";
import { experience, research } from "../../../content/site.js";

const Research = () => (
  <Section id="research" title="Research" emoji="🔬" align="right">
    <Reveal>
      <ul className="grid gap-6 md:grid-cols-3">
        {research.map((thread) => (
          <li key={thread.id} className="orig-card flex flex-col p-6">
            <span aria-hidden="true" className="mb-3 text-4xl">
              {thread.emoji}
            </span>
            <h3 className="mb-1 text-xl font-bold leading-snug">{thread.title}</h3>
            <p className="text-muted mb-3 text-sm font-semibold">{thread.where}</p>
            <p className="text-base font-medium leading-relaxed">{thread.summary}</p>
          </li>
        ))}
      </ul>
    </Reveal>

    <Reveal>
      <h3 className="mb-6 mt-16 text-3xl font-extrabold md:text-4xl">Experience</h3>
      <ul className="space-y-4">
        {experience.map((job) => (
          <ExperienceItem key={`${job.org}-${job.role}`} {...job} />
        ))}
      </ul>
    </Reveal>
  </Section>
);

export default Research;
