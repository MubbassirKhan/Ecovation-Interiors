import { Link } from 'react-router-dom';
import { LOGO } from '../data/siteData';
import { onImgError } from '../utils/image';

/**
 * Logo — the client's official brand mark, used unmodified.
 *
 * The asset is white artwork on a pure black background. It is composited
 * with mix-blend-mode: screen so the black register drops away against the
 * warm black of the site while the white glyphs stay crisp — flex-safe,
 * no distortion, proportions preserved.
 */
export default function Logo({ className = '', href = '/', size = 56, onClick }) {
  return (
    <Link
      to={href}
      className={`logo${className ? ` ${className}` : ''}`}
      onClick={onClick}
      aria-label="Ecovation — home"
    >
      <img
        className="logo__img"
        src={LOGO.src}
        alt={LOGO.alt}
        width="1254"
        height="1254"
        style={{ height: size }}
        loading="eager"
        decoding="async"
        draggable={false}
        onError={onImgError}
      />
      <span className="logo__wordmark" aria-label="Ecovation Interiors">
        <span className="logo__wordmark-top">Ecovation</span>
        <span className="logo__wordmark-bottom">Interiors</span>
      </span>
    </Link>
  );
}