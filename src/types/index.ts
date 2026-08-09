import type { LucideIcon } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

/** Any icon usable in the UI: a lucide icon or one of our hand-rolled brand SVGs. */
export type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export interface SocialLink {
  name: string;
  href: string;
  icon: IconComponent;
  color: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillProficiency {
  skill: string;
  years: string;
  level: number;
}

export interface Achievement {
  title: string;
  description: string;
  icon: IconComponent;
  year: string;
}

export interface ProjectTag {
  name: string;
  color: string;
}

/** Raw project record — the shape the reference site keeps in its constants file. */
export interface ProjectSource {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
}

/** Project after it is normalised for the Projects grid. */
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  tagColors: string[];
  github: string | null;
  demo: string | null;
  features: string[];
  impact: string;
  status: string;
}

export interface ProjectFilter {
  id: string;
  name: string;
  icon: IconComponent;
}

export interface ExperienceProject {
  name: string;
  description: string;
  impact: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projects: ExperienceProject[];
}

export interface ContactDetail {
  icon: IconComponent;
  label: string;
  value: string;
  href: string | null;
}

export interface CollaborationOption {
  title: string;
  description: string;
  icon: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export type ThemeMode = 'light' | 'dark';
