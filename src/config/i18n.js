export default {
	hero: {
		description: `I'm Tom Collins, a web developer based in Dublin Ireland. I specialize in front-end development. I love to learn new technologies and apply this new learning to solving business problems.`
	},
	work: [
		{
			company: 'Toast',
			duration: 'Nov 2021 - Present',
			title: 'Senior Frontend Engineer',
			duties: [
				'Working on the frontend of our identity management application using React, Jest, Testing Library and Tailwind',
				'Building out our one-time password feature for enhanced security.',
				'Contributing to developer tooling built in React.'
			]
		},
		{
			company: 'HubSpot',
			duration: 'May 2021 - Oct 2021',
			title: 'Web Development Manager',
			duties: [
				'Leading our accessibility project',
				'Auditing accessibility on new projects',
				'Building our web accessibility strategy'
			]
		},
		{
			company: 'HubSpot',
			duration: 'Apr 2020 - May 2021',
			title: 'Senior Web Developer',
			duties: [
				'Built full stack websites with NextJS, Prisma, and MySQL',
				'Created and rolled out a coding standards document to the team',
				'Standardized our linting by publishing a common npm package',
				'Created boilerplate app to share folder structures, build configs and naming conventions across the team',
				'Advocate for Agile development practices across the various projects',
				'Mentored developers by pair programming and leading workshops',
				'Writing Unit tests with Jest and React Testing Library'
			]
		},
		{
			company: 'HubSpot',
			duration: 'Mar 2018 - Apr 2020',
			title: 'Front-end Web Developer',
			duties: [
				'Built interactive apps with React, Redux, Styled Components, and SASS',
				'Created animations using Framer Motion and React Motion',
				'Part of an Agile development team with daily scrums and bi-weekly planning meetings and retrospectives',
				'Architected and built GraphQL APIs for our learning platform and our careers directory',
				'Made use of Redis to improve API performance',
				'Worked closely with designers to translate designs into web pages'
			]
		},
		{
			company: 'DocumentationHQ',
			duration: 'Aug 2017 - Mar 2018',
			title: 'Web Developer',
			duties: [
				'Writing React components, including CSS and JSX.',
				'Making key architectural decisions on state management and app design.',
				'Assisting in backend development and offering advice on API design.',
				'Researching and trialing new libraries and concepts before they are introduced to the application.',
				'Creating specs and gathering requirements from the product owner.',
				'Coordinating the allocation of work between the team of developers.'
			]
		},
		{
			company: 'Credit Suisse',
			duration: 'Jul 2011 - Oct 2013',
			title: '.NET Developer',
			duties: [
				'Member of the core team that architected, developed and tested a C# framework.',
				'Developed front-end components in C# using WPF and MVVM.',
				'Worked on our automated build server to improve our deployment process.',
				'Assisted in application support and onboarding of new teams to the framework.',
				'Participated in all aspects of the scrum methodology, including daily stand-ups, fortnightly planning meetings, and scrum reviews.',
				'Developed new functionality on multiple trade screens on our C# core application.'
			]
		}
	],
	projects: [
		{
			name: 'Make My Persona',
			url: 'https://www.hubspot.com/make-my-persona',
			tech: ['React', 'Redux', 'Firebase', 'draftJS'],
			description: 'An interactive web app where users can create and save buyer personas.'
		},
		{
			name: 'Hubspot Academy',
			url: 'https://academy.hubspot.com',
			tech: ['GraphQL', 'React', 'Apollo', 'Redis', 'Serverless'],
			description: 'Directory of lessons and courses available in HubSpot learning platform.'
		},
		{
			name: 'Go Siopa',
			url: 'https://www.gosiopa.ie/',
			tech: ['Svelte', 'Node', 'Go'],
			description:
				'Built during the lockdown, gosiopa.ie is a utility to search a myriad of Irish retailers.'
		},
		{
			name: 'AOE Library',
			url: 'https://www.aoelibrary.com/',
			tech: ['Svelte', 'Tailwind'],
			description:
				'Age of Empires fansite that hosts a directory of tools and sites related to the game.'
		},
		{
			name: 'Blog Ideas Generator',
			url: 'https://www.hubspot.com/blog-topic-generator',
			tech: ['React', 'GreenSock'],
			description: 'A tool to generate blog topics from a list of nouns.'
		}
	],
	education: [
		{
			course: 'MSc Computing Science',
			college: 'University College Cork',
			result: '1st Class Honours'
		},
		{
			course: 'BSc Business Information Systems',
			college: 'University College Cork',
			result: '1st Class Honours'
		}
	],
	tech: {
		production: [
			'React',
			'JavaScript',
			'CSS',
			'Node',
			'Redux',
			'SASS',
			'GraphQL',
			'Apollo',
			'Serverless',
			'Firebase',
			'NextJS',
			'Tailwind',
			'React Testing Library'
		],
		side: ['Svelte', 'GatsbyJS']
	}
};
