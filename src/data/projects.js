export const local = (path) =>
  encodeURI(`${import.meta.env.BASE_URL}Ecovation Images/${path}`);

export const IMAGES = {
  hero: `${import.meta.env.BASE_URL}logo.png`,
  heroLocal: `${import.meta.env.BASE_URL}logo.png`,
  aboutDetail: local('general/about.png'),
  workspaceHero: local('workspace/workspace_bg.png'),
  residentialHero: local('residential/residential_bg.png'),
  residentialService: local('residential/service.jpg'),
  acousticHeroBackground: local('acoustic-panels/acoustic_bg.png'),
  contactHeroBackground: local('general/contact_bg.png'),
  heroVideo: local('hero-video.mp4'),
  studio: local('general/about.jpg'),
  studioSmall: local('workspace/work2.jpg'),
  contact: local('workspace/work3.jpg'),
  contactHero: local('workspace/contact-hero-hd.png'),
  projectOpenOffice: local('projects/open-office.jpeg'),
  projectMeetingRoom: local('projects/meeting-room.jpeg'),
  projectCollaboration: local('projects/collaboration-zone.jpeg'),
  projectReception: local('projects/reception.jpeg'),
  projectBreakoutSpace: local('projects/breakout-space.jpeg'),
  projectWorkspaceInterior: local('projects/workspace-interior.jpeg'),
  workspaceDetailOne: local('workspace/work8.jpg'),
  workspaceDetailTwo: local('workspace/work9.jpg'),
  // Workspaces page / acoustic pages
  openOffice: local('workspace/work1.jpg'),
  meetingRoom: local('workspace/work4.jpg'),
  collaboration: local('workspace/work5.jpg'),
  reception: local('workspace/work6.jpg'),
  acousticPanels: local('acoustic-panels/cards.jpg'),
  acousticHero: local('acoustic-panels/ceiling2.jpg'),
  baffles: local('acoustic-panels/ceiling1.webp'),
  clouds: local('acoustic-panels/ceiling2.jpg'),
  screens: local('acoustic-panels/wall1.webp'),
  customAcoustics: local('acoustic-panels/wall2.jpg'),
  residentialLiving: local('residential/resident1.jpg'),
  residentialBedroom: local('residential/resident2.jpg'),
  residentialOffice: local('residential/resident4.jpg'),
  residentialDetails: local('residential/resident5.jpg'),
  residentialThird: local('residential/resident3.jpg'),
  teamFounder: local('team/founder/founder.jpeg'),
  teamCoFounder: local('team/co-founder/cofounder.jpeg'),
};

/**
 * PROJECTS — featured workspace & acoustic projects.
 *
 * No detailed client facts are fabricated: each entry is a visual,
 * space-typology card (title, category, concise summary). Year and
 * area are intentionally "—" rather than invented. Titles match the
 * project categories the business actually delivers.
 */
export const PROJECTS = [
  {
    id: 'open-office',
    index: '01',
    slug: 'open-office',
    title: 'Open Office',
    category: 'Workspaces',
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Open-plan design', 'Acoustic planning', 'Fit-out'],
    summary: 'Open office environments planned for productive, comfortable and acoustically balanced work.',
    description:
      'Open office environments are one of Ecovation\'s featured workspace typologies, supported by smart space planning and acoustic solutions.',
    approach:
      'Ecovation approaches open office areas through space planning, acoustic comfort and sustainable materials.',
    heroImage: local('projects/open-office.jpeg'),
    gallery: [
      local('workspace/work2.jpg'),
      local('workspace/work3.jpg'),
      local('workspace/work4.jpg'),
    ],
  },
  {
    id: 'meeting-room',
    index: '02',
    slug: 'meeting-room',
    title: 'Meeting Room',
    category: 'Acoustics',
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Meeting rooms', 'Acoustic panels', 'Ceiling clouds'],
    summary: 'Meeting rooms designed for clear speech, privacy and a premium client experience.',
    description:
      'Meeting rooms are a featured Ecovation workspace solution, with planning focused on clear speech, privacy and acoustic comfort.',
    approach:
      'The live offering describes meeting rooms as spaces for clear speech, privacy and a premium client experience.',
    heroImage: local('projects/meeting-room.jpeg'),
    gallery: [
      local('workspace/work6.jpg'),
      local('workspace/work8.jpg'),
      local('workspace/work9.jpg'),
    ],
  },
  {
    id: 'collaboration-zone',
    index: '03',
    slug: 'collaboration-zone',
    title: 'Collaboration Zone',
    category: 'Workspaces',
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Collaboration zones', 'Acoustic screens', 'Furniture'],
    summary: 'Collaborative spaces designed to foster teamwork while maintaining acoustic comfort.',
    description:
      'Collaboration zones are part of Ecovation\'s workspace solutions, balancing teamwork with acoustic comfort.',
    approach:
      'Ecovation uses smart space planning and acoustic solutions to support collaboration and well-being.',
    heroImage: local('projects/collaboration-zone.jpeg'),
    gallery: [
      local('workspace/work9.jpg'),
      local('workspace/work10.jpg'),
      local('workspace/work11.jpg'),
    ],
  },
  {
    id: 'reception',
    index: '04',
    slug: 'reception',
    title: 'Reception',
    category: 'Workspaces',
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Reception areas', 'Brand presence', 'Acoustic panels'],
    summary: 'Reception and lobby environments designed to reflect brand identity from the first impression.',
    description:
      'Reception and lobby environments are designed around brand identity, spatial flow and acoustic comfort.',
    approach:
      'Ecovation identifies reception and lobby spaces as a core workspace application.',
    heroImage: local('projects/reception.jpeg'),
    gallery: [
      local('workspace/work11.jpg'),
      local('workspace/work12.jpg'),
      local('workspace/work13.jpg'),
    ],
  },
  {
    id: 'breakout-space',
    index: '05',
    slug: 'breakout-space',
    title: 'Breakout Space',
    category: 'Acoustics',
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Breakout spaces', 'Soft seating', 'Acoustic panels'],
    summary: 'Breakout spaces designed for quick resets, creative ideas and comfortable acoustics.',
    description:
      'Breakout spaces are a featured workspace solution for relaxed resets and creative ideas.',
    approach:
      'The offering combines space planning with acoustic solutions to support comfort and collaboration.',
    heroImage: local('projects/breakout-space.jpeg'),
    gallery: [
      local('workspace/work13.jpg'),
      local('workspace/work14.jpg'),
      local('workspace/work15.jpg'),
    ],
  },
  {
    id: 'workspace-interior',
    index: '06',
    slug: 'workspace-interior',
    title: 'Workspace Interior',
    category: 'Workspaces',
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Interior design', 'Sustainable materials', 'Custom finishes'],
    summary: 'Modern workspace design and fit-outs that improve productivity, comfort and brand experience.',
    description:
      'Ecovation provides sustainable workplace design and fit-outs with smart space planning, ergonomic layouts and acoustic comfort.',
    approach:
      'The live workspace service covers discovery, space planning, design development, 3D visualisation, execution and handover.',
    heroImage: local('projects/workspace-interior.jpeg'),
    gallery: [
      local('workspace/work1.jpg'),
      local('workspace/work5.jpg'),
      local('workspace/work10.jpg'),
    ],
  },
];