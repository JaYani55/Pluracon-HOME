<script lang="ts">
	import type { PageData } from './$types';

	// Svelte 5: Use $props() to get the 'data' from the load function
	let { data }: { data: PageData } = $props();
	const { product } = data;
</script>

<svelte:head>
	<title>{product.title} | Pluracon</title>
	<meta name="description" content={product.hero.description} />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={product.title} />
	<meta property="og:description" content={product.hero.description} />
	{#if product.hero.image}
		<meta property="og:image" content={product.hero.image} />
	{/if}
	<meta property="og:site_name" content="Pluracon" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={product.title} />
	<meta name="twitter:description" content={product.hero.description} />
	{#if product.hero.image}
		<meta name="twitter:image" content={product.hero.image} />
	{/if}
	
	<!-- Additional SEO -->
	<link rel="canonical" href="https://pluracon.org/products/{product.slug}" />
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Product Hero Section -->
	<section class="py-20 px-6 bg-accent border-b-4 border-black">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center">
				{#if product.hero.subtitle}
					<div class="inline-block border-4 border-black bg-white px-4 py-2 mb-6">
						<p class="text-primary font-black uppercase text-sm">{product.hero.subtitle}</p>
					</div>
				{/if}
				<h1 class="text-5xl md:text-6xl font-black mb-6 text-white uppercase">{product.hero.title}</h1>
				<p class="text-xl font-bold text-white max-w-3xl mx-auto mb-8">
					{product.hero.description}
				</p>
				{#if product.hero.ctaText && product.hero.ctaLink}
					<a
						href={product.hero.ctaLink}
						class="neo-button bg-primary text-white px-8 py-3 font-black uppercase inline-block"
					>
						{product.hero.ctaText}
					</a>
				{/if}
			</div>
			{#if product.hero.image}
				<div class="mt-12">
					<div class="neo-border neo-shadow-lg overflow-hidden bg-white">
						<img
							src={product.hero.image}
							alt={product.hero.title}
							class="w-full"
						/>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- Features Section -->
	<section class="py-20 px-6 bg-white">
		<div class="container mx-auto max-w-6xl">
			<div class="border-4 border-black bg-primary text-white p-2 inline-block mb-12">
				<h2 class="text-4xl font-black uppercase px-4 py-2">Features</h2>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each product.features as feature (feature.id)}
					<div class="neo-card bg-white p-6">
						{#if feature.icon}
							<div class="text-4xl mb-4">{feature.icon}</div>
						{/if}
						<h3 class="text-2xl font-black mb-3 uppercase">{feature.title}</h3>
						<p class="font-medium">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Cards Section -->
	{#if product.cards && product.cards.length > 0}
		<section class="py-20 px-6 bg-secondary">
			<div class="container mx-auto max-w-6xl">
				<div class="border-4 border-black bg-white p-2 inline-block mb-12">
					<h2 class="text-4xl font-black uppercase px-4 py-2">Use Cases</h2>
				</div>
				<div class="grid md:grid-cols-2 gap-8">
					{#each product.cards as card (card.id)}
						<div class="neo-card bg-white overflow-hidden">
							{#if card.image}
								<div class="border-b-4 border-black">
									<img src={card.image} alt={card.title} class="w-full h-64 object-cover" />
								</div>
							{/if}
							<div class="p-6">
								<h3 class="text-2xl font-black mb-3 uppercase">{card.title}</h3>
								<p class="font-medium">{card.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- FAQ Section -->
	{#if product.faq && product.faq.length > 0}
		<section class="py-20 px-6 bg-white">
			<div class="container mx-auto max-w-4xl">
				<div class="border-4 border-black bg-accent text-white p-2 inline-block mb-12">
					<h2 class="text-4xl font-black uppercase px-4 py-2">Frequently Asked Questions</h2>
				</div>
				<div class="space-y-6">
					{#each product.faq as faqItem (faqItem.id)}
						<div class="neo-card bg-white p-6">
							<h3 class="text-xl font-black mb-3 uppercase">{faqItem.question}</h3>
							<p class="font-medium">{faqItem.answer}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- CTA Section -->
	<section class="py-20 px-6 bg-primary border-t-4 border-black">
		<div class="container mx-auto max-w-4xl text-center">
			<h2 class="text-4xl font-black mb-6 text-white uppercase">{product.cta.title}</h2>
			<p class="text-xl font-bold text-white mb-8">{product.cta.description}</p>
			<a
				href={product.cta.buttonLink}
				class="neo-button bg-secondary text-black px-8 py-3 font-black uppercase inline-block"
			>
				{product.cta.buttonText}
			</a>
		</div>
	</section>
</div>
