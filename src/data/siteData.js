/**
 * siteData — single source of truth for brand, navigation, contact and
 * the business story. Contact details are the client's real details and
 * must not be changed.
 */

export const SITE = {
  name: 'Ecovation',
  legalName: 'Ecovation Interiors',
  city: 'Bengaluru',
  country: 'India',
  domain: 'https://ecovation.co.in',
  tagline: 'Sustainable Interiors & PET Acoustic Solutions',
  description:
    'Ecovation combines sustainable materials, thoughtful interior design and acoustic innovation to create spaces that perform beautifully across India.',
};

export const CONTACT = {
  phoneDisplay: '+91 95387 78892',
  phoneHref: 'tel:+919538778892',
  whatsappHref: 'https://wa.me/919538778892',
  email: 'info@ecovation.co.in',
  emailHref: 'mailto:info@ecovation.co.in',
  secondaryEmail: 'nida@ecovation.co.in',
  secondaryEmailHref: 'mailto:nida@ecovation.co.in',
  addressLine1: '2nd Floor, Building No. #651, Agumbe, Arpitha Narayan Studio',
  addressLine2: '650, 10th A Cross Road, West of Chord Road, 2nd Stage, 4th B Main, Stage 2, Mahalakshmi Layout, Bengaluru - 560082',
  address: '2nd Floor, Building No. #651, Agumbe, Arpitha Narayan Studio, 650, 10th A Cross Road, West of Chord Road, 2nd Stage, 4th B Main, Stage 2, Mahalakshmi Layout, Bengaluru - 560082',
  region: 'Karnataka, India',
};

export const NAVIGATION = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { 
    label: 'Solutions', 
    submenu: [
      { label: 'Workspaces', to: '/workspaces' },
      { label: 'Residential', to: '/residential' },
      { label: 'Acoustic Panels', to: '/acoustic-panels' },
    ]
  },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export const MARQUEE_WORDS = [
  'Workspaces',
  'PET Acoustic Panels',
  'Acoustic Treatment',
  'Residential Interiors',
  '30+ Repeat Clients',
  '100% Client Satisfaction',
  'End-to-End Delivery',
];

export const LOGO = {
  /** Official logo mark — the client's own asset, never modified. */
  src: encodeURI(`${import.meta.env.BASE_URL}images/logo.png`),
  alt: 'Ecovation — sustainable interiors and PET acoustic solutions, Bengaluru',
};

/* ------------------------------------------------------------
   Business story — real Ecovation content (not invented).
   ------------------------------------------------------------ */

export const HIGHLIGHTS = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '30+', label: 'Repeat Clients' },
  { value: '100%', label: 'Client Satisfaction' },
];

export const KEY_CAPABILITIES = [
  'Sustainable Materials',
  'Acoustic Innovation',
  'Turnkey Execution',
  'Custom Fabrication',
];

export const MISSION_VISION = [
  {
    tag: 'Our mission',
    title: 'To create spaces that perform beautifully.',
    text: "At Ecovation, our mission is to bring together design, functionality and craftsmanship to create spaces that are as purposeful as they are beautiful. We strive to understand every client's vision and transform it into thoughtful, distinctive and practical environments — combining creative design with technical expertise and meticulous execution. From acoustic solutions to complete interiors, we aim to make every space more considered, more functional and more meaningful.",
  },
  {
    tag: 'Our vision',
    title: 'To become a benchmark for how great spaces are designed and delivered.',
    text: 'We envision Ecovation as a design-led interiors company known for original thinking, refined aesthetics, technical excellence and uncompromising attention to detail. Our ambition is to create spaces that are not only admired when they are completed, but continue to inspire how people work, live and experience their surroundings. We aspire to build a brand where every project carries the Ecovation signature — distinctive in design, thoughtful in execution and lasting in impact.',
  },
];

export const WHY_CHOOSE = [
  {
    index: '01',
    title: 'Sustainability first',
    body: 'Every material choice reflects a commitment to responsible sourcing and circular economy principles.',
  },
  {
    index: '02',
    title: 'Acoustic expertise',
    body: 'Acoustic performance, NRC ratings and sound-aware planning shape every solution.',
  },
  {
    index: '03',
    title: 'Execution discipline',
    body: 'On-site coordination, quality checks and accountable delivery on every project.',
  },
];

export const APPROACH_STEPS = [
  {
    index: '01',
    title: 'Discovery',
    body: 'Understand goals, headcount, workflows, and constraints.',
  },
  {
    index: '02',
    title: 'Space Planning',
    body: 'Layouts that optimise flow, collaboration, and focus.',
  },
  {
    index: '03',
    title: 'Design Development',
    body: 'Materials, finishes, lighting, and acoustic comfort details.',
  },
  {
    index: '04',
    title: '3D & Visualization',
    body: 'Preview the look and feel before execution begins.',
  },
  {
    index: '05',
    title: 'Execution',
    body: 'On-site coordination with quality checks and timelines.',
  },
  {
    index: '06',
    title: 'Handover',
    body: 'Final walkthrough, documentation, and support.',
  },
];

/** Real client/brand references — displayed as text wordmarks (no fake logos). */
export const CLIENTS = ['ADT', 'Alphadyne', 'Enfinity', 'Sears', 'UKG'];

export const TEAM = [
  {
    name: 'Sharukh',
    role: 'Founder & Operations Head',
    image: '/Ecovation%20Images/team/founder/founder.jpeg',
    featured: true,
    bio: 'Sharukh is the visionary backbone of Ecovation, shaping the company\'s execution ethos with foresight, discipline and a commitment to excellence. His hands-on operational mastery turns complex ideas into precisely delivered spaces.',
  },
  {
    name: 'Nida',
    role: 'Co-Founder & Business Development Head',
    image: '/Ecovation%20Images/team/co-founder/cofounder.jpeg',
    featured: true,
    bio: 'Nida blends business insight with a natural flair for building meaningful client relationships. She transforms opportunities into long-term partnerships and helps ensure every project reflects Ecovation\'s elegance, precision and innovation.',
  },
  { name: 'Naveen', role: 'Project Manager', image: '/Ecovation%20Images/team/management/naveen-pm.jpeg', bio: 'Naveen coordinates people, timelines and project details to keep every stage of delivery moving with clarity and care.' },
  { name: 'Vishaal', role: 'Project Manager', image: '/Ecovation%20Images/team/management/vishaal-pm.jpeg', bio: 'Vishaal brings structure to project delivery, connecting design intent with smooth coordination and dependable execution.' },
  { name: 'Rakesh', role: 'Purchase', image: '/Ecovation%20Images/team/operations/rakesh-purchase.jpeg', bio: 'Rakesh manages material sourcing and procurement, helping each project receive the right products at the right time.' },
  { name: 'Sneha', role: 'Designer', image: '/Ecovation%20Images/team/design/sneha-designer.jpeg', bio: 'Sneha develops thoughtful design details that bring together material, colour and the character of each space.' },
  { name: 'Haresh', role: 'Accounts', image: '/Ecovation%20Images/team/accounts/haresh-accounts.jpeg', bio: 'Haresh supports the team through careful accounts management and clear financial coordination across projects.' },
];