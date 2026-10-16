import { defineCollection, z } from 'astro:content';
import { mediaSchema } from '../lib/media';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    image: mediaSchema.optional(),
    // More images/videos for the post page; shown in a grid below the text.
    images: z.array(mediaSchema).default([]),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    thrust: z.enum(['perception', 'decision-making', 'learning', 'communication']),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// Older project write-ups grouped by the kind of system involved, distinct
// from the four research thrusts above. See src/data/systems.ts.
const systemProjects = defineCollection({
  type: 'content',
  schema: z.object({
    system: z.enum(['human-robot', 'robot-robot', 'multi-agent']),
    category: z.string(),
    title: z.string(),
    images: z.array(mediaSchema).default([]),
    citation: z.string().optional(),
    citationUrl: z.string().optional(),
    order: z.number().default(0),
  }),
});

// One file per course offering, named by its URL id (e.g. CSE471-F26.md -> /teaching/CSE471-F26/).
const teaching = defineCollection({
  type: 'content',
  schema: z.object({
    code: z.string(),
    title: z.string(),
    term: z.string().regex(/^(Spring|Summer|Fall) \d{4}$/, 'Use "Spring 2027", "Summer 2027", or "Fall 2027"'),
    meeting: z.string().optional(),
    officeHours: z.array(z.object({ who: z.string(), when: z.string() })).default([]),
    staff: z
      .array(
        z.object({
          role: z.string(),
          name: z.string(),
          email: z.string().optional(),
          office: z.string().optional(),
        }),
      )
      .default([]),
    prerequisites: z.string().optional(),
    syllabus: z.string().optional(),
    scheduleNote: z.string().optional(),
    schedule: z
      .array(
        z.object({
          date: z.string().optional(),
          topic: z.string(),
          notes: z.string().optional(),
          reading: z.string().optional(),
          deadline: z.string().optional(),
          event: z.string().optional(),
        }),
      )
      .default([]),
    projects: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          award: z.string().optional(),
          youtube: z.string().optional(),
          video: z.string().optional(),
          poster: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { news, projects, systemProjects, teaching };
