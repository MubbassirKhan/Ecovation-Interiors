import Reveal from './Reveal';
import ClientMarquee from './ClientMarquee';

const STATS = [
  { icon: 'building', value: '200+', label: 'Projects Delivered' },
  { icon: 'people', value: '50+', label: 'Happy Clients' },
  { icon: 'handshake', value: '15+', label: 'Years of Experience' },
  { icon: 'globe', value: 'Across', label: 'India & International' },
];

export default function ClientsSection() {
  return (
    <section className="clients">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Our clients
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="clients__title">
            <span>Trusted by Forward</span>
            <span>Thinking <em>Organizations</em></span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="clients__lede">We collaborate with leading businesses, institutions and homeowners to create spaces that inspire, perform and last.</p>
        </Reveal>
        <Reveal delay={0.14}>
          <ClientMarquee className="clients__marquee" />
        </Reveal>
        <div className="clients__stats" aria-label="Client and project highlights">
          {STATS.map(({ icon, value, label }) => (
            <div className="clients__stat" key={label}>
              <span className={`clients__stat-icon clients__stat-icon--${icon}`} aria-hidden="true" />
              <div><strong>{value}</strong><span>{label}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
