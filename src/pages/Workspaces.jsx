import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80', 'Modern office design'],
  ['https://ecovation.co.in/images/Projects/project11.jpeg', 'Creative workspace'],
  ['https://ecovation.co.in/images/Projects/project12.jpeg', 'Open office'],
  ['https://ecovation.co.in/images/Projects/project13.jpeg', 'Meeting room'],
  ['https://ecovation.co.in/images/Projects/project14.jpeg', 'Collaborative space'],
];

export default function Workspaces() {
  const [selectedStory, setSelectedStory] = useState(0);

  usePageMeta(
    'Workspaces — Ecovation, Sustainable Workspace Design in Bengaluru',
    'Sustainable workplace design and fit-outs that improve productivity, comfort and brand experience through smart space planning and acoustic solutions.'
  );

  return (
    <>
      <section className="workspace-hero">
        <div className="workspace-hero__media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=90" alt="" loading="eager" decoding="async" />
          <div className="workspace-hero__veil" />
        </div>
        <div className="workspace-hero__inner container">
          <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Workplace design • Interior fit-out</p></Reveal>
          <Reveal delay={0.08}><h1>Modern <em>workspaces</em></h1></Reveal>
          <Reveal delay={0.16}><p>Sustainable workplace design and fit-outs that improve productivity, comfort, and brand experience through smart space planning and acoustic solutions.</p></Reveal>
          <Reveal delay={0.24}>
            <div className="workspace-hero__actions">
              <Link className="workspace-button workspace-button--primary" to="/contact">Get Started <span>↗</span></Link>
              <a className="workspace-button" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Chat <span>↗</span></a>
            </div>
          </Reveal>
        </div>
      </section>

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
          <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />About this service</p><h2>Transforming <em>work environments</em></h2></Reveal>
          <Reveal delay={0.1}><p>We design modern workspaces with smart space planning, ergonomic layouts, and acoustic comfort—creating offices that support focus, collaboration, and well-being.</p></Reveal>
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

      <section className="workspace-break">
        <img src={IMAGES.collaboration} alt="Collaborative workspace interior" loading="lazy" decoding="async" />
        <div className="workspace-break__veil" />
        <Reveal className="workspace-break__content"><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Designed for better work</p><h2>Spaces that work beautifully—and sound right.</h2></Reveal>
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
