import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const masters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/masters" }),
  schema: z.object({
    name: z.string(),
    name_en: z.string() || null,
    name_vi: z.string() || null,
    name_zh: z.string() || null,
    name_jp: z.string() || null,
    dynasty: z.string() || null,
    sect: z.string() || null, // e.g. Linji (Rinzai), Caodong (Soto), Yunmen (Unmon), Fayan (Hogen), Guiyang (Igyō (潙仰宗)),
    color: z.string() || null,
    disciples: z.array(z.string()) || null,
    image: z.object({
      src: z.string() || null,
      alt: z.string() || null,
    }),
  }),
});

const records = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/records" }),
  schema: z.object({
    name: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date(), // e.g. 2024-09-17
    chapters: z.array(z.string()),
    master: reference('masters'),
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

const years = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/years" }),
  schema: z.object({
    title: z.string(),
    content: z.array(z.array(z.string()),),
  }),
});
// Export all collections
export const collections = {masters, records, temples, areas, nations, years};
