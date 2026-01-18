/**
 * @typedef {Object} Member
 * @property {number} id - Unique identifier for the member
 * @property {string} name - Full name of the member
 * @property {string} nickname - Skill-based tagline (e.g., "React Magician", "Deployment Expert")
 * @property {string} title - Position/Role (e.g., "Head", "Co-Head", "Member")
 * @property {string} description - Brief description of the member's expertise and role
 * @property {boolean} starPerformer - Whether the member is a star performer
 * @property {string} image - URL to the member's profile image
 * @property {string} linkedin - LinkedIn profile URL
 * @property {string} github - GitHub profile URL
 * @property {string} profileLink - Internal link to member's profile page
 */

/**
 * @type {Member[]}
 */
const members = [
  {
    id: 1,
    name: "Sarim Ahmed",
    nickname: "Full-Stack Architect",
    title: "Head",
    description: "Leading the Tech Operations team with a focus on innovation and excellence. Specializing in full-stack development and system architecture.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762773185/Screenshot_2025-11-10_at_16.12.46_ifmgrl.png",
    linkedin: "https://www.linkedin.com/in/sarim-ahmed-89412a19a/",
    github: "https://github.com/C41f0N",
    profileLink: "/member/1"
  },
  {
    id: 2,
    name: "Abdullah Azhar",
    nickname: "UI/UX Wizard",
    title: "Co-Head",
    description: "Co-leading the team with expertise in UI/UX design and front-end development. Passionate about creating intuitive user experiences.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988440/me_-_k230691_Abdullah_Azhar_Khan_fyjjme.jpg",
    linkedin: "https://www.linkedin.com/in/abbbdullah",
    github: "https://github.com/abdullahazharkhan",
    profileLink: "/member/2"
  },
  {
    id: 3,
    name: "Raahim Irfan",
    nickname: "Backend Maestro",
    title: "Co-Head",
    description: "Focusing on backend optimization and database management. Expert in performance tuning and scalable architectures.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990476/Screenshot_2025-11-24_at_18.20.52_gplvyo.png",
    linkedin: "https://www.linkedin.com/in/raahimirfan100/",
    github: "https://github.com/raahimirfan100",
    profileLink: "/member/3"
  },
  {
    id: 4,
    name: "Muhammad Rayyan",
    nickname: "QA Guardian",
    title: "Member",
    description: "Dedicated to quality assurance and testing frameworks. Ensuring robust and reliable software delivery.",
    starPerformer: true,
    image: "/src/assets/rayyan.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-rayyan-2501492ab/",
    github: "https://github.com/rayyanm86",
    profileLink: "/member/4"
  },
  {
    id: 5,
    name: "Syed Haider Murtaza",
    nickname: "Security Specialist",
    title: "Member",
    description: "Specializing in payment integrations and security. Committed to building secure and reliable systems.",
    starPerformer: true,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/syed-haider-murtaza",
    github: "https://github.com/syed-haider-murtaza",
    profileLink: "/member/5"
  },
  {
    id: 6,
    name: "Mujtaba Kamran",
    nickname: "Animation Artist",
    title: "Member",
    description: "Creative designer and animator focused on creating engaging user interfaces and smooth animations.",
    starPerformer: true,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988441/IMG_8619_-_k230715_Muhammad_Mujtaba_Kamran_fyt8qe.jpg",
    linkedin: "https://www.linkedin.com/in/mujtaba-kamran",
    github: "https://github.com/Mujtaba-Kamran",
    profileLink: "/member/6"
  },
  {
    id: 7,
    name: "Muhib",
    nickname: "WebSocket Expert",
    title: "Member",
    description: "Real-time systems expert with focus on WebSocket implementations and performance optimization.",
    starPerformer: true,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/muhib",
    github: "https://github.com/muhib",
    profileLink: "/member/7"
  },
  {
    id: 8,
    name: "Zohair Shamsi",
    nickname: "Data Viz Pro",
    title: "Member",
    description: "Data visualization specialist building interactive dashboards and analytics tools for better insights.",
    starPerformer: true,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988604/Screenshot_2025-11-12_at_16.07.15_b1jnfa.png",
    linkedin: "https://www.linkedin.com/in/zohairshamsi",
    github: "https://github.com/Zohair10",
    profileLink: "/member/8"
  },
  {
    id: 9,
    name: "Usaid Sajid",
    nickname: "API Architect",
    title: "Member",
    description: "Backend developer focusing on email systems and API integrations. Building reliable communication systems.",
    starPerformer: true,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/usaid-sajid",
    github: "https://github.com/usaid-sajid",
    profileLink: "/member/9"
  }
  ,
  {
    id: 10,
    name: "Abdul Basit",
    nickname: "Code Quality Champion",
    title: "Member",
    description: "Full-stack developer contributing to various projects with focus on code quality and best practices.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988440/IMG-20250404-WA0024_-_Abdul_Basit_cxfmsl.jpg",
    linkedin: "https://www.linkedin.com/in/connect-abdulbasit",
    github: "https://github.com/connect-abdulbasit",
    profileLink: "/member/10"
  },
  {
    id: 11,
    name: "Jayesha Yamin",
    nickname: "Design Enthusiast",
    title: "Member",
    description: "UI/UX designer creating beautiful and functional interfaces. Passionate about user-centered design.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/jayesha-yamin",
    github: "https://github.com/jayeshayamin",
    profileLink: "/member/11"
  },
  {
    id: 12,
    name: "Kinza Afzal",
    nickname: "Documentation Guru",
    title: "Member",
    description: "Technical writer and documentation specialist ensuring clear and comprehensive project documentation.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990122/Screenshot_2025-11-24_at_18.14.58_avqncz.png",
    linkedin: "https://www.linkedin.com/in/kinza-afzal7-",
    github: "https://github.com/kinza7124",
    profileLink: "/member/12"
  },
  {
    id: 13,
    name: "Aden Hussain",
    nickname: "Backend Engineer",
    title: "Member",
    description: "Backend engineer specializing in API development and server-side architecture.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988443/picaden_-_K250828_Aden_Hussain_sbcqcp.jpg",
    linkedin: "https://www.linkedin.com/in/aden-hussain",
    github: "https://github.com/adenhussain",
    profileLink: "/member/13"
  },
  {
    id: 14,
    name: "Arwa Mansoor",
    nickname: "Frontend Stylist",
    title: "Member",
    description: "Front-end developer with keen eye for styling and user experience improvements.",
    starPerformer: true,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988439/Arwa_Mansoor_-_k240930_Arwa_Mansoor_hb6inv.jpg",
    linkedin: "https://www.linkedin.com/in/arwa-mansoor",
    github: "https://github.com/arwa-mansoor",
    profileLink: "/member/14"
  },
  {
    id: 15,
    name: "Rohaan Zaidi",
    nickname: "Clean Code Advocate",
    title: "Member",
    description: "Front-end developer contributing to modern web applications with clean and efficient code.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988439/IMG_20251123_162401_-_k242027_Syed_Muhammad_Rohaan_Zaidi_z174fh.jpg",
    linkedin: "https://www.linkedin.com/in/rohaan-zaidi-55453a263",
    github: "https://github.com/RohaanZaidi",
    profileLink: "/member/15"
  },
  {
    id: 16,
    name: "Hatim Mustafa",
    nickname: "Bug Hunter",
    title: "Executive",
    description: "QA engineer focused on testing and bug resolution to ensure high-quality software delivery.",
    starPerformer: true,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988440/Screenshot_20250206-155316_1_-_k240673_Hatim_Mustafa_xly55y.jpg",
    linkedin: "https://www.linkedin.com/in/hatim-mustafa-8116ba277",
    github: "https://github.com/Hatim-Mustafa",
    profileLink: "/member/16"
  }
];

export default members;
