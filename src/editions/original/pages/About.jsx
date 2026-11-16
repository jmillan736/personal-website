// About: tall photo on the left, the casual bio and my links on the right.
import Section from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import Reveal from "../animations/Reveal";
import { about, media, person } from "../../../content/site.js";
import RichText from "../../../shared/RichText.jsx";

const About = () => (
  <Section id="about" title="About" emoji="👨🏽‍💻">
    <div className="grid items-center gap-10 md:grid-cols-5 md:gap-12">
      <Reveal className="md:col-span-2">
        <img
          src={media.jeffFull}
          alt={person.photoAlt}
          loading="lazy"
          width="1200"
          height="1600"
          className="mx-auto h-auto w-full max-w-xs rounded-2xl object-cover shadow-md"
        />
      </Reveal>
      <Reveal className="md:col-span-3">
        <div className="max-w-prose space-y-5 text-lg font-medium leading-relaxed">
          {about.map((paragraph) => (
            <RichText
              key={paragraph}
              as="p"
              text={paragraph}
              linkClassName="font-semibold underline decoration-cta underline-offset-4 hover:decoration-2"
            />
          ))}
        </div>
        <div className="mt-6 -ml-2">
          <SocialLinks />
        </div>
      </Reveal>
    </div>
  </Section>
);

export default About;
