const clientAsset = (fileName) => encodeURI(`${import.meta.env.BASE_URL}Ecovation Images/client list/${fileName}`);

const CLIENT_LOGOS = [
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

const LIGHT_BACKGROUND_LOGOS = new Set(['Embassy Group', 'Eurofins Scientific', 'Hitachi', 'KPMG', 'Qualcomm', 'Toyota']);

export default function ClientMarquee({ className = '' }) {
  return (
    <div className={`client-marquee ${className}`.trim()} aria-label="Ecovation clients">
      <div className="client-marquee__track" aria-live="off">
        {[0, 1].map((copy) => (
          <div className="client-marquee__group" key={copy} aria-hidden={copy === 1}>
            {CLIENT_LOGOS.map(([name, src]) => (
              <div className={`client-marquee__item${LIGHT_BACKGROUND_LOGOS.has(name) ? ' client-marquee__item--light' : ''}`} key={`${copy}-${name}`}>
                <img src={src} alt={copy === 0 ? name : ''} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
