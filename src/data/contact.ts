import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import type { CollaborationOption, ContactDetail, Faq, SocialLink } from '@/types';

export const contactDetails: ContactDetail[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ksraj0528@gmail.com',
    href: 'mailto:ksraj0528@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru',
    href: null,
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: '+91-7483317989',
    href: null,
  },
];

export const contactSocials: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raj-kumar-ab4029b6/',
    icon: LinkedinIcon,
    color: 'hover:text-blue-600',
    description: 'Professional network and career updates',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/raj05dev',
    icon: GithubIcon,
    color: 'hover:text-gray-900 dark:hover:text-white',
    description: 'Open source projects and code repositories',
  },
  // {
  //   name: 'Telegram',
  //   href: '',
  //   icon: PlaneTakeoff,
  //   color: 'hover:text-blue-500',
  //   description: 'Direct messaging and quick communication',
  // },
];


export const collaborationOptions: CollaborationOption[] = [
  {
    title: 'Front End Development',
    description:
      'Enterprise web applications using Angular, React, and TypeScript with modern, component-driven architecture',
    icon: '💻',
  },
  {
    title: 'Performance Optimization',
    description:
      'Improving Core Web Vitals, code-splitting, and lazy loading to cut load times and bundle size',
    icon: '⚡',
  },
  {
    title: 'Fintech Integrations',
    description:
      'Secure e-KYC, e-Sign, and payment gateway integrations for high-volume financial workflows',
    icon: '🔐',
  },
  {
    title: 'State Management',
    description:
      'Scalable state with Redux Toolkit, Zustand, NgRx, and RxJS for complex, high-concurrency apps',
    icon: '🗃️',
  },
];

export const faqs: Faq[] = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in front-end development with Angular (8 to 18+), React (Hooks, Context, Redux), and TypeScript. I have deep experience with component-driven architecture, RxJS, state management (Redux Toolkit, Zustand, NgRx), Core Web Vitals optimization, and AI-assisted development using Claude Code.',
  },
  {
    question: 'Do you offer consulting services?',
    answer:
      'Yes, I provide technical guidance on front-end architecture, code reviews, performance optimization, and testing strategy. I work with both startups and enterprises to help them build scalable, maintainable web applications using modern best practices.',
  },
  {
    question: 'Can you help with legacy system modernization?',
    answer:
      "Absolutely! I have extensive experience modernizing legacy front-end applications. I've single-handedly migrated production apps across Angular 8, 10, and 14, modernized 50+ components, led an AngularJS-to-Angular 10 migration, and reduced technical debt while preserving functionality.",
  },
  {
    question: 'Do you have experience with fintech or secure integrations?',
    answer:
      'Yes. I\'ve integrated e-KYC, e-Sign, and payment gateway systems into high-volume financial modules, building secure, compliant end-to-end transaction workflows across fintech and insurance products.',
  },
  {
    question: 'Are you available for remote collaborations?',
    answer:
      "Yes! I work with teams globally and am comfortable with remote collaboration tools. I'm based in Bengaluru and available for virtual meetings across different time zones.",
  },
];
