export interface Projects {
  projects: Project[];
}

export interface Project {
  title: string;
  date: string;
  description: string;
  cover_image: string;
  categories: string[];
  technologies: string[];
  slug: string;
}
