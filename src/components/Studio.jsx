import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';
import { IMAGES } from '../data/projects';
import { onImgError } from '../utils/image';

/**
 * Studio → "Who we are" on the Home page.
 * Editorial image with its own small parallax (in normal flow) + copy
 * and the four key capabilities as pill badges.
 */
export default function Studio() {
  const figureRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: figureRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section className="studio container" id="about">
      <div className="studio__grid">
        <motion.figure
          className="studio__figure"
          ref={figureRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={IMAGES.studioSmall}
            alt="A collaboration space with people working around an acoustic-finished table"
            style={{ y }}
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={onImgError}
          />
          <span className="studio__label" aria-hidden="true">
            © Ecovation — Bengaluru
          </span>
        </motion.figure>

        <div className="studio__content">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Who we are
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="studio__heading">
              Designing spaces that <em>work &amp; sound right</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="studio__body">
            <p>
              At Ecovation Interiors LLP, we believe exceptional interiors are created when design thinking meets disciplined execution.
            </p>
            <p>
              Our approach combines creativity, technical understanding and on-site expertise to deliver spaces that are visually distinctive, highly functional and built to last.
            </p>
            <p>
              From a single acoustic wall to a complete interior transformation, we bring the same attention to detail to every project.
            </p>
            <h2 className="studio__heading studio__sequence" aria-label="Design. Detail. Execution.">
              <span>Design</span>
              <span className="studio__sequence-arrow" aria-hidden="true">→</span>
              <span>Detail</span>
              <span className="studio__sequence-arrow" aria-hidden="true">→</span>
              <span>Execution</span>
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}