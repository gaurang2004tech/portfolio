export const about = {
  name: "Gaurang Raut",
  role: "Full Stack developer",
  location: "Pune, India",
  phone: "+91 9881151861",
  email: "gaurangraut2004@gmail.com",
  about:
    "I build scalable full-stack systems: retrieval pipelines, agentic workflows, and the infrastructure to run them. I own the full lifecycle from ideation to production, focused on shipping software that delivers measurable impact, smarter systems, and automated workflows.",
};

export const seo = {
  title: `${about.name} | ${about.role}`,
  description:
    "Full Stack developer building production, ecommerce platforms, and scalable SaaS products. Next.js, OpenAI, and modern cloud infrastructure.",
  keywords:
    "full stack developer, Next.js, React, PostgreSQL, OpenAI, portfolio, Gaurang Raut",
};

export const socials = {
  github: "https://github.com/gaurang2004tech",
  email: `mailto:${about.email}`,
};

export const skills = [
  "TypeScript",
  "JAVA",
  "Next.js",
  "React",
  "Express.js",
  "PostgreSQL",
  "prisma ORM",

];


export const experience = [
  {
    company: "Vida Life Sciences",
    url: "https://app.vidalife.in",
    location: "Pune, Remote",
    title: "Full Stack Developer",
    date: "Dec 2025 – Present",
    bullets: [
      "Built a service request and AMC/CMC contract tracking platform used by hospitals to manage equipment maintenance workflows",
      "Implemented real-time technician location tracking for field service visibility",
      "Integrated an AI chat agent for self-diagnosis and troubleshooting before dispatching technicians",
      "Shipped cross-platform native apps for Android and iOS alongside the web dashboard",
    ],
  },
  {
    url: "https://game-ebon-xi.vercel.app/",
    location: "Talegaon Dabhde , Remote",
    title: "Rock, Paper, Scissors Game",
    date: "Dec 2025 – Dec 2025",
    bullets: [
      "Built a simple game of rock, paper, scissors using javascript, HTML and CSS",
      "I have also used supabase for storing the user data and game history",
      "sign and login functionality is also implemented using supabase",
      "vercel is used for hosting the game and it is deployed successfully",
    ],
  },
];

export const education = {
  institution: "D.Y Patil University",
  degree: "B.Tech in Information Technology",
  gpa: "8.10",
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
    id: "item-4",
    title: "Vida Life",
    summary:
      "Service request and AMC/CMC tracking platform for hospital equipment, with real-time technician location, AI chat for self-diagnosis, and native apps on Android and iOS.",
    url: "https://app.vidalife.in",
    image: "/vida.png",
  },
   {
    id: "item-5",
    title: "Rock, Paper, Scissors Game",
    summary:
      "A simple implementation of the classic Rock, Paper, Scissors game with a modern UI.",
    url: "https://game-ebon-xi.vercel.app/",
    image: "/rps.png",
  },
];
