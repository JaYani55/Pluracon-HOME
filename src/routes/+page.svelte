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
						<span class="text-primary">Innovate.</span>
						<span class="text-accent"> Include.</span>
						<br />
						<span class="text-foreground">Empower</span>
					</h1>
					<p class="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
						Solutions for a Connected World
					</p>
					<p class="text-lg mb-12 font-medium text-muted-foreground">
						We build accessible, cutting-edge technology that brings fostering understanding and progress.
					</p>
					<div class="flex flex-col sm:flex-row gap-4">
						<a
							href="/products"
							class="neo-button bg-primary text-white px-8 py-4 font-black text-lg uppercase text-center"
						>
							Explore Platforms
						</a>
						<a
							href="/blog"
							class="neo-button bg-secondary text-black px-8 py-4 font-black text-lg uppercase text-center"
						>
							Read Our Story
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
				<h2 class="text-4xl md:text-5xl font-black uppercase px-4 py-2">Featured Products</h2>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<!-- Product Card 1 -->
				<div class="neo-card bg-white p-0 overflow-hidden">
					<div class="bg-primary border-b-4 border-black p-6 flex items-center justify-center h-32">
						<span class="text-6xl">⚙️</span>
					</div>
					<div class="p-6">
						<div class="border-4 border-black bg-secondary inline-block px-3 py-1 mb-3">
							<span class="font-black text-sm uppercase">AccessAI</span>
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase">CommuniLink</h3>
						<p class="font-medium mb-4">
							Fostering true dialogue through powerful AI-powered technology that
							listens till the user voice count.
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
							<span class="font-black text-sm uppercase">AccessAI</span>
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase">CommuniLink</h3>
						<p class="font-medium mb-4">
							Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
							eiusmod tempor incididunt ut.
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
							<span class="font-black text-sm uppercase">Coming Soon</span>
						</div>
						<h3 class="text-2xl font-black mb-3 uppercase">More Products</h3>
						<p class="font-medium mb-4">
							We're constantly developing new products to meet your needs and expand possibilities.
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
				<h2 class="text-4xl md:text-5xl font-black uppercase px-4 py-2">Our Mission</h2>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<!-- Mission 1 -->
				<div class="neo-card bg-secondary p-8">
					<div class="text-5xl mb-4">🌍</div>
					<h3 class="text-2xl font-black mb-3 uppercase">Inclusive by Design</h3>
					<p class="font-medium">
						Every product we create is built with accessibility and inclusion at its core, ensuring no one is left behind.
					</p>
				</div>

				<!-- Mission 2 -->
				<div class="neo-card bg-white p-8">
					<div class="text-5xl mb-4">⚡</div>
					<h3 class="text-2xl font-black mb-3 uppercase">Fast & Modern</h3>
					<p class="font-medium">
						Built with cutting-edge technology like SvelteKit and Svelte 5, delivering exceptional performance.
					</p>
				</div>

				<!-- Mission 3 -->
				<div class="neo-card bg-accent text-white p-8">
					<div class="text-5xl mb-4">🚀</div>
					<h3 class="text-2xl font-black mb-3 uppercase">Scalable Solutions</h3>
					<p class="font-medium">
						Our products grow with your needs, from small projects to enterprise-level implementations.
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
					<h2 class="text-4xl md:text-5xl font-black uppercase px-4 py-2">Latest Insights</h2>
				</div>
				<a
					href="/blog"
					class="neo-button bg-secondary text-black px-6 py-3 font-black uppercase text-sm"
				>
					View all →
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
								Tutorial
							</span>
						</div>
						<h3 class="text-3xl font-black mb-4 uppercase">
							<a href="/blog/sample-blog-post" class="hover:text-primary transition-colors">
								Getting Started with SvelteKit ISR
							</a>
						</h3>
						<p class="font-medium mb-6">
							Learn how to implement Incremental Static Regeneration in SvelteKit with Svelte 5 for optimal performance.
						</p>
						<div class="flex items-center justify-between">
							<span class="text-sm font-bold">8 min read</span>
							<a
								href="/blog/sample-blog-post"
								class="neo-button bg-primary text-white px-6 py-2 font-black uppercase text-sm"
							>
								Read article →
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-16 px-6 bg-white border-y-4 border-black">
		<div class="container mx-auto max-w-4xl text-center">
			<h2 class="text-4xl md:text-6xl font-black mb-6 uppercase">
				Ready to Get Started?
			</h2>
			<p class="text-xl font-bold mb-12">
				Explore our products or get in touch to learn how we can help you build inclusive solutions.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/products"
					class="neo-button bg-primary text-white px-8 py-4 font-black text-lg uppercase"
				>
					View Products
				</a>
				<a
					href="/impressum"
					class="neo-button bg-secondary text-black px-8 py-4 font-black text-lg uppercase"
				>
					Contact Us
				</a>
			</div>
		</div>
	</section>
</div>
