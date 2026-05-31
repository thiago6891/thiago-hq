export type ContactLink = {
	label: string;
	href: string;
};

export type Strength = {
	title: string;
	text: string;
};

export const contactLinks = [
	{ label: 'Email', href: 'mailto:thiago6891@gmail.com' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/replace-me' },
	{ label: 'GitHub', href: 'https://github.com/replace-me' },
	{ label: 'X', href: 'https://x.com/replace-me' },
] satisfies ContactLink[];

export const strengths = [
	{
		title: 'Backend systems',
		text: 'Designing service boundaries, APIs, data models, and operational behavior for production systems.',
	},
	{
		title: 'Infrastructure',
		text: 'Owning deployment paths, observability, reliability concerns, and the practical glue around services.',
	},
	{
		title: 'Migrations',
		text: 'Moving systems, data, and teams from legacy constraints to simpler, safer architecture.',
	},
	{
		title: 'Technical planning',
		text: 'Turning distributed systems work into sequenced plans with clear tradeoffs and failure modes.',
	},
] satisfies Strength[];

export const proofPoints = [
	'Untangled ambiguous backend and infrastructure problems before they became organizational drag.',
	'Planned migrations where correctness, rollout order, and rollback paths mattered more than novelty.',
	'Worked across product and engineering constraints to keep technical decisions grounded in delivery.',
	'Brought senior judgment to distributed systems design, operational readiness, and long-running maintenance.',
] satisfies string[];
