// Publications, in the order given in site.js.
import { Fragment } from "react";
import PropTypes from "prop-types";
import { publications } from "../../../content/site.js";
import { ExternalLink, Section } from "../components/bits.jsx";

// "A, B, and C" with Jeffrey's name set in bold and underlined (not color alone).
const Authors = ({ authors, me }) => (
  <p className="mt-1 text-base">
    {authors.map((name, i) => (
      <Fragment key={name}>
        {i > 0 && ", "}
        {name === me ? (
          <strong className="font-semibold underline decoration-1 underline-offset-[0.2em]">{name}</strong>
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

const Publication = ({ pub }) => {
  const chips = [pub.note, pub.status].filter(Boolean);

  return (
    <li>
      <article>
        <h3 className="font-sans text-[1.0625rem] font-bold leading-snug tracking-tight">{pub.title}</h3>
        <Authors authors={pub.authors} me={pub.me} />
        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
          <span>
            {pub.venue && <em>{pub.venue}, </em>}
            {pub.year}
          </span>
          {chips.map((chip) => (
            <span key={chip} className="chip chip-accent font-sans">
              {chip}
            </span>
          ))}
        </p>
        {pub.award && (
          <p className="mt-1 text-base font-semibold">
            <span aria-hidden="true">🏆 </span>
            {pub.award}
          </p>
        )}
        <p className="mt-1.5 text-base text-muted">{pub.summary}</p>
        {pub.links.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-2 font-sans text-[0.8125rem]">
            {pub.links.map((link) => (
              <ExternalLink
                key={link.url}
                href={link.url}
                className="btn px-2.5 py-0.5"
                aria-label={`${link.label}: ${pub.title}`}
              >
                {link.label}
              </ExternalLink>
            ))}
          </div>
        )}
      </article>
    </li>
  );
};
Publication.propTypes = {
  pub: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    me: PropTypes.string,
    venue: PropTypes.string,
    year: PropTypes.number,
    status: PropTypes.string,
    note: PropTypes.string,
    award: PropTypes.string,
    summary: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })),
  }).isRequired,
};

const Publications = () => (
  <Section id="publications" title="Publications">
    <ol className="mt-6 space-y-8">
      {publications.map((pub) => (
        <Publication key={pub.id} pub={pub} />
      ))}
    </ol>
  </Section>
);

export default Publications;
