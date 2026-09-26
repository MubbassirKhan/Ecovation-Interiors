import { useRef, useState } from 'react';

const clientAsset = (fileName) => encodeURI(`${import.meta.env.BASE_URL}Ecovation Images/client list/${fileName}`);

const CLIENT_LOGOS = [
  ['HP', clientAsset('hp_logo.png')],
  ['Legrand', clientAsset('Legrand-Logo.jpg')],
  ['Honeywell', clientAsset('Honeywell-Symbol.png')],
  ['Godrej', clientAsset('Godrej Logo.png')],
  ['Kirloskar', clientAsset('Kirloskar logo.jpg')],
  ['Amex Bank', clientAsset('Amex logo.avif')],
  ['Mankind', clientAsset('Mankind Logo.png')],
  ['PayU', clientAsset('_PayULogo1.jpeg')],
  ['Ericsson', clientAsset('Ericsson_logo.svg.webp')],
  ['Swiggy', clientAsset('Swiggy-Simbolo.png')],
  ['NTT Data', clientAsset('NTT Data.png')],
  ['IBM', clientAsset('IBM-Logo-1967.jpg')],
  ['Bharat Biotech', clientAsset('bharat-biotech-logo.jpg')],
  ['Hitachi', clientAsset('Hitachi-Emblem.png')],
  ['KPMG', clientAsset('KPMG Logo.png')],
  ['Eurofins Scientific', clientAsset('Eurofins_Scientific-Logo.wine.png')],
  ['Qualcomm', clientAsset('Qualcomm-Logo.png')],
  ['HackerRank', clientAsset('Hackerrank logo.webp')],
  ['Cohesity', clientAsset('Cohesity Logo.webp')],
  ['Spatium', clientAsset('Spatium logo.png')],
  ['Toyota', clientAsset('toyota-logo-png-4.jpg')],
  ['Embassy Group', clientAsset('embassy-group-logo-png_seeklogo-338881.png')],
];

const LIGHT_BACKGROUND_LOGOS = new Set([
  'Amex Bank',
  'Embassy Group',
  'Eurofins Scientific',
  'Godrej',
  'Hitachi',
  'HP',
  'KPMG',
  'Kirloskar',
  'Legrand',
  'Mankind',
  'PayU',
  'Qualcomm',
  'Toyota',
]);

function MarqueeRow({ logos, direction }) {
  const rowRef = useRef(null);
  const dragState = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event) => {
    const row = rowRef.current;
    if (!row) return;

    dragState.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: row.scrollLeft,
    };
    row.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    const row = rowRef.current;
    const { active, startX, startScrollLeft } = dragState.current;
    if (!row || !active) return;

    row.scrollLeft = startScrollLeft - (event.clientX - startX);
  };

  const stopDragging = (event) => {
    const row = rowRef.current;
    if (row?.hasPointerCapture(event.pointerId)) {
      row.releasePointerCapture(event.pointerId);
    }
    dragState.current.active = false;
    setIsDragging(false);
  };

  return (
    <div
      ref={rowRef}
      className={`client-marquee__row${isDragging ? ' client-marquee__row--dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <div className={`client-marquee__track client-marquee__track--${direction}`} aria-live="off">
        {[0, 1].map((copy) => (
          <div className="client-marquee__group" key={copy} aria-hidden={copy === 1}>
            {logos.map(([name, src]) => (
              <div className={`client-marquee__item${LIGHT_BACKGROUND_LOGOS.has(name) ? ' client-marquee__item--light' : ''}`} key={`${direction}-${copy}-${name}`}>
                <img src={src} alt={copy === 0 ? name : ''} loading="lazy" decoding="async" draggable="false" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientMarquee({ className = '' }) {
  return (
    <div className={`client-marquee ${className}`.trim()} aria-label="Ecovation clients">
      <div className="client-marquee__rows">
        <MarqueeRow logos={CLIENT_LOGOS} direction="forward" />
        <MarqueeRow logos={[...CLIENT_LOGOS].reverse()} direction="reverse" />
      </div>
    </div>
  );
}
