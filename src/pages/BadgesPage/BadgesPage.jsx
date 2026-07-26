import PageHeader from "../../components/PageHeader/PageHeader";
import CardGrid from "../../components/CardGrid/CardGrid";
import Reveal from "../../components/Reveal/Reveal";
import { LC_BADGES, OTHER_BADGES } from "../../data/badges";
import "./BadgesPage.css";

export default function BadgesPage() {
  return (
    <div className="badges-page">
      <PageHeader
        eyebrow="// 04 — badges"
        title="Badges & Achievements"
        blurb="Streaks, monthly challenges, and platform accomplishments from my learning journey."
      />

      <div className="badges-section">
        <h3 className="badges-section-title">// 01 — leetcode active badges</h3>
        <div className="lc-grid">
          {LC_BADGES.map((badge) => (
            <Reveal as="div" className="lc-badge-card" key={badge.name}>
              <div className="lc-badge-wrapper">
                <img src={badge.photo} alt={badge.name} loading="lazy" />
              </div>
              <div className="lc-badge-info">
                <h4>{badge.name}</h4>
                <p>{badge.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="badges-section">
        <h3 className="badges-section-title">// 02 — cybersecurity & lab badges</h3>
        <CardGrid items={OTHER_BADGES} />
      </div>
    </div>
  );
}
