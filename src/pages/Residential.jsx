import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../components/Reveal';
import { CONTACT } from '../data/siteData';
import { IMAGES } from '../data/projects';
import { onImgError } from '../utils/image';
import usePageMeta from '../utils/usePageMeta';

const RESIDENTIAL_SPACES = [
  ['Living Rooms', 'Warm spaces for relaxation, family time and elegant everyday living.'],
  ['Bedrooms', 'Peaceful rooms with thoughtful lighting, calming materials and acoustic comfort.'],
  ['Home Offices', 'Focused work-from-home environments balancing productivity and ease.'],
  ['Dining Spaces', 'Considered settings for shared meals, conversation and daily rituals.'],
  ['Entertainment Spaces', 'Immersive interiors designed for comfort, connection and downtime.'],
  ['Personal Retreats', 'Quiet corners shaped around the routines and rhythms that make a home yours.'],
];

const DESIGN_APPROACH = [
  ['Lifestyle Planning', 'Every home begins by understanding routines, preferences and the way spaces are truly lived in.'],
  ['Material Harmony', 'Carefully selected textures, finishes and colours create a timeless visual balance.'],
  ['Acoustic Comfort', 'Integrated acoustic thinking helps create calmer, more comfortable residential environments.'],
  ['Precision Execution', 'From concept to installation, every detail is coordinated with exceptional craftsmanship.'],
];

const RESIDENTIAL_IMAGES = [
  [IMAGES.residentialLiving, 'Warm living area with a refined material palette'],
  [IMAGES.residentialBedroom, 'A quiet bedroom designed for rest'],
  [IMAGES.residentialOffice, 'A focused home office with considered acoustic details'],
  [IMAGES.residentialDetails, 'Residential details made for everyday living'],
  [IMAGES.residentialThird, 'A considered residential interior'],
];

const FEATURES = [
  ['Living Spaces', 'Designed for comfort, conversation and everyday moments.', 'Warm spaces for relaxation, family time and elegant everyday living.', RESIDENTIAL_IMAGES[0]],
  ['Bedroom', 'Calm materials, thoughtful lighting and acoustic comfort.', 'Peaceful rooms with thoughtful lighting, calming materials and acoustic comfort.', RESIDENTIAL_IMAGES[1]],
  ['Home Office', 'Focused environments designed for productivity and comfort.', 'Focused work-from-home environments balancing productivity and ease.', RESIDENTIAL_IMAGES[2]],
];

const WHY_ECOVATION = ['Sustainable Material Choices', 'Premium Craftsmanship', 'Personalized Planning', 'Acoustic Comfort', 'Timeless Modern Interiors'];

export default function Residential() {
  usePageMeta(
    'Residential Interiors — Ecovation Acoustic Solutions, Bengaluru',
    'Thoughtfully designed residential interiors that combine aesthetics, comfort, sustainability and acoustic performance.'
  );

  return (
    <>
      <HeroSection />
      <IntroSection />
      <CompositionSection />
      <SpacesSection />
      <FeaturesSection />
      <ApproachSection />
      <GallerySection />
      <WhySection />
      <ResidentialCTA />
    </>
  );
}

function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ['0%', '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header className="hero residential-page-hero" id="residential-top" ref={heroRef}>
      <div className="hero__media" aria-hidden="true">
        <motion.img
          className="hero__img"
          src={IMAGES.residentialHero}
          alt="Warm, considered residential interior with natural light"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          draggable={false}
          onError={onImgError}
          style={{ y: imageY }}
        />
        <motion.div className="hero__veil" style={{ opacity: veilOpacity }} />
      </div>
      <motion.div className="hero__content container" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p className="hero__kicker" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
          <span className="hero__kicker-dot" aria-hidden="true" />Residential interiors&nbsp;&nbsp;•&nbsp;&nbsp;Lifestyle planning&nbsp;&nbsp;•&nbsp;&nbsp;Material harmony
        </motion.p>
        <h1 className="hero__title">
          <span className="hero__line hero__line--1"><motion.span className="hero__line-mask" initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0% 0 0)' }} transition={{ duration: 1.05, delay: 0.3 }}>Residential</motion.span></span>
          <span className="hero__line hero__line--2"><motion.span className="hero__line-inner" initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }} animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }} transition={{ duration: 0.72, delay: 0.48 }}>interiors</motion.span></span>
        </h1>
        <motion.p className="hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85 }}>
          Thoughtfully designed residential interiors that bring comfort, character, and acoustic calm to the way you and your family live.
        </motion.p>
        <motion.div className="hero__ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.05 }}>
          <Link className="hero__cta hero__cta--primary" to="/contact">Get a quote <span aria-hidden="true">&#8594;</span></Link>
          <Link className="hero__cta hero__cta--solutions" to="#residential-spaces">Explore spaces <span aria-hidden="true">&#8599;</span></Link>
        </motion.div>
        <motion.div className="hero__rail residential-page-hero__rail" aria-label="Residential capabilities" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.25 }}>
          <span>01 / Living spaces</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
          <span>02 / Bedrooms</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
          <span>03 / Home offices</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
          <span>04 / Personal retreats</span>
        </motion.div>
      </motion.div>
      <div className="hero__scroll" aria-hidden="true" />
    </header>
  );
}

function IntroSection() {
  return (
    <section className="workspace-about container residential-intro">
      <div className="workspace-about__intro">
        <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Residential philosophy</p><h2>The same principles that make offices calm <em>make homes better, too.</em></h2></Reveal>
      </div>
      <Reveal className="residential-intro__copy" delay={0.1}><p>Each room is designed around lifestyle, with acoustic comfort, lighting design and material selection refined to the way the home is used.</p></Reveal>
    </section>
  );
}

function CompositionSection() {
  return <section className="residential-composition container" aria-label="Residential interiors">
    <Reveal className="residential-composition__lead"><img src={RESIDENTIAL_IMAGES[0][0]} alt={RESIDENTIAL_IMAGES[0][1]} loading="lazy" onError={onImgError} /></Reveal>
    <div className="residential-composition__side">
      {RESIDENTIAL_IMAGES.slice(1, 3).map(([src, alt], index) => <Reveal key={src} delay={index * 0.06}><img src={src} alt={alt} loading="lazy" onError={onImgError} /></Reveal>)}
    </div>
  </section>;
}

function SpacesSection() {
  return (
    <section className="workspace-solutions residential-spaces">
      <div className="container">
        <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />What we design</p><h2>Spaces designed <em>around everyday living.</em></h2></Reveal>
        <div className="workspace-solutions__grid">
            {RESIDENTIAL_SPACES.map(([title, body], index) => <Reveal className="workspace-solution" key={title} delay={index * 0.04}><div><h3>{title}</h3><p>{body}</p></div><b aria-hidden="true">↗</b></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return <section className="residential-features container" aria-label="Residential features">
    {FEATURES.map(([title, body, description, [src, alt]], index) => <Reveal className={`residential-feature ${index % 2 ? 'residential-feature--flip' : ''}`} key={title}>
      <img src={src} alt={alt} loading="lazy" onError={onImgError} />
      <div><p className="kicker"><span className="kicker__dot" aria-hidden="true" />{title}</p><h2>{body}</h2><p>{description}</p></div>
    </Reveal>)}
  </section>;
}

function ApproachSection() {
  return (
    <section className="workspace-solutions residential-approach">
      <div className="container">
        <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Our design approach</p><h2>Thoughtful design <em>in every detail.</em></h2></Reveal>
        <div className="workspace-solutions__grid">
          {DESIGN_APPROACH.map(([title, body], index) => <Reveal className="workspace-solution" key={title} delay={index * 0.04}><div><h3>{title}</h3><p>{body}</p></div><b aria-hidden="true">↗</b></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return <section className="residential-gallery container">
    <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Residential details</p><h2>Material, light and <em>quiet moments.</em></h2></Reveal>
    <div className="residential-gallery__grid" aria-label="Residential image gallery">
      {RESIDENTIAL_IMAGES.map(([src, alt], index) => <Reveal className={`residential-gallery__item residential-gallery__item--${index + 1}`} key={src} delay={index * 0.04}><img src={src} alt={alt} loading="lazy" onError={onImgError} /></Reveal>)}
    </div>
  </section>;
}

function WhySection() {
  return <section className="residential-why container">
    <div><Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Why Ecovation</p><h2>Homes designed <em>beyond aesthetics.</em></h2></Reveal></div>
    <Reveal delay={0.08}><ul>{WHY_ECOVATION.map(item => <li key={item}><span aria-hidden="true" />{item}</li>)}</ul></Reveal>
  </section>;
}

function ResidentialCTA() {
  return <section className="residential-cta">
    <div className="container"><Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Start a home project</p><h2>Let's design a home you'll love living in.</h2><p>Tell us about your dream home and our team will help transform it into a thoughtfully designed interior.</p><div className="workspace-hero__actions"><Link className="workspace-button workspace-button--primary" to="/contact">Get a quote <span>↗</span></Link><a className="workspace-button" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a></div></Reveal></div>
  </section>;
}
