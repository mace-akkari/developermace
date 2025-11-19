import {
  Globe,
  Server,
  Database,
  Palette,
  Wrench,
  TestTube,
  Cog,
} from "lucide-react";
import GitHubIcon from "@/components/icons/GitHub";
import LinkedInIcon from "@/components/icons/LinkedIn";

export const personalInfo = {
  name: "Mace Akkari",
  title: "Full Stack Developer",
  email: "developer.mace@gmail.com",
  location: "London",
  avatar: "/images/portfolio-avatar.png",
  bio: "Full-stack developer who builds fast, modern web apps using Next.js, React, and Tailwind CSS. I care about clean code, great UX, and delivering features that actually solve problems. Whether I'm working on my own or as part of a team, I thrive on turning ideas into useful products.",
  resumeUrl: "/images/maceAkkari-CV.pdf",
};

export const socialLinks = [
  {
    name: "GitHub",
    icon: GitHubIcon,
    url: "https://github.com/mace-akkari",
    username: "@mace-akkari",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/maceakkari/",
    username: "Mace Akkari",
  },
];

export const techStack = [
  {
    category: "Frontend",
    icon: Globe,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["SQLight", "Firebase", "MongoDB"],
  },
  {
    category: "Testing",
    icon: TestTube,
    skills: ["Cypress", "Jest"],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "CLI",
      "GitLab",
      "Sanity",
      "Jira",
      "Figma",
      "Notion",
      "VS Code",
      "Chrome Dev Tools",
    ],
  },
  {
    category: "Methodologies",
    icon: Cog,
    skills: ["Agile/Scrum", "TDD", "Mobile First Development"],
  },
  {
    category: "Design",
    icon: Palette,
    skills: [
      "Responsive Design",
      "Component-Based UI",
      "UX Collaboration",
      "Accessibility (WCAG)",
      "Design Systems",
    ],
  },
];

export const experiences = [
  {
    company: "UPSTREAM",
    position: "Consultant → Full Stack Developer",
    duration: "Jan 23 - Aug 23, Oct 24 - Jul 25",
    description:
      "Rejoined Upstream after a successful consulting period, contributing as a full-stack developer across product features, team practices, and technical execution.",
    achievements: [
      "Shaped early product direction through prototyping and stakeholder collaboration",
      "Facilitated retrospectives and supported cross-departmental coordination",
      "Led development of key features during transition from mobile to web app",
    ],
  },
  {
    company: "CLU",
    position: "Full Stack Developer",
    duration: "Jul 23 - Oct 24",
    description:
      "Worked in a small, agile team using a custom framework to build and optimise platform functionality.",
    achievements: [
      "Implemented Google Tag Manager and Analytics to track user behaviour and improve performance",
      "Developed and integrated new features to enhance UX and platform efficiency",
      "Identified and resolved bugs to improve platform stability",
      "Refined team workflows to streamline development processes",
    ],
  },
  {
    company: "ReLyfe",
    position: "Web Developer",
    duration: "Jul 21 - Sep 22",
    description:
      "Contributed to a fast-paced team delivering scalable, mobile-first solutions and improving development workflows.",
    achievements: [
      "Developed and optimised mobile-first features to improve user experience",
      "Improved pipeline efficiency by identifying and resolving bottlenecks",
      "Refactored code for better maintainability and performance",
      "Collaborated with designers in Figma to refine UI/UX",
      "Maintained and expanded Cypress test coverage",
    ],
  },
];

export const projects = [
  {
    title: "Track My Progress",
    description:
      "A gym app that lets users track their training sessions like a journal.",
    image: "/images/trackmyprogress.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Firebase/Firestore",
      "Material-UI",
    ],
    liveUrl: false,
    githubUrl: "https://github.com/mace-akkari/trackmyprogr",
    featured: false,
    status: "inActiveDevelopment",
  },
  {
    title: "Buy The Hour",
    description:
      "A finance app that turns money into hours and tracks purchases in an inventory.",
    image: "/images/BuyTheHour.png",
    technologies: ["Next.js", "Firebase/Firestore", "Tailwind CSS", "Shadcn"],
    liveUrl: "https://buy-the-hour.vercel.app",
    githubUrl: "https://github.com/mace-akkari/buy-the-hour",
    featured: true,
  },
  {
    title: "Company Dashboard",
    description: "A dashboard for a media company.",
    image: "/images/BrrMedia.png",
    technologies: ["Next.js", "Tailwind CSS", "Material-UI"],
    liveUrl: "https://brr-dashboard-xi.vercel.app/",
    githubUrl: "https://github.com/mace-akkari/BRR-Dashboard",
    featured: true,
  },
  {
    title: "The Martian",
    description:
      "After watching the film The Martian, I decided to build a scene from it.",
    image: "/images/TheMartian.png",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://the-martian.vercel.app/",
    githubUrl: "https://github.com/mace-akkari/The-Martian",
    featured: false,
  },
];
