import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import CTASection from '../components/CTASection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ACOUSTIC_SOLUTIONS,
  ACOUSTIC_BENEFITS,
  PANEL_APPLICATIONS,
  PANEL_SPECS,
  PET_NOTE,
} from '../data/services';
import { IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import { onImgError } from '../utils/image';
import usePageMeta from '../utils/usePageMeta';

const PROCESS = [
  ['Collection', 'PET bottles are collected from post-consumer recycling partners across India.'],
  ['Shredding', 'Bottles are shredded, washed and cleaned into pure PET flakes.'],
  ['Fiber extrusion', 'The flakes are melted and extruded into fine polyester fibers.'],
  ['Board forming', 'Fibers are thermally bonded under high pressure into rigid acoustic boards.'],
  ['Color & finish', 'Panels are finished in 120+ colours with smooth, pin-receptive and printable surfaces.'],
  ['CNC cutting', 'Precision cutting creates custom shapes, sizes and architectural designs.'],
  ['QC testing', 'NRC, fire resistance and dimensional accuracy are tested to standard.'],
  ['Installation', 'The finished solution is delivered and installed at your space.'],
];

/**
 * AcousticPanels — the PET acoustic panels page.
 * Hero, an editorial "what PET is", the four products as large cinematic
 * sections (no small cards), the benefits strip, and a closing CTA.
 */
export default function AcousticPanels() {
  usePageMeta(
    'PET Acoustic Panels — Ecovation Acoustic Solutions, Bengaluru',
    'Advanced sound solutions made from recycled PET materials, with 120+ colours, customizable fabrication and acoustic applications for workplaces, studios, hospitality and homes.'
  );

  return (
    <div className="acoustic-page">
      <Hero />
      <WhatIsPET />
      <Products />
      <Process />
      <Benefits />
      <PanelDetails />
      <CTASection
        kicker="Get a quote"
        heading="Quiet the room. Carry the voice. Make it yours."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.acousticPanels}
        ctaLabel="Talk acoustics"
        to="/contact"
      />
    </div>
  );
}

function Hero() {
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
    <header className="hero acoustic-page-hero" id="acoustic-top" ref={heroRef}>
      <div className="hero__media" aria-hidden="true">
        <motion.img
          className="hero__img"
          src={IMAGES.acousticHeroBackground}
          alt="Architectural acoustic panels in a refined interior"
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
          <span className="hero__kicker-dot" aria-hidden="true" />Acoustic solutions&nbsp;&nbsp;•&nbsp;&nbsp;Recycled PET&nbsp;&nbsp;•&nbsp;&nbsp;Interior performance
        </motion.p>
        <h1 className="hero__title">
          <span className="hero__line hero__line--1"><motion.span className="hero__line-mask" initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0% 0 0)' }} transition={{ duration: 1.05, delay: 0.3 }}>PET acoustic</motion.span></span>
          <span className="hero__line hero__line--2"><motion.span className="hero__line-inner" initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }} animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }} transition={{ duration: 0.72, delay: 0.48 }}>panels</motion.span></span>
        </h1>
        <motion.p className="hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85 }}>
          Advanced sound solutions made from recycled PET materials for superior acoustic performance and sustainable interior design.
        </motion.p>
        <motion.div className="hero__ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.05 }}>
          <a className="hero__cta hero__cta--primary" href="/contact">Get a quote <span aria-hidden="true">&#8594;</span></a>
          <a className="hero__cta hero__cta--solutions" href="#products">Explore solutions <span aria-hidden="true">&#8599;</span></a>
        </motion.div>
        <motion.div className="hero__rail acoustic-page-hero__rail" aria-label="Acoustic panel applications" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.25 }}>
          <span>01 / Ceiling clouds</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
          <span>02 / Wall panels</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
          <span>03 / Acoustic screens</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
          <span>04 / Custom acoustics</span>
        </motion.div>
      </motion.div>
      <div className="hero__scroll" aria-hidden="true" />
    </header>
  );
}

function WhatIsPET() {
  return (
    <section className="acoustic-intro">
      <div className="container">
        <Reveal className="acoustic-intro__heading"><p className="kicker"><span className="kicker__dot" aria-hidden="true" />What PET is</p><h2>Sound-absorbing boards, <em>pressed from recycled bottles.</em></h2></Reveal>
        <Reveal className="acoustic-intro__copy" delay={0.1}><p>{PET_NOTE}</p><ul>{['At least 75% recycled PET', 'Lightweight and durable', 'Low VOC and mold-resistant', 'Fire rated to EN13501-1'].map(item => <li key={item}><span aria-hidden="true" />{item}</li>)}</ul></Reveal>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="ac-products" id="products">
      <div className="container ac-section-heading"><Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />What we make</p><h2>Acoustic solutions for <em>better spaces.</em></h2></Reveal></div>
      {ACOUSTIC_SOLUTIONS.map((p, i) => (
        <article className="ac-product" id={p.id} key={p.id}>
          <div className="container">
            <div className={`ac-product__row${i % 2 === 1 ? ' ac-product__row--flip' : ''}`}>
              <Reveal className="ac-product__media">
                <ParallaxImage
                  src={p.image}
                  alt={p.title}
                  ratio="4 / 3"
                  className="ac-product__figure"
                  yRange={['-12%', '12%']}
                />
              </Reveal>

              <div className="ac-product__content">
                <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />{p.title}</p></Reveal>
                <Reveal delay={0.08}>
                  <h2 className="ac-product__title">{p.title}</h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="ac-product__blurb">{p.blurb}</p>
                </Reveal>
                <Reveal delay={0.2}>
                  <ul className="ac-product__notes">
                    {p.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function Benefits() {
  return (
    <section className="ac-benefits">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Why it matters
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="ac-benefits__title">What good acoustics <em>give you.</em></h2>
        </Reveal>
        <div className="ac-benefits__grid">
          {ACOUSTIC_BENEFITS.map((b, i) => (
            <Reveal key={b.title} className="ac-benefits__card" delay={i * 0.06}>
              <h3 className="ac-benefits__card-title">{b.title}</h3>
              <p className="ac-benefits__card-body">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PanelDetails() {
  return (
    <section className="ac-benefits">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Product data
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="ac-benefits__title">Made for performance and flexibility</h2>
        </Reveal>
        <div className="ac-benefits__grid">
          <Reveal className="ac-benefits__card">
            <h3 className="ac-benefits__card-title">Product specifications</h3>
            <ul className="ac-product__notes">
              {PANEL_SPECS.map((spec) => <li key={spec}>{spec}</li>)}
            </ul>
          </Reveal>
          <Reveal className="ac-benefits__card" delay={0.08}>
            <h3 className="ac-benefits__card-title">Perfect for every space</h3>
            <ul className="ac-product__notes">
              {PANEL_APPLICATIONS.map((application) => <li key={application}>{application}</li>)}
            </ul>
          </Reveal>
          <Reveal className="ac-benefits__card" delay={0.16}>
            <h3 className="ac-benefits__card-title">Fully customizable</h3>
            <p className="ac-benefits__card-body">
              120+ colours, CNC cutting, printed graphics, custom sizes, integrated lighting and installation across walls, ceilings, baffles and screens.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return <section className="ac-process"><div className="container"><Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Circular economy</p><h2>From bottle <em>to product.</em></h2><p className="ac-process__lede">Every panel starts as a recycled PET bottle and is transformed into a premium acoustic solution.</p></Reveal><div className="ac-process__grid">{PROCESS.map(([title, body], index) => <Reveal className="ac-process__item" key={title} delay={index * 0.03}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{body}</p></div></Reveal>)}</div></div></section>;
}