import type { Product, ProductListItem } from '$lib/types/product';

/**
 * Get all products for listing
 * In the future, this can be extended to fetch from Supabase or other data sources
 */
export async function getAllProducts(options?: { includeUnpublished?: boolean }): Promise<ProductListItem[]> {
	const { includeUnpublished = false } = options || {};

	// For now, we'll import local JSON files
	// In production, replace with Supabase queries or API calls
	const productModules = import.meta.glob('$lib/data/products/*.json');
	const products: ProductListItem[] = [];

	for (const path in productModules) {
		const module = await productModules[path]() as { default: Product };
		const product = module.default;

		if (product.published || includeUnpublished) {
			products.push({
				slug: product.slug,
				title: product.title,
				description: product.hero.description,
				image: product.hero.image,
				published: product.published
			});
		}
	}

	return products;
}

/**
 * Get a single product by slug
 * Supports preview mode to show unpublished products
 */
export async function getProductBySlug(
	slug: string,
	options?: { isPreview?: boolean }
): Promise<Product | null> {
	const { isPreview = false } = options || {};

	try {
		// Try to import the product JSON file
		const product = await import(`$lib/data/products/${slug}.json`).then(
			(module) => module.default as Product
		);

		// Check if product exists and is published (unless in preview mode)
		if (!product || (!product.published && !isPreview)) {
			return null;
		}

		return product;
	} catch (error) {
		console.error(`Error loading product ${slug}:`, error);
		return null;
	}
}

/**
 * Get related products based on current product
 * This is a simple implementation - can be enhanced with better logic
 */
export async function getRelatedProducts(currentSlug: string, limit = 3): Promise<ProductListItem[]> {
	const allProducts = await getAllProducts();
	return allProducts
		.filter((p) => p.slug !== currentSlug)
		.slice(0, limit);
}
