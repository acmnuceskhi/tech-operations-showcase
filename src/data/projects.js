/**
 * @typedef {Object} Project
 * @property {string} id - Unique identifier for the project
 * @property {string} title - Project title
 * @property {string} desc - Short description for project cards
 * @property {string} image - Main project image URL
 * @property {string} link - Internal link to project detail page
 * @property {string} fullDescription - Detailed description for project page
 * @property {string[]} images - Array of project gallery image URLs
 * @property {string} githubUrl - GitHub repository URL
 * @property {number[]} contributors - Array of member IDs who contributed
 */

/**
 * @type {Project[]}
 */
const projects = [
  {
    id: 'p1',
    title: 'Scoreboard',
    desc: 'We developed an ultimate scoreboard for coderscup',
    image: 'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    link: '/project/p1',
    // Extended details for project page
    fullDescription: 'We developed an ultimate scoreboard system for CodersCup 2025, featuring real-time updates, live rankings, and comprehensive analytics. The system handles multiple competitions simultaneously with a sleek, modern interface.',
    images: [
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    ],
    githubUrl: 'https://github.com',
    contributors: [1, 2], // Member IDs
  }, {
    id: 'p2',
    title: 'Scoreboard',
    desc: 'We developed an ultimate scoreboard for coderscup',
    image: 'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    link: '/project/p2',
    fullDescription: 'We developed an ultimate scoreboard system for CodersCup 2025, featuring real-time updates, live rankings, and comprehensive analytics. The system handles multiple competitions simultaneously with a sleek, modern interface.',
    images: [
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    ],
    githubUrl: 'https://github.com',
    contributors: [1, 2],
  }, {
    id: 'p3',
    title: 'Scoreboard',
    desc: 'We developed an ultimate scoreboard for coderscup',
    image: 'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    link: '/project/p3',
    fullDescription: 'We developed an ultimate scoreboard system for CodersCup 2025, featuring real-time updates, live rankings, and comprehensive analytics. The system handles multiple competitions simultaneously with a sleek, modern interface.',
    images: [
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    ],
    githubUrl: 'https://github.com',
    contributors: [1, 2],
  }, {
    id: 'p4',
    title: 'Scoreboard',
    desc: 'We developed an ultimate scoreboard for coderscup',
    image: 'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    link: '/project/p4',
    fullDescription: 'We developed an ultimate scoreboard system for CodersCup 2025, featuring real-time updates, live rankings, and comprehensive analytics. The system handles multiple competitions simultaneously with a sleek, modern interface.',
    images: [
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    ],
    githubUrl: 'https://github.com',
    contributors: [1, 2],
  }, {
    id: 'p5',
    title: 'Scoreboard',
    desc: 'We developed an ultimate scoreboard for coderscup',
    image: 'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    link: '/project/p5',
    fullDescription: 'We developed an ultimate scoreboard system for CodersCup 2025, featuring real-time updates, live rankings, and comprehensive analytics. The system handles multiple competitions simultaneously with a sleek, modern interface.',
    images: [
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    ],
    githubUrl: 'https://github.com',
    contributors: [1, 2],
  }, {
    id: 'p6',
    title: 'Scoreboard',
    desc: 'We developed an ultimate scoreboard for coderscup',
    image: 'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    link: '/project/p6',
    fullDescription: 'We developed an ultimate scoreboard system for CodersCup 2025, featuring real-time updates, live rankings, and comprehensive analytics. The system handles multiple competitions simultaneously with a sleek, modern interface.',
    images: [
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    ],
    githubUrl: 'https://github.com',
    contributors: [1, 2],
  }, {
    id: 'p7',
    title: 'Scoreboard',
    desc: 'We developed an ultimate scoreboard for coderscup',
    image: 'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    link: '/project/p7',
    fullDescription: 'We developed an ultimate scoreboard system for CodersCup 2025, featuring real-time updates, live rankings, and comprehensive analytics. The system handles multiple competitions simultaneously with a sleek, modern interface.',
    images: [
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    ],
    githubUrl: 'https://github.com',
    contributors: [1, 2],
  }, {
    id: 'p8',
    title: 'Scoreboard',
    desc: 'We developed an ultimate scoreboard for coderscup',
    image: 'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    link: '/project/p8',
    fullDescription: 'We developed an ultimate scoreboard system for CodersCup 2025, featuring real-time updates, live rankings, and comprehensive analytics. The system handles multiple competitions simultaneously with a sleek, modern interface.',
    images: [
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    ],
    githubUrl: 'https://github.com',
    contributors: [1, 2],
  }, {
    id: 'p9',
    title: 'Scoreboard',
    desc: 'We developed an ultimate scoreboard for coderscup',
    image: 'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    link: '/project/p9',
    fullDescription: 'We developed an ultimate scoreboard system for CodersCup 2025, featuring real-time updates, live rankings, and comprehensive analytics. The system handles multiple competitions simultaneously with a sleek, modern interface.',
    images: [
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
      'https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762679722/coderscup_vvqybz.png',
    ],
    githubUrl: 'https://github.com',
    contributors: [1, 2],
  },


]
export default projects
