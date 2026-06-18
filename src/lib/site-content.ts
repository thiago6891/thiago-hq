import EmailIcon from '../components/icons/EmailIcon.astro';
import LinkedInIcon from '../components/icons/LinkedInIcon.astro';

type ContactLabel = 'Email' | 'LinkedIn';

type ContactLink = {
	href: string;
	icon: (_props: Record<string, any>) => any;
	opensInNewTab?: boolean;
};

export const emailAddress = 'hi@thiagohq.com';

export const contactLinks: Record<ContactLabel, ContactLink> = {
	Email: { href: `mailto:${emailAddress}`, icon: EmailIcon },
	LinkedIn: {
		href: 'https://www.linkedin.com/in/thiago-c-cordeiro/',
		icon: LinkedInIcon,
		opensInNewTab: true,
	},
};

export const selectedResults = [
	{
		metric: '30+ endpoints',
		description: 'Migrated from AWS Lambda into a Node.js backend while feature development continued.',
	},
	{
		metric: '50%+ lower',
		description: 'AWS costs, saving thousands of dollars per month.',
	},
	{
		metric: '15 → 569 tests',
		description: 'Expanded unit and integration test coverage over seven months.',
	},
	{
		metric: '50× and 30×',
		description: 'Improved a hot path and a database operation respectively.',
	},
	{
		metric: '~50% of revenue',
		description: 'Led development of an API in a distributed payments system responsible for nearly half of company revenue.',
	},
];

export const expertise = [
	{ label: 'Backend', items: 'TypeScript, Node.js, Hono, NestJS, Express, REST APIs, event-driven systems' },
	{ label: 'Data', items: 'PostgreSQL, SQLite, Prisma, Drizzle, MikroORM' },
	{ label: 'Cloud', items: 'AWS, Cloudflare, Docker, infrastructure and cost optimization' },
	{ label: 'Product', items: 'React, system design, technical planning, testing strategy, AI-assisted engineering' },
];
