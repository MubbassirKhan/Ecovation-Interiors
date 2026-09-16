import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import ClientMarquee from '../components/ClientMarquee';
import { IMAGES } from '../data/projects';
import { CONTACT, MISSION_VISION, TEAM } from '../data/siteData';
import usePageMeta from '../utils/usePageMeta';

const VALUES = [
  {
    index: '01',
    title: 'Sustainability First',
    body: 'Every material choice reflects our commitment to responsible sourcing and circular economy principles.',
  },
  {
    index: '02',
    title: 'Acoustic Expertise',
    body: 'Deep knowledge of acoustic performance, NRC ratings and how sound shapes human experience.',
  },
  {
    index: '03',
    title: 'Design Precision',
    body: 'Every space is planned with intention - proportions, light, flow and material harmony considered together.',
  },
  {
    index: '04',
    title: 'Execution Discipline',
    body: 'On-site coordination, quality checks and accountable delivery on every project we undertake.',
  },
  {
    index: '05',
    title: 'Customization Depth',
    body: '120+ panel colors, CNC cutting, printing and embossing for spaces that are genuinely unique.',
  },
  {
    index: '06',
    title: 'Client Focus',
    body: 'Long-term relationships built on trust, clear communication and consistent results.',
  },
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

  return (
    <>
      <section className="page-hero about-hero">
        <div className="page-hero__media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90"
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
          />
          <div className="page-hero__veil" aria-hidden="true" />
        </div>
        <div className="page-hero__inner container">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              About Ecovation
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="page-hero__title">
              Designing <em>better spaces</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="page-hero__lede">
              Ecovation combines sustainable materials, thoughtful interior design and acoustic innovation to create spaces that perform beautifully across India.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="about-hero__actions">
              <a className="about-hero__button about-hero__button--primary" href="/acoustic-panels">Explore Services <span aria-hidden="true">↗</span></a>
              <a className="about-hero__button" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-section about-purpose container" id="purpose">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Our purpose
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="about-section__title">Mission <em>&amp;</em> Vision</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="about-purpose__grid">
            {MISSION_VISION.map((item) => (
              <article className="about-purpose__item" key={item.tag}>
                <p className="about-purpose__label">Our {item.tag}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="about-values" id="values">
        <Reveal>
          <div className="about-section container">
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              What drives us
            </p>
            <h2 className="about-section__title">Our <em>values</em></h2>
          </div>
        </Reveal>
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

      <section className="team about-team container" id="team">
        <div className="about-team__header">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Our team
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="team__title">People behind <em>the spaces.</em></h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="about-team__lede">Meet the people who bring Ecovation's design, execution and sustainable vision together.</p>
          </Reveal>
        </div>
        <div className="team__lead-grid">
          {TEAM.filter((member) => member.featured).map((member, i) => <TeamMember key={member.name} member={member} index={i} featured />)}
        </div>
        <div className="team__grid">
           {TEAM.filter((member) => !member.featured).map((member, i) => <TeamMember key={member.name} member={member} index={i + 2} />)}
        </div>
      </section>

      <section className="about-clients" id="clients">
        <div className="about-section container">
          <Reveal>
            <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Trusted by</p>
            <h2 className="about-section__title">Our <em>clients</em></h2>
          </Reveal>
          <ClientMarquee className="about-clients__marquee" />
        </div>
      </section>

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
            <a className="about-contact__whatsapp" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Chat with our team <span aria-hidden="true">↗</span></a>
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

function TeamMember({ member, index, featured = false }) {
  return (
    <Reveal className={`team__member ${featured ? 'team__member--featured' : ''}`} delay={index * 0.06}>
      <figure className="team__figure">
        <img src={member.image} alt={`${member.name}, ${member.role}`} loading="lazy" decoding="async" />
      </figure>
      <div className="team__info">
        <h3 className="team__name">{member.name}</h3>
        <p className="team__role">{member.role}</p>
        {member.bio && <p className="team__bio">{member.bio}</p>}
      </div>
    </Reveal>
  );
}