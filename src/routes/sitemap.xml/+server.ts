import type { RequestHandler } from './$types';
import { getAllBlogPosts } from '$lib/server/blogService';
import { getAllProducts } from '$lib/server/productService';

const site = 'https://pluracon.org';

export const GET: RequestHandler = async () => {
	const blogPosts = await getAllBlogPosts();
	const products = await getAllProducts();

	const pages = [
		'',
		'/blog',
		'/products',
		'/impressum',
		'/datenschutz'
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${pages.map((page) => `
	<url>
		<loc>${site}${page}</loc>
		<changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
		<priority>${page === '' ? '1.0' : '0.8'}</priority>
	</url>`).join('')}
	${blogPosts.map((post) => `
	<url>
		<loc>${site}/blog/${post.slug}</loc>
		<lastmod>${post.publishedAt || new Date().toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`).join('')}
	${products.map((product) => `
	<url>
		<loc>${site}/products/${product.slug}</loc>
		<changefreq>monthly</changefreq>
		<priority>0.9</priority>
	</url>`).join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
