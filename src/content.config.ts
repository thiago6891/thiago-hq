import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
	}),
});

export const collections = {
	'case-studies': caseStudies,
};
