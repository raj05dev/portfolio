import { Brain, Code, Database } from 'lucide-react';
import type { ProjectFilter, ProjectSource } from '@/types';

export const projectSources: ProjectSource[] = [
  {
    name: "Let's Program Blog",
    description: 'A full-stack blog platform built with Angular and Node.js',
    tags: [
      { name: 'Angular', color: 'pink-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'MongoDB', color: 'blue-text-gradient' },
      { name: 'Express', color: 'orange-text-gradient' },
    ],
    image:
      '',
    source_code_link: '',
  },
  {
    name: 'LinkHub',
    description: 'A web app for managing and sharing links',
    tags: [
      { name: 'Angular', color: 'pink-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'MongoDB', color: 'blue-text-gradient' },
      { name: 'Express', color: 'orange-text-gradient' },
    ],
    image:
      '',
    source_code_link: '',
  },
  {
    name: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Tailwind CSS', color: 'cyan-text-gradient' },
      { name: 'TypeScript', color: 'purple-text-gradient' },
      { name: 'Framer Motion', color: 'yellow-text-gradient' },
    ],
    image:
      '',
    source_code_link: '',
  },
  {
    name: 'Dev tracker',
    description: 'A web app for tracking and managing development tasks',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'MongoDB', color: 'cyan-text-gradient' },
      { name: 'TypeScript', color: 'purple-text-gradient' },
    ],
    image:
      '',
    source_code_link: '',
  },
  {
    name: 'Scrum Poker',
    description: 'A web app for creating and managing scrum poker sessions',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Socket.io', color: 'green-text-gradient' },
      { name: 'TypeScript', color: 'purple-text-gradient' },
      { name: 'Tailwind CSS', color: 'cyan-text-gradient' },
    ],
    image:
      '',
    source_code_link: '',
  },
  {
    name: 'Image resizer',
    description: 'A web app for resizing and optimizing images',
    tags: [
      { name: 'Angular', color: 'pink-text-gradient' },
      { name: 'Python', color: 'green-text-gradient' },
      { name: 'Django', color: 'blue-text-gradient' },
      { name: 'Tailwind CSS', color: 'cyan-text-gradient' },
    ],
    image:
      '',
    source_code_link: '',
  },
  {
    name: 'AI content generator',
    description: 'A web app for generating AI content',
    tags: [
      { name: 'Angular', color: 'pink-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'MongoDB', color: 'blue-text-gradient' },
      { name: 'Generative AI', color: 'purple-text-gradient' },
    ],
    image:
      '',
    source_code_link: 'https://ai.rajkumar.dev',
  },
];

export const projectFilters: ProjectFilter[] = [
  { id: 'all', name: 'All Projects', icon: Code },
  { id: 'angular', name: 'Angular', icon: Code },
  { id: 'django', name: 'Django', icon: Code },
  { id: 'express', name: 'Express', icon: Code },
  { id: 'generative-ai', name: 'Generative AI', icon: Brain },
  { id: 'mongodb', name: 'MongoDB', icon: Database },
  { id: 'nodejs', name: 'Node.js', icon: Code },
  { id: 'python', name: 'Python', icon: Code },
  { id: 'react', name: 'React', icon: Code },
  { id: 'socketio', name: 'Socket.io', icon: Code },
  { id: 'tailwind', name: 'Tailwind CSS', icon: Code },
  { id: 'typescript', name: 'TypeScript', icon: Code },
];

/** Filter ids whose label does not literally appear inside the tag names. */
export const filterAliases: Record<string, string> = {
  nodejs: 'node.js',
  socketio: 'socket.io',
  'generative-ai': 'generative ai',
};

export const defaultProjectFeatures: string[] = [
  'Modern, responsive user interface',
  'Optimized performance and accessibility',
  'Secure authentication and data handling',
  'Comprehensive documentation',
  'Continuous integration and deployment',
];

export const defaultProjectImpact = 'Solving real-world problems with elegant solutions';
export const defaultProjectStatus = 'Production Ready';
