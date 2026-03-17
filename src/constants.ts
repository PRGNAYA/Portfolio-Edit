import { Project, Experience, Testimonial, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'YouTube Video Editing',
    category: 'YouTube',
    description: 'Engaging long-form content with smooth cuts and storytelling.',
    image: 'https://i.ibb.co/rKc692zm/ededed.jpg',
    tools: ['Premiere Pro', 'After Effects'],
    results: 'Helped client reach 100k views on their latest vlog.'
  },
  {
    id: '2',
    title: 'Social Media Edits',
    category: 'Social Media',
    description: 'Fast-paced edits for Reels, TikTok, and Shorts.',
    image: 'https://i.ibb.co/js0vXDn/nvfv.webp',
    tools: ['CapCut', 'Premiere Pro'],
    results: 'Increased engagement by 40% across social platforms.'
  },
  {
    id: '3',
    title: 'Gaming Highlights',
    category: 'Gaming',
    description: 'High-energy edits with effects, transitions, and sync.',
    image: 'https://i.ibb.co/Y4p82yYf/dre.jpg',
    tools: ['After Effects', 'Premiere Pro'],
    results: 'Created viral montages with professional sound design.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Freelance Video Editor',
    company: 'Worldwide Clients',
    period: '2023 — Present',
    achievements: [
      'Editing content for creators and online clients worldwide',
      'Creating engaging social media and YouTube videos',
      'Improving storytelling through professional editing'
    ]
  },
  {
    id: '2',
    role: 'Junior Video Editor',
    company: 'Content Studio',
    period: '2022 — 2023',
    achievements: [
      'Edited short-form social media videos',
      'Learned advanced transitions and effects',
      'Worked on gaming and content creator edits'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Content Creator',
    content: 'Amazing editor! The video was smooth, creative, and exactly what I wanted.',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: '2',
    name: 'Jessica Wu',
    role: 'Marketing Manager',
    content: 'Very professional and fast delivery. The editing quality was excellent.',
    avatar: 'https://i.pravatar.cc/150?u=jessica'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Editing',
    items: ['Video Editing', 'Color Correction', 'Transitions & Effects', 'Cinematic Cuts']
  },
  {
    category: 'Content Types',
    items: ['YouTube Videos', 'Social Media Reels', 'Gaming Edits', 'Short-form Content']
  },
  {
    category: 'Tools',
    items: ['Adobe Premiere Pro', 'After Effects', 'CapCut', 'DaVinci Resolve']
  }
];
