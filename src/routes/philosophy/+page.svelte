<script lang="ts">
	import { currentLanguage, t } from '$lib/stores/language';

	let lang = $derived($currentLanguage);
	let translations = $derived(t(lang));
</script>

<svelte:head>
	<title>Philosophy | Pluracon</title>
	<meta name="description" content="Our philosophy and approach to building inclusive solutions" />
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Header -->
	<section class="py-16 px-6 bg-accent border-b-4 border-black">
		<div class="container mx-auto max-w-6xl">
			<div class="border-4 border-black bg-white p-2 inline-block">
				<h1 class="text-5xl md:text-6xl font-black uppercase px-4 py-2">{translations.philosophy.title}</h1>
			</div>
		</div>
	</section>

	<!-- Under Construction Content -->
	<section class="py-20 px-6 bg-white">
		<div class="container mx-auto max-w-4xl">
			<div class="neo-card bg-secondary p-8 md:p-12 text-center">
				<div class="mb-8">
					<img 
						src="/memphis-action-pic-thinking-writing1.png" 
						alt="Under Construction" 
						class="max-w-md w-full mx-auto border-4 border-black"
					/>
				</div>
				
				<h2 class="text-3xl md:text-4xl font-black uppercase mb-6">
					{translations.philosophy.underConstruction}
				</h2>
				
				<div class="inline-block border-4 border-black bg-white px-6 py-3 mt-4">
					<p class="font-black uppercase text-sm">{translations.philosophy.constructionBadge}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Coming Soon Section -->
	<section class="py-16 px-6 bg-primary">
		<div class="container mx-auto max-w-4xl text-center">
			<h3 class="text-3xl font-black text-white uppercase mb-6">
				{translations.philosophy.checkBack}
			</h3>
			<p class="text-xl font-bold text-white mb-8">
				{translations.philosophy.workingOnIt}
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/products"
					class="neo-button bg-secondary text-black px-8 py-3 font-black uppercase"
				>
					{translations.philosophy.viewProducts}
				</a>
				<a
					href="/blog"
					class="neo-button bg-white text-black px-8 py-3 font-black uppercase"
				>
					{translations.philosophy.readBlog}
				</a>
			</div>
		</div>
	</section>
</div>
