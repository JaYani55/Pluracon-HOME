# Pluracon Home - SvelteKit with ISR

This project implements a modern SvelteKit application with **Incremental Static Regeneration (ISR)** using **Svelte 5**. It follows a hybrid content strategy with both local JSON data and support for future integration with Supabase or other data sources.

## 🏗️ Architecture Overview

### Key Features

- ✅ **Static Pages**: Hard-coded pages like Impressum and Datenschutz pre-rendered at build time
- ✅ **ISR for Products & Blogs**: Dynamic content with automatic cache revalidation
- ✅ **Block-Based Content Renderer**: Reusable component for flexible content layouts
- ✅ **TypeScript Types**: Fully typed data structures
- ✅ **Preview Mode**: View unpublished content via `?preview=true` query parameter
- ✅ **Svelte 5 Runes**: Modern reactive syntax with `$props()`, `$state()`, `$derived()`

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── shared/
│   │       └── ContentRenderer.svelte    # Reusable block-based content renderer
│   ├── data/
│   │   ├── products/
│   │   │   └── sample-product.json       # Product data (JSON format)
│   │   └── blogs/
│   │       └── sample-blog-post.json     # Blog post data (JSON format)
│   ├── server/
│   │   ├── productService.ts             # Server-side product data logic
│   │   └── blogService.ts                # Server-side blog data logic
│   └── types/
│       ├── content.d.ts                  # Content block type definitions
│       ├── product.d.ts                  # Product type definitions
│       └── blog.d.ts                     # Blog post type definitions
│
└── routes/
    ├── +layout.svelte                    # Root layout
    ├── +page.svelte                      # Homepage
    ├── impressum/
    │   └── +page.svelte                  # Static legal page
    ├── datenschutz/
    │   └── +page.svelte                  # Static privacy policy
    ├── products/
    │   ├── [slug]/
    │   │   ├── +page.server.ts           # ISR logic for product pages
    │   │   └── +page.svelte              # Product template
    │   └── +page.svelte                  # Product listing
    └── blog/
        ├── [slug]/
        │   ├── +page.server.ts           # ISR logic for blog posts
        │   └── +page.svelte              # Blog post template
        └── +page.svelte                  # Blog listing
```

## 🚀 How ISR Works

### Cache Headers

ISR is implemented using HTTP cache headers in the `+page.server.ts` files:

```typescript
setHeaders({
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
});
```

- **`s-maxage=3600`**: Cache for 1 hour (3600 seconds)
- **`stale-while-revalidate=86400`**: Serve stale content while revalidating for up to 24 hours

### Preview Mode

Add `?preview=true` to any product or blog URL to bypass the cache and view unpublished content:

```
https://example.com/products/my-product?preview=true
https://example.com/blog/my-post?preview=true
```

## 📝 Content Management

### Adding a New Product

1. Create a new JSON file in `src/lib/data/products/`:

```json
{
  "slug": "my-new-product",
  "title": "My New Product",
  "published": true,
  "hero": {
    "title": "Product Title",
    "subtitle": "Subtitle",
    "description": "Description"
  },
  "features": [...],
  "cta": {...}
}
```

2. The product will automatically be available at `/products/my-new-product`

### Adding a New Blog Post

1. Create a new JSON file in `src/lib/data/blogs/`:

```json
{
  "slug": "my-blog-post",
  "title": "My Blog Post",
  "published": true,
  "content": [
    {
      "id": "intro",
      "type": "text",
      "content": "Introduction paragraph..."
    }
  ],
  "author": {...}
}
```

2. The blog post will automatically be available at `/blog/my-blog-post`

## 🎨 Content Blocks

The `ContentRenderer` component supports these block types:

- **`text`**: Paragraph text
- **`heading`**: H1, H2, or H3 headings
- **`image`**: Images with optional captions
- **`video`**: Embedded videos (iframe)
- **`quote`**: Blockquotes with optional author
- **`list`**: Ordered or unordered lists

### Example Content Block

```json
{
  "id": "unique-id",
  "type": "image",
  "src": "/images/example.jpg",
  "alt": "Description",
  "caption": "Optional caption"
}
```

## 🔄 Migrating to Supabase

To migrate from local JSON files to Supabase:

1. Update `src/lib/server/productService.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single();
  
  return data;
}
```

2. Do the same for `blogService.ts`

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This project uses `@sveltejs/adapter-auto` which automatically detects your deployment platform:

- **Vercel**: Supports ISR out of the box
- **Netlify**: Supports ISR via On-Demand Builders
- **Node.js**: Use `@sveltejs/adapter-node` for custom hosting

### Vercel Deployment

```bash
npm run build
vercel deploy
```

ISR cache headers will be automatically interpreted by Vercel's edge network.

## 📚 TypeScript Types

All data structures are fully typed:

- **Content Blocks**: `src/lib/types/content.d.ts`
- **Products**: `src/lib/types/product.d.ts`
- **Blog Posts**: `src/lib/types/blog.d.ts`

## 🎯 Best Practices

1. **Always set `prerender = true`** in `+page.server.ts` for ISR pages
2. **Use preview mode** for reviewing unpublished content
3. **Adjust cache times** based on content update frequency
4. **Keep JSON files validated** against TypeScript types
5. **Use descriptive block IDs** for content blocks

## 📖 Additional Resources

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Svelte 5 Documentation](https://svelte.dev/)
- [ISR in SvelteKit](https://kit.svelte.dev/docs/page-options#prerender)

---

Built with ❤️ using SvelteKit and Svelte 5
