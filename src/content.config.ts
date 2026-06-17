import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		coverImage: z.string().optional(),
		coverImageAlt: z.string().optional(),
	}),
});

export const collections = {
	'case-studies': caseStudies,
};
