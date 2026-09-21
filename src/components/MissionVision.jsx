import Reveal from './Reveal';
import { MISSION_VISION } from '../data/siteData';
import { IMAGES } from '../data/projects';

export default function MissionVision() {
  return (
    <section
      className="mission container"
      style={{ '--mission-bg': `url("${IMAGES.aboutDetail}")` }}
    >
      <Reveal>
        <p className="kicker">
          <span className="kicker__dot" aria-hidden="true" />
          Mission &amp; Vision
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mission__heading">
          Why we do <em>what we do</em>.
        </h2>
      </Reveal>
      <div className="mission__grid">
        {MISSION_VISION.map((mission, index) => (
          <Reveal key={mission.tag} className="mission__card" delay={index * 0.08}>
            <span className="mission__tag">{mission.tag}</span>
            <p className="mission__statement">{mission.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
