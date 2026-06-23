import type { ContactLink, NavItem, Project, Skill } from "@/types/content";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const profile = {
  name: "Nael",
  role: "Developer • Designer • Creator",
  description:
    "I craft clean digital products with a focus on smooth interfaces, thoughtful systems, and details that make software feel effortless.",
  githubUrl: "https://github.com/nael",
  discordUrl: "https://discord.com/users/nael",
  discordHandle: "@nael",
  email: "hello@nael.dev"
};

export const aboutCards = [
  {
    eyebrow: "Introduction",
    title: "Design-minded engineering for modern web products.",
    body:
      "Nael builds polished interfaces, scalable frontends, and developer tools that balance visual atmosphere with practical performance."
  },
  {
    eyebrow: "Current Focus",
    title: "Premium web experiences and Discord-powered systems.",
    body:
      "The current stack centers on Next.js, TypeScript, TailwindCSS, Node.js, Prisma, and Discord.js for products that ship quickly and stay maintainable."
  },
  {
    eyebrow: "Experience",
    title: "From landing pages to full product foundations.",
    body:
      "Experience spans responsive UI, backend integrations, database modeling, API design, automation, and production-minded deployment workflows."
  }
];

export const skills: Skill[] = [
  {
    name: "Next.js",
    description: "App Router, metadata, routing, performance, deployment.",
    accent: "from-cyan-300/24 to-white/0"
  },
  {
    name: "React",
    description: "Composable interfaces, stateful flows, accessible components.",
    accent: "from-sky-300/22 to-white/0"
  },
  {
    name: "TypeScript",
    description: "Typed contracts, safer refactors, predictable codebases.",
    accent: "from-indigo-300/20 to-white/0"
  },
  {
    name: "Node.js",
    description: "APIs, services, automation, and server-side foundations.",
    accent: "from-emerald-300/22 to-white/0"
  },
  {
    name: "Discord.js",
    description: "Discord bots, slash commands, workflows, and integrations.",
    accent: "from-violet-300/22 to-white/0"
  },
  {
    name: "TailwindCSS",
    description: "Responsive systems, refined surfaces, fast iteration.",
    accent: "from-teal-300/22 to-white/0"
  },
  {
    name: "PostgreSQL",
    description: "Relational modeling, data integrity, query fundamentals.",
    accent: "from-blue-300/20 to-white/0"
  },
  {
    name: "Prisma",
    description: "Typed database access, schema evolution, clean workflows.",
    accent: "from-rose-300/20 to-white/0"
  }
];

export const projects: Project[] = [
  {
    title: "Aurora Studio",
    description:
      "A refined portfolio and content system for creators who need a fast, expressive web presence.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    thumbnail: "/projects/aurora-studio.svg",
    githubUrl: "https://github.com/nael/aurora-studio",
    liveUrl: "https://aurora.nael.dev"
  },
  {
    title: "Nova Bot",
    description:
      "A Discord.js automation layer with typed commands, clean moderation flows, and polished community utilities.",
    technologies: ["Node.js", "Discord.js", "Prisma"],
    thumbnail: "/projects/nova-bot.svg",
    githubUrl: "https://github.com/nael/nova-bot",
    liveUrl: "https://nova.nael.dev"
  },
  {
    title: "Pulse API",
    description:
      "A production-ready API foundation with PostgreSQL, Prisma models, and secure service boundaries.",
    technologies: ["PostgreSQL", "Prisma", "TypeScript"],
    thumbnail: "/projects/pulse-api.svg",
    githubUrl: "https://github.com/nael/pulse-api",
    liveUrl: "https://pulse.nael.dev"
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: "Discord",
    value: profile.discordHandle,
    href: profile.discordUrl,
    kind: "discord"
  },
  {
    label: "GitHub",
    value: "github.com/nael",
    href: profile.githubUrl,
    kind: "github"
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    kind: "email"
  }
];
