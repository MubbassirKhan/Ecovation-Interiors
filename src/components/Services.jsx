import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { HOME_SERVICES } from '../data/services';
import { onImgError } from '../utils/image';

/** Homepage solution cards. */
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head">
          <Reveal>
            <h2>Our solutions</h2>
          </Reveal>
          <p className="services__count" aria-hidden="true">
            {String(HOME_SERVICES.length).padStart(2, '0')} solutions
          </p>
        </div>

        <div className="services__list">
          {HOME_SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <Link className="service" to={s.to}>
                <div className="service__thumb" aria-hidden="true">
                  <img src={s.image} alt="" loading="lazy" decoding="async" onError={onImgError} />
                  <span className="service__index">{s.index}</span>
                </div>
                <div className="service__content">
                  <span className="service__eyebrow">Ecovation solution</span>
                  <h3 className="service__title">{s.title}</h3>
                  <p className="service__blurb">{s.blurb}</p>
                </div>
                <span className="service__explore" aria-hidden="true">
                  Explore <span>↗</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}