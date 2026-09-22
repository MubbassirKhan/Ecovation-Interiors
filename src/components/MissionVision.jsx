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
          Our approach
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mission__heading">
          Design with <em>purpose</em>.
        </h2>
      </Reveal>
      <div className="mission__grid">
        {MISSION_VISION.map((mission, index) => (
          <Reveal key={mission.tag} className="mission__card" delay={index * 0.08}>
            <span className="mission__tag">{mission.tag}</span>
            <h3 className="mission__statement">{mission.title}</h3>
            <p className="mission__body">{mission.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
