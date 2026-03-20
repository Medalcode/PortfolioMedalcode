/** Shared image shape used across all content collections */
export interface ContentImage {
  url: string;
  alt: string;
}

/** Frontmatter for blog post pages (BlogPostLayout.astro) */
export interface BlogFrontmatter {
  title: string;
  author: string;
  description: string;
  image?: ContentImage;
  pubDate: Date;
  tags: string[];
  languages?: string[];
  readingTime?: string | number;
}

/** Frontmatter for project detail pages (ProjectLayout.astro) */
export interface ProjectFrontmatter {
  title: string;
  description: string;
  image?: ContentImage;
  pubDate: Date;
  languages: string[];
  github?: string;
  website?: string;
}

/** Frontmatter for the about-me page (AboutLayout.astro) */
export interface AboutFrontmatter {
  title: string;
  description: string;
  image?: ContentImage;
}
