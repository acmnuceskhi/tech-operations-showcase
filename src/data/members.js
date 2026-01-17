// member details included in the homepage
// 3 clickable links aik linkedIn,github and the profile it self which should take it to the individual member page.
// image is from link generated on clodinary after upload
// title is important for mapping at the home page.
const members = [
  {
    id: 1,
    name: "Sarim Ahmed",
    title: "Head",
    description: "Leading the Tech Operations team with a focus on innovation and excellence. Specializing in full-stack development and system architecture.",
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762773185/Screenshot_2025-11-10_at_16.12.46_ifmgrl.png",
    linkedin: "https://www.linkedin.com/in/sarim-ahmed-89412a19a/",
    github: "https://github.com/C41f0N",
    profileLink: "/member/1",
    projects: ["Scoreboard", "Scoreboard"]
  },
  {
    id: 2,
    name: "Abdullah Azhar",
    title: "Co-Head",
    description: "Co-leading the team with expertise in UI/UX design and front-end development. Passionate about creating intuitive user experiences.",
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988440/me_-_k230691_Abdullah_Azhar_Khan_fyjjme.jpg",
    linkedin: "https://www.linkedin.com/in/abbbdullah",
    github: "https://github.com/abdullahazharkhan",
    profileLink: "/member/2",
    projects: ["Scoreboard", "Scoreboard"]
  },
  {
    id: 3,
    name: "Raahim Irfan",
    title: "Co-Head",
    description: "Focusing on backend optimization and database management. Expert in performance tuning and scalable architectures.",
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990476/Screenshot_2025-11-24_at_18.20.52_gplvyo.png",
    linkedin: "https://www.linkedin.com/in/raahimirfan100/",
    github: "https://github.com/raahimirfan100",
    profileLink: "/member/3",
    projects: ["Scoreboard"]
  },
  {
    id: 4,
    name: "Muhammad Rayyan",
    title: "Member",
    description: "Dedicated to quality assurance and testing frameworks. Ensuring robust and reliable software delivery.",
    starPerformer: false,
    image: "/src/assets/rayyan.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-rayyan-2501492ab/",
    github: "https://github.com/rayyanm86",
    profileLink: "/member/4",
    projects: ["Scoreboard"]
  },
  {
    id: 5,
    name: "Syed Haider Murtaza",
    title: "Member",
    description: "Specializing in payment integrations and security. Committed to building secure and reliable systems.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/syed-haider-murtaza",
    github: "https://github.com/syed-haider-murtaza",
    profileLink: "/member/5",
    projects: ["Scoreboard"]
  },
  {
    id: 6,
    name: "Mujtaba Kamran",
    title: "Member",
    description: "Creative designer and animator focused on creating engaging user interfaces and smooth animations.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988441/IMG_8619_-_k230715_Muhammad_Mujtaba_Kamran_fyt8qe.jpg",
    linkedin: "https://www.linkedin.com/in/mujtaba-kamran",
    github: "https://github.com/Mujtaba-Kamran",
    profileLink: "/member/6",
    projects: ["Scoreboard"]
  },
  {
    id: 7,
    name: "Muhib",
    title: "Member",
    description: "Real-time systems expert with focus on WebSocket implementations and performance optimization.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/muhib",
    github: "https://github.com/muhib",
    profileLink: "/member/7",
    projects: ["Scoreboard"]
  },
  {
    id: 8,
    name: "Zohair Shamsi",
    title: "Member",
    description: "Data visualization specialist building interactive dashboards and analytics tools for better insights.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988604/Screenshot_2025-11-12_at_16.07.15_b1jnfa.png",
    linkedin: "https://www.linkedin.com/in/zohairshamsi",
    github: "https://github.com/Zohair10",
    profileLink: "/member/8",
    projects: ["Scoreboard"]
  },
  {
    id: 9,
    name: "Usaid Sajid",
    title: "Member",
    description: "Backend developer focusing on email systems and API integrations. Building reliable communication systems.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/usaid-sajid",
    github: "https://github.com/usaid-sajid",
    profileLink: "/member/9",
    projects: ["Scoreboard"]
  }
  ,
  {
    id: 10,
    name: "Abdul Basit",
    title: "Member",
    description: "Full-stack developer contributing to various projects with focus on code quality and best practices.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988440/IMG-20250404-WA0024_-_Abdul_Basit_cxfmsl.jpg",
    linkedin: "https://www.linkedin.com/in/connect-abdulbasit",
    github: "https://github.com/connect-abdulbasit",
    profileLink: "/member/10",
    projects: ["Scoreboard"]
  },
  {
    id: 11,
    name: "Jayesha Yamin",
    title: "Member",
    description: "UI/UX designer creating beautiful and functional interfaces. Passionate about user-centered design.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/jayesha-yamin",
    github: "https://github.com/jayeshayamin",
    profileLink: "/member/11",
    projects: ["Scoreboard"]
  },
  {
    id: 12,
    name: "Kinza Afzal",
    title: "Member",
    description: "Technical writer and documentation specialist ensuring clear and comprehensive project documentation.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990122/Screenshot_2025-11-24_at_18.14.58_avqncz.png",
    linkedin: "https://www.linkedin.com/in/kinza-afzal7-",
    github: "https://github.com/kinza7124",
    profileLink: "/member/12",
    projects: ["Scoreboard"]
  },
  {
    id: 13,
    name: "Aden Hussain",
    title: "Member",
    description: "Backend engineer specializing in API development and server-side architecture.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988443/picaden_-_K250828_Aden_Hussain_sbcqcp.jpg",
    linkedin: "https://www.linkedin.com/in/aden-hussain",
    github: "https://github.com/adenhussain",
    profileLink: "/member/13",
    projects: ["Scoreboard"]
  },
  {
    id: 14,
    name: "Arwa Mansoor",
    title: "Member",
    description: "Front-end developer with keen eye for styling and user experience improvements.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988439/Arwa_Mansoor_-_k240930_Arwa_Mansoor_hb6inv.jpg",
    linkedin: "https://www.linkedin.com/in/arwa-mansoor",
    github: "https://github.com/arwa-mansoor",
    profileLink: "/member/14",
    projects: ["Scoreboard"]
  },
  {
    id: 15,
    name: "Rohaan Zaidi",
    title: "Member",
    description: "Front-end developer contributing to modern web applications with clean and efficient code.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988439/IMG_20251123_162401_-_k242027_Syed_Muhammad_Rohaan_Zaidi_z174fh.jpg",
    linkedin: "https://www.linkedin.com/in/rohaan-zaidi-55453a263",
    github: "https://github.com/RohaanZaidi",
    profileLink: "/member/15",
    projects: ["Scoreboard"]
  },
  {
    id: 16,
    name: "Hatim Mustafa",
    title: "Member",
    description: "QA engineer focused on testing and bug resolution to ensure high-quality software delivery.",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988440/Screenshot_20250206-155316_1_-_k240673_Hatim_Mustafa_xly55y.jpg",
    linkedin: "https://www.linkedin.com/in/hatim-mustafa-8116ba277",
    github: "https://github.com/Hatim-Mustafa",
    profileLink: "/member/16",
    projects: ["Scoreboard"]
  }
];

export default members;
