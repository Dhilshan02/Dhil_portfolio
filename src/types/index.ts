export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI & Cloud' | 'UI/UX Design';
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  badge?: string;
  featured: boolean;
  hasCaseStudy?: boolean;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases & Tools';
  level: number; // 0 - 100
  iconName: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}
