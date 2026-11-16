// Papers: my publications, newest first, with my name in bold.
import { Fragment } from "react";
import PropTypes from "prop-types";
import Section from "../components/Section";
import Chip from "../components/Chip";
import LinkButton from "../components/LinkButton";
import Reveal from "../animations/Reveal";
import { publications } from "../../../content/site.js";
import { DocumentIcon, ExternalLinkIcon } from "../../../shared/icons.jsx";

const Authors = ({ authors, me }) => (
  <p className="text-muted text-base font-normal leading-relaxed">
    {authors.map((name, index) => (
      <Fragment key={name}>
        {index > 0 && ", "}
        {name === me ? (
          <strong className="font-extrabold text-copy-primary underline decoration-cta decoration-2 underline-offset-4">
            {name}
          </strong>
        ) : (
          name
        )}
      </Fragment>
    ))}
  </p>
);

Authors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  me: PropTypes.string,
};

const Papers = () => (
  <Section id="papers" title="Papers" emoji="📝">
    <Reveal>
      <ol className="space-y-6">
        {publications.map((paper) => (
          <li key={paper.id} className="orig-card p-5 sm:p-6">
            <h3 className="mb-2 text-xl font-bold leading-snug md:text-2xl">{paper.title}</h3>
            <Authors authors={paper.authors} me={paper.me} />
            <p className="mt-1 text-base font-medium">
              {/* Papers still under review have no venue yet: just the year. */}
              {paper.venue ? (
                <>
                  <span className="italic">{paper.venue}</span>, {paper.year}
                </>
              ) : (
                paper.year
              )}
            </p>

            {(paper.status || paper.note || paper.award) && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {paper.status && (
                  <li>
                    <Chip variant="outline">{paper.status}</Chip>
                  </li>
                )}
                {paper.note && (
                  <li>
                    <Chip variant="outline">{paper.note}</Chip>
                  </li>
                )}
                {paper.award && (
                  <li>
                    <Chip>
                      <span aria-hidden="true">🏆 </span>
                      {paper.award}
                    </Chip>
                  </li>
                )}
              </ul>
            )}

            {paper.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {paper.links.map((link) => (
                  <LinkButton
                    key={link.url}
                    href={link.url}
                    label={`${link.label}: ${paper.title}`}
                    icon={link.label === "PDF" ? <DocumentIcon /> : <ExternalLinkIcon />}
                  >
                    {link.label}
                  </LinkButton>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Reveal>
  </Section>
);

export default Papers;
