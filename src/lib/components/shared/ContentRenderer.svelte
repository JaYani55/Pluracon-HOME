<script lang="ts">
	import type { ContentBlock } from '$lib/types/content';

	// Define the props using Svelte 5 runes
	let { content, className = 'space-y-4' }: { content: ContentBlock[]; className?: string } = $props();
</script>

<div class={className}>
	{#each content as block (block.id)}
		{#if block.type === 'text'}
			<div class="prose prose-lg max-w-none text-foreground/80">
				<p>{block.content}</p>
			</div>
		
		{:else if block.type === 'heading'}
			{#if block.level === 'heading1'}
				<h1 class="text-4xl font-bold mt-8 mb-4">{block.content}</h1>
			{:else if block.level === 'heading2'}
				<h2 class="text-3xl font-bold mt-6 mb-3">{block.content}</h2>
			{:else if block.level === 'heading3'}
				<h3 class="text-2xl font-bold mt-4 mb-2">{block.content}</h3>
			{/if}

		{:else if block.type === 'image'}
			<figure class="my-8">
				<img 
					src={block.src} 
					alt={block.alt} 
					class="w-full rounded-lg shadow-md" 
				/>
				{#if block.caption}
					<figcaption class="mt-2 text-sm text-center text-muted-foreground">
						{block.caption}
					</figcaption>
				{/if}
			</figure>
			
		{:else if block.type === 'video'}
			<div class="my-8 aspect-video overflow-hidden rounded-xl shadow-lg">
				<iframe
					class="w-full h-full"
					src={block.src}
					title={block.caption || 'Video'}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			
		{:else if block.type === 'quote'}
			<blockquote class="my-8 p-6 border-l-4 border-primary bg-muted/50 rounded-r-lg italic">
				<p class="text-xl mb-2">"{block.text}"</p>
				{#if block.author}
					<footer class="text-sm text-muted-foreground">— {block.author}</footer>
				{/if}
			</blockquote>
			
		{:else if block.type === 'list'}
			{#if block.style === 'ordered'}
				<ol class="list-decimal list-inside space-y-2 my-4">
					{#each block.items as item}
						<li class="text-foreground/80">{item}</li>
					{/each}
				</ol>
			{:else}
				<ul class="list-disc list-inside space-y-2 my-4">
					{#each block.items as item}
						<li class="text-foreground/80">{item}</li>
					{/each}
				</ul>
			{/if}
		{/if}
	{/each}
</div>
