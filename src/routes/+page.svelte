<script lang="ts">
	import { currentLanguage, t } from '$lib/stores/language';

	let lang = $derived($currentLanguage);
	let translations = $derived(t(lang));
</script>

<svelte:head>
	<title>Pluracon - Building Inclusive Solutions</title>
	<meta name="description" content="Discover innovative products and insights for building inclusive and accessible solutions." />
</svelte:head>

<div class="bg-background">
	<!-- Hero Section -->
	<section class="relative overflow-hidden bg-white">
		<div class="container mx-auto px-6 py-20 md:py-32">
			<div class="grid md:grid-cols-2 gap-12 items-center">
				<!-- Left: Text Content -->
				<div>
					<h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
						<span class="text-primary">{translations.home.hero.innovate}</span>
						<span class="text-accent"> {translations.home.hero.include}</span>
						<br />
						<span class="text-foreground">{translations.home.hero.empower}</span>
					</h1>
					<p class="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
						{translations.home.hero.subtitle}
					</p>
					<p class="text-lg mb-12 font-medium text-muted-foreground">
						{translations.home.hero.description}
					</p>
					<div class="flex flex-col sm:flex-row gap-4">
						<a
							href="/products"
							class="neo-button bg-primary text-white px-8 py-4 font-black text-lg uppercase text-center"
						>
							{translations.home.hero.explorePlatforms}
						</a>
						<a
							href="/blog"
							class="neo-button bg-secondary text-black px-8 py-4 font-black text-lg uppercase text-center"
						>
							{translations.home.hero.readStory}
						</a>
					</div>
				</div>

				<!-- Right: Image/Icon -->
				<div class="flex justify-center items-center">
					<div class="neo-card bg-white p-0 overflow-hidden max-w-md transition-transform duration-300 hover:scale-105">
						<img src="/schaubild-systems1.jpg" alt="Pluracon Systems" class="w-full h-auto" />
					</div>
				</div>
			</div>
		</div>

		<!-- Decorative stripe -->
		<div class="h-4 bg-primary border-y-4 border-black"></div>
	</section>

	<!-- Featured Products Section -->
	<section class="py-16 px-6 bg-accent">
		<div class="container mx-auto max-w-6xl">
			<div class="border-4 border-black bg-white p-2 inline-block mb-12">
				<h2 class="text-4xl md:text-5xl font-black uppercase px-4 py-2">{translations.home.featuredProducts.title}</h2>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<!-- Product Card 1 -->
				<div class="neo-card bg-white p-0 overflow-hidden">
					<div class="bg-primary border-b-4 border-black p-6 flex items-center justify-center h-32">
						<span class="text-6xl">⚙️</span>
					</div>
					<div class="p-6">
						<div class="border-4 border-black bg-secondary inline-block px-3 py-1 mb-3">
							<span class="font-black text-sm uppercase">{translations.home.featuredProducts.accessAI}</span>
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase">{translations.home.featuredProducts.communiLink}</h3>
						<p class="font-medium mb-4">
							{translations.home.featuredProducts.description1}
						</p>
					</div>
				</div>

				<!-- Product Card 2 -->
				<div class="neo-card bg-white p-0 overflow-hidden">
					<div class="bg-secondary border-b-4 border-black p-6 flex items-center justify-center h-32">
						<span class="text-6xl">💬</span>
					</div>
					<div class="p-6">
						<div class="border-4 border-black bg-primary text-white inline-block px-3 py-1 mb-3">
							<span class="font-black text-sm uppercase">{translations.home.featuredProducts.accessAI}</span>
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase">{translations.home.featuredProducts.communiLink}</h3>
						<p class="font-medium mb-4">
							{translations.home.featuredProducts.description2}
						</p>
					</div>
				</div>

				<!-- Product Card 3 -->
				<div class="neo-card bg-white p-0 overflow-hidden">
					<div class="bg-white border-b-4 border-black p-6 flex items-center justify-center h-32">
						<img src="/Logov3_small.jpg" alt="Product" class="h-20 w-auto border-4 border-black" />
					</div>
					<div class="p-6">
						<div class="border-4 border-black bg-accent text-white inline-block px-3 py-1 mb-3">
							<span class="font-black text-sm uppercase">{translations.home.featuredProducts.comingSoon}</span>
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase">{translations.home.featuredProducts.moreProducts}</h3>
						<p class="font-medium mb-4">
							{translations.home.featuredProducts.moreDescription}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Decorative stripe -->
	<div class="h-4 bg-secondary border-y-4 border-black"></div>
	<!-- Decorative stripe -->
	<div class="h-4 bg-secondary border-y-4 border-black"></div>

	<!-- Our Mission Section -->
	<section class="py-16 px-6 bg-white">
		<div class="container mx-auto max-w-6xl">
			<div class="border-4 border-black bg-primary text-white p-2 inline-block mb-12">
				<h2 class="text-4xl md:text-5xl font-black uppercase px-4 py-2">{translations.home.mission.title}</h2>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<!-- Mission 1 -->
				<div class="neo-card bg-secondary p-8">
					<div class="text-5xl mb-4">🌍</div>
					<h3 class="text-2xl font-black mb-3 uppercase">{translations.home.mission.inclusive}</h3>
					<p class="font-medium">
						{translations.home.mission.inclusiveDesc}
					</p>
				</div>

				<!-- Mission 2 -->
				<div class="neo-card bg-white p-8">
					<div class="text-5xl mb-4">⚡</div>
					<h3 class="text-2xl font-black mb-3 uppercase">{translations.home.mission.fast}</h3>
					<p class="font-medium">
						{translations.home.mission.fastDesc}
					</p>
				</div>

				<!-- Mission 3 -->
				<div class="neo-card bg-accent text-white p-8">
					<div class="text-5xl mb-4">🚀</div>
					<h3 class="text-2xl font-black mb-3 uppercase">{translations.home.mission.scalable}</h3>
					<p class="font-medium">
						{translations.home.mission.scalableDesc}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Products Preview - Removed as it duplicates Featured Products -->

	<!-- Blog Preview -->
	<section class="py-16 px-6 bg-primary">
		<div class="container mx-auto max-w-6xl">
			<div class="flex items-center justify-between mb-12 flex-wrap gap-4">
				<div class="border-4 border-black bg-white p-2">
					<h2 class="text-4xl md:text-5xl font-black uppercase px-4 py-2">{translations.home.blog.title}</h2>
				</div>
				<a
					href="/blog"
					class="neo-button bg-secondary text-black px-6 py-3 font-black uppercase text-sm"
				>
					{translations.home.blog.viewAll}
				</a>
			</div>

			<div class="neo-card bg-white overflow-hidden">
				<div class="md:flex">
					<div class="md:w-1/2 bg-secondary border-r-0 md:border-r-4 border-b-4 md:border-b-0 border-black p-12 flex items-center justify-center">
						<span class="text-8xl">📝</span>
					</div>
					<div class="md:w-1/2 p-8">
						<div class="mb-4">
							<span class="inline-block border-4 border-black bg-accent text-white px-4 py-2 font-black uppercase text-sm">
								{translations.home.blog.tutorial}
							</span>
						</div>
						<h3 class="text-3xl font-black mb-4 uppercase">
							<a href="/blog/sample-blog-post" class="hover:text-primary transition-colors">
								{translations.home.blog.blogTitle}
							</a>
						</h3>
						<p class="font-medium mb-6">
							{translations.home.blog.blogDesc}
						</p>
						<div class="flex items-center justify-between">
							<span class="text-sm font-bold">8 {translations.home.blog.minRead}</span>
							<a
								href="/blog/sample-blog-post"
								class="neo-button bg-primary text-white px-6 py-2 font-black uppercase text-sm"
							>
								{translations.home.blog.readArticle}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Buche mich Section -->
	<section class="py-20 px-6 bg-white">
		<div class="container mx-auto max-w-6xl">
			<div class="grid md:grid-cols-2 gap-12 items-center">
				<!-- Left: Content -->
				<div>
					<div class="border-4 border-black bg-accent text-white p-2 inline-block mb-8">
						<h2 class="text-4xl md:text-5xl font-black uppercase px-4 py-2">{translations.home.bookMe.title}</h2>
					</div>

					<h3 class="text-3xl font-black mb-6 uppercase">
						{translations.home.bookMe.subtitle}
					</h3>

					<p class="text-lg font-medium mb-8 leading-relaxed">
						{translations.home.bookMe.intro}
					</p>

					<div class="neo-card bg-secondary p-6 mb-6">
						<h4 class="text-2xl font-black mb-4 uppercase">{translations.home.bookMe.servicesTitle}</h4>
						
						<div class="space-y-4">
							<div>
								<h5 class="text-lg font-black uppercase mb-2">{translations.home.bookMe.tech.title}</h5>
								<p class="font-medium">{translations.home.bookMe.tech.description}</p>
							</div>

							<div>
								<h5 class="text-lg font-black uppercase mb-2">{translations.home.bookMe.architecture.title}</h5>
								<p class="font-medium">{translations.home.bookMe.architecture.description}</p>
							</div>

							<div>
								<h5 class="text-lg font-black uppercase mb-2">{translations.home.bookMe.people.title}</h5>
								<p class="font-medium">{translations.home.bookMe.people.description}</p>
							</div>
						</div>
					</div>

					<p class="text-xl font-bold border-4 border-black bg-primary text-white p-4">
						{translations.home.bookMe.goal}
					</p>
				</div>

				<!-- Right: Portrait Image -->
				<div class="flex justify-center items-center">
					<div class="neo-card bg-white p-0 overflow-hidden max-w-md transition-transform duration-300 hover:scale-105">
						<img 
							src="/JR_20210803_114300-EDIT.jpg" 
							alt="Portrait" 
							class="w-full h-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Tech Stack Section -->
	<section class="py-20 px-6 bg-secondary">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center mb-12">
				<div class="border-4 border-black bg-primary text-white p-2 inline-block mb-6">
					<h2 class="text-4xl md:text-5xl font-black uppercase px-4 py-2">{translations.home.techStack.title}</h2>
				</div>
				<p class="text-xl font-bold">
					{translations.home.techStack.subtitle}
				</p>
			</div>

			<div class="grid md:grid-cols-4 gap-8">
				<!-- Python -->
				<a href="/blog/python-ai-machine-learning" class="group">
					<div class="neo-card bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2">
						<div class="mb-6 text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
							🐍
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase group-hover:text-primary transition-colors">
							{translations.home.techStack.python}
						</h3>
						<p class="font-medium mb-4 text-sm">
							{translations.home.techStack.pythonDesc}
						</p>
						<span class="inline-block border-4 border-black bg-primary text-white px-4 py-2 font-black uppercase text-xs group-hover:bg-accent transition-colors">
							{translations.home.techStack.learnMore}
						</span>
					</div>
				</a>

				<!-- Svelte 5 -->
				<a href="/blog/svelte-5-modern-web-apps" class="group">
					<div class="neo-card bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2">
						<div class="mb-6 text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
							🔥
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase group-hover:text-accent transition-colors">
							{translations.home.techStack.svelte}
						</h3>
						<p class="font-medium mb-4 text-sm">
							{translations.home.techStack.svelteDesc}
						</p>
						<span class="inline-block border-4 border-black bg-accent text-white px-4 py-2 font-black uppercase text-xs group-hover:bg-primary transition-colors">
							{translations.home.techStack.learnMore}
						</span>
					</div>
				</a>

				<!-- Next.js -->
				<a href="/blog/nextjs-react-server-side-rendering" class="group">
					<div class="neo-card bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2">
						<div class="mb-6 text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
							⚛️
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase group-hover:text-primary transition-colors">
							{translations.home.techStack.nextjs}
						</h3>
						<p class="font-medium mb-4 text-sm">
							{translations.home.techStack.nextjsDesc}
						</p>
						<span class="inline-block border-4 border-black bg-primary text-white px-4 py-2 font-black uppercase text-xs group-hover:bg-accent transition-colors">
							{translations.home.techStack.learnMore}
						</span>
					</div>
				</a>

				<!-- Supabase -->
				<a href="/blog/supabase-open-source-backend" class="group">
					<div class="neo-card bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2">
						<div class="mb-6 text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
							🗄️
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase group-hover:text-accent transition-colors">
							{translations.home.techStack.supabase}
						</h3>
						<p class="font-medium mb-4 text-sm">
							{translations.home.techStack.supabaseDesc}
						</p>
						<span class="inline-block border-4 border-black bg-accent text-white px-4 py-2 font-black uppercase text-xs group-hover:bg-primary transition-colors">
							{translations.home.techStack.learnMore}
						</span>
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-16 px-6 bg-white border-y-4 border-black">
		<div class="container mx-auto max-w-4xl text-center">
			<h2 class="text-4xl md:text-6xl font-black mb-6 uppercase">
				{translations.home.cta.title}
			</h2>
			<p class="text-xl font-bold mb-12">
				{translations.home.cta.description}
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/products"
					class="neo-button bg-primary text-white px-8 py-4 font-black text-lg uppercase"
				>
					{translations.home.cta.viewProducts}
				</a>
				<a
					href="/impressum"
					class="neo-button bg-secondary text-black px-8 py-4 font-black text-lg uppercase"
				>
					{translations.home.cta.contactUs}
				</a>
			</div>
		</div>
	</section>
</div>
