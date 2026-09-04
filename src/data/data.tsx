import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BugAntIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nahid Islam | QA Engineer',
  description: 'Portfolio of Nahid Islam, a mid-level QA Engineer specializing in test automation, API testing, and CI/CD quality gates.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Nahid Islam.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Dhaka based <strong className="text-stone-100">QA Engineer</strong> with 4+ years of experience, currently
        owning quality for a <strong className="text-stone-100">B2B SaaS platform</strong> — building automated
        regression suites, API test coverage, and CI/CD quality gates that let teams ship daily with confidence.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I care about <strong className="text-stone-100">shifting testing left</strong>, catching bugs before they reach
        staging, and making test results something the whole team actually trusts. Outside work you'll find me
        mentoring junior testers, writing about test strategy, and hiking.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a mid-level QA Engineer who blends hands-on exploratory testing with solid automation engineering.
  I've built and maintained test frameworks in Playwright, Selenium and Cypress, driven API and contract testing
  with Postman and REST Assured, and wired test suites into Jenkins and GitHub Actions so quality feedback arrives
  in minutes, not days. I'm ISTQB certified, comfortable reading application code, and I enjoy the parts of the job
  that are about people: clarifying requirements, running bug bashes, and coaching developers on testable design.`,
  aboutItems: [
    {label: 'Location', text: 'Dhaka, Bangladesh', Icon: MapIcon},
    {label: 'Experience', text: '4+ years in QA', Icon: CalendarIcon},
    {label: 'Focus', text: 'Automation, API & CI/CD quality', Icon: BugAntIcon},
    {label: 'Interests', text: 'Test strategy, mentoring, hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'BSc in Computer Science', Icon: AcademicCapIcon},
    {label: 'Certification', text: 'ISTQB CTFL', Icon: FlagIcon},
    {label: 'Employment', text: 'Available for new roles', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
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
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'End-to-end automation framework',
    description:
      'Playwright + TypeScript framework with the Page Object Model, parallel execution, and Allure reporting. Cut regression time from 2 days of manual testing to a 25-minute pipeline run.',
    url: 'https://github.com/nahid-islam',
    image: porfolioImage1,
  },
  {
    title: 'API test suite & contract tests',
    description:
      'REST Assured + JUnit 5 suite covering 120+ endpoints, plus Pact consumer-driven contract tests that block breaking changes at PR time.',
    url: 'https://github.com/nahid-islam',
    image: porfolioImage2,
  },
  {
    title: 'CI/CD quality gates',
    description:
      'GitHub Actions workflow running smoke, regression, accessibility (axe) and Lighthouse checks on every merge, with results posted back to the PR.',
    url: 'https://github.com/nahid-islam',
    image: porfolioImage3,
  },
  {
    title: 'Performance test project',
    description:
      'JMeter and k6 load tests modelling peak checkout traffic; identified an N+1 query and a connection-pool limit that were causing 5xx spikes under load.',
    url: 'https://github.com/nahid-islam',
    image: porfolioImage4,
  },
  {
    title: 'Mobile regression with Appium',
    description:
      'Cross-platform Appium suite for a React Native app running on BrowserStack against a matrix of Android and iOS devices.',
    url: 'https://github.com/nahid-islam',
    image: porfolioImage5,
  },
  {
    title: 'Test strategy & writing',
    description:
      'Articles on risk-based test planning, flaky-test triage, and building a test pyramid that a small team can actually maintain.',
    url: 'https://github.com/nahid-islam',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2020',
    location: 'ISTQB',
    title: 'Certified Tester, Foundation Level (CTFL)',
    content: (
      <p>
        Formal grounding in test design techniques, test management, and the fundamentals of the testing process —
        the vocabulary I use every day when writing test plans and reporting risk to stakeholders.
      </p>
    ),
  },
  {
    date: '2015 - 2019',
    location: 'University',
    title: 'BSc in Computer Science',
    content: (
      <p>
        Studied software engineering, databases, and algorithms. Final-year project was an automated test harness for
        a student-records web app, which is what pulled me toward QA in the first place.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - Present',
    location: 'SaaS Product Company',
    title: 'QA Engineer',
    content: (
      <p>
        Own quality for two squads on a B2B SaaS platform. Built the Playwright regression framework from scratch and
        integrated it into CI, taking release regression from ~2 manual days to a 25-minute automated run. Introduced
        API and contract testing, set up flaky-test quarantine, and run release readiness reviews. Mentor two junior
        testers and pair with developers on testability during design.
      </p>
    ),
  },
  {
    date: 'January 2021 - March 2023',
    location: 'Digital Agency',
    title: 'QA Analyst',
    content: (
      <p>
        Tested client web and mobile projects across the full cycle — requirement reviews, test case design in
        TestRail, exploratory and cross-browser testing, and regression. Started automating the most repetitive
        smoke checks in Cypress and wrote SQL queries to validate data-heavy reports.
      </p>
    ),
  },
  {
    date: 'June 2020 - January 2021',
    location: 'Startup',
    title: 'Junior QA Engineer',
    content: (
      <p>
        First QA hire on a small team. Set up the bug-tracking workflow in Jira, wrote the first structured test
        cases, and did manual functional and regression testing for a fintech mobile app.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Engineering Manager, current team',
      text: 'Nahid turned our testing from a bottleneck into a safety net. The automated regression suite he built is the reason we went from monthly releases to shipping every day without the anxiety.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Senior Developer, current team',
      text: 'He writes bug reports you can act on immediately — clear repro steps, the right logs, and a sense of severity. He also catches design problems in refinement before a line of code is written.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Product Owner, previous role',
      text: 'Reliable, thorough, and genuinely cares about the user experience. Nahid consistently found the edge cases the rest of us missed and communicated risk in a way the business could understand.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Open to mid and senior QA roles, and happy to talk test strategy or automation. Email is the fastest way to reach me.',
  items: [
    {
      type: ContactType.Email,
      text: 'nahid.islam.qa@example.com',
      href: 'mailto:nahid.islam.qa@example.com',
    },
    {
      type: ContactType.Location,
      text: 'Dhaka, Bangladesh',
      href: 'https://www.google.com/maps/place/Dhaka',
    },
    {
      type: ContactType.LinkedIn,
      text: 'nahid-islam',
      href: 'https://www.linkedin.com/in/nahid-islam/',
    },
    {
      type: ContactType.Github,
      text: 'nahid-islam',
      href: 'https://github.com/nahid-islam',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nahid-islam'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nahid-islam/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
