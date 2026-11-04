import dhilshanPortrait from '../assets/dhilshan_portrait.jpg';
import travelAppImg from '../assets/travel_app_mockup.jpg';
import goodreadsUiImg from '../assets/goodreads_ui_mockup.jpg';
import recruitsphereAiImg from '../assets/recruitsphere_ai_mockup.jpg';

import type { Project, Skill, TimelineItem, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: "Dhilshan Mohamed",
  title: "DHILSHAN MOHAMED S.E.",
  role: "Software Engineering Undergraduate",
  yearStatus: "3rd Year (2025–2028)",
  university: "NSBM Green University",
  tagline: "Innovative. Analytical. Unconventional. He doesn't just write code — He gets to the solution.",
  statusText: "Seeking Software Engineering & Full-Stack Development Internship Opportunities",
  email: "Dhilshanmohamed2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhilshan-mohamed-1b77a23a3?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  github: "https://github.com/Dhilshan02",
  facebook: "https://www.facebook.com/dhilshan.mhd?mibextid=wwXIfr&mibextid=wwXIfr",
  instagram: "https://www.instagram.com/dhilshan_mhd?obrf=c3N6OTB3aXlzaDhj&utm_source=qr",
  tiktok: "https://www.tiktok.com/@mr.dhilshan_mhd?_r=1&_t=ZS-9APNdBjj47A",
  photoStudio: "DD PHOTOGRAPHY 95",
  location: "Colombo, Sri Lanka 🇱🇰",
  portrait: dhilshanPortrait,
  cvFilename: "Dhilshan_Mohamed_CV.pdf"
};

export const STATS: StatItem[] = [
  {
    label: "Projects Shipped",
    value: 5,
    suffix: "+",
    description: "Production-ready web apps & APIs"
  },
  {
    label: "Academic Year",
    value: 3,
    suffix: "rd Year",
    description: "BSc (Hons) Software Engineering at NSBM"
  },
  {
    label: "Tech Stack Tools",
    value: 12,
    suffix: "+",
    description: "Languages, Backends, Frontends & DBs"
  },
  {
    label: "Code Commitment",
    value: 100,
    suffix: "%",
    description: "Clean Architecture & High Reliability"
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: "Java", category: "Languages", level: 90, iconName: "Code2", description: "OOP, Multithreading, Enterprise Architecture" },
  { name: "TypeScript", category: "Languages", level: 88, iconName: "FileCode2", description: "Strict Typing, Interfaces, Generics" },
  { name: "JavaScript (ES6+)", category: "Languages", level: 92, iconName: "Code", description: "Async/Await, DOM, Functional Programming" },
  { name: "C#", category: "Languages", level: 85, iconName: "Terminal", description: ".NET Core, Entity Framework, LINQ" },
  { name: "SQL", category: "Languages", level: 88, iconName: "Database", description: "Complex Queries, Joins, Query Optimization" },
  { name: "HTML5 / CSS3", category: "Languages", level: 95, iconName: "Layout", description: "Semantic Markup, Modern Flexbox & Grid" },

  // Frontend
  { name: "React 19", category: "Frontend", level: 92, iconName: "Atom", description: "Custom Hooks, Context API, Virtual DOM" },
  { name: "Vite", category: "Frontend", level: 90, iconName: "Zap", description: "Fast Bundling, HMR, Module Federation" },
  { name: "Tailwind CSS", category: "Frontend", level: 94, iconName: "Palette", description: "Utility-first Design Systems, Responsive Layouts" },
  { name: "Bootstrap", category: "Frontend", level: 85, iconName: "Grid", description: "Component Library & Rapid Prototyping" },

  // Backend
  { name: "Spring Boot", category: "Backend", level: 90, iconName: "Server", description: "REST Services, Spring Security, Spring Data JPA" },
  { name: "ASP.NET Core 8", category: "Backend", level: 86, iconName: "Cpu", description: "Web APIs, EF Core, Dependency Injection" },
  { name: "REST APIs", category: "Backend", level: 92, iconName: "Network", description: "OpenAPI Specs, JSON Web Tokens (JWT)" },

  // Databases & Tools
  { name: "PostgreSQL", category: "Databases & Tools", level: 88, iconName: "Database", description: "Relational Design, Indexing, Triggers" },
  { name: "MySQL", category: "Databases & Tools", level: 90, iconName: "HardDrive", description: "Schema Architecture, Stored Procedures" },
  { name: "Microsoft SQL Server", category: "Databases & Tools", level: 84, iconName: "Server", description: "Enterprise Database Administration" },
  { name: "Git / GitHub", category: "Databases & Tools", level: 92, iconName: "GitBranch", description: "Branching Strategies, PR Code Reviews" },
  { name: "Postman", category: "Databases & Tools", level: 90, iconName: "Send", description: "API Testing, Automated Collections" }
];

export const PROJECTS: Project[] = [
  {
    id: "travel-to-heaven",
    title: "Travel to Heaven",
    category: "Full-Stack",
    description: "Enterprise full-stack travel booking & destination discovery web application built with robust microservice architecture.",
    longDescription: "A comprehensive travel platform that enables users to explore global destinations, book customized travel packages, manage flight schedules, and view interactive itinerary maps. Designed with role-based access control, secure JWT authentication, and automated booking confirmation emails.",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "JPA/Hibernate", "Spring Security", "Tailwind CSS"],
    githubUrl: "https://github.com/dhilshan-mohamed/travel-to-heaven",
    demoUrl: "https://travel-to-heaven-demo.vercel.app",
    image: travelAppImg,
    badge: "Featured Full-Stack",
    featured: true
  },
  {
    id: "goodreads-redesign",
    title: "Goodreads Mobile App Redesign",
    category: "UI/UX Design",
    description: "Comprehensive UI/UX case study transforming Goodreads mobile experience into a modern, voice-enabled reader ecosystem.",
    longDescription: "A human-computer interaction (HCI) driven UX redesign for Goodreads mobile app. Addressed user pain points around cluttered navigation, archaic recommendation engines, and lack of personalized reading progress tracking. Features interactive voice search, customizable bookshelves, and glowing glassmorphic dark mode interfaces.",
    techStack: ["Figma", "UX Research", "HCI Principles", "Design Systems", "Prototyping", "Voice Search"],
    image: goodreadsUiImg,
    badge: "UI/UX Case Study",
    featured: true,
    hasCaseStudy: true
  },
  {
    id: "recruitsphere-ai",
    title: "RecruitSphere AI",
    category: "AI & Cloud",
    description: "AI-driven talent acquisition and candidate matching platform designed for modern HR engineering teams.",
    longDescription: "Leverages modern machine learning scoring algorithms to parse applicant resumes against tech role requirements. Provides interactive analytics dashboards, automated candidate ranking, radar chart skill breakdowns, and interview scheduling workflows.",
    techStack: ["React", "TypeScript", "ASP.NET Core 8", "C#", "SQL Server", "AI Matching Engine"],
    githubUrl: "https://github.com/dhilshan-mohamed/recruitsphere-ai",
    demoUrl: "https://recruitsphere-ai.vercel.app",
    image: recruitsphereAiImg,
    badge: "AI Platform",
    featured: true
  },
  {
    id: "findmymeds",
    title: "FindMyMeds",
    category: "Full-Stack",
    description: "Real-time pharmacy inventory search engine connecting patients with nearby medicine availability.",
    longDescription: "Allows users to search for prescribed medications, view live inventory levels in nearby pharmacies, compare prices, and locate open drugstores via interactive map coordinates. Includes a pharmacy owner management portal for real-time stock updates.",
    techStack: ["React", "Spring Boot", "MySQL", "Geolocation API", "Tailwind CSS"],
    githubUrl: "https://github.com/dhilshan-mohamed/find-my-meds",
    image: travelAppImg,
    badge: "Healthcare App",
    featured: false
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    category: "Full-Stack",
    description: "Enterprise Academic RESTful APIs for student enrollment, grade distribution, and university course management.",
    longDescription: "High-performance backend API service engineering system built for scale. Supports multi-tenant student record management, course registrations, GPA calculations, and automated transcript generation with Swagger OpenAPI documentation.",
    techStack: ["Spring Boot", "MySQL", "Spring Security", "JWT Auth", "Swagger"],
    githubUrl: "https://github.com/dhilshan-mohamed/student-management-system",
    image: recruitsphereAiImg,
    badge: "In Progress",
    featured: false
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "nsbm-degree",
    period: "2025 – 2028 (3rd Year Undergrad)",
    role: "BSc (Hons) Software Engineering",
    institution: "NSBM Green University",
    location: "Homagama, Sri Lanka",
    description: "Pursuing specialized software engineering degree focusing on enterprise architecture, full-stack application development, software quality engineering, and database management systems.",
    achievements: [
      "Maintained strong academic standing across core CS & Software Engineering modules",
      "Lead developer for multiple university software project modules using Java Spring Boot & React",
      "Active participant in tech hackathons & software engineering university circles"
    ],
    skills: ["Spring Boot", "ASP.NET Core 8", "Java", "TypeScript", "Agile Methodologies", "Software Design Patterns"],
    isCurrent: true
  },
  {
    id: "idm-diploma",
    period: "2026",
    role: "International Diploma in Quantity Surveying (Level 4)",
    institution: "Metropolitan College (OTHM Qualifications)",
    location: "Sri Lanka",
    description: "Awarded the OTHM International Diploma in Quantity Surveying (EQF Level 5), achieving 120 credits (60 ECTS) with a PASS in all six units. Assessed in English.",
    achievements: [
      "Passed all 6 units: Surveying, Measurement I, Construction Technology & Drawings, Service Engineering Installation, Quantity Surveying Practice, Bidding Procedure",
      "Achieved 120 total credits and 60 ECTS credits (Pass / Fail grading)",
      "Qualified for the award on 28 September 2026; transcript issued 02 October 2026"
    ],
    skills: ["Surveying", "Measurement", "Construction Technology", "Bidding Procedure"]
  },
  {
    id: "freelance-dev",
    period: "2023 – Present",
    role: "Full-Stack Software Engineering Projects",
    institution: "Independent & Open Source",
    location: "Remote",
    description: "Designing, building, and deploying open-source projects, enterprise REST APIs, and responsive web applications for real-world scenarios.",
    achievements: [
      "Shipped 5+ production-grade web applications utilizing React, Spring Boot, and ASP.NET Core",
      "Implemented automated testing, JWT authentication, and responsive modern glassmorphic UIs"
    ],
    skills: ["React", "Spring Boot", "ASP.NET Core 8", "Git / GitHub", "UI/UX Prototyping"]
  }
];
