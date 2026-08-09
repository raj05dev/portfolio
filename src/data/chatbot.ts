/**
 * Static knowledge base for the assistant widget.
 *
 * The reference site posts each message to an AI endpoint. This replica keeps
 * everything client-side: the first rule whose keywords match the message wins,
 * otherwise `fallbackReply` is used.
 *
 * ORDER MATTERS. `resolveReply` takes the *first* match, so this array is a
 * priority list, not a set:
 *   - `greeting` sits near the bottom on purpose. Its keywords are short and the
 *     matcher only guards the *leading* word boundary, so `\bhi` also matches
 *     "his", "him", "hire" and "history". With greeting first, "Tell me about
 *     his experience" and "How can I hire him?" both answered with a greeting.
 *   - `migration` precedes `skills` so "Angular migration" isn't captured by the
 *     `angular` keyword.
 * Adding a rule? Keep specific topics above general ones and re-check that the
 * `chatSuggestions` below still resolve to the rules they are meant to.
 */
export interface ChatRule {
  keywords: string[];
  reply: string;
}

export const greetingMessage =
  "Hi there! I'm Raj's virtual assistant. How can I help you today?";

export const chatSuggestions: string[] = [
  'What technologies does Raj work with?',
  'Tell me about the work experience',
  'How can I hire him?',
];  

export const chatRules: ChatRule[] = [
  {
    keywords: ['migration', 'migrate', 'legacy', 'upgrade', 'moderni', 'angularjs'],
    reply:
      'Modernising front ends is one of Raj\'s specialities:\n\n- Migrated a production app from **Angular 8 to Angular 14** single-handedly, across versions 8, 10 and 14 — modernising **50+ components** and cutting build warnings and technical debt by **~35%**\n- Led the **AngularJS to Angular 10** migration of Michigan Treasury Online, a taxpayer self-service portal for the State of Michigan, reducing legacy technical debt **30%** while preserving functionality\n\nThe **Experience** page has the full detail on both.',
  },
  {
    keywords: [
      'skill',
      'tech',
      'stack',
      'technolog',
      'language',
      'framework',
      'angular',
      'react',
      'typescript',
      'javascript',
      'rxjs',
      'css',
    ],
    reply:
      "Raj is a front-end specialist:\n\n- **Core:** TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS\n- **Frameworks:** Angular 14-18+, React (Hooks, Context API), RxJS, Angular Material, Bootstrap, Next.js (exposure)\n- **State:** Redux Toolkit, Zustand, NgRx\n- **Testing:** Jest, React Testing Library, Jasmine, Karma, SonarQube\n- **Tooling:** Git, Azure DevOps, CI/CD, Vite, Webpack, Jira\n\nHe also works with **Angular Signals**, standalone components, deferrable views and dynamic forms. The **About** page has the full grid.",
  },
  {
    keywords: ['project', 'portfolio', 'built', 'build', 'deliver'],
    reply:
      "Some of what Raj has built:\n\n- **Dynamic financial form engine** — a modular UI component library on custom React Hooks and TypeScript that generates complex financial forms, lifting delivery velocity **40%**\n- **Real-time analytics dashboards** — React Query (TanStack) with Redux and Zustand, giving administrators live data and granular access control\n- **Admin portal (Finsall)** — built from scratch for access and user management, data deletion, password recovery and usage analytics, cutting manual support effort **~40%**\n- **GCAP** — a single-page insurance app for Chubb Limited used by agents to sell policies, across 10+ screens\n- **MTO** — a taxpayer self-service portal for the State of Michigan\n\nEach one is written up on the **Experience** page.",
  },
  {
    keywords: [
      'fintech',
      'e-kyc',
      'ekyc',
      'e-sign',
      'esign',
      'payment',
      'integration',
      'insurance',
    ],
    reply:
      'Yes — secure third-party integrations are a core strength. Raj has integrated **e-KYC**, **e-Sign** and **payment gateway** systems into high-volume financial modules, building compliant end-to-end transaction workflows.\n\nAt Finsall he delivered all three integrations **solo**, cutting customer onboarding time **~30%**. He has shipped across **fintech**, **insurance** and **government** products.',
  },
  {
    keywords: ['test', 'jest', 'jasmine', 'karma', 'coverage', 'sonar', 'quality'],
    reply:
      'Testing is treated as part of delivery, not an afterthought:\n\n- Raised unit-test coverage from **75% to 90%** with **Jest** and **React Testing Library**, cutting post-release production regressions **25%**\n- Wrote **Jasmine** and **Karma** suites to ~**80%** coverage on the Angular work at Accenture\n- Uses **SonarQube** for static analysis, and enforced branching and code-review standards that reduced merge conflicts **20%**',
  },
  {
    keywords: [
      'performance',
      'core web vitals',
      'lcp',
      'optimi',
      'bundle',
      'lighthouse',
      'speed',
    ],
    reply:
      'Performance work is a regular part of Raj\'s day job. He reduced **Largest Contentful Paint by 40%** and trimmed initial bundle weight by introducing code-splitting (`React.lazy` and `Suspense`) plus optimised routing across complex fintech workflows.\n\nHe works to **Core Web Vitals** targets, using lazy loading and responsive design to keep load times and bundle size down.',
  },
  {
    keywords: ['ai', 'claude', 'copilot'],
    reply:
      'Raj adopted **AI-assisted engineering** across modern React development, testing and deployment workflows, accelerating delivery velocity by **30%**. He uses **Claude Code** day to day and is keen on making AI a practical part of a team\'s workflow rather than a novelty.',
  },
  {
    keywords: ['award', 'achievement', 'recognition', 'apex'],
    reply:
      "Raj's recognitions:\n\n- **Pat On The Back Award** — Perfios, Jun 2025, for technical excellence and system stability\n- **Apex Award, Extra Miler** — Accenture, 2021, for exceeding delivery milestones under compressed schedules",
  },
  {
    keywords: ['resume', 'cv', 'download'],
    reply:
      "Raj's resume is linked from the **Download Resume** button on the home page. It covers his full work history, technology stack and achievements.",
  },
  {
    keywords: [
      'location',
      'where',
      'based',
      'country',
      'timezone',
      'bengaluru',
      'bengaluru',
      'remote',
    ],
    reply:
      "Raj is based in **Bengaluru, India** and works with teams globally — he's comfortable collaborating remotely across time zones.",
  },
  // Below the specific topics above: the broad `work` keyword would otherwise
  // capture questions like "payment gateway work" or "do you work remote".
  {
    keywords: [
      'experience',
      'work',
      'history',
      'career',
      'job',
      'employer',
      'company',
      'perfios',
      'finsall',
      'accenture',
    ],
    reply:
      'Raj has **6.5 years** of front-end experience across fintech, insurance and government:\n\n- **Perfios Software Solutions** — Senior Member Technical Team, Bengaluru (Sep 2023 – Present)\n- **Finsall Resources** — Senior Software Developer, Bengaluru (Jul 2022 – Aug 2023)\n- **Accenture** — Application Development Analyst, Bengaluru (Jan 2020 – Jun 2022)\n\nHead to the **Experience** page for achievements and notable projects at each.',
  },
  {
    keywords: [
      'contact',
      'hire',
      'email',
      'reach',
      'available',
      'consult',
      'freelance',
      'opportunity',
    ],
    reply:
      "You can reach Raj at **ksraj0528@gmail.com**, or use the form on the **Contact** page. He's based in **Bengaluru** and available for front-end development and consulting — architecture guidance, code reviews, performance work and testing strategy — including remote engagements across time zones.",
  },
  // Keep this near the bottom: `\bhi` also matches "his", "him", "hire" and
  // "history", so a higher position hijacks real questions. See the file header.
  {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening'],
    reply:
      "Hello! 👋 I can tell you about Raj's **experience**, **projects**, **skills**, or how to **get in touch**. What would you like to know?",
  },
  {
    keywords: ['thank', 'bye', 'goodbye'],
    reply: "You're welcome! Feel free to reach out through the **Contact** page any time. 👋",
  },
];

export const fallbackReply =
  "I'm not sure about that one. Try asking about Raj's **skills**, **experience**, **projects**, **testing**, **performance**, or how to **contact** him.";

export const errorReply =
  "I'm sorry, I couldn't process your request. Please try again later.";
