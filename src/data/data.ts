export const about = {
  name: "Rishabh Kumar",
  role: "Full Stack & AI Engineer",
  location: "Pune, India",
  phone: "+91 8340333963",
  email: "rishabhkr351@gmail.com",
  about:
    "I build AI-powered products and scalable full-stack systems: retrieval pipelines, agentic workflows, and the infrastructure to run them. I own the full lifecycle from ideation to production, focused on shipping software that delivers measurable impact, smarter systems, and automated workflows.",
};

export const seo = {
  title: `${about.name} | ${about.role}`,
  description:
    "Full Stack & AI Engineer building production AI systems, ecommerce platforms, and scalable SaaS products. Next.js, Python, OpenAI, and modern cloud infrastructure.",
  keywords:
    "full stack developer, AI engineer, Next.js, React, Python, OpenAI, portfolio, Rishabh Kumar",
};

export const socials = {
  github: "https://github.com/rishabhkr351",
  email: `mailto:${about.email}`,
};

export const skills = [
  "TypeScript",
  "Python",
  "SQL",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "Prisma ORM",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Nginx",
  "CI/CD",
  "Vector DBs",
  "RAG",
  "Agent SDKs",

];

export const experience = [
  {
    company: "PixelV",
    location: "Dubai, Remote",
    title: "CTO",
    date: "June 2025 – Present",
    bullets: [
      "Own hiring, system architecture, technical direction, and stakeholder communication across all product lines",
      "Built AI-powered training & certification platform for Dubai Police with compliance tracking and analytics dashboards",
      "Engineered AI onboarding pipeline with document processing and CV-based candidate segmentation, reducing onboarding time by 75%",
      "Architected SabaiFlow, a hospitality OS integrating POS, KDS, inventory, staff scheduling, and accounting with agentic AI features",
      "Built Synthopia, a multi-agent AI marketing platform with brand analysis, content generation across 8 channels, and competitor intelligence",
      "Shipped BeanBrewBeyond, a PWA ordering platform for a cafe chain with loyalty rewards, community features, and kitchen order flows",
      "Implemented AI financial analytics engine improving decision-making speed by 40%",
    ],
  },
  {
    company: "Vida Life Sciences",
    location: "Pune, India",
    title: "Full Stack & AI Engineer",
    date: "Dec 2025 – Apr 2026",
    bullets: [
      "Built a service request and AMC/CMC contract tracking platform used by hospitals to manage equipment maintenance workflows",
      "Implemented real-time technician location tracking for field service visibility",
      "Integrated an AI chat agent for self-diagnosis and troubleshooting before dispatching technicians",
      "Shipped cross-platform native apps for Android and iOS alongside the web dashboard",
    ],
  },
  {
    company: "SinXSolutions",
    location: "Dubai, Remote",
    title: "Full Stack & AI Engineer",
    date: "June 2024 – May 2025",
    bullets: [
      "Worked on a RAG-powered recommendation and bundling engine using embedding models and Qdrant db, driving personalized product discovery/promotions and increased AOV",
      "Developed admin dashboard with AI-powered PIM for automated product data generation and real-time inventory tracking",
      "Deployed self-hosted internal operations infrastructure on Proxmox-managed VPS with Docker and Nginx, reducing operational costs by 60%",
      "Set up CI/CD pipelines with GitHub Actions: automated testing, preview deployments, and zero-downtime production releases",
      "Built AI automation workflows using MAKE.com, n8n, LLMs, and voice agents for lead processing and internal ops",
      "Developed MyCareergrowth.ai, an AI career platform with ATS-optimized resume generation, agentic job search & application, voice-based mock interviews with feedback system, and personalized learning roadmaps with ai curated and generated courses",
    ],
  },
];

export const education = {
  institution: "D.Y Patil University",
  degree: "B.Tech in Information Technology",
  gpa: "8.68",
  date: "2022 – 2026",
};

export interface GalleryLink {
  label: string;
  url: string;
  thumbnail?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  links?: GalleryLink[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: "item-1",
    title: "SabaiFlow",
    summary:
      "Hospitality operating system with POS, kitchen display, inventory, staff scheduling, and accounting, powered by agentic AI for smarter ops.",
    url: "https://sabaiflow.co",
    image: "/sabaiflow.png",
  },
  {
    id: "item-2",
    title: "BeanBrewBeyond",
    summary:
      "Cafe chain PWA with mobile ordering, loyalty rewards, community features, and a brand showcase, built for seamless in-store and online experiences.",
    url: "https://beanbrewbeyond.com",
    image: "/beanbrewbeyond.png",
    links: [
      {
        label: "Brand Site",
        url: "https://beanbrewbeyond.com",
        thumbnail: "/beanbrewbeyond.png",
      },
      {
        label: "Ordering App",
        url: "https://app.beanbrewbeyond.com",
        thumbnail: "/beanbrewbeyond.png",
      },
    ],
  },
  {
    id: "item-3",
    title: "Synthopia",
    summary:
      "AI marketing platform with 7+ specialized agents that generate on-brand content across 8 channels in one click, with brand analysis, content calendar, and competitor intelligence.",
    url: "https://synthopia.ai",
    image: "/synthopia.png",
  },
  {
    id: "item-4",
    title: "Vida Life",
    summary:
      "Service request and AMC/CMC tracking platform for hospital equipment, with real-time technician location, AI chat for self-diagnosis, and native apps on Android and iOS.",
    url: "https://app.vidalife.in",
    image: "/vida.png",
  },
  {
    id: "item-5",
    title: "Serenaya",
    summary:
      "Luxury skincare e-commerce built around African-sourced ingredients, with curated product rituals, bundle builder, testimonials, and newsletter-driven community.",
    url: "https://serenaya.co",
    image: "/serenaya.png",
  },
];
