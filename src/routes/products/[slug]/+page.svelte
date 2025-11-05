<script lang="ts">
	import type { PageData } from './$types';

	// Svelte 5: Use $props() to get the 'data' from the load function
	let { data }: { data: PageData } = $props();
	const { product } = data;
</script>

<svelte:head>
	<title>{product.title} | Pluracon</title>
	<meta name="description" content={product.hero.description} />
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Product Hero Section -->
	<section class="py-20 px-6">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center">
				{#if product.hero.subtitle}
					<p class="text-primary font-semibold mb-4">{product.hero.subtitle}</p>
				{/if}
				<h1 class="text-5xl md:text-6xl font-bold mb-6">{product.hero.title}</h1>
				<p class="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
					{product.hero.description}
				</p>
				{#if product.hero.ctaText && product.hero.ctaLink}
					<a
						href={product.hero.ctaLink}
						class="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
					>
						{product.hero.ctaText}
					</a>
				{/if}
			</div>
			{#if product.hero.image}
				<div class="mt-12">
					<img
						src={product.hero.image}
						alt={product.hero.title}
						class="w-full rounded-xl shadow-2xl"
					/>
				</div>
			{/if}
		</div>
	</section>

	<!-- Features Section -->
	<section class="py-20 px-6 bg-muted/50">
		<div class="container mx-auto max-w-6xl">
			<h2 class="text-4xl font-bold text-center mb-12">Features</h2>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each product.features as feature (feature.id)}
					<div class="bg-background p-6 rounded-lg shadow-sm">
						{#if feature.icon}
							<div class="text-4xl mb-4">{feature.icon}</div>
						{/if}
						<h3 class="text-2xl font-semibold mb-3">{feature.title}</h3>
						<p class="text-muted-foreground">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Cards Section -->
	{#if product.cards && product.cards.length > 0}
		<section class="py-20 px-6">
			<div class="container mx-auto max-w-6xl">
				<h2 class="text-4xl font-bold text-center mb-12">Use Cases</h2>
				<div class="grid md:grid-cols-2 gap-8">
					{#each product.cards as card (card.id)}
						<div class="rounded-lg overflow-hidden shadow-lg">
							{#if card.image}
								<img src={card.image} alt={card.title} class="w-full h-64 object-cover" />
							{/if}
							<div class="p-6">
								<h3 class="text-2xl font-semibold mb-3">{card.title}</h3>
								<p class="text-muted-foreground">{card.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- FAQ Section -->
	{#if product.faq && product.faq.length > 0}
		<section class="py-20 px-6 bg-muted/50">
			<div class="container mx-auto max-w-4xl">
				<h2 class="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
				<div class="space-y-6">
					{#each product.faq as faqItem (faqItem.id)}
						<div class="bg-background p-6 rounded-lg shadow-sm">
							<h3 class="text-xl font-semibold mb-3">{faqItem.question}</h3>
							<p class="text-muted-foreground">{faqItem.answer}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- CTA Section -->
	<section class="py-20 px-6">
		<div class="container mx-auto max-w-4xl text-center">
			<h2 class="text-4xl font-bold mb-6">{product.cta.title}</h2>
			<p class="text-xl text-muted-foreground mb-8">{product.cta.description}</p>
			<a
				href={product.cta.buttonLink}
				class="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
			>
				{product.cta.buttonText}
			</a>
		</div>
	</section>
</div>
