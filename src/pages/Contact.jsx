import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import { CONTACT, HIGHLIGHTS } from '../data/siteData';
import { IMAGES } from '../data/projects';
import { onImgError } from '../utils/image';
import usePageMeta from '../utils/usePageMeta';

const PROJECT_TYPES = [
  'Workspace design',
  'Residential interiors',
  'Acoustic panels',
  'Meeting rooms & acoustics',
  'Office fit-out',
  'Reception / brand environment',
  'Home office',
  'Something else',
];

const INITIAL = { name: '', email: '', phone: '', company: '', projectType: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please tell us your name.';
  if (!values.email.trim()) errors.email = 'Please add your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'That email does not look right yet.';
  if (values.phone.trim() && !/^[+\d][\d\s\-()]{7,18}$/.test(values.phone.trim()))
    errors.phone = 'Enter a valid phone number (digits, spaces, +).';
  if (!values.projectType) errors.projectType = 'Pick the kind of project.';
  if (!values.message.trim()) errors.message = 'Tell us a little about your space.';
  else if (values.message.trim().length < 12)
    errors.message = 'That is a touch short — a sentence helps us respond well.';
  return errors;
}

/**
 * Contact — real studio contact details + frontend-only enquiry form.
 * No fake backend: success state is purely local, the mail link is a
 * real mailto: to info@ecovation.co.in.
 */
export default function Contact() {
  usePageMeta(
    'Contact — Ecovation, Sustainable Workspaces & Acoustic Solutions',
    'Start a project with Ecovation in Bengaluru. Call +91 95387 78892, WhatsApp us or write to info@ecovation.co.in.'
  );

  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ['0%', '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const whatsappMessage = [
        'Hello Ecovation Team,',
        '',
        'I would like to enquire about a project.',
        '',
        `Name: ${values.name.trim()}`,
        `Email: ${values.email.trim()}`,
        `Phone: ${values.phone.trim() || 'Not provided'}`,
        `Company: ${values.company.trim() || 'Not provided'}`,
        `Project Type: ${values.projectType}`,
        '',
        'Message:',
        values.message.trim(),
        '',
        'Thank you.',
      ].join('\n');

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const whatsappUrl = isMobile
        ? `${CONTACT.whatsappHref}?text=${encodedMessage}`
        : `https://web.whatsapp.com/send?phone=919538778892&text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSent(true);
    }
  };

  return (
    <>
      <header className="hero contact-hero contact-page-hero" id="contact-top" ref={heroRef}>
        <div className="hero__media" aria-hidden="true">
          <motion.img
            className="hero__img"
            src={IMAGES.contactHeroBackground}
            alt="Warm, refined interior ready for a considered design conversation"
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
            <span className="hero__kicker-dot" aria-hidden="true" />Contact
          </motion.p>
          <h1 className="hero__title">
            <span className="hero__line hero__line--1"><motion.span className="hero__line-mask" initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0% 0 0)' }} transition={{ duration: 1.05, delay: 0.3 }}>Ready to</motion.span></span>
            <span className="hero__line hero__line--2"><motion.span className="hero__line-inner" initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }} animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }} transition={{ duration: 0.72, delay: 0.48 }}>start?</motion.span></span>
          </h1>
          <motion.p className="hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85 }}>
            Share a few details and we’ll send next steps within 24 hours.
          </motion.p>
          <motion.div className="hero__ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.05 }}>
            <a className="hero__cta hero__cta--primary" href="#contact-form">Start your enquiry <span aria-hidden="true">&#8595;</span></a>
            <a className="hero__cta hero__cta--solutions" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">&#8599;</span></a>
          </motion.div>
          <motion.div className="hero__rail contact-page-hero__rail" aria-label="Ways to start a project" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.25 }}>
            <span>01 / Workspace design</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
            <span>02 / Residential interiors</span><span className="hero__rail-sep" aria-hidden="true">&#183;</span>
            <span>03 / Acoustic solutions</span>
          </motion.div>
        </motion.div>
        <Reveal className="contact-hero__aside" delay={0.22}>
          <p className="contact-hero__aside-label">The Ecovation standard</p>
          <p className="contact-hero__aside-copy">Sustainable interiors and acoustic solutions designed for better spaces.</p>
          <div className="contact-hero__stats">
            {HIGHLIGHTS.map((highlight) => (
              <div key={highlight.label}>
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="hero__scroll" aria-hidden="true" />
      </header>

      <section className="contact-page container" id="contact-form">
        <div className="contact-page__grid">
          {/* Real details */}
          <Reveal className="contact-page__details">
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Reach us directly
            </p>
            <h2 className="contact-page__h2">Let’s build better spaces.</h2>
            <p className="contact-page__intro">A direct line to the Ecovation team in Bengaluru.</p>

            <ul className="contact-page__list">
              <li className="contact-detail contact-detail--office">
                <span className="contact-detail__label">Office</span>
                <span className="contact-detail__value contact-detail__value--text">
                  {CONTACT.addressLine1}
                  <br />
                  {CONTACT.addressLine2}
                </span>
              </li>
              <li className="contact-detail">
                <span className="contact-detail__label">Phone</span>
                <a className="contact-detail__value" href={CONTACT.phoneHref}>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="contact-detail">
                <span className="contact-detail__label">Also reachable</span>
                <a className="contact-detail__value" href={CONTACT.secondaryEmailHref}>
                  {CONTACT.secondaryEmail}
                </a>
              </li>
              <li className="contact-detail">
                <span className="contact-detail__label">Email</span>
                <a className="contact-detail__value" href={CONTACT.emailHref}>
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <div className="contact-page__map">
              <iframe
                title="Ecovation office location in Bengaluru"
                src="https://www.google.com/maps?q=12.9991865,77.546875&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href="https://www.google.com/maps/place/12%C2%B059'57.1%22N+77%C2%B032'48.8%22E/@12.9991865,77.5443001,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.9991865!4d77.546875?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
                Open in Google Maps <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-page__details-footer">
              <a className="contact-page__whatsapp" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                Chat with our team <span aria-hidden="true">↗</span>
              </a>
              <p>Monday - Friday<br />9:00 AM - 6:00 PM IST</p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08} className="contact-page__form">
            {sent ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                role="status"
              >
                <p className="kicker">
                  <span className="kicker__dot" aria-hidden="true" />
                  Thank you
                </p>
                <h2 className="form-success__title">Your message is on its way.</h2>
                  <p className="form-success__body">
                    WhatsApp has opened with your enquiry ready to send. Please review it and tap send.
                    For anything urgent, call us on <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.
                </p>
                <button
                  className="form-success__again"
                  onClick={() => {
                    setValues(INITIAL);
                    setSent(false);
                  }}
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form className="form" noValidate onSubmit={onSubmit}>
                <div className="form__intro">
                  <p className="kicker"><span className="kicker__dot" aria-hidden="true" />Start a conversation</p>
                  <h2>Tell us about your space.</h2>
                  <p>Share a few details and we will prepare the right next step for your project.</p>
                </div>
                <div className="form__row">
                  <div className="field">
                    <label className="field__label" htmlFor="f-name">Name</label>
                    <input
                      id="f-name"
                      className={`field__input${errors.name ? ' field__input--error' : ''}`}
                      type="text"
                      value={values.name}
                      onChange={set('name')}
                      autoComplete="name"
                      placeholder="Your name"
                      required
                    />
                    {errors.name && <p className="field__error">{errors.name}</p>}
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="f-email">Email</label>
                    <input
                      id="f-email"
                      className={`field__input${errors.email ? ' field__input--error' : ''}`}
                      type="email"
                      value={values.email}
                      onChange={set('email')}
                      autoComplete="email"
                      placeholder="you@company.com"
                      required
                    />
                    {errors.email && <p className="field__error">{errors.email}</p>}
                  </div>
                </div>

                <div className="form__row">
                  <div className="field">
                    <label className="field__label" htmlFor="f-phone">Phone <span className="field__opt">(optional)</span></label>
                    <input
                      id="f-phone"
                      className={`field__input${errors.phone ? ' field__input--error' : ''}`}
                      type="tel"
                      value={values.phone}
                      onChange={set('phone')}
                      autoComplete="tel"
                      placeholder="+91 …"
                    />
                    {errors.phone && <p className="field__error">{errors.phone}</p>}
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="f-company">Company <span className="field__opt">(optional)</span></label>
                    <input
                      id="f-company"
                      className="field__input"
                      type="text"
                      value={values.company}
                      onChange={set('company')}
                      autoComplete="organization"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="f-type">Project type</label>
                  <select
                    id="f-type"
                    className={`field__input field__select${errors.projectType ? ' field__input--error' : ''}`}
                    value={values.projectType}
                    onChange={set('projectType')}
                      required
                  >
                    <option value="">Select a project type</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="field__error">{errors.projectType}</p>}
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="f-message">Message</label>
                  <textarea
                    id="f-message"
                    className={`field__input field__textarea${errors.message ? ' field__input--error' : ''}`}
                    rows={5}
                    value={values.message}
                    onChange={set('message')}
                    placeholder="Tell us about your space — where it is, what it does, and what the room sounds like today."
                    required
                  />
                  {errors.message && <p className="field__error">{errors.message}</p>}
                </div>

                <button className="form__submit" type="submit">
                  Continue to WhatsApp <span aria-hidden="true">↗</span>
                </button>
                <p className="form__note">
                  Prefer email? Write to us directly at
                  <a href={CONTACT.emailHref}> {CONTACT.email}</a>.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}