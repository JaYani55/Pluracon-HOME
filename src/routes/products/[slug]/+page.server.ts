import { getProductBySlug } from '$lib/server/productService';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Disable prerendering until we have published products
export const prerender = false;

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const { slug } = params;

	// Fetch product data using the server service
	const product = await getProductBySlug(slug, { isPreview: false });

	if (!product) {
		error(404, {
			message: 'Product not found'
		});
	}

	// Set ISR cache headers for optimal performance
	// This tells the hosting platform (Vercel, Netlify, etc.) to cache the page
	// and revalidate it after 1 hour (3600 seconds)
	setHeaders({
		'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
		// s-maxage=3600: Cache for 1 hour
		// stale-while-revalidate=86400: Serve stale content while revalidating for up to 24 hours
	});

	// Return data to the page component
	return {
		product
	};
};
