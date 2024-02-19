import { IFrontMatterV2, PROJECT_CATEGORY } from 'interfaces'

export const PROJECTS: IFrontMatterV2[] = [
  {
    slug: 'bookxm',
    title: 'BookXM',
    description:
      'Creation of a platform for the management of financial credits of different types in a parametric way.',
    coverImage: '/static/projects/marketxm/cover_2.png',
    category: PROJECT_CATEGORY.WORK_PROJECT,
    finished: true,
    publishedAt: 'Feb 1, 2024',
    tags: ['PaaS', 'Fintech', 'Software Architecture'],
    technologies: [
      'AWS',
      'Prisma ORM',
      'PostgreSQL',
      'React.js',
      'TypeScript',
      'Apache Kafka',
      'Express.js'
    ],
    collaborators: ['Cesar Torres'],
    position: ['Fullstack developer']
  },
  {
    slug: 'collxm',
    title: 'CollXM',
    description:
      'Creation of a platform that allows the exchange of derivative financial services between different types of entities.',
    coverImage: '/static/projects/marketxm/market.svg',
    category: PROJECT_CATEGORY.WORK_PROJECT,
    finished: true,
    publishedAt: 'Oct 25, 2023',
    tags: ['Fintech', 'SaaS', 'MVP'],
    technologies: [
      'AWS',
      'Prisma ORM',
      'Postgres',
      'React.js',
      'JavaScript',
      'Express.js'
    ],
    collaborators: ['Cesar Torres', 'Nayru Alexandra Ramirez'],
    position: ['Fullstack developer']
  },

  // {
  //   slug: 'ganaderiapp',
  //   title: 'GanaderiApp',
  //   description:
  //     'Development of a mobile application that allows the visualization of different measurement variables of a greenhouse, also allows to control different process variables, all in real time.',
  //   coverImage: '/static/projects/fitconnect/cover.webp',
  //   category: PROJECT_CATEGORY.SIDE_PROJECT,
  //   finished: true,
  //   published: true,
  //   publishedAt: 'Oct 7, 2023',
  //   tags: ['Livestock', 'Mobile Development', 'Web Development'],
  //   technologies: ['NextJS', 'React Native', 'Supabase', 'Skia', 'TypeScript']
  // },

  {
    slug: 'zenhaus',
    title: 'ZenHaus',
    description:
      'Development of a mobile application that allows the visualization of different measurement variables of a greenhouse, also allows to control different process variables, all in real time.',
    coverImage: '/static/projects/zenhaus/cover.webp',
    category: PROJECT_CATEGORY.SIDE_PROJECT,
    finished: true,
    publishedAt: 'Oct 7, 2023',
    tags: ['Hardware Design', 'Mobile Development', 'IoT Prototyping'],
    technologies: [
      'Amazon Alexa',
      'Firebase',
      'Expo - React Native',
      'TypeScript',
      'MicroPython',
      'Arduino',
      'Skia'
    ],
    position: ['Fullstack developer', 'Electronic engineer']
  },

  {
    slug: 'bitta',
    title: 'Bitta Enterprise',
    description:
      'Development of a mobile application that allows the visualization of different measurement variables of a greenhouse, also allows to control different process variables, all in real time.',
    coverImage: '/static/projects/biita/flow.png',
    category: PROJECT_CATEGORY.WORK_PROJECT,
    finished: true,
    publishedAt: 'Apr 20, 2023',
    tags: ['Startup', 'B2B product'],
    technologies: ['AWS', 'Flask', 'React.js', 'PostgreSQL', 'Python'],
    collaborators: [
      'Sergio Saul Rojas',
      'Julio Cesar Arenas',
      'Wilmer Herrera',
      'Kevin Briceño',
      'Steven Mosquera',
      'Nayru Alexandra Ramirez'
    ],
    position: ['Fullstack Developer']
  }
]

// {
//   slug: 'greenpid',
//   title: 'GreenPID',
//   description:
//     'Development of a mobile application that allows the visualization of different measurement variables of a greenhouse, also allows to control different process variables, all in real time.',
//   coverImage: '/static/projects/fitconnect/cover.webp',
//   category: PROJECT_CATEGORY.FINAL_PROJECT,
//   finished: true,
//   published: true,
//   publishedAt: 'Oct 7, 2023',
//   tags: ['Hardware Design', 'IoT', 'Mobile Development', 'CAD Design'],
//   technologies: ['Firebase', 'JavaScript', 'React Native', 'Arduino']
// },

