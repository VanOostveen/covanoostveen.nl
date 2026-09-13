import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const stukken = defineCollection({
  loader: glob({ base: './src/content/stukken', pattern: '**/*.md' }),
  schema: z.object({
    titel: z.string(),
    datum: z.coerce.date(),
    type: z.enum(['noot', 'essay', 'werk', 'publicatie']),
    samenvatting: z.string(),
    ecli: z.string().optional(),
    instantie: z.string().optional(),
    uitspraakdatum: z.coerce.date().optional(),
    taal: z.enum(['nl', 'en']).default('nl'),
    concept: z.boolean().default(false),
    genummerd: z.boolean().optional(),
    canonical: z.string().url().optional(),
    extern: z
      .object({
        bron: z.string(),
        url: z.string().url().optional(),
        volledigeTekstVanaf: z.coerce.date().optional(),
      })
      .optional(),
  }),
});

export const collections = { stukken };
