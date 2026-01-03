// src/content/config.ts
import { defineCollection, z } from "astro:content";

const jsonDataCollection = defineCollection({
  type: "data",
  schema: z.object({
    //Define JSON-file structure
    profileImage: z.string(),
    profileAlt: z.string(),
    profileLink: z.string(),
    profileTitle: z.string(),
    profileName: z.string(),
    github: z.string().url(),
    githubText: z.string(),
    portfolioImage: z.string(),
    email: z.string().email(),
    linkedin: z.string().url(),
    instagram: z.string().url(),
    youtube: z.string().url(),
    alias: z.string(),
    contactSectionTitle: z.string(),
    contactSectionSubtitle: z.string(),
    contactSectionButtonText: z.string(),
    cvButtonText: z.string(),
    aboutButtonText: z.string().optional(),
    contactSectionButtonIcon: z.string(),
    techsTitle: z.string(),
    instagramIconName: z.string(),
    youtubeIconName: z.string(),
    githubIconName: z.string(),
    linkedinIconName: z.string(),
    emailIconName: z.string(),
    hobbies: z.array(z.string()),
    pageTitle: z.string(),
    pageDescription: z.string(),
    OGImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    experienceTitle: z.string(),
    experienceGradient: z.string(),
    projectsTitle: z.string(),
    projectsGradient: z.string(),
    projectsIntro1: z.string(),
    projectsIntro2: z.string(),
    projectsIntro3: z.string(),
    projectsIntro4: z.string(),
    projectsIntro5: z.string(),
    projectsIntro6: z.string(),
    viewMoreProjects: z.string(),
    aboutTitle: z.string(),
    aboutGradient: z.string(),
    stackTitle: z.string(),
    stackGradient: z.string(),
    aboutDescription: z.string(),
    availableForWork: z.string(),
    heroDescription1: z.string(),
    heroDescription2: z.string(),
    heroDescription3: z.string(),
    beyondCode: z.string(),
    designQuestion: z.string(),
    projectsDescriptionAlt: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    website: z.string().optional(),
    github: z.string().url().optional(),
    pubDate: z.date(),
    languages: z.array(z.string()),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    pubDate: z.date(),
    tags: z.array(z.string()),
    languages: z.array(z.string()).optional(),
  }),
});

const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  staticData: jsonDataCollection,
  projects: projectsCollection,
  blog: blogCollection,
  experience: experienceCollection,
  about: aboutCollection,
};
