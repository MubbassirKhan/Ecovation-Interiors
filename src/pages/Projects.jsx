import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { local, IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import usePageMeta from '../utils/usePageMeta';

/* ------------------------------------------------------------------ */
/* Project data — real typologies with placeholder client names        */
/* ------------------------------------------------------------------ */
const FEATURED_PROJECTS = [
  {
    id: 'tech-open-office',
    index: '01',
    client: 'Client — Technology Sector',
    title: 'Open-Plan Office',
    category: 'Workspaces',
    location: 'Bengaluru',
    disciplines: ['Open-plan design', 'Acoustic planning', 'Sustainable fit-out'],
    summary:
      'A fully open-plan headquarters for a technology company — optimised for focus, collaboration and acoustic comfort using recycled PET panels.',
    heroImage: local('projects/open-office.jpeg'),
    gallery: [
      local('workspace/work1.jpg'),
      local('workspace/work2.jpg'),
      local('workspace/work3.jpg'),
      local('workspace/work4.jpg'),
      local('workspace/work5.jpg'),
    ],
  },
  {
    id: 'finance-meeting',
    index: '02',
    client: 'Client — Financial Services',
    title: 'Meeting & Boardroom Suite',
    category: 'Acoustics',
    location: 'Bengaluru',
    disciplines: ['Meeting rooms', 'Acoustic panels', 'Ceiling clouds'],
    summary:
      'Private meeting suites and a boardroom designed around speech clarity, brand presence and a premium client experience for a financial services firm.',
    heroImage: local('projects/meeting-room.jpeg'),
    gallery: [
      local('workspace/work6.jpg'),
      local('workspace/work8.jpg'),
      local('workspace/work9.jpg'),
      local('workspace/work10.jpg'),
      local('workspace/work11.jpg'),
    ],
  },
  {
    id: 'rnd-collab',
    index: '03',
    client: 'Client — Innovation & R&D',
    title: 'Collaboration Hub',
    category: 'Workspaces',
    location: 'Bengaluru',
    disciplines: ['Collaboration zones', 'Acoustic screens', 'Furniture systems'],
    summary:
      'An energetic collaboration hub for an R&D firm — agile zones, acoustic treatment and flexible furniture enabling rapid ideation and team sessions.',
    heroImage: local('projects/collaboration-zone.jpeg'),
    gallery: [
      local('workspace/work12.jpg'),
      local('workspace/work13.jpg'),
      local('workspace/work14.jpg'),
      local('workspace/work15.jpg'),
      local('workspace/work16.jpg'),
    ],
  },
  {
    id: 'corp-reception',
    index: '04',
    client: 'Client — Corporate Enterprise',
    title: 'Reception & Lobby',
    category: 'Workspaces',
    location: 'Bengaluru',
    disciplines: ['Reception areas', 'Brand presence', 'Acoustic wall panels'],
    summary:
      'A brand-defining reception and lobby for a corporate enterprise — the first impression set by curated materials, custom panels and refined spatial flow.',
    heroImage: local('projects/reception.jpeg'),
    gallery: [
      local('workspace/work2.jpg'),
      local('workspace/work5.jpg'),
      local('workspace/work9.jpg'),
      local('workspace/work11.jpg'),
      local('workspace/work13.jpg'),
    ],
  },
  {
    id: 'health-breakout',
    index: '05',
    client: 'Client — Healthcare & Wellness',
    title: 'Breakout & Wellness Spaces',
    category: 'Acoustics',
    location: 'Bengaluru',
    disciplines: ['Breakout spaces', 'Soft seating', 'Acoustic baffles'],
    summary:
      'Calm breakout and wellness areas for a healthcare company — designed to reduce cognitive load and give teams a genuine place to reset and recharge.',
    heroImage: local('projects/breakout-space.jpeg'),
    gallery: [
      local('workspace/work3.jpg'),
      local('workspace/work6.jpg'),
      local('workspace/work8.jpg'),
      local('workspace/work14.jpg'),
      local('workspace/work15.jpg'),
    ],
  },
  {
    id: 'pro-services-fitout',
    index: '06',
    client: 'Client — Professional Services',
    title: 'Full Workspace Fit-Out',
    category: 'Workspaces',
    location: 'Bengaluru',
    disciplines: ['Interior design', 'Sustainable materials', 'Custom finishes', 'Turnkey delivery'],
    summary:
      'End-to-end workspace design and fit-out for a professional services firm — from discovery and 3D visualisation through to on-site execution and handover.',
    heroImage: local('projects/workspace-interior.jpeg'),
    gallery: [
      local('workspace/work1.jpg'),
      local('workspace/work4.jpg'),
      local('workspace/work7'),
      local('workspace/work10.jpg'),
      local('workspace/work16.jpg'),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Overview stats                                                       */
/* ------------------------------------------------------------------ */
const OVERVIEW = [
  {
    value: '200+',
    label: 'Projects Delivered',
    detail: 'Workspace, acoustic and residential interiors across India.',
  },
  {
    value: '15+',
    label: 'Years of Experience',
    detail: 'Trusted by corporates, startups, healthcare and hospitality brands.',
  },
  {
    value: '6',
    label: 'Project Typologies',
    detail: 'Open offices, boardrooms, collaboration hubs, receptions, breakout spaces & full fit-outs.',
  },
  {
    value: '100%',
    label: 'Recycled PET Materials',
    detail: 'Every acoustic panel uses responsibly sourced recycled PET.',
  },
];

/* ------------------------------------------------------------------ */
/* Masonry Gallery                                                      */
/* ------------------------------------------------------------------ */
function MasonryGallery({ images, title }) {
  return (
    <div className="proj-masonry" aria-label={`${title} gallery`}>
      {images.slice(0, 5).map((src, i) => (
        <div key={i} className={`proj-masonry__cell proj-masonry__cell--${i + 1}`}>
          <img src={src} alt={`${title} — view ${i + 1}`} loading="lazy" decoding="async" />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Single project entry                                                 */
/* ------------------------------------------------------------------ */
function ProjectEntry({ project, index }) {
  const isEven = index % 2 === 0;
  return (
    <motion.article
      className={`proj-entry${isEven ? '' : ' proj-entry--flip'}`}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px 0px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Copy pane */}
      <div className="proj-entry__copy">
        <Reveal>
          <span className="proj-entry__num">{project.index}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="proj-entry__client">
            <span className="proj-entry__client-dot" aria-hidden="true" />
            {project.client}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="proj-entry__title">{project.title}</h2>
        </Reveal>
        <Reveal delay={0.13}>
          <p className="proj-entry__meta">{project.category} · {project.location}</p>
        </Reveal>
        <Reveal delay={0.17}>
          <p className="proj-entry__summary">{project.summary}</p>
        </Reveal>
        <Reveal delay={0.21}>
          <ul className="proj-entry__tags">
            {project.disciplines.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Gallery pane */}
      <Reveal delay={0.14} className="proj-entry__gallery-wrap">
        <MasonryGallery images={project.gallery} title={project.title} />
      </Reveal>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function ProjectsPage() {
  usePageMeta(
    'Our Projects — Ecovation Workspace & Acoustic Interiors, Bengaluru',
    'Explore featured workspace, acoustic and interior projects by Ecovation — open offices, meeting suites, collaboration hubs, receptions and full fit-outs across Bengaluru.'
  );

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);

  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="projects-pg-hero" ref={heroRef} aria-label="Projects hero">
        <motion.div className="projects-pg-hero__bg" style={{ y: heroY }} aria-hidden="true">
          <img
            src={IMAGES.workspaceHero}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="projects-pg-hero__veil" />
        </motion.div>

        <div className="projects-pg-hero__inner container">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Our portfolio
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="projects-pg-hero__title">
              Work that<br /><em>speaks for itself.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="projects-pg-hero__lede">
              200+ workspace, acoustic and residential projects delivered across India —
              each one a collaboration between Ecovation's design team and a client
              who wanted more from their space.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="projects-pg-hero__actions">
              <a className="projects-pg-hero__cta projects-pg-hero__cta--solid" href="#proj-overview">
                See our work <span aria-hidden="true">↓</span>
              </a>
              <Link className="projects-pg-hero__cta projects-pg-hero__cta--ghost" to="/contact">
                Start a project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="projects-pg-hero__scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ═══ OVERVIEW ══════════════════════════════════════════ */}
      <section className="proj-overview" id="proj-overview" aria-label="Portfolio overview">
        <div className="container proj-overview__inner">
          <div className="proj-overview__head">
            <Reveal>
              <p className="kicker">
                <span className="kicker__dot" aria-hidden="true" />
                What we've delivered
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="proj-overview__heading">
                From a single acoustic panel to a<br />
                <em>complete workspace transformation.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="proj-overview__body">
                Every project in the Ecovation portfolio is built on the same foundation —
                sustainable materials, honest acoustic engineering and relentless attention to
                execution. We work with technology companies, financial services firms,
                healthcare providers, hospitality brands and homeowners across India.
              </p>
            </Reveal>
          </div>

          <div className="proj-overview__stats">
            {OVERVIEW.map((item, i) => (
              <motion.div
                key={item.label}
                className="proj-overview__stat"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="proj-overview__stat-val">{item.value}</p>
                <p className="proj-overview__stat-label">{item.label}</p>
                <p className="proj-overview__stat-detail">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROJECT ENTRIES ═══════════════════════════════════ */}
      <section className="proj-list-section" id="projects" aria-label="Featured projects">
        <div className="container">
          <Reveal>
            <div className="proj-list-header">
              <p className="kicker">
                <span className="kicker__dot" aria-hidden="true" />
                Featured work
              </p>
              <h2 className="proj-list-heading">
                Projects, clients &amp; the<br /><em>spaces in between.</em>
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="proj-entries">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectEntry key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════════════ */}
      <CTASection
        kicker="Your project next"
        heading="A workspace worth working in — let's plan it."
        lede="Share a few details and we'll get back to you within 24 hours with next steps."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.contact}
        ctaLabel="Start your project"
        to="/contact"
      />
    </>
  );
}