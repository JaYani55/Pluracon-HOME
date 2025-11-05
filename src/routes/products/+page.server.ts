import { getAllProducts } from '$lib/server/productService';
import type { PageServerLoad } from './$types';

// Enable prerendering for the products listing page
export const prerender = true;

export const load: PageServerLoad = async ({ setHeaders }) => {
	// Fetch all published products
	const products = await getAllProducts();

	// Set cache headers for ISR
	setHeaders({
		'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
	});

	return {
		products
	};
};
