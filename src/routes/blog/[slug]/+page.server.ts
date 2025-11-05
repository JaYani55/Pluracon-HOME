import { getBlogPostBySlug } from '$lib/server/blogService';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Enable prerendering for ISR
export const prerender = true;

export const load: PageServerLoad = async ({ params, setHeaders, url }) => {
	const { slug } = params;
	
	// Check for preview mode via URL parameter
	const isPreview = url.searchParams.get('preview') === 'true';

	// Fetch blog post data using the server service
	const blogPost = await getBlogPostBySlug(slug, { isPreview });

	if (!blogPost) {
		error(404, {
			message: 'Blog post not found'
		});
	}

	// Set ISR cache headers (only if NOT in preview mode)
	// Blog posts might update less frequently, so we can cache for longer
	if (!isPreview) {
		setHeaders({
			'Cache-Control': 'public, s-maxage=7200, stale-while-revalidate=86400'
			// s-maxage=7200: Cache for 2 hours
			// stale-while-revalidate=86400: Serve stale content while revalidating for up to 24 hours
		});
	}

	// Return data to the page component
	return {
		blogPost
	};
};
