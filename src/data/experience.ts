import type { ExperienceEntry } from '@/types';

export const experiences: ExperienceEntry[] = [
  {
    id: 'perfios',
    company: 'PERFIOS SOFTWARE SOLUTIONS',
    role: 'Senior Member Technical Team',
    period: 'Sep 2023 - Present',
    location: 'Bengaluru, India',
    logo: '/company/perfios.svg',
    description:
      'Building modular, high-performance React interfaces for high-volume fintech workflows, from a reusable component library to real-time analytics dashboards.',
    achievements: [
      'Designed a modular UI component library leveraging custom React Hooks and TypeScript to dynamically generate complex financial forms, accelerating feature delivery velocity by 40%',
      'Reduced Largest Contentful Paint (LCP) 40% and trimmed initial bundle weight by implementing code-splitting (React.lazy/Suspense) and optimized routing across complex fintech workflows',
      'Raised unit-test coverage from 75% to 90% using Jest and React Testing Library, cutting post-release production regressions by 25%',
      'Enforced Git branching strategies and code review standards, resulting in 20% fewer merge conflicts',
      'Integrated third-party e-KYC, e-Sign, and payment gateway systems into high-volume financial modules, securing end-to-end transaction workflows',
      'Accelerated delivery velocity 30% by adopting AI-assisted engineering tools across modern React development, testing, and deployment workflows',
      'Shipped real-time analytics dashboards using React Query (TanStack) with Redux and Zustand, giving corporate administrators live data visibility and granular access controls',
      'Received the Pat On The Back Award (Jun 2025) for technical excellence and system stability',
    ],
    technologies: [
      'React',
      'TypeScript',
      'React Hooks',
      'Redux Toolkit',
      'Zustand',
      'React Query',
      'Jest',
      'React Testing Library',
      'Vite',
      'Azure DevOps',
    ],
    projects: [
      {
        name: 'Dynamic Financial Form Engine',
        description:
          'Modular UI component library built on custom React Hooks and TypeScript to generate complex financial forms',
        impact: 'Accelerated feature delivery velocity by 40%',
      },
      {
        name: 'Real-Time Analytics Dashboards',
        description:
          'Live administrator dashboards using React Query (TanStack) with Redux and Zustand state management',
        impact: 'Gave corporate administrators live data visibility with granular access controls',
      },
    ],
  },
  {
    id: 'finsall',
    company: 'FINSALL RESOURCES',
    role: 'Senior Software Developer',
    period: 'Jul 2022 - Aug 2023',
    location: 'Bengaluru, India',
    logo: '/company/finsall.svg',
    description:
      'Modernised a production Angular platform and owned the customer onboarding journey end-to-end, including all third-party e-KYC, e-Sign, and payment integrations.',
    achievements: [
      'Migrated a production application from Angular 8 to Angular 14 single-handedly across versions 8, 10, and 14, modernizing 50+ components and cutting build warnings and technical debt by ~35%',
      'Delivered all three third-party integrations (e-KYC, e-Sign, Payment Gateway) solo, reducing customer onboarding time by ~30% with secure, compliant flows',
      'Revamped the complete onboarding journey for customers and insurance intermediaries, improving completion rates by ~20% and reducing drop-offs',
      'Built an Admin Portal from scratch serving internal teams for access and user management, user-data deletion, password recovery, and usage analytics, cutting manual support effort by ~40%',
      'Designed the front-end for a high-concurrency B2B platform, using RxJS data streams to sustain heavy asynchronous load with zero UI degradation',
      'Packaged a shared, responsive component library across product tracks, cutting design-to-code friction and reducing the UI bug backlog by ~25%',
      'Drove technical analysis, UX/UI and API-design discussions with the back-end team to ship secure, performant integrations; defined stories, estimated, and planned sprints in an Agile environment',
    ],
    technologies: [
      'Angular 14',
      'TypeScript',
      'RxJS',
      'Angular Material',
      'SCSS',
      'REST APIs',
      'e-KYC',
      'e-Sign',
      'Payment Gateways',
      'Jasmine',
      'Karma',
    ],
    projects: [
      {
        name: 'Angular 8 to 14 Migration',
        description:
          'Single-handed upgrade across versions 8, 10 and 14, modernizing 50+ components',
        impact: 'Cut build warnings and technical debt by ~35%',
      },
      {
        name: 'Customer & Intermediary Onboarding',
        description:
          'End-to-end onboarding journey with e-KYC, e-Sign and payment gateway integrations',
        impact: 'Improved completion rates by ~20% and cut onboarding time by ~30%',
      },
    ],
  },
  {
    id: 'accenture',
    company: 'ACCENTURE',
    role: 'Application Development Analyst',
    period: 'Jan 2020 - Jun 2022',
    location: 'Bengaluru, India',
    logo: '/company/accenture.svg',
    description:
      'Delivered Angular applications for enterprise insurance and US government clients, including an AngularJS-to-Angular 10 migration of a taxpayer self-service portal.',
    achievements: [
      'Built a single-page insurance application from scratch (GCAP, for Chubb Limited) used by Salesforce agents to sell policies, owning UI/UX strategy, requirements, and design across 10+ screens',
      'Developed responsive UI with HTML5, TypeScript, JavaScript, CSS3, and Bootstrap and implemented client-side form, login, and logout validations, reducing invalid submissions by ~25%',
      'Resolved 100+ defects across DEV, SIT, and UAT and delivered multiple Change Requests (CRs) in Release 1, using Git and JIRA',
      'Led the AngularJS-to-Angular 10 migration of Michigan Treasury Online, a taxpayer self-service portal for the State of Michigan, cutting legacy technical debt 30% while preserving functionality',
      'Wrote unit tests with Jasmine and Karma to reach ~80% coverage and debugged cross-browser issues on Chrome, Firefox, and Internet Explorer during QA and UAT',
      'Managed version control with Git and CI/CD with Azure DevOps, streamlining defect tracking and release workflows',
      'Received the Apex Award, Extra Miler (2021) for exceeding delivery milestones under compressed schedules',
    ],
    technologies: [
      'Angular 8',
      'Angular 10',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'RxJS',
      'Bootstrap',
      'Jasmine',
      'Karma',
      'Azure DevOps',
      'JIRA',
    ],
    projects: [
      {
        name: 'GCAP - Group Case Approval Portal',
        description:
          'Single-page insurance application for Chubb Limited, used by Salesforce agents to sell policies across 10+ screens',
        impact: 'Reduced invalid submissions by ~25% and resolved 100+ defects across DEV, SIT, UAT',
      },
      {
        name: 'MTO - Michigan Treasury Online',
        description:
          'AngularJS to Angular 10 migration of a taxpayer self-service portal for the State of Michigan',
        impact: 'Cut legacy technical debt 30% with ~80% unit-test coverage',
      },
    ],
  },
];
