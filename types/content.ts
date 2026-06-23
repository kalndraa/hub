export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Skill = {
  name: string;
  description: string;
  accent: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  kind: "discord" | "github" | "email";
};
