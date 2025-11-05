<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { products } = data;
</script>

<svelte:head>
	<title>Products | Pluracon</title>
	<meta name="description" content="Explore our range of products and services" />
</svelte:head>

<div class="min-h-screen bg-background">
	<section class="py-20 px-6">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center mb-16">
				<h1 class="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
				<p class="text-xl text-muted-foreground max-w-3xl mx-auto">
					Discover our comprehensive range of solutions designed to meet your needs
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each products as product (product.slug)}
					<a
						href="/products/{product.slug}"
						class="group block bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
					>
						{#if product.image}
							<div class="overflow-hidden">
								<img
									src={product.image}
									alt={product.title}
									class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
						{/if}
						<div class="p-6">
							<h2 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
								{product.title}
							</h2>
							<p class="text-muted-foreground line-clamp-3">{product.description}</p>
							<div class="mt-4 text-primary font-semibold">
								Learn more →
							</div>
						</div>
					</a>
				{/each}
			</div>

			{#if products.length === 0}
				<div class="text-center py-12">
					<p class="text-xl text-muted-foreground">No products available at the moment.</p>
				</div>
			{/if}
		</div>
	</section>
</div>
