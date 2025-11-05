import { getProductBySlug } from '$lib/server/productService';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Enable prerendering for ISR
// Pages will be pre-rendered at build time and revalidated incrementally
export const prerender = true;

export const load: PageServerLoad = async ({ params, setHeaders, url }) => {
	const { slug } = params;
	
	// Check for preview mode via URL parameter
	const isPreview = url.searchParams.get('preview') === 'true';

	// Fetch product data using the server service
	const product = await getProductBySlug(slug, { isPreview });

	if (!product) {
		error(404, {
			message: 'Product not found'
		});
	}

	// Set ISR cache headers (only if NOT in preview mode)
	// This tells the hosting platform (Vercel, Netlify, etc.) to cache the page
	// and revalidate it after 1 hour (3600 seconds)
	if (!isPreview) {
		setHeaders({
			'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
			// s-maxage=3600: Cache for 1 hour
			// stale-while-revalidate=86400: Serve stale content while revalidating for up to 24 hours
		});
	}

	// Return data to the page component
	return {
		product
	};
};
