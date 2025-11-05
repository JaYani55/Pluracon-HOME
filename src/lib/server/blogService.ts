import type { BlogPost, BlogListItem } from '$lib/types/blog';

/**
 * Get all blog posts for listing
 * In the future, this can be extended to fetch from Supabase or other data sources
 */
export async function getAllBlogPosts(options?: { includeUnpublished?: boolean }): Promise<BlogListItem[]> {
	const { includeUnpublished = false } = options || {};

	// For now, we'll import local JSON files
	// In production, replace with Supabase queries or API calls
	const blogModules = import.meta.glob('$lib/data/blogs/*.json');
	const posts: BlogListItem[] = [];

	for (const path in blogModules) {
		const module = await blogModules[path]() as { default: BlogPost };
		const post = module.default;

		if (post.published || includeUnpublished) {
			posts.push({
				slug: post.slug,
				title: post.title,
				description: post.description,
				author: post.author,
				publishedAt: post.publishedAt,
				category: post.category,
				coverImage: post.coverImage,
				readingTime: post.readingTime
			});
		}
	}

	// Sort by published date (newest first)
	posts.sort((a, b) => {
		if (!a.publishedAt || !b.publishedAt) return 0;
		return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
	});

	return posts;
}

/**
 * Get a single blog post by slug
 * Supports preview mode to show unpublished posts
 */
export async function getBlogPostBySlug(
	slug: string,
	options?: { isPreview?: boolean }
): Promise<BlogPost | null> {
	const { isPreview = false } = options || {};

	try {
		// Try to import the blog post JSON file
		const post = await import(`$lib/data/blogs/${slug}.json`).then(
			(module) => module.default as BlogPost
		);

		// Check if post exists and is published (unless in preview mode)
		if (!post || (!post.published && !isPreview)) {
			return null;
		}

		return post;
	} catch (error) {
		console.error(`Error loading blog post ${slug}:`, error);
		return null;
	}
}

/**
 * Get related blog posts based on category or tags
 */
export async function getRelatedBlogPosts(currentSlug: string, limit = 3): Promise<BlogListItem[]> {
	const allPosts = await getAllBlogPosts();
	return allPosts
		.filter((p) => p.slug !== currentSlug)
		.slice(0, limit);
}
