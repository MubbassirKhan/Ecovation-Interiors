import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Studio from '../components/Studio';
import MissionVision from '../components/MissionVision';
import Services from '../components/Services';
import Projects from '../components/Projects';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import ClientsSection from '../components/ClientsSection';
import {
  HIGHLIGHTS,
  WHY_CHOOSE,
  APPROACH_STEPS,
  CONTACT,
} from '../data/siteData';
import { PROJECTS, IMAGES } from '../data/projects';
import usePageMeta from '../utils/usePageMeta';

/**
 * Our services → Featured projects → Why choose Ecovation → How we work
 * → Our clients → Ready to start? → Footer.
 */
export default function Home() {
  usePageMeta(
    'Ecovation — Sustainable Interiors & PET Acoustic Solutions, Bengaluru',
    'Ecovation combines sustainable materials, thoughtful interior design and acoustic innovation to create spaces that perform beautifully across India.'
  );

  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Studio />
      <MissionVision />
      <Services />
      <Projects projects={PROJECTS} />
      <WhyChoose />
      <HowWeWork />
      <ClientsSection />
      <CTASection
        kicker="Ready to start?"
        heading="Ready to start?"
        lede="Share a few details and we'll send next steps within 24 hours."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={encodeURI(`${import.meta.env.BASE_URL}Ecovation Images/general/readytostart.png`)}
        ctaLabel="Contact us"
        to="/contact"
      />
    </>
  );
}

/* ------------------------------------------------------------
   Key statistics — the studio's real numbers.
   ------------------------------------------------------------ */
function Stats() {
  return (
    <section className="stats" aria-label="Ecovation in numbers">
      <div className="container">
        <div className="studio__stats">
          {HIGHLIGHTS.map((s) => (
            <div className="studio__stat" key={s.label}>
              <span className="studio__stat-num">{s.value}</span>
              <span className="studio__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Why choose Ecovation — numbered differentiators.
   ------------------------------------------------------------ */
function WhyChoose() {
  return (
    <section className="values">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Why us
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="values__title">
            Why choose <em>Ecovation</em>.
          </h2>
        </Reveal>
        <div className="values__grid">
          {WHY_CHOOSE.map((v) => (
            <Reveal key={v.index} className="values__card">
              <span className="values__num" aria-hidden="true">{v.index}</span>
              <h3 className="values__card-title">{v.title}</h3>
              <p className="values__card-body">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   How we work — a clear 3-step process.
   ------------------------------------------------------------ */
function HowWeWork() {
  return (
    <section className="process">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Our approach
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="process__title">
            How we <em>work</em>.
          </h2>
        </Reveal>
        <ol className="process__list">
          {APPROACH_STEPS.map((s, i) => (
            <Reveal key={s.index} className="process__step" delay={i * 0.08}>
              <span className="values__num" aria-hidden="true">{s.index}</span>
              <h3 className="process__step-title">{s.title}</h3>
              <p className="process__step-body">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

