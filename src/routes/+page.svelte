<svelte:head>
	<title>Pluracon - Building Inclusive Solutions</title>
	<meta name="description" content="Discover innovative products and insights for building inclusive and accessible solutions." />
</svelte:head>

<div class="bg-background">
	<!-- Hero Section -->
	<section class="relative overflow-hidden">
		<div class="container mx-auto px-6 py-32 text-center">
			<div class="max-w-4xl mx-auto">
				<h1 class="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
					Building Inclusive Solutions
				</h1>
				<p class="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
					Discover innovative products and insights that make the world more accessible and inclusive for everyone.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/products"
						class="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
					>
						Explore Products
					</a>
					<a
						href="/blog"
						class="bg-muted text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted/80 transition-colors border"
					>
						Read Our Blog
					</a>
				</div>
			</div>
		</div>

		<!-- Decorative gradient -->
		<div class="absolute inset-0 -z-10 bg-linear-to-b from-primary/5 to-transparent"></div>
	</section>

	<!-- Features Section -->
	<section class="py-24 px-6 bg-muted/30">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold mb-4">Why Choose Pluracon?</h2>
				<p class="text-xl text-muted-foreground">
					We're committed to creating solutions that work for everyone
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<!-- Feature 1 -->
				<div class="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
					<div class="text-5xl mb-4">🌍</div>
					<h3 class="text-2xl font-bold mb-3">Inclusive by Design</h3>
					<p class="text-muted-foreground">
						Every product we create is built with accessibility and inclusion at its core, ensuring no one is left behind.
					</p>
				</div>

				<!-- Feature 2 -->
				<div class="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
					<div class="text-5xl mb-4">⚡</div>
					<h3 class="text-2xl font-bold mb-3">Fast & Modern</h3>
					<p class="text-muted-foreground">
						Built with cutting-edge technology like SvelteKit and Svelte 5, delivering exceptional performance.
					</p>
				</div>

				<!-- Feature 3 -->
				<div class="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
					<div class="text-5xl mb-4">🚀</div>
					<h3 class="text-2xl font-bold mb-3">Scalable Solutions</h3>
					<p class="text-muted-foreground">
						Our products grow with your needs, from small projects to enterprise-level implementations.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Products Preview -->
	<section class="py-24 px-6">
		<div class="container mx-auto max-w-6xl">
			<div class="flex items-center justify-between mb-12">
				<div>
					<h2 class="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
					<p class="text-xl text-muted-foreground">
						Explore our range of inclusive solutions
					</p>
				</div>
				<a
					href="/products"
					class="hidden md:inline-block text-primary font-semibold hover:underline"
				>
					View all →
				</a>
			</div>

			<div class="grid md:grid-cols-2 gap-8">
				<a
					href="/products/sample-product"
					class="group block bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
				>
					<div class="bg-linear-to-br from-primary/20 to-primary/5 h-48 flex items-center justify-center">
						<span class="text-6xl">🎯</span>
					</div>
					<div class="p-6">
						<h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
							Sample Product
						</h3>
						<p class="text-muted-foreground mb-4">
							Transform your experience with our innovative solution designed for everyone.
						</p>
						<span class="text-primary font-semibold">Learn more →</span>
					</div>
				</a>

				<div class="bg-muted/50 rounded-xl p-8 flex flex-col items-center justify-center text-center">
					<div class="text-5xl mb-4">✨</div>
					<h3 class="text-2xl font-bold mb-3">More Coming Soon</h3>
					<p class="text-muted-foreground mb-6">
						We're constantly developing new products to meet your needs.
					</p>
					<a
						href="/products"
						class="text-primary font-semibold hover:underline"
					>
						See all products →
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Blog Preview -->
	<section class="py-24 px-6 bg-muted/30">
		<div class="container mx-auto max-w-6xl">
			<div class="flex items-center justify-between mb-12">
				<div>
					<h2 class="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
					<p class="text-xl text-muted-foreground">
						Stay updated with our latest articles and updates
					</p>
				</div>
				<a
					href="/blog"
					class="hidden md:inline-block text-primary font-semibold hover:underline"
				>
					View all →
				</a>
			</div>

			<div class="bg-background rounded-xl overflow-hidden shadow-lg">
				<div class="md:flex">
					<div class="md:w-1/2 bg-linear-to-br from-primary/20 to-primary/5 p-12 flex items-center justify-center">
						<span class="text-8xl">📝</span>
					</div>
					<div class="md:w-1/2 p-8">
						<div class="mb-4">
							<span class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
								Tutorial
							</span>
						</div>
						<h3 class="text-3xl font-bold mb-4">
							<a href="/blog/sample-blog-post" class="hover:text-primary transition-colors">
								Getting Started with SvelteKit ISR
							</a>
						</h3>
						<p class="text-muted-foreground mb-6">
							Learn how to implement Incremental Static Regeneration in SvelteKit with Svelte 5 for optimal performance.
						</p>
						<div class="flex items-center justify-between">
							<span class="text-sm text-muted-foreground">8 min read</span>
							<a
								href="/blog/sample-blog-post"
								class="text-primary font-semibold hover:underline"
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
	<section class="py-24 px-6">
		<div class="container mx-auto max-w-4xl text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Ready to Get Started?
			</h2>
			<p class="text-xl text-muted-foreground mb-12">
				Explore our products or get in touch to learn how we can help you build inclusive solutions.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/products"
					class="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
				>
					View Products
				</a>
				<a
					href="/impressum"
					class="bg-muted text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted/80 transition-colors border"
				>
					Contact Us
				</a>
			</div>
		</div>
	</section>
</div>
