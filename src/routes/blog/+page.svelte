<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { posts } = data;
</script>

<svelte:head>
	<title>Blog | Pluracon</title>
	<meta name="description" content="Read our latest articles and insights" />
</svelte:head>

<div class="min-h-screen bg-background">
	<section class="py-20 px-6">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center mb-16">
				<h1 class="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
				<p class="text-xl text-muted-foreground max-w-3xl mx-auto">
					Insights, stories, and updates from our team
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each posts as post (post.slug)}
					<a
						href="/blog/{post.slug}"
						class="group block bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
					>
						{#if post.coverImage}
							<div class="overflow-hidden">
								<img
									src={post.coverImage}
									alt={post.title}
									class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
						{/if}
						<div class="p-6">
							{#if post.category}
								<span class="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold mb-3">
									{post.category}
								</span>
							{/if}
							
							<h2 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
								{post.title}
							</h2>
							
							<p class="text-muted-foreground line-clamp-3 mb-4">{post.description}</p>
							
							<div class="flex items-center justify-between text-sm text-muted-foreground">
								<div class="flex items-center gap-2">
									{#if post.author.avatar}
										<img
											src={post.author.avatar}
											alt={post.author.name}
											class="w-8 h-8 rounded-full"
										/>
									{/if}
									<span>{post.author.name}</span>
								</div>
								
								{#if post.readingTime}
									<span>{post.readingTime} min read</span>
								{/if}
							</div>
						</div>
					</a>
				{/each}
			</div>

			{#if posts.length === 0}
				<div class="text-center py-12">
					<p class="text-xl text-muted-foreground">No blog posts available at the moment.</p>
				</div>
			{/if}
		</div>
	</section>
</div>
