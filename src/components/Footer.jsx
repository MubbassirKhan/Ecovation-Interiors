import { Link } from 'react-router-dom';
import Logo from './Logo';
import { NAVIGATION, CONTACT } from '../data/siteData';

export default function Footer() {
  const services = [
    'Interior Turnkey Solutions',
    'Acoustic Panels',
    'CNC Cutting',
    'Printed Panels',
    'Ceiling Solutions',
    'Custom Solutions',
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-block">
            <Logo className="footer__brand" href="/" size={96} />
            <p className="footer__meta">
              Sustainable interiors and acoustic solutions designed for better spaces — Bengaluru, India.
            </p>
            <div className="footer__contact-actions" aria-label="Direct contact links">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <span>Instagram</span>
              </a>
              <a href={CONTACT.phoneHref}>
                <span>Call us</span>
              </a>
              <a href={CONTACT.emailHref}>
                <span>Email</span>
              </a>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h2>Navigate</h2>
            <nav className="footer__links" aria-label="Footer">
              {NAVIGATION.filter((l) => l.to).map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            </nav>
          </div>

          <div className="footer__column">
            <h2>Services</h2>
            <ul className="footer__service-links">
              {services.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </div>

          <div className="footer__column footer__office">
            <h2>Our office</h2>
            <address>{CONTACT.address}</address>
            <a className="footer__whatsapp" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
              <span aria-hidden="true">wa</span> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer__direct">
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          <a href={CONTACT.secondaryEmailHref}>{CONTACT.secondaryEmail}</a>
          <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Ecovation Interiors</span>
          <span className="footer__addr">Mahalakshmi Layout, Bengaluru - 560082</span>
          <span>Privacy Policy &nbsp; Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}