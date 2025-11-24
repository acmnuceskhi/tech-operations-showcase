// member details included in the homepage
// 3 clickable links aik linkedIn,github and the profile it self which should take it to the individual member page.
// image is from link generated on clodinary after upload
// title is important for mapping at the home page.
const members = [
  {
    id: 1,
    name: "Sarim Ahmed",
    title: "Head",
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1762773185/Screenshot_2025-11-10_at_16.12.46_ifmgrl.png",
    linkedin: "https://www.linkedin.com/in/sarim-ahmed-89412a19a/",
    github: "https://github.com/C41f0N",
    profileLink: "/member/1",
    contributions: [
      {
        id: 1,
        title: "Built CodersCup Scoreboard",
        description: "Developed the main scoreboard system for CodersCup 2025 with real-time updates",
        date: "2025-11-15",
        type: "feature",
        link: "https://example.com/scoreboard"
      },
      {
        id: 2,
        title: "Fixed Authentication Bug",
        description: "Resolved critical authentication issue affecting user login",
        date: "2025-11-10",
        type: "bugfix",
        link: null
      }
    ]
  },
  {
    id: 2,
    name: "Abdullah Azhar",
    title: "Co-Head",
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988440/me_-_k230691_Abdullah_Azhar_Khan_fyjjme.jpg",
    linkedin: "https://www.linkedin.com/in/abbbdullah",
    github: "https://github.com/abdullahazharkhan",
    profileLink: "/member/2",
    contributions: [
      {
        id: 1,
        title: "Designed UI Components",
        description: "Created reusable UI component library for the team",
        date: "2025-11-12",
        type: "code",
        link: null
      },
      {
        id: 2,
        title: "Implemented Dark Mode",
        description: "Added dark mode support across all pages with smooth transitions",
        date: "2025-11-05",
        type: "feature",
        link: null
      },
      {
        id: 3,
        title: "Code Review Tool",
        description: "Built automated code review tool for pull requests",
        date: "2025-10-28",
        type: "tool",
        link: "https://github.com/example/code-review"
      }
    ]
  },
  {
    id: 3,
    name: "Raahim Irfan",
    title: "Co-Head",
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990476/Screenshot_2025-11-24_at_18.20.52_gplvyo.png",
    linkedin: "https://www.linkedin.com/in/raahimirfan100/",
    github: "https://github.com/raahimirfan100",
    profileLink: "/member/3",
    contributions: [
      {
        id: 1,
        title: "Optimized Database Queries",
        description: "Improved database performance by 40% through query optimization",
        date: "2025-11-08",
        type: "feature",
        link: null
      },
      {
        id: 2,
        title: "Fixed Memory Leak",
        description: "Resolved critical memory leak in background animation system",
        date: "2025-11-01",
        type: "bugfix",
        link: null
      },
      {
        id: 3,
        title: "API Documentation",
        description: "Created comprehensive API documentation for backend services",
        date: "2025-10-25",
        type: "code",
        link: "https://docs.example.com/api"
      }
    ]
  },
  {
    id: 4,
    name: "Muhammad Rayyan",
    title: "Member",
    starPerformer: false,
    image: "/src/assets/rayyan.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-rayyan-2501492ab/",
    github: "https://github.com/rayyanm86",
    profileLink: "/member/4",
    contributions: [
      {
        id: 1,
        title: "Built Testing Framework",
        description: "Developed comprehensive testing framework with 90% code coverage",
        date: "2025-11-18",
        type: "tool",
        link: null
      },
      {
        id: 2,
        title: "Fixed Responsive Layout",
        description: "Resolved mobile responsiveness issues across all pages",
        date: "2025-11-10",
        type: "bugfix",
        link: null
      }
    ]
  },
  {
    id: 5,
    name: "Syed Haider Murtaza",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/syed-haider-murtaza",
    github: "https://github.com/syed-haider-murtaza",
    profileLink: "/member/5",
    contributions: [
      {
        id: 1,
        title: "Integrated Payment Gateway",
        description: "Successfully integrated Stripe payment system with webhook support",
        date: "2025-11-14",
        type: "feature",
        link: "https://github.com/example/payment"
      },
      {
        id: 2,
        title: "Security Audit",
        description: "Conducted security audit and fixed 15 vulnerabilities",
        date: "2025-11-02",
        type: "bugfix",
        link: null
      },
      {
        id: 3,
        title: "Deployment Pipeline",
        description: "Set up CI/CD pipeline with automated testing and deployment",
        date: "2025-10-20",
        type: "tool",
        link: null
      }
    ]
  },
  {
    id: 6,
    name: "Mujtaba Kamran",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988441/IMG_8619_-_k230715_Muhammad_Mujtaba_Kamran_fyt8qe.jpg",
    linkedin: "https://www.linkedin.com/in/mujtaba-kamran",
    github: "https://github.com/Mujtaba-Kamran",
    profileLink: "/member/6",
    contributions: [
      {
        id: 1,
        title: "Redesigned Landing Page",
        description: "Complete redesign of landing page with improved UX",
        date: "2025-11-16",
        type: "feature",
        link: null
      },
      {
        id: 2,
        title: "Animation System",
        description: "Created smooth animation system for page transitions",
        date: "2025-11-07",
        type: "code",
        link: null
      }
    ]
  },
  {
    id: 7,
    name: "Muhib",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/muhib",
    github: "https://github.com/muhib",
    profileLink: "/member/7",
    contributions: [
      {
        id: 1,
        title: "Real-time Chat Feature",
        description: "Implemented WebSocket-based real-time chat system",
        date: "2025-11-13",
        type: "feature",
        link: "https://github.com/example/chat"
      },
      {
        id: 2,
        title: "Performance Optimization",
        description: "Reduced page load time by 60% through optimization",
        date: "2025-10-30",
        type: "code",
        link: null
      }
    ]
  },
  {
    id: 8,
    name: "Zohair Shamsi",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988604/Screenshot_2025-11-12_at_16.07.15_b1jnfa.png",
    linkedin: "https://www.linkedin.com/in/zohairshamsi",
    github: "https://github.com/Zohair10",
    profileLink: "/member/8",
    contributions: [
      {
        id: 1,
        title: "Data Analytics Dashboard",
        description: "Built interactive analytics dashboard with charts and graphs",
        date: "2025-11-11",
        type: "feature",
        link: null
      },
      {
        id: 2,
        title: "Export Functionality",
        description: "Added PDF and Excel export features for reports",
        date: "2025-11-03",
        type: "feature",
        link: null
      },
      {
        id: 3,
        title: "Bug Tracking System",
        description: "Developed internal bug tracking and management system",
        date: "2025-10-22",
        type: "tool",
        link: null
      }
    ]
  },
  {
    id: 9,
    name: "Usaid Sajid",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/usaid-sajid",
    github: "https://github.com/usaid-sajid",
    profileLink: "/member/9",
    contributions: [
      {
        id: 1,
        title: "Email Notification System",
        description: "Implemented automated email notification system with templates",
        date: "2025-11-09",
        type: "feature",
        link: null
      },
      {
        id: 2,
        title: "Fixed CORS Issues",
        description: "Resolved cross-origin resource sharing configuration issues",
        date: "2025-10-27",
        type: "bugfix",
        link: null
      }
    ]
  }
  ,
  {
    id: 10,
    name: "Abdul Basit",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988440/IMG-20250404-WA0024_-_Abdul_Basit_cxfmsl.jpg",
    linkedin: "https://www.linkedin.com/in/connect-abdulbasit",
    github: "https://github.com/connect-abdulbasit",
    profileLink: "/member/10",
    contributions: [
      {
        id: 1,
        title: "Contributed to Scoreboard",
        description: "Assisted implementation and testing for the Scoreboard project",
        date: "2025-11-24",
        type: "code",
        link: null
      }
    ]
  },
  {
    id: 11,
    name: "Jayesha Yamin",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990835/Screenshot_2025-11-24_at_18.22.29_s4wts0.png",
    linkedin: "https://www.linkedin.com/in/jayesha-yamin",
    github: "https://github.com/jayeshayamin",
    profileLink: "/member/11",
    contributions: [
      {
        id: 1,
        title: "Contributed to Project 2",
        description: "Helped design UI and components for Project 2",
        date: "2025-11-24",
        type: "feature",
        link: null
      }
    ]
  },
  {
    id: 12,
    name: "Kinza Afzal",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763990122/Screenshot_2025-11-24_at_18.14.58_avqncz.png",
    linkedin: "https://www.linkedin.com/in/kinza-afzal7-",
    github: "https://github.com/kinza7124",
    profileLink: "/member/12",
    contributions: [
      {
        id: 1,
        title: "Contributed to Project 3",
        description: "Worked on integrations and documentation for Project 3",
        date: "2025-11-24",
        type: "tool",
        link: null
      }
    ]
  },
  {
    id: 13,
    name: "Aden Hussain",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988443/picaden_-_K250828_Aden_Hussain_sbcqcp.jpg",
    linkedin: "https://www.linkedin.com/in/aden-hussain",
    github: "https://github.com/adenhussain",
    profileLink: "/member/13",
    contributions: [
      {
        id: 1,
        title: "Contributed to Project 4",
        description: "Implemented backend support and API endpoints for Project 4",
        date: "2025-11-24",
        type: "code",
        link: null
      }
    ]
  },
  {
    id: 14,
    name: "Arwa Mansoor",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988439/Arwa_Mansoor_-_k240930_Arwa_Mansoor_hb6inv.jpg",
    linkedin: "https://www.linkedin.com/in/arwa-mansoor",
    github: "https://github.com/arwa-mansoor",
    profileLink: "/member/14",
    contributions: [
      {
        id: 1,
        title: "Contributed to Project 5",
        description: "Worked on project styling and UX improvements for Project 5",
        date: "2025-11-24",
        type: "feature",
        link: null
      }
    ]
  },
  {
    id: 15,
    name: "Rohaan Zaidi",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988439/IMG_20251123_162401_-_k242027_Syed_Muhammad_Rohaan_Zaidi_z174fh.jpg",
    linkedin: "https://www.linkedin.com/in/rohaan-zaidi-55453a263",
    github: "https://github.com/RohaanZaidi",
    profileLink: "/member/15",
    contributions: [
      {
        id: 1,
        title: "Contributed to Scoreboard",
        description: "Assisted with front-end implementation for the Scoreboard",
        date: "2025-11-24",
        type: "code",
        link: null
      }
    ]
  },
  {
    id: 16,
    name: "Hatim Mustafa",
    title: "Member",
    starPerformer: false,
    image: "https://res.cloudinary.com/dlkt7gfbc/image/upload/v1763988440/Screenshot_20250206-155316_1_-_k240673_Hatim_Mustafa_xly55y.jpg",
    linkedin: "https://www.linkedin.com/in/hatim-mustafa-8116ba277",
    github: "https://github.com/Hatim-Mustafa",
    profileLink: "/member/16",
    contributions: [
      {
        id: 1,
        title: "Contributed to Project 2",
        description: "Worked on testing and bug fixes for Project 2",
        date: "2025-11-24",
        type: "bugfix",
        link: null
      }
    ]
  }
];

export default members;
