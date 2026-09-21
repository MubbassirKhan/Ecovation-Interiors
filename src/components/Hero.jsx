import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { IMAGES } from "../data/projects";
import { onImgError } from "../utils/image";

/**
 * Hero — Ecovation home hero.
 * Cinematic parallax with left-to-right shading reveal on headline.
 */
export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const rotatingWords = ["Workspaces", "PET Panels", "Residential"];
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(
      () => setActiveWordIndex((c) => (c + 1) % rotatingWords.length),
      2400,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="hero" id="top" ref={heroRef}>
      {/* Parallax image */}
      <div className="hero__media" aria-hidden="true">
        <motion.img
          className="hero__img"
          src={IMAGES.heroLocal}
          alt="Open-plan office with natural light and considered workstations"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          draggable={false}
          onError={onImgError}
          style={{ y: imageY }}
        />
        <motion.div
          className="hero__veil"
          aria-hidden="true"
          style={{ opacity: veilOpacity }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="hero__content container"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Kicker */}
        <motion.p
          className="hero__kicker"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero__kicker-dot" aria-hidden="true" />
        </motion.p>

        {/* Headline — left-to-right wipe reveal */}
        <h1 className="hero__title">
          <span className="hero__line hero__line--1">
            <motion.span
              className="hero__line-mask"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: 1.05,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Ecovation Interiors
            </motion.span>
            <motion.span
              className="hero__line-shimmer"
              initial={{ left: "-30%", opacity: 0.85 }}
              animate={{ left: "115%", opacity: 0 }}
              transition={{
                duration: 1.05,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-hidden="true"
            />
          </span>

          <span className="hero__line hero__line--2" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[activeWordIndex]}
                className="hero__line-inner"
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                exit={{ clipPath: "inset(0 0% 0 100%)", opacity: 0 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "inline-block", paddingBottom: "0.12em" }}
              >
                {rotatingWords[activeWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Sub */}
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
        >
          Where Design Meets Function. We create thoughtfully designed spaces
          where aesthetics, functionality and craftsmanship come together.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
        >
          <Link className="hero__cta hero__cta--primary" to="/contact">
            Start a project <span aria-hidden="true">&#8594;</span>
          </Link>
          <Link className="hero__cta hero__cta--solutions" to="/workspaces">
            Our Solutions <span aria-hidden="true">&#8599;</span>
          </Link>
          <a className="hero__cta hero__cta--ghost" href="#about">
            Explore <span aria-hidden="true">&#8595;</span>
          </a>
        </motion.div>

        {/* Bottom rail */}
        <motion.div
          className="hero__rail"
          aria-label="Ecovation capabilities"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.25 }}
        >
          <span>01 / Workspaces</span>
          <span className="hero__rail-sep" aria-hidden="true">
            &#183;
          </span>
          <span>02 / PET acoustic panels</span>
          <span className="hero__rail-sep" aria-hidden="true">
            &#183;
          </span>
          <span>03 / Residential interiors</span>
        </motion.div>
      </motion.div>

      {/* Right aside */}
      <motion.aside
        className="hero__aside"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
      >
        <p className="hero__aside-label">The Ecovation standard</p>
        <p className="hero__aside-copy">
          At Ecovation: We don&#39;t just build spaces&nbsp;— we create
          experiences.
        </p>
        <div className="hero__aside-stats">
          <div className="hero__aside-stat">
            <strong className="hero__aside-stat-num">15+</strong>
            <span className="hero__aside-stat-label">Years</span>
          </div>
          <div className="hero__aside-stat">
            <strong className="hero__aside-stat-num">200+</strong>
            <span className="hero__aside-stat-label">Projects</span>
          </div>
        </div>
      </motion.aside>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true" />
    </header>
  );
}
