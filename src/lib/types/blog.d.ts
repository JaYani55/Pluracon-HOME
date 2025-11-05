import type { ContentBlock } from './content';

export interface BlogAuthor {
	name: string;
	bio?: string;
	avatar?: string;
	email?: string;
}

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	content: ContentBlock[];
	author: BlogAuthor;
	published: boolean;
	publishedAt?: string;
	updatedAt?: string;
	category?: string;
	tags?: string[];
	coverImage?: string;
	readingTime?: number;
}

export interface BlogListItem {
	slug: string;
	title: string;
	description: string;
	author: BlogAuthor;
	publishedAt?: string;
	category?: string;
	coverImage?: string;
	readingTime?: number;
}
