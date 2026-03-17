export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  results: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Skill {
  category: string;
  items: string[];
}
