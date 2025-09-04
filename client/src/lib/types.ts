export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  details: string;
}

export interface Education {
  degree: string;
  university: string;
  timeline: string;
  details: string;
}

export interface Experience {
  position: string;
  company: string;
  timeline: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
