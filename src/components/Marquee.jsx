import { MARQUEE_WORDS } from '../data/siteData';

/**
 * Marquee — a slow, seamless editorial ticker band.
 * Content is repeated twice; the track pans -50% on a CSS transform
 * keyframe, so the loop is pixel-perfect. transform-only → compositor.
 */
export default function Marquee() {
  const words = [...MARQUEE_WORDS];
  const items = [...words, ...words];

  return (
    <div className="marquee" aria-label="What we do">
      <div className="marquee__track">
        {items.map((word, i) => (
          <span className="marquee__item" key={`${word}-${i}`} aria-hidden={i >= words.length}>
            {word}
            <span className="marquee__sep" aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}