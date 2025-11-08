export type Language = 'de' | 'en';

export const translations = {
	de: {
		// Navigation
		nav: {
			products: 'Produkte',
			blog: 'Blog',
			philosophy: 'Philosophie',
			impressum: 'Impressum',
			datenschutz: 'Datenschutz',
			joinUs: 'Mitmachen'
		},
		// Homepage
		home: {
			hero: {
				innovate: 'Innovieren.',
				include: 'Einbeziehen.',
				empower: 'Ermächtigen',
				subtitle: 'Lösungen für eine vernetzte Welt',
				description: 'Wir entwickeln barrierefreie, modernste Technologie, die Verständnis und Fortschritt fördert.',
				explorePlatforms: 'Plattformen erkunden',
				readStory: 'Unsere Geschichte'
			},
			featuredProducts: {
				title: 'Ausgewählte Produkte',
				accessAI: 'AccessAI',
				communiLink: 'CommuniLink',
				description1: 'Förderung echten Dialogs durch leistungsstarke KI-Technologie, die zuhört, bis die Stimme des Nutzers zählt.',
				description2: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut.',
				comingSoon: 'Demnächst',
				moreProducts: 'Weitere Produkte',
				moreDescription: 'Wir entwickeln ständig neue Produkte, um Ihre Anforderungen zu erfüllen und Möglichkeiten zu erweitern.'
			},
			mission: {
				title: 'Unsere Mission',
				inclusive: 'Inklusiv im Design',
				inclusiveDesc: 'Jedes Produkt, das wir entwickeln, wurde von Grund auf mit Barrierefreiheit und Inklusion entwickelt, damit niemand zurückgelassen wird.',
				fast: 'Schnell & Modern',
				fastDesc: 'Entwickelt mit modernster Technologie wie SvelteKit und Svelte 5 für außergewöhnliche Leistung.',
				scalable: 'Skalierbare Lösungen',
				scalableDesc: 'Unsere Produkte wachsen mit Ihren Anforderungen, von kleinen Projekten bis hin zu Implementierungen auf Unternehmensebene.'
			},
			blog: {
				title: 'Neueste Erkenntnisse',
				viewAll: 'Alle anzeigen →',
				tutorial: 'Tutorial',
				blogTitle: 'Erste Schritte mit SvelteKit ISR',
				blogDesc: 'Erfahren Sie, wie Sie Incremental Static Regeneration in SvelteKit mit Svelte 5 für optimale Leistung implementieren.',
				minRead: 'Min. Lesezeit',
				readArticle: 'Artikel lesen →'
			},
			cta: {
				title: 'Bereit loszulegen?',
				description: 'Entdecken Sie unsere Produkte oder kontaktieren Sie uns, um zu erfahren, wie wir Ihnen beim Aufbau inklusiver Lösungen helfen können.',
				viewProducts: 'Produkte ansehen',
				contactUs: 'Kontakt'
			},
			bookMe: {
				title: 'Buche mich',
				subtitle: 'Lösungen für Mensch & System',
				intro: 'Mit mehrjähriger Erfahrung an der Schnittstelle von Personalmanagement und Software-Architektur – in Großunternehmen, KMU und Start-ups – biete ich mehr als nur Code. Ich entwerfe ganzheitliche Lösungen für Deine Business-Herausforderungen.',
				servicesTitle: 'Mein Leistungsangebot',
				tech: {
					title: 'Technologie & Software:',
					description: 'Webauftritte, Web Apps, internes Tooling, KI-Automatisierung.'
				},
				architecture: {
					title: 'Architektur & Prozesse:',
					description: 'Systemdesign, Prozessanalyse, digitale Barrierefreiheit.'
				},
				people: {
					title: 'Mensch & Organisation:',
					description: 'Optimierte Recruiting Pipelines, Mitarbeitendenschulungen, Organisationsentwicklung.'
				},
				goal: 'Mein Ziel: Eine digitalisierte, moderne Organisation, in der Du und Dein Team gut und gerne arbeiten.'
			},
			techStack: {
				title: 'Mein Tech Stack',
				subtitle: 'Die Werkzeuge, die ich nutze, um Ihre Lösungen zu bauen',
				python: 'Python',
				pythonDesc: 'KI, Machine Learning & Automatisierung',
				svelte: 'Svelte 5',
				svelteDesc: 'Schnelle, moderne Web-Apps',
				nextjs: 'Next.js',
				nextjsDesc: 'React & Server-Side Rendering',
				supabase: 'Supabase',
				supabaseDesc: 'Open Source Backend & Datenbank',
				learnMore: 'Mehr erfahren →'
			}
		},
		// Products Page
		products: {
			title: 'Unsere Produkte',
			description: 'Entdecken Sie unser umfassendes Angebot an Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind',
			learnMore: 'Mehr erfahren →',
			noProducts: 'Derzeit keine Produkte verfügbar.'
		},
		// Blog Page
		blog: {
			title: 'Blog',
			description: 'Einblicke, Geschichten und Updates von unserem Team',
			minRead: 'Min',
			noPosts: 'Derzeit keine Blog-Beiträge verfügbar.'
		},
		// Philosophy Page
		philosophy: {
			title: 'Philosophie',
			underConstruction: 'Wir denken noch darüber nach, was wir hier schreiben sollen',
			constructionBadge: 'Im Aufbau 🚧',
			checkBack: 'Schauen Sie bald wieder vorbei!',
			workingOnIt: 'Wir arbeiten an etwas Besonderem. In der Zwischenzeit können Sie unsere Produkte und den Blog erkunden.',
			viewProducts: 'Produkte ansehen',
			readBlog: 'Blog lesen'
		},
		// Footer
		footer: {
			tagline: 'Aufbau inklusiver Lösungen für alle.',
			productsTitle: 'Produkte',
			allProducts: 'Alle Produkte',
			sampleProduct: 'Beispielprodukt',
			resourcesTitle: 'Ressourcen',
			blog: 'Blog',
			latestPost: 'Neuester Beitrag',
			legalTitle: 'Rechtliches',
			impressum: 'Impressum',
			datenschutz: 'Datenschutz',
			copyright: 'Alle Rechte vorbehalten.'
		}
	},
	en: {
		// Navigation
		nav: {
			products: 'Products',
			blog: 'Blog',
			philosophy: 'Philosophy',
			impressum: 'Impressum',
			datenschutz: 'Privacy',
			joinUs: 'Join Us'
		},
		// Homepage
		home: {
			hero: {
				innovate: 'Innovate.',
				include: 'Include.',
				empower: 'Empower',
				subtitle: 'Solutions for a Connected World',
				description: 'We build accessible, cutting-edge technology that brings fostering understanding and progress.',
				explorePlatforms: 'Explore Platforms',
				readStory: 'Read Our Story'
			},
			featuredProducts: {
				title: 'Featured Products',
				accessAI: 'AccessAI',
				communiLink: 'CommuniLink',
				description1: 'Fostering true dialogue through powerful AI-powered technology that listens till the user voice count.',
				description2: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut.',
				comingSoon: 'Coming Soon',
				moreProducts: 'More Products',
				moreDescription: 'We\'re constantly developing new products to meet your needs and expand possibilities.'
			},
			mission: {
				title: 'Our Mission',
				inclusive: 'Inclusive by Design',
				inclusiveDesc: 'Every product we create is built with accessibility and inclusion at its core, ensuring no one is left behind.',
				fast: 'Fast & Modern',
				fastDesc: 'Built with cutting-edge technology like SvelteKit and Svelte 5, delivering exceptional performance.',
				scalable: 'Scalable Solutions',
				scalableDesc: 'Our products grow with your needs, from small projects to enterprise-level implementations.'
			},
			blog: {
				title: 'Latest Insights',
				viewAll: 'View all →',
				tutorial: 'Tutorial',
				blogTitle: 'Getting Started with SvelteKit ISR',
				blogDesc: 'Learn how to implement Incremental Static Regeneration in SvelteKit with Svelte 5 for optimal performance.',
				minRead: 'min read',
				readArticle: 'Read article →'
			},
			cta: {
				title: 'Ready to Get Started?',
				description: 'Explore our products or get in touch to learn how we can help you build inclusive solutions.',
				viewProducts: 'View Products',
				contactUs: 'Contact Us'
			},
			bookMe: {
				title: 'Book Me',
				subtitle: 'Solutions for People & Systems',
				intro: 'With several years of experience at the intersection of human resources and software architecture – in large corporations, SMEs and start-ups – I offer more than just code. I design holistic solutions for your business challenges.',
				servicesTitle: 'My Service Offering',
				tech: {
					title: 'Technology & Software:',
					description: 'Websites, web apps, internal tooling, AI automation.'
				},
				architecture: {
					title: 'Architecture & Processes:',
					description: 'System design, process analysis, digital accessibility.'
				},
				people: {
					title: 'People & Organization:',
					description: 'Optimized recruiting pipelines, employee training, organizational development.'
				},
				goal: 'My goal: A digitalized, modern organization where you and your team enjoy working.'
			},
			techStack: {
				title: 'My Tech Stack',
				subtitle: 'The tools I use to build your solutions',
				python: 'Python',
				pythonDesc: 'AI, Machine Learning & Automation',
				svelte: 'Svelte 5',
				svelteDesc: 'Fast, modern web apps',
				nextjs: 'Next.js',
				nextjsDesc: 'React & Server-Side Rendering',
				supabase: 'Supabase',
				supabaseDesc: 'Open Source Backend & Database',
				learnMore: 'Learn more →'
			}
		},
		// Products Page
		products: {
			title: 'Our Products',
			description: 'Discover our comprehensive range of solutions designed to meet your needs',
			learnMore: 'Learn more →',
			noProducts: 'No products available at the moment.'
		},
		// Blog Page
		blog: {
			title: 'Blog',
			description: 'Insights, stories, and updates from our team',
			minRead: 'min',
			noPosts: 'No blog posts available at the moment.'
		},
		// Philosophy Page
		philosophy: {
			title: 'Philosophy',
			underConstruction: 'We are still thinking about what to write here',
			constructionBadge: 'Under Construction 🚧',
			checkBack: 'Check back soon!',
			workingOnIt: 'We\'re working on something special. In the meantime, explore our products and blog.',
			viewProducts: 'View Products',
			readBlog: 'Read Blog'
		},
		// Footer
		footer: {
			tagline: 'Building inclusive solutions for everyone.',
			productsTitle: 'Products',
			allProducts: 'All Products',
			sampleProduct: 'Sample Product',
			resourcesTitle: 'Resources',
			blog: 'Blog',
			latestPost: 'Latest Post',
			legalTitle: 'Legal',
			impressum: 'Impressum',
			datenschutz: 'Privacy',
			copyright: 'All rights reserved.'
		}
	}
} as const;
