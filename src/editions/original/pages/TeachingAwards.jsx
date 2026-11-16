// Teaching & Awards: two cards side by side on wide screens.
import Section from "../components/Section";
import Reveal from "../animations/Reveal";
import { honors, teaching } from "../../../content/site.js";

const TeachingAwards = () => (
  <Section id="teaching" title="Teaching & Awards" emoji="🏆">
    <Reveal>
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <div className="orig-card p-6 sm:p-8">
          <h3 className="mb-6 text-3xl font-extrabold">Teaching</h3>
          <ul className="space-y-8">
            {teaching.map((job) => (
              <li key={job.course}>
                <h4 className="text-lg font-bold leading-snug md:text-xl">{job.course}</h4>
                <p className="text-muted mt-1 text-sm font-semibold">
                  {job.role}, {job.org} ·{" "}
                  <span className="whitespace-nowrap">{job.dates}</span>
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base font-medium leading-relaxed marker:text-cta">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="orig-card p-6 sm:p-8">
          <h3 className="mb-6 text-3xl font-extrabold">Awards</h3>
          <ul className="divide-y divide-border">
            {honors.map((honor) => (
              <li
                key={`${honor.year}-${honor.title}`}
                className="flex items-baseline gap-4 py-3 first:pt-0 last:pb-0"
              >
                <span className="w-12 shrink-0 text-base font-extrabold tabular-nums text-accent">
                  {honor.year}
                </span>
                <span className="text-base font-semibold leading-snug">{honor.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  </Section>
);

export default TeachingAwards;
