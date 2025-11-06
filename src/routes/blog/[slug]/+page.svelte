<script lang="ts">
	import ContentRenderer from '$lib/components/shared/ContentRenderer.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { blogPost } = data;

	// Format date
	const formattedDate = blogPost.publishedAt
		? new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		: '';
</script>

<svelte:head>
	<title>{blogPost.title} | Pluracon Blog</title>
	<meta name="description" content={blogPost.description} />
	{#if blogPost.coverImage}
		<meta property="og:image" content={blogPost.coverImage} />
	{/if}
</svelte:head>

<article class="min-h-screen bg-background">
	<!-- Blog Header -->
	<header class="py-16 px-6 bg-primary border-b-4 border-black">
		<div class="container mx-auto max-w-4xl">
			{#if blogPost.category}
				<div class="mb-4">
					<span class="inline-block border-4 border-black bg-secondary px-4 py-2 text-sm font-black uppercase">
						{blogPost.category}
					</span>
				</div>
			{/if}
			
			<h1 class="text-4xl md:text-5xl font-black mb-6 text-white uppercase">{blogPost.title}</h1>
			
			<div class="flex items-center gap-6 text-white font-bold flex-wrap">
				<div class="flex items-center gap-3">
					{#if blogPost.author.avatar}
						<img
							src={blogPost.author.avatar}
							alt={blogPost.author.name}
							class="w-12 h-12 border-4 border-black"
						/>
					{/if}
					<div>
						<div class="font-black">{blogPost.author.name}</div>
						{#if formattedDate}
							<div class="text-sm">{formattedDate}</div>
						{/if}
					</div>
				</div>
				
				{#if blogPost.readingTime}
					<div class="text-sm border-4 border-black bg-white text-black px-3 py-1 font-black">
						{blogPost.readingTime} MIN READ
					</div>
				{/if}
			</div>
		</div>
	</header>

	<!-- Cover Image -->
	{#if blogPost.coverImage}
		<div class="container mx-auto max-w-4xl px-6 -mt-8 mb-12">
			<div class="neo-border neo-shadow-lg overflow-hidden">
				<img
					src={blogPost.coverImage}
					alt={blogPost.title}
					class="w-full"
				/>
			</div>
		</div>
	{/if}

	<!-- Blog Content -->
	<div class="container mx-auto max-w-4xl px-6 py-12">
		<div class="neo-card bg-white p-8 md:p-12">
			<ContentRenderer content={blogPost.content} className="prose prose-lg max-w-none" />
		</div>
	</div>

	<!-- Author Bio -->
	{#if blogPost.author.bio}
		<section class="container mx-auto max-w-4xl px-6 py-12">
			<div class="neo-card bg-secondary p-8">
				<h2 class="text-2xl font-black mb-6 uppercase">About the Author</h2>
				<div class="flex gap-6 items-start flex-wrap">
					{#if blogPost.author.avatar}
						<img
							src={blogPost.author.avatar}
							alt={blogPost.author.name}
							class="w-20 h-20 border-4 border-black shrink-0"
						/>
					{/if}
					<div>
						<h3 class="text-xl font-black mb-2 uppercase">{blogPost.author.name}</h3>
						<p class="font-medium">{blogPost.author.bio}</p>
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- Tags -->
	{#if blogPost.tags && blogPost.tags.length > 0}
		<section class="container mx-auto max-w-4xl px-6 pb-12">
			<div class="flex flex-wrap gap-3">
				{#each blogPost.tags as tag}
					<span class="inline-block border-4 border-black bg-white px-4 py-2 text-sm font-black uppercase">
						#{tag}
					</span>
				{/each}
			</div>
		</section>
	{/if}
</article>
