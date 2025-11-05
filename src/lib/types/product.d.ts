import type { ContentBlock } from './content';

export interface ProductHero {
	title: string;
	subtitle: string;
	description: string;
	image?: string;
	ctaText?: string;
	ctaLink?: string;
}

export interface ProductFeature {
	id: string;
	title: string;
	description: string;
	icon?: string;
	image?: string;
}

export interface ProductCard {
	id: string;
	title: string;
	description: string;
	image?: string;
	link?: string;
}

export interface ProductFAQItem {
	id: string;
	question: string;
	answer: string;
}

export interface ProductCTA {
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
}

export interface Product {
	slug: string;
	title: string;
	published: boolean;
	publishedAt?: string;
	updatedAt?: string;
	hero: ProductHero;
	features: ProductFeature[];
	cards?: ProductCard[];
	faq?: ProductFAQItem[];
	cta: ProductCTA;
	content?: ContentBlock[];
}

export interface ProductListItem {
	slug: string;
	title: string;
	description: string;
	image?: string;
	published: boolean;
}
