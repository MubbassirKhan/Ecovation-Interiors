import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { APPROACH_STEPS, CONTACT, HIGHLIGHTS } from '../data/siteData';
import { IMAGES } from '../data/projects';
import usePageMeta from '../utils/usePageMeta';

const CAPABILITIES = [
  ['Collaborative Spaces', 'Open areas designed to foster teamwork while maintaining acoustic comfort'],
  ['Focus Zones', 'Quiet areas with optimized acoustics for deep work and concentration'],
  ['Sustainable Materials', '75% recycled content reducing environmental impact significantly'],
  ['Productivity Enhancement', 'Proven to improve focus and reduce stress through better acoustics'],
];

const SOLUTIONS = [
  ['01', 'Open Office Areas', 'Layouts that balance teamwork with acoustic comfort and natural flow.'],
  ['02', 'Meeting Rooms', 'Clear speech, privacy, and a premium client experience.'],
  ['03', 'Reception & Lobby', 'First impressions that reflect your brand identity powerfully.'],
  ['04', 'Breakout Spaces', 'Relaxed zones designed for quick resets and creative ideas.'],
  ['05', 'Focus Zones', 'Quiet areas built for deep work and concentration.'],
  ['06', 'Hybrid Collaboration', 'Video-ready spaces with lighting and acoustic planning.'],
];

const STORY_IMAGES = [
  [IMAGES.heroLocal, 'Modern office design'],
  [IMAGES.openOffice, 'Creative workspace'],
  [IMAGES.meetingRoom, 'Open office'],
  [IMAGES.collaboration, 'Meeting room'],
  [IMAGES.reception, 'Collaborative space'],
];

export default function Workspaces() {
  const [selectedStory, setSelectedStory] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ['0%', '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  usePageMeta(
    'Workspaces — Ecovation, Sustainable Workspace Design in Bengaluru',
    'Sustainable workplace design and fit-outs that improve productivity, comfort and brand experience through smart space planning and acoustic solutions.'
  );

  return (
    <>
      <header className="hero workspace-page-hero" id="workspace-top" ref={heroRef}>
        <div className="hero__media" aria-hidden="true">
          <motion.img
            className="hero__img"
            src={IMAGES.workspaceHero}
            alt="Modern open-plan workspace with warm natural light"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            draggable={false}
            style={{ y: imageY }}
          />
          <motion.div className="hero__veil" style={{ opacity: veilOpacity }} />
        </div>
        <motion.div className="hero__content container" style={{ y: contentY, opacity: contentOpacity }}>
          <motion.p className="hero__kicker" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
            <span className="hero__kicker-dot" aria-hidden="true" />Workplace design&nbsp;&nbsp;•&nbsp;&nbsp;Interior fit-out&nbsp;&nbsp;•&nbsp;&nbsp;Acoustic solutions
          </motion.p>
          <h1 className="hero__title">
            <span className="hero__line hero__line--1"><motion.span className="hero__line-mask" initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0% 0 0)' }} transition={{ duration: 1.05, delay: 0.3 }}>Modern</motion.span></span>
            <span className="hero__line hero__line--2"><motion.span className="hero__line-inner" initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }} animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }} transition={{ duration: 0.72, delay: 0.48 }}>workspaces</motion.span></span>
          </h1>
          <motion.p className="hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85 }}>
            Sustainable workplace design and fit-outs that improve productivity, comfort, and brand experience through smart space planning and acoustic solutions.
          </motion.p>
          <motion.div className="hero__ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.05 }}>
            <Link className="hero__cta hero__cta--primary" to="/contact">Get started <span aria-hidden="true">&#8594;</span></Link>
            <Link className="hero__cta hero__cta--solutions" to="/acoustic-panels">Our solutions <span aria-hidden="true">&#8599;</span></Link>
          </motion.div>
          <motion.div className="hero__rail workspace-page-hero__rail" aria-label="Workspace capabilities" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.25 }}>
            <span>01 / Open offices</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
            <span>02 / Meeting spaces</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
            <span>03 / Acoustic interiors</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
            <span>04 / Collaborative areas</span>
          </motion.div>
        </motion.div>
        <div className="hero__scroll" aria-hidden="true" />
      </header>

      <section className="workspace-stats" aria-label="Workspace service highlights">
        <div className="container workspace-stats__grid">
          <Stat value="6" label="Process Steps" />
          <Stat value="120+" label="Panel Colors" />
          <Stat value="75%" label="Recycled PET" />
          <Stat value="100%" label="Design + Execution" />
        </div>
      </section>

      <section className="workspace-about container">
        <div className="workspace-about__intro">
          <Reveal>
            <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Our perspective</p>
            <h2><span>Where workspace</span><span>becomes <em>signature.</em></span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="workspace-about__copy">
              <p>A great workplace does more than accommodate people. It shapes how they think, collaborate, perform and experience the brand.</p>
              <p>At Ecovation, we create sophisticated workspaces where design and functionality come together seamlessly. We approach every project as a complete experience—carefully considered from the first spatial concept to the final detail.</p>
            </div>
          </Reveal>
        </div>
        <div className="workspace-capabilities">
          {CAPABILITIES.map(([title, body], index) => (
            <Reveal className="workspace-capability" key={title} delay={index * 0.05}>
              <div><h3>{title}</h3><p>{body}</p></div><b aria-hidden="true">↗</b>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="workspace-story container">
        <Reveal>
          <div className="workspace-story__lead">
            <img
              key={STORY_IMAGES[selectedStory][0]}
              src={STORY_IMAGES[selectedStory][0]}
              alt={STORY_IMAGES[selectedStory][1]}
              loading="lazy"
              decoding="async"
            />
            <span>{STORY_IMAGES[selectedStory][1]}</span>
          </div>
        </Reveal>
        <div className="workspace-story__support" aria-label="Workspace image gallery">
          {STORY_IMAGES.map(([src, alt], index) => index !== selectedStory && (
            <Reveal key={src} delay={index * 0.05}>
              <button
                className="workspace-story__thumb"
                type="button"
                onClick={() => setSelectedStory(index)}
                aria-label={`Show ${alt}`}
              >
                <figure>
                  <img src={src} alt={alt} loading="lazy" decoding="async" />
                  <figcaption>{alt}</figcaption>
                  <span className="workspace-story__thumb-action" aria-hidden="true">View ↗</span>
                </figure>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="workspace-solutions">
        <div className="container">
          <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Zone by zone</p><h2>Workspace <em>solutions</em></h2></Reveal>
          <div className="workspace-solutions__grid">
            {SOLUTIONS.map(([, title, body], index) => <Reveal className="workspace-solution" key={title} delay={index * 0.04}><div><h3>{title}</h3><p>{body}</p></div><b aria-hidden="true">↗</b></Reveal>)}
          </div>
        </div>
      </section>

      <section className="workspace-signature container">
        <Reveal className="workspace-signature__heading">
          <p className="kicker"><span className="kicker__dot" aria-hidden="true" />The Ecovation signature</p>
          <h2>A distinctive approach to <em>workspace design.</em></h2>
        </Reveal>
        <Reveal className="workspace-signature__copy" delay={0.1}>
          <p>We believe exceptional workspaces are defined by more than aesthetics. They are shaped by how they feel, function and perform.</p>
          <p>The Ecovation Signature brings together thoughtful spatial planning, refined materiality, architectural acoustics and precise execution to create workplaces that are distinctive, purposeful and enduring.</p>
          <p className="workspace-signature__line">Every space has a story. We give it a signature.</p>
        </Reveal>
      </section>

      <section className="workspace-break">
        <img src={IMAGES.collaboration} alt="Collaborative workspace interior" loading="lazy" decoding="async" />
        <div className="workspace-break__veil" />
        <Reveal className="workspace-break__content"><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Designed for better work</p><h2>Spaces that work beautifully—and sound right.</h2></Reveal>
      </section>

      <section className="workspace-purpose">
        <div className="workspace-purpose__inner container">
          <Reveal className="workspace-purpose__heading">
            <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Our point of view</p>
            <h2>Designed around people.<br /><em>Built around purpose.</em></h2>
          </Reveal>
          <Reveal className="workspace-purpose__copy" delay={0.1}>
            <p>We believe premium workplace design is not about adding more. It is about making every element intentional.</p>
            <ul>
              <li>The right material.</li>
              <li>The right proportion.</li>
              <li>The right light.</li>
              <li>The right acoustic environment.</li>
              <li>The right experience.</li>
            </ul>
            <p>Every decision is made to create a workplace that feels distinctive, effortless and enduring.</p>
          </Reveal>
        </div>
      </section>

      <section className="workspace-process container">
        <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />How we deliver</p><h2>Our <em>process</em></h2></Reveal>
        <div className="workspace-process__timeline">
          {APPROACH_STEPS.map((step, index) => <Reveal className="workspace-process__step" key={step.title} delay={index * 0.04}><div><h3>{step.title}</h3><p>{step.body}</p></div></Reveal>)}
        </div>
      </section>

      <CTASection kicker="Build better spaces" heading="Let's build a better workspace." lede="Create a workplace designed for focus, collaboration, comfort, and lasting impact." email={{ href: CONTACT.emailHref, label: CONTACT.email }} phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }} note={CONTACT.address} mediaSrc={IMAGES.openOffice} ctaLabel="Get Started" to="/contact" />
    </>
  );
}

function Stat({ value, label }) {
  return <div className="workspace-stat"><strong>{value}</strong><span>{label}</span></div>;
}
