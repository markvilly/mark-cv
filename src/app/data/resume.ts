/**
 * Single source of truth for résumé content.
 * Ported verbatim from the v1 IDE-themed résumé (see legacy-v1/index.html).
 */

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export interface Info {
  name: string;
  firstName: string;
  title: string;
  roleShort: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
  };
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface SpokenLanguage {
  name: string;
  level: string;
  note: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  current: boolean;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  coursework: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  company: string;
  email?: string;
  phone: string;
}

export const INFO: Info = {
  name: 'Mark Paul Nkulila',
  firstName: 'Mark',
  title: 'Frontend Engineer · Full-Stack & Mobile Developer',
  roleShort: 'frontend-engineer',
  email: 'markpaulbusiness66@gmail.com',
  phone: '+255 686 384 019',
  location: 'Dar es Salaam, Tanzania',
  availability: 'Available immediately',
  socials: {
    github: {
      label: 'GitHub',
      handle: 'github.com/markvilly',
      href: 'https://github.com/markvilly',
    },
    linkedin: {
      label: 'LinkedIn',
      handle: 'linkedin.com/in/mark-paul-aab059234',
      href: 'https://linkedin.com/in/mark-paul-aab059234/',
    },
  },
};

export const SUMMARY: string[] = [
  'Frontend-led Full-Stack & Mobile Developer with production experience in Angular, React, Next.js, Flutter and NestJS.',
  'Specialises in translating Figma designs into pixel-accurate, accessible interfaces and integrating robust REST APIs end-to-end.',
  'Open to freelance work and full-time roles — available immediately.',
];

export const TAGLINE =
  'I turn Figma into pixel-accurate, accessible interfaces — and wire them to robust APIs, end to end.';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Dart', 'Java', 'Python', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    items: ['React', 'Angular', 'Next.js', 'Flutter', 'React Native', 'NestJS', 'Spring Boot'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Figma', 'Postman', 'Chrome DevTools', 'Tailwind CSS'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    id: 'platforms',
    label: 'Platforms',
    items: ['Web', 'Mobile', 'Desktop'],
  },
];

export const PROFILE_TRAITS: string[] = [
  'Problem Solver',
  'Self-Directed',
  'Collaborative',
  'Detail-Oriented',
  'Client-Focused',
];

export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  { name: 'English', level: 'C1', note: 'Native' },
  { name: 'Swahili', level: 'C1', note: 'Native' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Medikea',
    role: 'Frontend Engineer · UI/UX Designer · Product Contributor',
    type: 'Full-time',
    period: 'Feb 2025 — Present',
    current: true,
    highlights: [
      'Built and maintained responsive healthcare interfaces using Angular, Flutter and a component-based architecture.',
      'Translated Figma designs into pixel-accurate, accessible, production-ready code.',
      'Designed patient, clinician, and operations workflows — balancing UX clarity with real-world constraints.',
      'Integrated REST APIs with dynamic state, loading states, and error handling.',
      'Optimised mobile performance: load times, rendering efficiency, and perceived speed.',
      'Applied ARIA and semantic HTML for inclusive accessibility.',
    ],
  },
  {
    company: 'ITULE Company Ltd (Safiri)',
    role: 'Full Stack Software Engineer',
    type: 'Full-time',
    period: 'Feb 2024 — Feb 2025',
    current: false,
    highlights: [
      'Developed responsive web apps with React and Next.js.',
      'Built admin dashboards and data-heavy interfaces focused on usability and clarity.',
      'Integrated backend APIs for reporting, filtering, and validation.',
      'Debugged and optimised production UI issues across browsers and screen sizes.',
      'Collaborated in Agile sprints, delivering iterative improvements.',
    ],
  },
];

export const EDUCATION: EducationItem = {
  degree: 'Degree in Information Security',
  institution: 'Unique Academy',
  period: '2019 — 2021',
  coursework:
    'Web Development · Database Management · Software Design · Enterprise Security & Risk Frameworks',
};

export const REFERENCES: ReferenceItem[] = [
  {
    name: 'Maryam Baba',
    role: 'Business Development Manager',
    company: 'Inventions Technologies Co Ltd',
    email: 'Maryam.baba@it.co.tz',
    phone: '+255 672 169 511',
  },
  {
    name: 'Shabo Andrew',
    role: 'Lead Mobile App Developer',
    company: 'Medikea',
    phone: '+255 742 287 568',
  },
  {
    name: 'Louis Ngatale',
    role: 'Lead Software Engineer',
    company: 'Safiri',
    phone: '+255 746 821 320',
  },
];
