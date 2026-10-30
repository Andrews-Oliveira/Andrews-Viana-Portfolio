export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
  resume?: string;
}

export interface ProfessionalExperience {
  period: string;
  company: string;
  position: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  program: string;
  institution: string;
  detail: string;
}

export interface PortfolioProject {
  index: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  status: string;
  internalRoute?: string;
  externalUrl?: string;
  notice?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface PortfolioProfile {
  name: string;
  initials: string;
  role: string;
  location: string;
  introduction: string;
  about: string[];
  social: SocialLinks;
  experience: ProfessionalExperience[];
  education: EducationItem[];
  skillGroups: SkillGroup[];
  projects: PortfolioProject[];
}
