import { Link } from 'react-router-dom';
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
  ['/Ecovation%20Images/residential/resident5.jpg', 'Residential details made for everyday living'],
  ['/Ecovation%20Images/residential/resident3', 'A considered residential interior'],
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
  return (
    <section className="workspace-hero residential-hero">
      <div className="workspace-hero__media" aria-hidden="true">
        <img src={IMAGES.residentialLiving} alt="" loading="eager" decoding="async" onError={onImgError} />
        <div className="workspace-hero__veil" />
      </div>
      <div className="workspace-hero__inner container">
        <Reveal><p className="kicker"><span className="kicker__dot" aria-hidden="true" />Residential interiors</p></Reveal>
        <Reveal delay={0.08}><h1><span>Residential interiors</span><em>designed around you.</em></h1></Reveal>
        <Reveal delay={0.16}><p>From living spaces to bedrooms and home offices, Ecovation creates interiors around how you and your family use the space.</p></Reveal>
        <div className="workspace-hero__actions">
          <Link className="workspace-button workspace-button--primary" to="/contact">Get a quote <span>↗</span></Link>
          <a className="workspace-button" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Chat <span>↗</span></a>
        </div>
      </div>
      <div className="workspace-hero__scroll" aria-hidden="true"><span>Scroll to explore</span><i /></div>
    </section>
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
