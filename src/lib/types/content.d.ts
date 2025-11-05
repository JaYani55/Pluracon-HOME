// Content block types for the reusable ContentRenderer component

export type ContentBlockType = 'text' | 'heading' | 'image' | 'video' | 'quote' | 'list';

export interface BaseContentBlock {
	id: string;
	type: ContentBlockType;
}

export interface TextBlock extends BaseContentBlock {
	type: 'text';
	content: string;
}

export interface HeadingBlock extends BaseContentBlock {
	type: 'heading';
	level: 'heading1' | 'heading2' | 'heading3';
	content: string;
}

export interface ImageBlock extends BaseContentBlock {
	type: 'image';
	src: string;
	alt: string;
	caption?: string;
}

export interface VideoBlock extends BaseContentBlock {
	type: 'video';
	src: string;
	caption?: string;
}

export interface QuoteBlock extends BaseContentBlock {
	type: 'quote';
	text: string;
	author?: string;
}

export interface ListBlock extends BaseContentBlock {
	type: 'list';
	style: 'ordered' | 'unordered';
	items: string[];
}

export type ContentBlock =
	| TextBlock
	| HeadingBlock
	| ImageBlock
	| VideoBlock
	| QuoteBlock
	| ListBlock;
