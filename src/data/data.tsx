import profilepic from '../images/profilepic.jpg';
import {
  AboutItem,
  ContactSection,
  HomepageMeta,
  Profile,
  Service,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nahid Islam | QA Engineer',
  description:
    'Portfolio of Nahid Islam, a mid-level QA Engineer specializing in test automation, API testing, and CI/CD quality gates.',
};

/**
 * Sidebar identity + detailed bio
 */
export const profile: Profile = {
  name: 'Nahid Islam',
  title: 'QA Engineer',
  avatarSrc: profilepic,
  resumeUrl: '/assets/resume.pdf',
  paragraphs: [
    `I'm a Dhaka-based QA Engineer with 4+ years of experience. I blend hands-on exploratory
     testing with solid automation engineering, and I currently own quality for a B2B SaaS
     platform — building automated regression suites, API coverage, and CI/CD quality gates
     that let teams ship daily with confidence.`,
    `I've built and maintained frameworks in Playwright, Selenium and Cypress, driven API and
     contract testing with Postman and REST Assured, and wired suites into Jenkins and GitHub
     Actions so quality feedback arrives in minutes, not days.`,
    `I'm ISTQB certified, comfortable reading application code, and I enjoy the parts of the job
     that are about people: clarifying requirements, running bug bashes, and coaching developers
     on testable design.`,
  ],
};

/**
 * "At a glance" facts (About tab)
 */
export const aboutItems: AboutItem[] = [
  {emoji: '📍', label: 'Location', text: 'Dhaka, Bangladesh'},
  {emoji: '🗓️', label: 'Experience', text: '4+ years in QA'},
  {emoji: '🎯', label: 'Focus', text: 'Automation, API & CI/CD quality'},
  {emoji: '🎓', label: 'Study', text: 'BSc in Computer Science'},
  {emoji: '📜', label: 'Certification', text: 'ISTQB — Foundation Level'},
  {emoji: '✅', label: 'Status', text: 'Available for new roles'},
];

/**
 * "What I'm doing" service cards (About tab)
 */
export const whatIDo: Service[] = [
  {
    emoji: '🤖',
    title: 'Test automation',
    description:
      'End-to-end and UI automation frameworks in Playwright, Selenium and Cypress — Page Object Model, parallel runs, and readable reports.',
  },
  {
    emoji: '🔌',
    title: 'API & contract testing',
    description:
      'REST and GraphQL coverage with Postman, Newman and REST Assured, plus consumer-driven contract tests that catch breaking changes at PR time.',
  },
  {
    emoji: '⚡',
    title: 'Performance testing',
    description:
      'Load and stress tests with JMeter and k6 — modelling real traffic, finding bottlenecks, and turning results into actionable tickets.',
  },
  {
    emoji: '🚦',
    title: 'CI/CD quality gates',
    description:
      'Wiring test suites into Jenkins and GitHub Actions with smoke, regression, accessibility and flaky-test quarantine, results posted back to the PR.',
  },
];

/**
 * Skills
 */
export const skills: SkillGroup[] = [
  {
    name: 'Test automation',
    skills: [
      {name: 'Playwright', level: 9},
      {name: 'Selenium WebDriver', level: 8},
      {name: 'Cypress', level: 7},
      {name: 'Appium (mobile)', level: 5},
    ],
  },
  {
    name: 'API & performance testing',
    skills: [
      {name: 'Postman / Newman', level: 9},
      {name: 'REST Assured', level: 7},
      {name: 'JMeter', level: 6},
      {name: 'k6', level: 5},
    ],
  },
  {
    name: 'Languages & databases',
    skills: [
      {name: 'JavaScript / TypeScript', level: 8},
      {name: 'Java', level: 7},
      {name: 'Python', level: 6},
      {name: 'SQL', level: 7},
    ],
  },
  {
    name: 'Process & tooling',
    skills: [
      {name: 'CI/CD (Jenkins, GitHub Actions)', level: 8},
      {name: 'Test management (Jira, TestRail, Xray)', level: 9},
      {name: 'BDD / Cucumber', level: 7},
      {name: 'Docker', level: 6},
    ],
  },
];

/**
 * Resume — education
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2020',
    location: 'ISTQB',
    title: 'Certified Tester, Foundation Level (CTFL)',
    content:
      'Formal grounding in test design techniques, test management, and the fundamentals of the testing process — the vocabulary I use every day when writing test plans and reporting risk to stakeholders.',
  },
  {
    date: '2015 – 2019',
    location: 'University',
    title: 'BSc in Computer Science',
    content:
      'Studied software engineering, databases, and algorithms. Final-year project was an automated test harness for a student-records web app, which is what pulled me toward QA in the first place.',
  },
];

/**
 * Resume — experience
 */
export const experience: TimelineItem[] = [
  {
    date: 'March 2023 – Present',
    location: 'SaaS Product Company',
    title: 'QA Engineer',
    content:
      'Own quality for two squads on a B2B SaaS platform. Built the Playwright regression framework from scratch and integrated it into CI, taking release regression from ~2 manual days to a 25-minute automated run. Introduced API and contract testing, set up flaky-test quarantine, and run release-readiness reviews. Mentor two junior testers and pair with developers on testability during design.',
  },
  {
    date: 'January 2021 – March 2023',
    location: 'Digital Agency',
    title: 'QA Analyst',
    content:
      'Tested client web and mobile projects across the full cycle — requirement reviews, test case design in TestRail, exploratory and cross-browser testing, and regression. Started automating the most repetitive smoke checks in Cypress and wrote SQL queries to validate data-heavy reports.',
  },
  {
    date: 'June 2020 – January 2021',
    location: 'Fintech Startup',
    title: 'Junior QA Engineer',
    content:
      'First QA hire on a small team. Set up the bug-tracking workflow in Jira, wrote the first structured test cases, and did manual functional and regression testing for a fintech mobile app.',
  },
];

/**
 * Contact
 */
export const contact: ContactSection = {
  headerText: 'Get in touch',
  description:
    'Open to mid and senior QA roles, and happy to talk test strategy or automation. Email is the fastest way to reach me.',
  items: [
    {emoji: '📧', label: 'Email', text: 'nahid.islam.qa@example.com', href: 'mailto:nahid.islam.qa@example.com'},
    {emoji: '📍', label: 'Location', text: 'Dhaka, Bangladesh', href: 'https://www.google.com/maps/place/Dhaka'},
    {emoji: '💼', label: 'LinkedIn', text: '/in/nahid-islam', href: 'https://www.linkedin.com/in/nahid-islam/'},
    {emoji: '🐙', label: 'GitHub', text: '@nahid-islam', href: 'https://github.com/nahid-islam'},
  ],
};

/**
 * Social links
 */
export const socialLinks: Social[] = [
  {label: 'GitHub', emoji: '🐙', href: 'https://github.com/nahid-islam'},
  {label: 'LinkedIn', emoji: '💼', href: 'https://www.linkedin.com/in/nahid-islam/'},
  {label: 'Medium', emoji: '✍️', href: 'https://medium.com/@nahidshrnv'},
  {label: 'Email', emoji: '📧', href: 'mailto:nahid.islam.qa@example.com'},
];
