import type { ContactLink, NavItem, Project, Skill } from "@/types/content";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const profile = {
  name: "Revin",
  role: "Developer • Designer • Creator",
  description:
    "I'm looking forward to have better experiences.",
  tiktokUrl: "https://tiktok.com/@r_vnra",
  saweriaUrl: "https://saweria.co/rvnra",
  discordUrl: "https://discord.com/users/1288936739561279618",
  communityUrl: "https://discord.gg/hnM25Q7fvS",
  discordHandle: "@rvnra",
  email: "hello@revin.dev"
};

export const aboutCards = [
  {
    eyebrow: "Introduction",
    title: "Design-minded engineering for modern web products.",
    body:
      "Revin builds polished interfaces, scalable frontends, and developer tools that balance visual atmosphere with practical performance."
  },
  {
    eyebrow: "Current Focus",
    title: "Premium web experiences and Discord-powered systems.",
    body:
      "The current stack centers on a bunch of tools for products that ship quickly and stay maintainable."
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
    name: "Discord.js",
    description: "Created a discord bot with multiple functions.",
    accent: "from-cyan-300/24 to-white/0"
  },
    {
    name: "Node.js",
    description: "Developed fast server-side architectures and real-time backend systems using JavaScript.",
    accent: "from-green-500/24 to-white/0"
  },
  {
    name: "HTML",
    description: "Built semantic structures for web pages with proper SEO and accessibility foundations.",
    accent: "from-orange-500/24 to-white/0"
  },
  {
    name: "CSS",
    description: "Designed responsive layout systems with modern styling and responsive adaptations.",
    accent: "from-blue-500/24 to-white/0"
  },
  {
    name: "JavaScript",
    description: "Implemented dynamic frontend features, state logic, and async API integrations.",
    accent: "from-yellow-400/24 to-white/0"
  },
  {
    name: "Accompany You",
    description: "Of course, why not?",
    accent: "from-yellow-400/24 to-white/0"
  },
];

export const projects: Project[] = [
  {
    title: "Mr. Haven",
    description: "A Discord.js automation layer with typed commands, clean moderation flows, and polished community utilities.",
    technologies: ["Node.js", "Discord.js"],
    thumbnail: "/projects/haven.jpg"
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
    label: "TikTok",
    value: "tiktok.com/@r_vnra",
    href: profile.tiktokUrl,
    kind: "tiktok"
  }
];
