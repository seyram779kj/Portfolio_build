export interface ProjectGalleryImage {
  url: string;
  caption: string;
  isPlaceholder?: boolean;
}

export type ProjectCategory = 'Product' | 'Design' | 'Web Builds' | 'Research';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryDisplay: string;
  year: string;
  role: string;
  tools: string[];
  timeline: string;
  description: string;
  coverImage: string;
  images: ProjectGalleryImage[];
  liveUrl?: string;
  figmaUrl?: string;
  prototypeUrl?: string;
  overview: {
    problem: string;
    whatIDid: string[];
    whatCameOutOfIt: string;
  };
  isTemplate?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  gpa?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
}

export interface VolunteeringItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
}
