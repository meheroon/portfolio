export const personalInfo = {
  name: "Meherun Nessa Ferdausi",
  shortName: "Meherun",
  designation: "Full Stack Software Engineer | Software QA Engineer | Learning Secure Software Development",
  heroDesignation: "Full Stack Software Engineer | Software QA Engineer",
  heroDescription: "I enjoy building practical, high-impact web applications across product layers. From full-stack MERN projects and AI-powered features to modern Next.js apps, I build systems that are reliable, scalable, and user-centered.",
  photo: "/images/profile.png",
  email: "meherun.dev@gmail.com",
  emailAlt: "meherunnfk@yahoo.com",
  phone: "+880 1729118981",
  whatsapp: "+880 1729118981",
  location: "Dhaka, Bangladesh",
  social: {
    github: "https://github.com/meheroon",
    linkedin: "https://www.linkedin.com/in/meherun-nessa-ferdausi-korobi/",
    facebook: "https://www.facebook.com/rooonroon",
  },
  stats: {
    repositories: 32,
    projects: "15+",
    technologies: "10+",
  },
};

export const aboutText = {
  paragraphs: [
    "Hello! I'm Meherun Nessa Ferdausi, a Full Stack Software Engineer from Dhaka, Bangladesh. My programming journey started with a curiosity about how websites work, and it has since evolved into a deep passion for building full-stack applications and ensuring software quality.",
    "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have experience with Next.js, TypeScript, Tailwind CSS, and Firebase. Alongside development, I work as a Software QA Engineer at Ginilab Ltd., where I perform Manual Testing, API Testing, SQL Testing, and Log Analysis.",
    "What I enjoy most is building things that solve real problems. Whether it's an AI-powered travel planner, a crowdfunding platform, or an ebook marketplace — I love taking an idea from concept to a fully working product. I'm also deeply interested in Secure Software Development and Application Security, and I'm continuously learning to write safer, more reliable code.",
    "Outside of programming, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in web development and cybersecurity.",
  ],
};

export interface Skill {
  name: string;
  percent: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "JavaScript", percent: 90 },
      { name: "TypeScript", percent: 75 },
      { name: "Python", percent: 70 },
      { name: "PHP", percent: 65 },
    ],
  },
  {
    title: "Frontend Development",
    icon: "palette",
    skills: [
      { name: "React.js", percent: 85 },
      { name: "Next.js", percent: 80 },
      { name: "Tailwind CSS", percent: 88 },
      { name: "Flutter", percent: 50 },
    ],
  },
  {
    title: "Backend Development",
    icon: "server",
    skills: [
      { name: "Node.js", percent: 82 },
      { name: "Express.js", percent: 80 },
      { name: "Laravel", percent: 70 },
      { name: "Django", percent: 55 },
      { name: "MongoDB", percent: 75 },
      { name: "MySQL", percent: 70 },
      { name: "REST APIs", percent: 85 },
      { name: "Firebase & JWT", percent: 75 },
    ],
  },
  {
    title: "Testing & QA",
    icon: "bug",
    skills: [
      { name: "Manual Testing", percent: 90 },
      { name: "API Testing", percent: 80 },
      { name: "SQL Testing", percent: 75 },
      { name: "Jira & Bug Tracking", percent: 80 },
      { name: "Log Analysis", percent: 70 },
    ],
  },
];

export const tools = [
  "Git & GitHub",
  "VS Code",
  "Figma",
  "Linux",
  "AI / LLM (OpenAI GPT)",
  "Stripe Integration",
  "Postman",
  "Jira",
];

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  tech: string[];
  challenges: string[];
  improvements: string[];
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    slug: "voyageai",
    title: "VoyageAI — AI Travel Planner",
    shortTitle: "VoyageAI",
    description:
      "A complete AI-powered travel planning platform combining modern web technologies with Large Language Models. Features an AI chat assistant, trip planner, content generator, recommendations engine, and data analyzer. Built with full-stack TypeScript, VoyageAI leverages OpenAI's GPT-4o model to provide intelligent travel suggestions, generate personalized itineraries, and analyze travel data with beautiful visualizations.",
    image: "/images/projects/voyageai.svg",
    tech: ["Next.js 14", "TypeScript", "OpenAI GPT-4o", "MongoDB", "TanStack Query", "Recharts", "Tailwind CSS"],
    challenges: [
      "Integrating OpenAI GPT-4o for multiple AI features (chat, planning, content generation) while managing rate limits and token costs",
      "Building a complex 8-section landing page with skeleton loading states and smooth animations",
      "Implementing role-based dashboards with Recharts data visualization for travel analytics",
      "Managing server state with TanStack Query across 30+ API endpoints with proper caching and invalidation",
    ],
    improvements: [
      "Add real-time collaboration on trip planning so friends can co-edit itineraries",
      "Integrate Google Maps API for interactive route visualization and distance calculations",
      "Add multi-language support for international travelers",
      "Implement offline mode with service workers for accessing saved itineraries without internet",
    ],
    live: "https://voyage-ai-sand.vercel.app",
    github: "https://github.com/meheroon/-voyage-ai",
  },
  {
    slug: "fundspark",
    title: "FundSpark — Crowdfunding Platform",
    shortTitle: "FundSpark",
    description:
      "A full-stack MERN crowdfunding platform where creators raise money for projects. Features a credit system (50 free credits for supporters, 20 for creators), Stripe payment integration, campaign approval workflows, and role-based dashboards. FundSpark connects passionate creators with generous supporters through a transparent and secure funding process.",
    image: "/images/projects/fundspark.svg",
    tech: ["Next.js 14", "React 18", "Node.js", "MongoDB", "Stripe", "Firebase Auth", "Tailwind CSS"],
    challenges: [
      "Designing the credit-based contribution system with a 20:1 withdrawal ratio while maintaining financial accuracy",
      "Implementing multi-role dashboards (Supporter, Creator, Admin) with appropriate permissions and views",
      "Building campaign approval workflow with admin moderation to prevent fraudulent campaigns",
      "Real-time notification system for contributions, withdrawals, and campaign status updates",
    ],
    improvements: [
      "Add social sharing and campaign promotion features to increase visibility",
      "Implement milestone-based fund release so creators receive funds progressively",
      "Add campaign analytics and funding progress charts for better transparency",
      "Build a mobile app for on-the-go contribution and campaign management",
    ],
    live: "https://fundspark-client.vercel.app",
    github: "https://github.com/meheroon/crowdfunding-platform",
  },
  {
    slug: "fable",
    title: "Fable — Digital Ebook Marketplace",
    shortTitle: "Fable",
    description:
      "A modern ebook sharing platform built using the MERN Stack with Next.js 16 and React 19. Features role-based dashboards for readers, writers, and admins, Stripe payment integration, and Firebase authentication. Fable provides a seamless experience for discovering, purchasing, and reading digital books.",
    image: "/images/projects/fable.svg",
    tech: ["Next.js 16", "React 19", "Tailwind CSS", "Firebase Auth", "Stripe", "MongoDB"],
    challenges: [
      "Implementing role-based authorization across reader, writer, and admin dashboards with granular permissions",
      "Integrating Stripe payment flow with webhook handling for reliable payment confirmation",
      "Managing complex state with Firebase Auth and JWT tokens across multiple user roles",
      "Building responsive layouts with Tailwind CSS that work flawlessly on all device sizes",
    ],
    improvements: [
      "Add ebook reader with in-browser PDF rendering for a native reading experience",
      "Implement real-time notifications for new book releases and author updates",
      "Add recommendation engine based on reading history and preferences",
      "Build a mobile app version for iOS and Android",
    ],
    live: "https://fable-client-ten.vercel.app",
    github: "https://github.com/meheroon/fable-client",
  },
  {
    slug: "jobhub",
    title: "JobHub — Job Board Platform",
    shortTitle: "JobHub",
    description:
      "A production-ready full-stack job board with 14 routes, JWT cookie-based authentication, admin dashboard, job management, search/filter/sort/pagination, and fully responsive design with charts. JobHub streamlines the job hunting process with an intuitive interface for both employers and job seekers.",
    image: "/images/projects/jobhub.svg",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "JWT", "Recharts"],
    challenges: [
      "Building 14 routes with role-based middleware protection to ensure proper access control",
      "Implementing JWT auth with HTTP-only cookies and bcrypt hashing for secure authentication",
      "Creating admin dashboard with Recharts data visualization for hiring analytics",
      "Designing search, filtering, sorting, and pagination for job listings with optimal performance",
    ],
    improvements: [
      "Add job application tracking system for employers and candidates",
      "Implement email notifications for new job matches and application updates",
      "Add company profiles and employer dashboards with branding options",
      "Build resume upload and parsing features using AI",
    ],
    live: "https://jobhub-rust.vercel.app",
    github: "https://github.com/meheroon/jobhub",
  },
  {
    slug: "drivefleet",
    title: "DriveFleet — Car Rental Platform",
    shortTitle: "DriveFleet",
    description:
      "A complete car rental platform with separate client and server applications. Full-stack MERN implementation with user authentication, booking management, and vehicle listing. DriveFleet makes it easy to browse, compare, and rent vehicles with a clean and intuitive interface.",
    image: "/images/projects/drivefleet.svg",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    challenges: [
      "Designing the car rental booking flow with real-time availability checking and conflict prevention",
      "Implementing secure user authentication with JWT and role-based access control",
      "Building the backend REST API with Express.js and MongoDB for efficient data management",
      "Handling image uploads for vehicle listings with proper compression and storage",
    ],
    improvements: [
      "Add payment integration for online booking with Stripe or similar providers",
      "Implement real-time vehicle availability updates using WebSockets",
      "Build an admin dashboard for fleet management and booking analytics",
      "Add GPS tracking integration for live vehicle location updates",
    ],
    live: "https://drivefleet-client-nu.vercel.app",
    github: "https://github.com/meheroon/drivefleet-client",
  },
  {
    slug: "python-db",
    title: "Python & Database Projects",
    shortTitle: "Python & DB",
    description:
      "A collection of Python projects including Advanced Library Management CLI, Student Management System, Quiz App Database Design, Hospital Management System DB Design, and Contact Book Management System. These projects demonstrate proficiency in database design, SQL querying, and Python-based CLI application development.",
    image: "/images/projects/python-db.svg",
    tech: ["Python", "MySQL", "SQL", "CLI", "Database Design"],
    challenges: [
      "Designing efficient database schemas for complex relationships with proper normalization",
      "Building CLI interfaces with proper input validation and error handling",
      "Implementing CRUD operations with Python and MySQL with data integrity",
      "Creating Entity-Relationship diagrams for database projects with accurate cardinality",
    ],
    improvements: [
      "Add web interface with Flask or Django for browser-based access",
      "Implement REST API endpoints for the CLI tools to enable integration",
      "Add automated testing suites for comprehensive coverage",
      "Deploy as Docker containers for easy setup and distribution",
    ],
    live: "#",
    github: "https://github.com/meheroon?tab=repositories&language=python",
  },
];

export interface Education {
  date: string;
  title: string;
  institution: string;
  description: string;
}

export const education: Education[] = [
  {
    date: "Bachelor's Degree",
    title: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University — Bangladesh",
    description:
      "Studied core CS fundamentals including Data Structures, Algorithms, Database Systems, Operating Systems, Computer Networks, and Software Engineering. Graduated with a focus on web development and software quality assurance.",
  },
  {
    date: "Higher Secondary Certificate (HSC)",
    title: "Science Group",
    institution: "Ideal School & College — Bangladesh",
    description:
      "Completed HSC in Science group with Physics, Chemistry, and Mathematics. Developed early interest in programming and problem-solving during this period.",
  },
  {
    date: "2026 Roadmap",
    title: "Continuous Learning",
    institution: "Self-Directed",
    description:
      "Becoming Mid-Level Full Stack Engineer · Mastering Backend Development · Improving Software Testing Skills · Learning Secure Coding · Building Cyber Security Projects",
  },
];

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  icon: string;
}

export const experience: Experience[] = [
  {
    role: "Software QA Engineer",
    company: "Ginilab Ltd.",
    duration: "Present",
    description:
      "Performing Manual Testing, API Testing, SQL Testing, and Log Analysis. Tracking bugs and conducting root cause analysis using Jira. Ensuring software quality across the entire development lifecycle.",
    icon: "flask",
  },
  {
    role: "Full Stack Developer",
    company: "Personal & Open Source",
    duration: "2023 — Present",
    description:
      "Built 32 repositories on GitHub including full-stack MERN applications: VoyageAI (AI travel planner), FundSpark (crowdfunding), Fable (ebook marketplace), JobHub (job board), and DriveFleet (car rental).",
    icon: "code",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const resumeSkills = {
  frontend: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "Laravel", "REST APIs", "Python", "PHP"],
  database: ["MongoDB", "MySQL", "Firebase"],
  testing: ["Manual Testing", "API Testing", "SQL Testing", "Jira", "Log Analysis"],
  tools: ["Git & GitHub", "VS Code", "Figma", "Linux", "AI/LLM (OpenAI)", "Stripe", "JWT Auth"],
};

export const currentlyLearning = [
  "Secure Software Development",
  "Application Security (OWASP Top 10)",
  "Networking",
  "Cybersecurity",
  "Advanced Backend Development",
];
