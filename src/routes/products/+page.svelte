<script lang="ts">
	import type { PageData } from './$types';
	import { currentLanguage, t } from '$lib/stores/language';

	let { data }: { data: PageData } = $props();
	const { products } = data;

	let lang = $derived($currentLanguage);
	let translations = $derived(t(lang));
</script>

<svelte:head>
	<title>Products | Pluracon</title>
	<meta name="description" content="Explore our range of products and services" />
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Hero Header -->
	<section class="py-16 px-6 bg-accent border-b-4 border-black">
		<div class="container mx-auto max-w-6xl">
			<div class="border-4 border-black bg-white p-2 inline-block">
				<h1 class="text-5xl md:text-6xl font-black uppercase px-4 py-2">{translations.products.title}</h1>
			</div>
			<p class="text-xl font-bold text-white mt-6 max-w-3xl">
				{translations.products.description}
			</p>
		</div>
	</section>

	<section class="py-16 px-6 bg-white">
		<div class="container mx-auto max-w-6xl">
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each products as product (product.slug)}
					<a
						href="/products/{product.slug}"
						class="group block neo-card bg-card overflow-hidden"
					>
						{#if product.image}
							<div class="overflow-hidden border-b-4 border-black">
								<img
									src={product.image}
									alt={product.title}
									class="w-full h-64 object-cover"
								/>
							</div>
						{:else}
							<div class="h-64 bg-primary border-b-4 border-black flex items-center justify-center">
								<span class="text-6xl">🎯</span>
							</div>
						{/if}
						<div class="p-6">
							<h2 class="text-2xl font-black mb-3 uppercase group-hover:text-primary transition-colors">
								{product.title}
							</h2>
							<p class="font-medium line-clamp-3 mb-4">{product.description}</p>
							<div class="mt-4">
								<span class="neo-button bg-primary text-white px-6 py-2 font-black uppercase text-sm inline-block">
									{translations.products.learnMore}
								</span>
							</div>
						</div>
					</a>
				{/each}
			</div>

			{#if products.length === 0}
				<div class="text-center py-12">
					<div class="neo-card bg-secondary p-12 max-w-md mx-auto">
						<span class="text-6xl block mb-4">📦</span>
						<p class="text-xl font-black uppercase">{translations.products.noProducts}</p>
					</div>
				</div>
			{/if}
		</div>
	</section>
</div>
