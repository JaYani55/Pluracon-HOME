import { getAllBlogPosts } from '$lib/server/blogService';
import type { PageServerLoad } from './$types';

// Enable prerendering for the blog listing page
export const prerender = true;

export const load: PageServerLoad = async ({ setHeaders }) => {
	// Fetch all published blog posts
	const posts = await getAllBlogPosts();

	// Set cache headers for ISR
	setHeaders({
		'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
	});

	return {
		posts
	};
};
