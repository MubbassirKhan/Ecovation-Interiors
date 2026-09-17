import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/projects';
import { onImgError } from '../utils/image';

/**
 * Hero — Ecovation home hero.
 * Full-bleed image (normal flow, no position: fixed / sticky).
 * Clean parallax on the image only via framer-motion scroll tracking.
 */
export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const words = ['Sustainable', 'Interiors.'];
  const em = ['Acoustic innovation. Turnkey execution.'];

  return (
    <header className="hero" id="top" ref={heroRef}>
      <div className="hero__media">
        <motion.img
          className="hero__img"
          src={IMAGES.heroLocal}
          alt="Open-plan office with natural light and calm, considered workstations"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          draggable={false}
          onError={onImgError}
          style={{ scale: imageScale }}
        />
        <div className="hero__veil" aria-hidden="true" />
      </div>

      <div className="hero__content container">
        <h1 className="hero__title">
          {words.map((w, i) => (
            <motion.span
              key={w}
              className="hero__line"
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.1 }}
            >
              {w}
            </motion.span>
          ))}
          <motion.em
            className="hero__em"
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          >
            <span className="hero__em-line">Acoustic innovation.</span>
            <span className="hero__em-line">Turnkey execution.</span>
          </motion.em>
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
        >
          Sustainable materials, thoughtful interior design and acoustic innovation
          for spaces that perform beautifully across India.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        >
          <Link className="hero__cta hero__cta--primary" to="/contact">
            Start a project <span aria-hidden="true">→</span>
          </Link>
          <a className="hero__cta hero__cta--ghost" href="#about">
            Explore <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        <motion.aside
          className="hero__aside"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
        >
          <p className="hero__aside-label">The Ecovation standard</p>
          <p className="hero__aside-copy">
            Better spaces through sustainable materials, acoustic performance and
            precise execution.
          </p>
          <div className="hero__aside-stats">
            <span><strong>15+</strong> years</span>
            <span><strong>200+</strong> projects</span>
            <span><strong>120+</strong> colours</span>
          </div>
        </motion.aside>

        <div className="hero__rail" aria-label="Ecovation capabilities">
          <span>01 / Workspaces</span>
          <span>02 / PET acoustic panels</span>
          <span>03 / Residential interiors</span>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true" />
    </header>
  );
}