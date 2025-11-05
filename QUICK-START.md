# 🚀 Quick Start Guide - Adding Content

## Adding a New Product

### Step 1: Create Product JSON

Create `src/lib/data/products/your-product-slug.json`:

```json
{
  "slug": "your-product-slug",
  "title": "Your Product Name",
  "published": true,
  "publishedAt": "2025-01-15T10:00:00Z",
  "hero": {
    "title": "Main Headline",
    "subtitle": "Optional Tagline",
    "description": "Product description that appears in the hero section",
    "image": "/images/products/hero.jpg",
    "ctaText": "Get Started",
    "ctaLink": "/contact"
  },
  "features": [
    {
      "id": "feature-1",
      "title": "Feature Title",
      "description": "Feature description",
      "icon": "🚀"
    }
  ],
  "cards": [
    {
      "id": "card-1",
      "title": "Use Case",
      "description": "How it's used",
      "image": "/images/use-case.jpg"
    }
  ],
  "faq": [
    {
      "id": "faq-1",
      "question": "Common question?",
      "answer": "Clear answer"
    }
  ],
  "cta": {
    "title": "Ready to start?",
    "description": "Call to action description",
    "buttonText": "Contact Us",
    "buttonLink": "/contact"
  }
}
```

### Step 2: Access Your Product

Your product is now available at:
- **URL**: `/products/your-product-slug`
- **Preview**: `/products/your-product-slug?preview=true`

---

## Adding a New Blog Post

### Step 1: Create Blog JSON

Create `src/lib/data/blogs/your-post-slug.json`:

```json
{
  "slug": "your-post-slug",
  "title": "Your Blog Post Title",
  "description": "Short description for SEO and listings",
  "published": true,
  "publishedAt": "2025-01-15T10:00:00Z",
  "category": "Tutorial",
  "tags": ["sveltekit", "web-dev"],
  "coverImage": "/images/blog/cover.jpg",
  "readingTime": 5,
  "author": {
    "name": "Author Name",
    "bio": "Short author bio",
    "avatar": "/images/authors/avatar.jpg"
  },
  "content": [
    {
      "id": "intro",
      "type": "heading",
      "level": "heading1",
      "content": "Introduction"
    },
    {
      "id": "para1",
      "type": "text",
      "content": "Your paragraph text here..."
    }
  ]
}
```

### Step 2: Access Your Blog Post

Your blog post is now available at:
- **URL**: `/blog/your-post-slug`
- **Preview**: `/blog/your-post-slug?preview=true`

---

## Content Block Examples

### Text Block
```json
{
  "id": "unique-id",
  "type": "text",
  "content": "Your paragraph text"
}
```

### Heading Block
```json
{
  "id": "heading-id",
  "type": "heading",
  "level": "heading2",
  "content": "Section Title"
}
```

### Image Block
```json
{
  "id": "image-id",
  "type": "image",
  "src": "/images/example.jpg",
  "alt": "Image description",
  "caption": "Optional caption"
}
```

### Video Block
```json
{
  "id": "video-id",
  "type": "video",
  "src": "https://www.youtube.com/embed/VIDEO_ID",
  "caption": "Optional caption"
}
```

### Quote Block
```json
{
  "id": "quote-id",
  "type": "quote",
  "text": "The quote text",
  "author": "Author Name"
}
```

### List Block
```json
{
  "id": "list-id",
  "type": "list",
  "style": "unordered",
  "items": [
    "First item",
    "Second item",
    "Third item"
  ]
}
```

---

## Testing Your Content

### Development Mode

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Visit your pages:
   - Products: http://localhost:5173/products
   - Blogs: http://localhost:5173/blog

### Preview Unpublished Content

1. Set `"published": false` in your JSON
2. Add `?preview=true` to the URL:
   ```
   http://localhost:5173/products/my-product?preview=true
   ```

---

## Common Tasks

### Change Cache Duration

Edit the `+page.server.ts` file:

```typescript
setHeaders({
  'Cache-Control': 'public, s-maxage=7200, stale-while-revalidate=86400'
  // s-maxage=7200 = 2 hours
});
```

### Add a New Content Block Type

1. Add type to `src/lib/types/content.d.ts`:
```typescript
export interface CustomBlock extends BaseContentBlock {
  type: 'custom';
  customField: string;
}
```

2. Add to union type:
```typescript
export type ContentBlock = TextBlock | CustomBlock | ...
```

3. Add renderer in `ContentRenderer.svelte`:
```svelte
{:else if block.type === 'custom'}
  <div class="custom-block">
    {block.customField}
  </div>
```

---

## Deployment Checklist

### Before Deploying

- [ ] Update all placeholder content
- [ ] Replace sample images with real ones
- [ ] Set all products/blogs to `"published": true`
- [ ] Test all routes locally
- [ ] Check responsive design
- [ ] Verify SEO meta tags

### Vercel Deployment

```bash
npm run build
vercel deploy --prod
```

### Environment Variables

If using Supabase in the future:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

---

## Troubleshooting

### Product/Blog Not Showing

1. Check JSON syntax is valid
2. Verify `"published": true`
3. Ensure slug matches filename
4. Clear cache and rebuild

### Images Not Loading

1. Place images in `static/` folder
2. Reference with `/images/name.jpg` (leading slash)
3. Check file paths are correct

### TypeScript Errors

1. Run `npm run check` to see all errors
2. Ensure types match JSON structure
3. Rebuild with `npm run build`

---

## Need Help?

- 📖 Full documentation: `ISR-ARCHITECTURE.md`
- 📝 Implementation summary: `IMPLEMENTATION-SUMMARY.md`
- 🔗 SvelteKit docs: https://kit.svelte.dev
- 🎨 Svelte 5 docs: https://svelte.dev

Happy coding! 🚀
