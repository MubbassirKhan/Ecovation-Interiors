import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import ClientMarquee from '../components/ClientMarquee';
import MissionVision from '../components/MissionVision';
import { IMAGES } from '../data/projects';
import { CONTACT, TEAM } from '../data/siteData';
import usePageMeta from '../utils/usePageMeta';
import { onImgError } from '../utils/image';

const VALUES = [
  { index: '01', title: 'Understand', body: 'We understand your space, requirements, aspirations and budget.' },
  { index: '02', title: 'Conceptualise', body: 'Our designers develop concepts, materials, colours and spatial solutions.' },
  { index: '03', title: 'Detail', body: 'Ideas are translated into detailed drawings, specifications and execution plans.' },
  { index: '04', title: 'Execute', body: 'Our project teams coordinate materials, contractors and site execution.' },
  { index: '05', title: 'Deliver', body: 'The result is a finished space where every element works together.' },
];

const PET_BENEFITS = [
  ['Diverts Plastic Waste', 'Every PET panel keeps post-consumer plastic bottles out of landfills and oceans.'],
  ['Second Life Materials', 'Giving discarded PET a premium second life as high-performance acoustic solutions.'],
  ['Lightweight', 'Lighter than traditional materials - easier to install and lower transport footprint.'],
  ['Durable', 'Long-lasting acoustic performance without degradation over time.'],
  ['Moisture Resistant', 'Non-hygroscopic and mold-resistant - safe for diverse interior environments.'],
  ['Fire Rated', 'EN13501-1: B-s1,d0 certified - meeting international safety standards.'],
];

export default function About() {
  usePageMeta(
    'About — Ecovation, Sustainable Workspaces & Acoustic Solutions',
    'Ecovation combines sustainable materials, thoughtful interior design and acoustic innovation to create spaces that perform beautifully across India.'
  );

  const featured = TEAM.filter((m) => m.featured);
  const supporting = TEAM.filter((m) => !m.featured);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const veilOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ['0%', '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <div className="about-stage">
        <div className="about-stage__media" aria-hidden="true">
          <motion.img
            src={IMAGES.aboutDetail}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            draggable={false}
            onError={onImgError}
          />
          <motion.div className="about-stage__veil" aria-hidden="true" style={{ opacity: veilOpacity }} />
        </div>
      {/* ── Hero ── */}
      <header className="hero about-hero" id="about-top" ref={heroRef}>
        <motion.div className="hero__content container" style={{ y: contentY, opacity: contentOpacity }}>
          <motion.p className="hero__kicker" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <span className="hero__kicker-dot" aria-hidden="true" />About Ecovation
          </motion.p>
          <h1 className="hero__title about-hero__title">
            <span className="hero__line hero__line--1">
              <motion.span className="hero__line-mask" initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0% 0 0)' }} transition={{ duration: 1.05, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                Designing
              </motion.span>
            </span>
            <span className="hero__line hero__line--2">
              <motion.span className="hero__line-inner" initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }} animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }} transition={{ duration: 0.72, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                better spaces
              </motion.span>
            </span>
          </h1>
          <motion.p className="hero__sub about-hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}>
              Ecovation combines sustainable materials, thoughtful interior design and acoustic innovation to create spaces that perform beautifully across India.
          </motion.p>
          <motion.div className="hero__ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}>
            <a className="hero__cta hero__cta--primary" href="/acoustic-panels">Explore Services <span aria-hidden="true">↗</span></a>
            <a className="hero__cta hero__cta--ghost" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a>
          </motion.div>
          <motion.div className="hero__rail" aria-label="About Ecovation capabilities" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.25 }}>
            <span>01 / Intentional design</span>
            <span className="hero__rail-sep" aria-hidden="true">·</span>
            <span>02 / Technical expertise</span>
            <span className="hero__rail-sep" aria-hidden="true">·</span>
            <span>03 / Precise execution</span>
          </motion.div>
        </motion.div>
        <motion.aside className="hero__aside about-hero__aside" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}>
          <p className="hero__aside-label">The Ecovation approach</p>
          <p className="hero__aside-copy">A considered balance of material, movement and meaning.</p>
          <ul className="about-hero__principles">
            <li><span>01</span>Understand the space</li>
            <li><span>02</span>Design for the people</li>
            <li><span>03</span>Deliver with precision</li>
          </ul>
        </motion.aside>
        <div className="hero__scroll" aria-hidden="true" />
      </header>

      <section className="about-signature" aria-labelledby="about-signature-title">
        <div className="about-signature__inner container">
          <Reveal className="about-signature__heading">
            <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Our approach</p>
            <h2 id="about-signature-title">
              <span>Where space</span>
              <span>becomes <em>signature.</em></span>
            </h2>
          </Reveal>
          <Reveal className="about-signature__copy" delay={0.08}>
            <p>Our work spans acoustic environments, turnkey commercial spaces and bespoke residential interiors — each approached with the same philosophy: understand the space, understand the people who experience it, and create something that feels purposeful and original.</p>
            <p>We combine creative vision with technical expertise and precise execution, transforming concepts into spaces that are not only beautiful, but work effortlessly in the real world.</p>
            <p>Because great design isn't about following a formula.<br />It's about creating a space that has its own identity.</p>
          </Reveal>
          <Reveal className="about-signature__manifesto" delay={0.16}>
            <span>Design with intent.</span>
            <span>Detail with purpose.</span>
            <span>Space with character.</span>
          </Reveal>
        </div>
      </section>
      </div>

      {/* ── Mission & Vision ── */}
      <MissionVision />

      {/* ── Approach ── */}
      <section className="about-values" id="values">
        <div className="about-values__hero">
          <div className="about-values__hero-image" aria-hidden="true" />
          <div className="about-values__hero-inner container">
            <Reveal className="about-values__hero-copy">
              <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Our approach</p>
              <p className="about-values__intro">Every project begins with understanding. We study the space, the people who use it, the requirements and the possibilities — then develop a solution that brings them together.</p>
            </Reveal>
            <Reveal className="about-values__hero-title" delay={0.08}>
              <h2 className="about-section__title">From idea <em>to reality.</em></h2>
            </Reveal>
          </div>
        </div>
        <div className="about-values__grid container">
          {VALUES.map((value, index) => (
            <Reveal className="about-values__item" key={value.index} delay={index * 0.05}>
              <span className="about-values__index">{value.index}</span>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Sustainability ── */}
      <section className="about-pet" id="sustainability">
        <div className="about-section container">
          <Reveal>
            <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Sustainability</p>
            <h2 className="about-section__title">Why recycled <em>PET?</em></h2>
          </Reveal>
          <div className="about-pet__intro">
            <Reveal>
              <p>Polyethylene terephthalate - the plastic in PET bottles - is one of the world's most recyclable materials. Ecovation transforms post-consumer PET bottles into premium acoustic panels, combining performance with environmental responsibility.</p>
            </Reveal>
            <Reveal delay={0.08} className="about-pet__stat">
              <strong>75%</strong>
              <span>Minimum recycled content</span>
              <p>Each panel contains at least 75% post-consumer recycled PET - giving plastic waste a premium second life as acoustic solutions.</p>
            </Reveal>
          </div>
          <div className="about-pet__benefits">
            {PET_BENEFITS.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.04} className="about-pet__benefit">
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TEAM — Premium Editorial Design
          Founders:  Cinematic portrait cards with hover-reveal bio
          Supporting: Compact 5-col card grid with brass hover accent
      ═══════════════════════════════════════════════════════════ */}
      <section className="ecov-team" id="team" aria-label="Our team">

        {/* Header */}
        <div className="ecov-team__head container">
          <Reveal>
            <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Our team</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="ecov-team__title">People behind <em>the spaces.</em></h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="ecov-team__lede">
              Meet the people who bring Ecovation's design, execution and sustainable
              vision together — from concept to handover.
            </p>
          </Reveal>
        </div>

        {/* Founders — large editorial portrait cards */}
        <div className="ecov-team__founders container">
          {featured.map((member, i) => (
            <motion.article
              key={member.name}
              className="ecov-founder"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Portrait with hover overlay */}
              <div className="ecov-founder__img-wrap">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover bio overlay slides up */}
                <div className="ecov-founder__overlay">
                  <p className="ecov-founder__overlay-bio">{member.bio}</p>
                </div>
                {/* Large index number — top-left watermark */}
                <span className="ecov-founder__index" aria-hidden="true">0{i + 1}</span>
              </div>

              {/* Info row */}
              <div className="ecov-founder__info">
                <div className="ecov-founder__text">
                  <h3 className="ecov-founder__name">{member.name}</h3>
                  <p className="ecov-founder__role">{member.role}</p>
                </div>
                <span className="ecov-founder__badge">
                  {member.role.toLowerCase().includes('co-founder') ? 'Co-Founder' : 'Founder'}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Divider */}
        <div className="ecov-team__divider container" aria-hidden="true">
          <div className="ecov-team__divider-line" />
          <span className="ecov-team__divider-label">The rest of the team</span>
          <div className="ecov-team__divider-line" />
        </div>

        {/* Supporting team — compact card grid */}
        <div className="ecov-team__grid container">
          {supporting.map((member, i) => (
            <motion.article
              key={member.name}
              className="ecov-member"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ecov-member__img-wrap">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="ecov-member__index" aria-hidden="true">
                  {String(i + featured.length + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="ecov-member__info">
                <h3 className="ecov-member__name">{member.name}</h3>
                <p className="ecov-member__role">{member.role}</p>
                {member.bio && <p className="ecov-member__bio">{member.bio}</p>}
              </div>
            </motion.article>
          ))}
        </div>

      </section>

      {/* ── Clients ── */}
      <section className="about-clients" id="clients">
        <div className="about-section container">
          <Reveal>
            <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Trusted by</p>
            <h2 className="about-section__title">Our <em>clients</em></h2>
          </Reveal>
          <ClientMarquee className="about-clients__marquee" />
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="about-contact container" id="contact">
        <div className="about-contact__header">
          <Reveal>
            <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Reach us</p>
            <h2 className="about-section__title">Get in <em>touch</em></h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="about-contact__lede">Ready to transform your space with sustainable design and acoustic excellence?</p>
          </Reveal>
        </div>
        <div className="about-contact__grid">
          <Reveal className="about-contact__details" delay={0.14}>
            <div className="about-contact__item">
              <span>Phone numbers</span>
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}<small>Primary</small></a>
              <a href={CONTACT.secondaryPhoneHref}>{CONTACT.secondaryPhoneDisplay}<small>Also reachable</small></a>
            </div>
            <div className="about-contact__item">
              <span>Email address</span>
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              <p>We reply within 24 hours on business days.</p>
            </div>
            <div className="about-contact__item">
              <span>Office address</span>
              <address>{CONTACT.address}</address>
            </div>
            <div className="about-contact__item">
              <span>Business hours</span>
              <p>Monday - Friday<br />9:00 AM - 6:00 PM IST</p>
            </div>
            <a className="about-contact__whatsapp" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
              Chat with our team <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <CTASection
        kicker="Start a project"
        heading="Let's create something great."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.openOffice}
        ctaLabel="Explore Services"
        to="/contact"
      />
    </>
  );
}