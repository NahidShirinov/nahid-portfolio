import {StaticImageData} from 'next/image';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
}

/**
 * Sidebar identity + bio
 */
export interface Profile {
  name: string;
  title: string;
  avatarSrc: string | StaticImageData;
  /** One paragraph per entry. Rendered in order in the sidebar. */
  paragraphs: string[];
  /** Optional link to a downloadable CV (served from /public). */
  resumeUrl?: string;
}

/**
 * "At a glance" facts shown on the About tab
 */
export interface AboutItem {
  emoji: string;
  label: string;
  text: string;
}

/**
 * "What I'm doing" service cards
 */
export interface Service {
  emoji: string;
  title: string;
  description: string;
}

/**
 * Skills
 */
export interface Skill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Education / experience timeline
 */
export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: string;
}

/**
 * Contact list (sidebar + contact tab)
 */
export interface ContactItem {
  emoji: string;
  label: string;
  text: string;
  href?: string;
}

export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

/**
 * Social links
 */
export interface Social {
  label: string;
  emoji: string;
  href: string;
}
