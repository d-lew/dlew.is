export interface Project {
  title: string;
  description?: string;
  links?: Link[];
}

export interface Link {
  logo: Logo;
  url?: string;
}

export enum Logo {
  GITHUB,
}
