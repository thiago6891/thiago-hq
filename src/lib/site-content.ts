import EmailIcon from '../components/icons/EmailIcon.astro';
import GitHubIcon from '../components/icons/GitHubIcon.astro';
import LinkedInIcon from '../components/icons/LinkedInIcon.astro';
import XIcon from '../components/icons/XIcon.astro';

type ContactLabel = 'Email' | 'LinkedIn' | 'GitHub' | 'X';

type ContactLink = {
	href: string;
	icon: (_props: Record<string, any>) => any;
	opensInNewTab?: boolean;
};

type ContentCard = {
	title: string;
	text: string;
};

export const emailAddress = 'hi@thiagohq.com';

export const contactLinks: Record<ContactLabel, ContactLink> = {
	Email: { href: `mailto:${emailAddress}`, icon: EmailIcon },
	LinkedIn: {
		href: 'https://www.linkedin.com/in/thiago-c-cordeiro/',
		icon: LinkedInIcon,
		opensInNewTab: true,
	},
	GitHub: { href: 'https://github.com/thiago6891', icon: GitHubIcon, opensInNewTab: true },
	X: { href: 'https://x.com/tcordeiro68', icon: XIcon, opensInNewTab: true },
};

export const problemRecognition = [
	{
		title: 'Requirements are unclear',
		text: 'The work starts with different assumptions, different mental models, and no shared picture of what the system needs to do.',
	},
	{
		title: 'Ownership is hard to see',
		text: 'Nobody is quite sure who owns the decision, the service, the rollout, or the follow-through when production behavior changes.',
	},
	{
		title: 'Documentation falls behind',
		text: 'The useful context lives across chats, tickets, memory, and scattered notes, so each new change starts with reconstruction.',
	},
	{
		title: 'Small changes take too long',
		text: 'Simple requests become slow because the system is coupled, the risks are implicit, and the path to shipping is unclear.',
	},
] satisfies ContentCard[];

export const whatIBring = [
	{
		title: 'Clear plans from ambiguous work',
		text: 'I turn loose technical problems into concrete scopes, tradeoffs, risks, rollout paths, and written decisions that remote teams can act on.',
	},
	{
		title: 'Ownership through delivery',
		text: 'I stay close to the implementation details, the communication, and the operational follow-through needed to get work shipped reliably.',
	},
	{
		title: 'Technical judgment in existing systems',
		text: 'I work with the system that is already running, choosing changes that respect production risk, team capacity, and long-term maintenance.',
	},
	{
		title: 'Backend and infrastructure depth',
		text: 'I bring practical experience with APIs, service boundaries, data flows, migrations, deployment paths, observability, and reliability work.',
	},
] satisfies ContentCard[];
