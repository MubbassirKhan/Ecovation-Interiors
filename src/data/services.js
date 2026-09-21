// Ecovation offerings — workspace capabilities and acoustic solutions.
// Content is drawn from the real business positioning; nothing invented.
import { IMAGES } from './projects';

const u = IMAGES;

/* Verified solution lines shown on the Home section. */
export const HOME_SERVICES = [
  {
    id: 'workspaces',
    index: '01',
    title: 'Workspaces',
    blurb:
      'Complete design-to-execution workplace solutions, from concept planning through to fit-out and handover.',
    image: IMAGES.openOffice,
    to: '/workspaces',
  },
  {
    id: 'residential',
    index: '02',
    title: 'Residential',
    blurb:
      'Thoughtfully designed residential interiors combining aesthetics, comfort, sustainability and acoustic performance.',
    image: IMAGES.collaboration,
    to: '/residential',
  },
  {
    id: 'acoustic-panels',
    index: '03',
    title: 'PET Acoustic Panels',
    blurb:
      'Advanced sound solutions made from recycled PET for superior acoustic performance and sustainable interior design.',
    image: IMAGES.acousticPanels,
    to: '/acoustic-panels',
  },
];

/* The workspace solutions Ecovation delivers (/workspaces). */
export const WORKSPACE_FOCUS = [
  'Open office areas',
  'Meeting rooms',
  'Reception & lobby',
  'Breakout spaces',
  'Focus zones',
  'Hybrid collaboration',
];

/* What a workspace is meant to achieve — not simply to look good. */
export const WORKSPACE_OUTCOMES = [
  'Collaborative spaces',
  'Focus zones',
  'Sustainable materials',
  'Productivity enhancement',
];

export const ACOUSTIC_SOLUTIONS = [
  {
    id: 'pet-panels',
    index: '01',
    title: 'Acoustic Baffles',
    blurb:
      'Suspended vertical panels for open spaces and high ceilings, designed to reduce reverberation in large areas.',
    image: IMAGES.acousticPanels,
    notes: ['Open spaces', 'High ceilings', 'Reverberation control'],
  },
  {
    id: 'cell-ceilings',
    index: '02',
    title: 'Cell Ceiling Systems',
    blurb:
      'Modular ceiling systems for comprehensive acoustic coverage in offices and commercial spaces.',
    image: IMAGES.baffles,
    notes: ['Modular system', 'Office interiors', 'Commercial spaces'],
  },
  {
    id: 'cloud-ceilings',
    index: '03',
    title: 'CNC Cut Panels',
    blurb:
      'Precision-cut custom patterns that combine acoustic functionality with architectural design.',
    image: IMAGES.clouds,
    notes: ['Custom patterns', 'Precision cutting', 'Architectural detail'],
  },
  {
    id: 'acoustic-screens',
    index: '04',
    title: 'Acoustic Screens',
    blurb:
      'Portable and flexible solutions for creating private zones in open offices and dynamic spaces.',
    image: IMAGES.screens,
    notes: ['Portable', 'Flexible', 'Private zones'],
  },
  {
    id: 'acoustic-clouds',
    index: '05',
    title: 'Acoustic Clouds',
    blurb:
      'Floating ceiling elements for decorative acoustic treatment that add visual interest while improving room acoustics.',
    image: IMAGES.customAcoustics,
    notes: ['Floating elements', 'Ceiling treatment', 'Decorative acoustic'],
  },
  {
    id: 'printed-panels',
    index: '06',
    title: 'Printed Panels',
    blurb:
      'Custom graphics and designs on acoustic surfaces for branding, artistic expression and unique environments.',
    image: IMAGES.customAcoustics,
    notes: ['Custom graphics', 'Brand expression', 'Printed surfaces'],
  },
];

export const ACOUSTIC_BENEFITS = [
  {
    title: 'Superior sound absorption',
    body: 'NRC ratings range from 0.30 to 0.95 depending on thickness and mounting method.',
  },
  {
    title: 'Versatile applications',
    body: 'Suitable for walls, ceilings, partition screens, furniture and integrated lighting.',
  },
  {
    title: 'Customizable surface',
    body: 'Smooth, pin-receptive and printable surfaces support a wide range of design possibilities.',
  },
  {
    title: 'Moisture resistant',
    body: 'Non-hygroscopic and mold-resistant for long-lasting performance.',
  },
];

export const PET_NOTE =
  'Ecovation transforms post-consumer PET bottles into premium acoustic panels. The panels contain at least 75% recycled PET, are lightweight, durable, non-hygroscopic and mold-resistant, with EN13501-1: B-s1,d0 fire rating.';

export const PANEL_SPECS = [
  '100% polyester fiber (PET)',
  'At least 75% post-consumer recycled PET',
  '9 mm and 12 mm ready stock; 24 mm with 4-week lead time',
  'Standard size: 1220 x 2440 mm; 12 mm also 1220 x 2800 mm',
  'NRC 0.30 - 0.95, depending on thickness and mounting',
  'EN13501-1: B-s1, d0 fire rating',
  'Low VOC, non-hygroscopic and mold-resistant',
  '120+ standard EP-series colours',
];

export const PANEL_APPLICATIONS = [
  'Corporate offices',
  'Studios',
  'Healthcare',
  'Education',
  'Hospitality',
  'Residential interiors',
];