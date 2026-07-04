import Reveal from "../Reveal/Reveal";
import "./EntryCard.css";

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function CardPhoto({ name, photo, hasValidLink }) {
  return (
    <div className="card-photo">
      {photo ? (
        <img src={photo} alt={name} />
      ) : (
        <div className="card-photo-placeholder">
          <span className="mono">{initials(name)}</span>
        </div>
      )}
      {hasValidLink && (
        <div className="card-photo-overlay mono">
          <span>open ↗</span>
        </div>
      )}
    </div>
  );
}

/**
 * EntryCard — a reusable card component.
 *
 * Props:
 *   name        — card title (required)
 *   link        — URL the card opens on click (only works with a real URL, not "#")
 *   photo       — image URL for the card thumbnail
 *   description — card body text
 *   tag         — small label above the title
 *   period      — date / time range
 *   tech        — tech-stack line
 */
export default function EntryCard({
  name,
  link = "#",
  photo = "",
  description = "",
  tag = "",
  period = "",
  tech = "",
}) {
  const hasValidLink = link && link !== "#";

  const photoBlock = <CardPhoto name={name} photo={photo} hasValidLink={hasValidLink} />;

  return (
    <Reveal as="div" className="card">
      {hasValidLink ? (
        <a
          className="card-photo-link"
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open link for ${name}`}
        >
          {photoBlock}
        </a>
      ) : (
        <div className="card-photo-link">{photoBlock}</div>
      )}
      <div className="card-body">
        {tag && <span className="tag mono">{tag}</span>}
        <h3>{name}</h3>
        {period && <div className="card-period mono">{period}</div>}
        <p>{description}</p>
        {tech && <div className="card-tech mono">{tech}</div>}
        {hasValidLink && (
          <a
            className="card-link mono"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            view →
          </a>
        )}
      </div>
    </Reveal>
  );
}
