import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artists = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/artists" }),
  schema: z.object({
    name: z.string(),
    stage_name: z.string(),
    genre: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const albums = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/albums" }),
  schema: z.object({
    name: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date(), // e.g. 2024-09-17
    tracks: z.array(z.string()),
    artist: reference('artists'),
  }),
});

const temples = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/temples" }),
  schema: z.object({
    name: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date(), // e.g. 2024-09-17
    nation: z.string(),
    area: z.string(),
    address: z.string(),
  }),
});

const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/areas" }),
  schema: z.object({
    name: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    temples: z.array(z.string()),
    publishDate: z.date(), // e.g. 2024-09-17
    nation: z.string(),
  }),
});

const nations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/nations" }),
  schema: z.object({
    name: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date(), // e.g. 2024-09-17
    areas: z.array(z.string()),
    capital: z.string(),
    continent: z.string(),
  }),
});
// Export all collections
export const collections = {artists, albums, temples, areas, nations};
