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
    linkedin: "https://linkedin.com/in/sarim-ahmed",
    github: "https://github.com/sarim-ahmed",
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
    name: "Abdullah",
    title: "Co-Head",
    image: "https://via.placeholder.com/200/7C3AED/FFFFFF?text=Abdullah",
    linkedin: "https://linkedin.com/in/abdullah",
    github: "https://github.com/abdullah",
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
    name: "Raahim",
    title: "Co-Head",
    image: "https://via.placeholder.com/200/EC4899/FFFFFF?text=Raahim",
    linkedin: "https://linkedin.com/in/raahim",
    github: "https://github.com/raahim",
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
    image: "https://via.placeholder.com/200/8B5CF6/FFFFFF?text=Ahmed",
    linkedin: "https://linkedin.com/in/ahmedali",
    github: "https://github.com/ahmedali",
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
    image: "https://via.placeholder.com/200/A855F7/FFFFFF?text=Fatima",
    linkedin: "https://linkedin.com/in/fatimahassan",
    github: "https://github.com/fatimahassan",
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
    image: "https://via.placeholder.com/200/C084FC/FFFFFF?text=Usman",
    linkedin: "https://linkedin.com/in/usmanmalik",
    github: "https://github.com/usmanmalik",
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
    name: "Zohair",
    title: "Member",
    starPerformer: false,
    image: "https://via.placeholder.com/200/D946EF/FFFFFF?text=Zainab",
    linkedin: "https://linkedin.com/in/zainabraza",
    github: "https://github.com/zainabraza",
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
    image: "https://via.placeholder.com/200/E879F9/FFFFFF?text=Hassan",
    linkedin: "https://linkedin.com/in/hassaniqbal",
    github: "https://github.com/hassaniqbal",
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
];

export default members;
