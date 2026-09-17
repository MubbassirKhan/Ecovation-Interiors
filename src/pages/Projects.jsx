import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { PROJECTS, IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import usePageMeta from '../utils/usePageMeta';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'workspaces', label: 'Workspaces' },
  { key: 'acoustics', label: 'Acoustic' },
];

/**
 * Projects — the featured projects index.
 * Editorial project rows with client-side category filters.
 */
export default function ProjectsPage() {
  usePageMeta(
    'Featured Projects — Ecovation Workspaces & Acoustic Interiors, Bengaluru',
    'Featured workspace and acoustic projects by Ecovation — open offices, meeting rooms, collaboration zones, receptions and breakout spaces.'
  );

  const [filter, setFilter] = useState('all');
  const shown = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => filter === 'acoustics'
      ? p.category.toLowerCase().startsWith('acoustic')
      : p.category.toLowerCase() === 'workspaces');

  return (
    <>
      <section className="page-hero pg-hero projects-hero">
        <div className="projects-hero__media" aria-hidden="true">
          <img
            src={IMAGES.aboutDetail}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="projects-hero__veil" aria-hidden="true" />
        </div>
        <div className="page-hero__inner container">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Portfolio
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="page-hero__title">
              Featured <em>projects</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="page-hero__lede">
              Workspaces and acoustic interiors — open offices, meeting rooms,
              collaboration zones, receptions and breakout spaces.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="projects-hero__actions">
              <a className="projects-hero__button projects-hero__button--primary" href="#projects-list">
                Explore projects <span aria-hidden="true">↓</span>
              </a>
              <Link className="projects-hero__button" to="/contact">
                Discuss a project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal className="projects-hero__aside" delay={0.26}>
          <p className="projects-hero__aside-label">The Ecovation portfolio</p>
          <p className="projects-hero__aside-copy">Spaces designed to work beautifully and sound right.</p>
          <div className="projects-hero__capabilities">
            <span>Recycled PET materials</span>
            <span>Acoustic planning</span>
            <span>120+ custom colors</span>
            <span>End-to-end delivery</span>
          </div>
        </Reveal>
      </section>

      <section className="pg-list" id="projects-list">
        <div className="container projects-index">
          <div className="pg-filter" role="group" aria-label="Filter projects by category">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`pg-filter__pill${filter === f.key ? ' is-active' : ''}`}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.div className="projects-list" key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {shown.map((project, index) => (
              <motion.article
                className={`project-row${index % 2 ? ' project-row--reverse' : ''}`}
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px 0px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link className="project-row__media" to={`/projects/${project.slug}`} aria-label={`${project.title} - view project`}>
                  <img src={project.heroImage} alt={project.title} loading="lazy" decoding="async" />
                  <span className="project-row__number">{project.index}</span>
                  <span className="project-row__category">{project.category}</span>
                </Link>
                <div className="project-row__content">
                  <p className="project-row__eyebrow">{project.index} / {project.category}</p>
                  <h2>{project.title}</h2>
                  <p className="project-row__summary">{project.summary}</p>
                  <p className="project-row__detail">{project.description}</p>
                  <Link className="project-row__link" to={`/projects/${project.slug}`}>
                    View project <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        kicker="Your project next"
        heading="A workspace worth working in — let's plan it."
        lede="Share a few details and we'll send next steps within 24 hours."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.contact}
        ctaLabel="Discuss your project"
        to="/contact"
      />
    </>
  );
}