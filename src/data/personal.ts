import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import type { NavItem, SocialLink, Stat } from '@/types';

export const personal = {
  name: 'Raj Kumar',
  initials: 'RK',
  firstName: 'Raj',
  lastName: 'Kumar',
  jobTitle: 'Front End Developer',
  greeting: "Hello, I'm",
  location: 'Bengaluru',
  yearsOfExperience: '6.5+ Years Experience',
  email: 'ksraj0528@gmail.com',
  /**
   * Pre-cropped square variants, so the browser never has to crop or downscale
   * the full portrait. `avatar` is the fallback for browsers without WebP.
   */
  avatar: '/avatar-900.jpg',
  avatarWebpSrcSet: '/avatar-320.webp 320w, /avatar-640.webp 640w, /avatar-900.webp 900w',
  avatarJpegSrcSet: '/avatar-320.jpg 320w, /avatar-640.jpg 640w, /avatar-900.jpg 900w',
  // Matches the hero circle: 5/6 of w-80 on mobile, 5/6 of w-96 from lg up.
  avatarSizes: '(min-width: 1024px) 320px, 267px',
  ogImage: 'https://www.rajkumar.dev/og-image.jpg',
  resumeUrl:
    'https://drive.google.com/file/d/1eWM2FVQwfJDdKwyaLPjeyeYCQzAhXpUz/view?usp=sharing',
  siteUrl: 'https://www.rajkumar.dev',
  youtubeUrl: '',
  intro:
    'A Front End Developer with expertise in Angular, React, and AI-assisted development using Claude Code. Passionate about sharing knowledge and creating resources for developers. With over 6.5 years of experience developing web applications and fostering communities where learning and growth are at the forefront.',
  description:
    'Front End Developer with 6.5+ years of experience in Angular, React, and TypeScript. Expert in building scalable, high-performance web applications and secure fintech integrations.',
  footerBio:
    'Front End Developer with 6.5+ years of experience building scalable, high-performance web applications with React and Angular. Passionate about AI-assisted development using Claude Code, Core Web Vitals performance work, and secure fintech integrations. Based in Bengaluru.',
} as const;

export const typewriterWords: string[] = [
  'Front End Developer',
  // 'Community Builder',
  // 'Tech Blogger',
  'Angular Expert',
  'React'
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raj-kumar-ab4029b6/',
    icon: LinkedinIcon,
    color: 'hover:text-blue-600',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/raj05dev',
    icon: GithubIcon,
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  // {
  //   name: 'Telegram',
  //   href: '',
  //   icon: PlaneTakeoff,
  //   color: 'hover:text-blue-500',
  // },
  {
    name: 'Email',
    href: 'mailto:ksraj0528@gmail.com',
    icon: Mail,
    color: 'hover:text-green-600',
  },
];

/** `sameAs` entries for the Person JSON-LD block. */
export const sameAsLinks: string[] = [
  'https://www.linkedin.com/in/raj-kumar-ab4029b6/',
  'https://github.com/raj05dev',
  // 'https://t.me/sashik30',
];

export const heroStats: Stat[] = [
  { label: 'Projects Completed', value: '8+' },
  { label: 'Components Built', value: '150+' },        // 150+ components migrated/modernized
  { label: 'Companies', value: '3' },                  // Perfios, Finsall, Accenture + others
  { label: 'Industries Served', value: '3+' },         // fintech, insurance, government
  { label: 'Test Coverage', value: '90%' },            // raised from 75% to 90%
  { label: 'Defects Resolved', value: '200+' },        // 100+ defects across DEV/SIT/UAT
  { label: 'Performance Gain', value: '40%' },         // LCP / load time reduction
  { label: 'Awards Won', value: '2' },                 // Pat On The Back + Apex Award
];

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  // { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const footerLinks: NavItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  // { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];
