<script lang="ts">
	import type { PageData } from './$types';
	import { currentLanguage, t } from '$lib/stores/language';

	let { data }: { data: PageData } = $props();
	const { posts } = data;

	let lang = $derived($currentLanguage);
	let translations = $derived(t(lang));
</script>

<svelte:head>
	<title>Blog | Pluracon</title>
	<meta name="description" content="Read our latest articles and insights" />
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Hero Header -->
	<section class="py-16 px-6 bg-primary border-b-4 border-black">
		<div class="container mx-auto max-w-6xl">
			<div class="border-4 border-black bg-white p-2 inline-block">
				<h1 class="text-5xl md:text-6xl font-black uppercase px-4 py-2">{translations.blog.title}</h1>
			</div>
			<p class="text-xl font-bold text-white mt-6 max-w-3xl">
				{translations.blog.description}
			</p>
		</div>
	</section>

	<section class="py-16 px-6 bg-white">
		<div class="container mx-auto max-w-6xl">
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each posts as post (post.slug)}
					<a
						href="/blog/{post.slug}"
						class="group block neo-card bg-card overflow-hidden"
					>
						{#if post.coverImage}
							<div class="overflow-hidden border-b-4 border-black">
								<img
									src={post.coverImage}
									alt={post.title}
									class="w-full h-64 object-cover"
								/>
							</div>
						{:else}
							<div class="h-64 bg-secondary border-b-4 border-black flex items-center justify-center">
								<span class="text-6xl">📝</span>
							</div>
						{/if}
						<div class="p-6">
							{#if post.category}
								<span class="inline-block border-4 border-black bg-accent text-white px-3 py-1 text-xs font-black uppercase mb-3">
									{post.category}
								</span>
							{/if}
							
							<h2 class="text-2xl font-black mb-3 uppercase group-hover:text-primary transition-colors">
								{post.title}
							</h2>
							
							<p class="font-medium line-clamp-3 mb-4">{post.description}</p>
							
							<div class="flex items-center justify-between text-sm font-bold border-t-4 border-black pt-4">
								<div class="flex items-center gap-2">
									{#if post.author.avatar}
										<img
											src={post.author.avatar}
											alt={post.author.name}
											class="w-8 h-8 border-2 border-black"
										/>
									{/if}
									<span>{post.author.name}</span>
								</div>
								
								{#if post.readingTime}
									<span class="bg-secondary px-2 py-1 border-2 border-black">{post.readingTime} {translations.blog.minRead}</span>
								{/if}
							</div>
						</div>
					</a>
				{/each}
			</div>

			{#if posts.length === 0}
				<div class="text-center py-12">
					<div class="neo-card bg-secondary p-12 max-w-md mx-auto">
						<span class="text-6xl block mb-4">📭</span>
						<p class="text-xl font-black uppercase">{translations.blog.noPosts}</p>
					</div>
				</div>
			{/if}
		</div>
	</section>
</div>
