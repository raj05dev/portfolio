import { Award, Shield, Star, Trophy } from 'lucide-react';
import type { Achievement, Skill, SkillProficiency } from '@/types';

/**
 * Icons come from Devicon via the jsDelivr CDN (full-colour SVGs, so they read on
 * both the light and dark card backgrounds). Claude has no Devicon entry, so it
 * uses the Simple Icons colour CDN, which serves the mark in its brand colour.
 */
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const technologies: Skill[] = [
  { name: 'Angular', icon: `${DEVICON}/angular/angular-original.svg` },
  { name: 'React JS', icon: `${DEVICON}/react/react-original.svg` },
  { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: 'RxJS', icon: `${DEVICON}/rxjs/rxjs-original.svg` },
  { name: 'NgRx', icon: `${DEVICON}/ngrx/ngrx-original.svg` },
  { name: 'Redux', icon: `${DEVICON}/redux/redux-original.svg` },
  { name: 'Tailwind CSS', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
  { name: 'Postman', icon: `${DEVICON}/postman/postman-original.svg` },
  // Paired as one entry: Jasmine is the framework, Karma the runner, and 12 fills
  // the lg:grid-cols-6 grid as two exact rows.
  { name: 'Jasmine & Karma', icon: `${DEVICON}/jasmine/jasmine-original.svg` },
  { name: 'Claude Code', icon: 'https://cdn.simpleicons.org/claude' },
];

export const achievements: Achievement[] = [
  {
    title: 'Front End Developer',
    description: 'Expertise in Angular, React, TypeScript, and AI-assisted development with Claude Code',
    icon: Trophy,
    year: '6.5+ years',
  },
  {
    title: 'Pat On The Back Award',
    description: 'Recognized at Perfios for technical excellence and system stability',
    icon: Award,
    year: 'Jun 2025',
  },
  {
    title: 'Apex Award — Extra Miler',
    description: 'Recognized at Accenture for exceeding delivery milestones under compressed schedules',
    icon: Star,
    year: '2021',
  },
  {
    title: 'Fintech Integrations Specialist',
    description: 'Delivered secure e-KYC, e-Sign, and payment gateway integrations for high-volume financial workflows',
    icon: Shield,
    year: 'Ongoing',
  },
];

export const skillProficiencies: SkillProficiency[] = [
  { skill: 'Angular (8 to 18+) & TypeScript', years: '6+ years', level: 95 },
  { skill: 'React (Hooks, Context, Redux)', years: '4+ years', level: 90 },
  { skill: 'JavaScript (ES6+), HTML5 & CSS3/SCSS', years: '6.5 years', level: 90 },
  { skill: 'RxJS & State Management (NgRx, Redux, Zustand)', years: '5+ years', level: 88 },
  { skill: 'Unit Testing (Jest, RTL, Jasmine, Karma)', years: '5+ years', level: 88 },
  { skill: 'Performance & Core Web Vitals', years: '3+ years', level: 85 },
  { skill: 'e-KYC, e-Sign & Payment Integrations', years: '3+ years', level: 85 },
  { skill: 'Git, CI/CD & Azure DevOps', years: '5+ years', level: 80 },
];

export const journeyParagraphs: string[] = [
  'My passion for web development began during my college years when I discovered the power of creating interactive and useful applications. What started as curiosity quickly evolved into a career dedicated to building robust, scalable, and user-friendly web applications.',
  "Over the past 6.5+ years, I've had the privilege of working across fintech, insurance, and government sectors, crafting high-performance front-end experiences with React and Angular. From integrating secure e-KYC, e-Sign, and payment ecosystems to optimizing Core Web Vitals and accelerating delivery through AI-assisted development with Claude Code, my goal has always been to create efficient, scalable solutions and make technology accessible to everyone.",
  "Beyond delivering features, I care about how a team works. I've set Git branching and code-review standards that cut merge conflicts, driven technical analysis and API-design discussions with back-end teams, and championed AI-assisted engineering so everyone ships faster — not just me.",
];
