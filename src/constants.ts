import { Project, Experience, Testimonial, Skill } from './types';

export const GALLERY_THUMBNAILS = [
  {
    id: 't1',
    title: 'Real Estate',
    image: 'https://i.ibb.co/SgHcjLz/real-estate.jpg',
  },
  {
    id: 't2',
    title: 'Client Project',
    image: 'https://i.ibb.co/C3WTtnnQ/client-thumnail.jpg',
  },
  {
    id: 't3',
    title: 'Roblox Gaming',
    image: 'https://i.ibb.co/dsRDrqTv/roblox-thumnail.jpg',
  },
  {
    id: 't4',
    title: 'India Got Latent',
    image: 'https://i.ibb.co/0yfjhJGw/india-got-latent.jpg',
  },
  {
    id: 't5',
    title: 'Cooking Show',
    image: 'https://i.ibb.co/5XB2RrqC/cooking-thumnail-new.jpg',
  },
  {
    id: 't6',
    title: 'Travel Vlog',
    image: 'https://i.ibb.co/6MVsc24/travel-vlog-thumbnail-design-template.jpg',
  }
];

export const GALLERY_VIDEOS = [
  {
    id: 'v1',
    title: 'Featured Portfolio Video',
    thumbnail: 'https://i.ibb.co/ynpHQ5tG/pngtree-flat-clapperboard-video-icon-black-and-white-striped-top-with-simple-png-image-17345655.webp',
    videoUrl: 'https://drive.google.com/file/d/1P1El0v7bUNw0-f65C2h5_PabO2a76QJr/preview',
  },
  {
    id: 'v2',
    title: 'YouTube Video Edit',
    thumbnail: 'https://i.ibb.co/ynpHQ5tG/pngtree-flat-clapperboard-video-icon-black-and-white-striped-top-with-simple-png-image-17345655.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'v3',
    title: 'Real Estate Ad',
    thumbnail: 'https://i.ibb.co/ynpHQ5tG/pngtree-flat-clapperboard-video-icon-black-and-white-striped-top-with-simple-png-image-17345655.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'v4',
    title: 'Gaming Montage',
    thumbnail: 'https://i.ibb.co/ynpHQ5tG/pngtree-flat-clapperboard-video-icon-black-and-white-striped-top-with-simple-png-image-17345655.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
