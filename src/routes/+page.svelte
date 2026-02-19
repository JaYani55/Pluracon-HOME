<script lang="ts">
	import { currentLanguage, t } from '$lib/stores/language';

	let lang = $derived($currentLanguage);
	let translations = $derived(t(lang));
</script>

<svelte:head>
	<title>Pluracon - Building Inclusive Solutions</title>
	<meta name="description" content="Ihr strategischer Partner für digitale Wertschöpfung – interoperabel, holistisch, menschzentriert." />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Pluracon - Building Inclusive Solutions" />
	<meta property="og:description" content="Ihr strategischer Partner für digitale Wertschöpfung – interoperabel, holistisch, menschzentriert." />
	<meta property="og:image" content="https://pluracon.org/memphis1-2.jpg" />
	<meta property="og:site_name" content="Pluracon" />
	<meta property="og:url" content="https://pluracon.org/" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Pluracon - Building Inclusive Solutions" />
	<meta name="twitter:description" content="Ihr strategischer Partner für digitale Wertschöpfung – interoperabel, holistisch, menschzentriert." />
	<meta name="twitter:image" content="https://pluracon.org/memphis1-2.jpg" />
	
	<!-- Additional SEO -->
	<link rel="canonical" href="https://pluracon.org/" />
	<meta name="keywords" content="Pluracon, inclusive solutions, accessibility, web development, Python, Svelte, Next.js, Supabase" />
</svelte:head>

<div class="bg-background">
	<!-- Hero Section -->
	<section class="relative overflow-hidden bg-white">
		<div class="container mx-auto px-6 py-20 md:py-32">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
					<span class="text-primary">{translations.home.hero.innovate}</span>
					<span class="text-accent"> {translations.home.hero.include}</span>
					<br />
					<span class="text-foreground">{translations.home.hero.empower}</span>
				</h1>
				<p class="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
					{translations.home.hero.subtitle}
				</p>
				<p class="text-lg mb-12 font-medium text-muted-foreground max-w-3xl mx-auto">
					{translations.home.hero.description}
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
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
		</div>

		<!-- Decorative stripe -->
		<div class="h-4 bg-primary border-y-4 border-black"></div>
	</section>

	<!-- Value Pillars Section -->
	<section class="py-20 px-6 bg-primary">
		<div class="container mx-auto max-w-6xl">
			<div class="grid md:grid-cols-2 gap-8">
				<!-- Pillar 1: Information & Strategy -->
				<div class="neo-card bg-white p-8">
					<div class="border-4 border-black bg-primary text-white inline-block px-3 py-1 mb-4">
						<span class="font-black text-sm uppercase">{translations.home.pillars.info.badge}</span>
					</div>
					<h3 class="text-2xl font-black mb-3 uppercase">{translations.home.pillars.info.heading}</h3>
					<p class="font-black text-primary mb-3">{translations.home.pillars.info.lead}</p>
					<p class="font-medium">{translations.home.pillars.info.body}</p>
				</div>

				<!-- Pillar 2: Interoperability -->
				<div class="neo-card bg-secondary p-8">
					<div class="border-4 border-black bg-accent text-white inline-block px-3 py-1 mb-4">
						<span class="font-black text-sm uppercase">{translations.home.pillars.interop.badge}</span>
					</div>
					<h3 class="text-2xl font-black mb-3 uppercase">{translations.home.pillars.interop.heading}</h3>
					<p class="font-black text-accent mb-3">{translations.home.pillars.interop.lead}</p>
					<p class="font-medium">{translations.home.pillars.interop.body}</p>
				</div>

				<!-- Pillar 3: Digital Transformation -->
				<div class="neo-card bg-accent p-8">
					<div class="border-4 border-black bg-secondary inline-block px-3 py-1 mb-4">
						<span class="font-black text-sm uppercase">{translations.home.pillars.transformation.badge}</span>
					</div>
					<h3 class="text-2xl font-black mb-3 uppercase text-white">{translations.home.pillars.transformation.heading}</h3>
					<p class="font-black text-white mb-3">{translations.home.pillars.transformation.lead}</p>
					<p class="font-medium text-white">{translations.home.pillars.transformation.body}</p>
				</div>

				<!-- Pillar 4: Automation -->
			<div class="neo-card bg-red-400 text-white p-8">
				<div class="border-4 border-black bg-white inline-block px-3 py-1 mb-4">
					<span class="font-black text-sm uppercase text-red-600">{translations.home.pillars.automation.badge}</span>
				</div>
				<h3 class="text-2xl font-black mb-3 uppercase">{translations.home.pillars.automation.heading}</h3>
				<p class="font-black text-white mb-3">{translations.home.pillars.automation.lead}</p>
					<p class="font-medium">{translations.home.pillars.automation.body}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Decorative stripe -->
	<div class="h-4 bg-secondary border-y-4 border-black"></div>

	<!-- Blog Preview -->
	<section class="py-16 px-6 bg-secondary">
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
					<div class="neo-card bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
						<div class="mb-6 h-28 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
							<img src="/Python.png" alt="Python Logo" class="h-full w-auto object-contain" />
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase group-hover:text-primary transition-colors min-h-16 flex items-center justify-center">
							{translations.home.techStack.python}
						</h3>
						<p class="font-medium mb-4 text-sm grow">
							{translations.home.techStack.pythonDesc}
						</p>
						<span class="inline-block border-4 border-black bg-primary text-white px-4 py-2 font-black uppercase text-xs group-hover:bg-accent transition-colors">
							{translations.home.techStack.learnMore}
						</span>
					</div>
				</a>

				<!-- Svelte 5 -->
				<a href="/blog/svelte-5-modern-web-apps" class="group">
					<div class="neo-card bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
						<div class="mb-6 h-28 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
							<img src="/svelte5.png" alt="Svelte 5 Logo" class="h-full w-auto object-contain" />
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase group-hover:text-accent transition-colors min-h-16 flex items-center justify-center">
							{translations.home.techStack.svelte}
						</h3>
						<p class="font-medium mb-4 text-sm grow">
							{translations.home.techStack.svelteDesc}
						</p>
						<span class="inline-block border-4 border-black bg-primary text-white px-4 py-2 font-black uppercase text-xs group-hover:bg-accent transition-colors">
							{translations.home.techStack.learnMore}
						</span>
					</div>
				</a>

				<!-- Next.js -->
				<a href="/blog/nextjs-react-server-side-rendering" class="group">
					<div class="neo-card bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
						<div class="mb-6 h-28 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
							<img src="/next-js-logo-png_seeklogo-321806.png" alt="Next.js Logo" class="h-full w-auto object-contain" />
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase group-hover:text-primary transition-colors min-h-16 flex items-center justify-center">
							{translations.home.techStack.nextjs}
						</h3>
						<p class="font-medium mb-4 text-sm grow">
							{translations.home.techStack.nextjsDesc}
						</p>
						<span class="inline-block border-4 border-black bg-primary text-white px-4 py-2 font-black uppercase text-xs group-hover:bg-accent transition-colors">
							{translations.home.techStack.learnMore}
						</span>
					</div>
				</a>

				<!-- Supabase -->
				<a href="/blog/supabase-open-source-backend" class="group">
					<div class="neo-card bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
						<div class="mb-6 h-28 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
							<img src="/supabase.png" alt="Supabase Logo" class="h-full w-auto object-contain" />
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase group-hover:text-accent transition-colors min-h-16 flex items-center justify-center">
							{translations.home.techStack.supabase}
						</h3>
						<p class="font-medium mb-4 text-sm grow">
							{translations.home.techStack.supabaseDesc}
						</p>
						<span class="inline-block border-4 border-black bg-primary text-white px-4 py-2 font-black uppercase text-xs group-hover:bg-accent transition-colors">
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
					href="mailto:jay@pluracon.org"
					class="neo-button bg-secondary text-black px-8 py-4 font-black text-lg uppercase"
				>
					{translations.home.cta.contactUs}
				</a>
			</div>
		</div>
	</section>
</div>
