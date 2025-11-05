<script lang="ts">
	import Navigation from '$lib/components/shared/Navigation.svelte';
</script>

<header class="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
	<nav class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="text-2xl font-bold hover:text-primary transition-colors">
				Pluracon
			</a>

			<!-- Navigation Links -->
			<div class="hidden md:flex items-center gap-8">
				<Navigation href="/products">Products</Navigation>
				<Navigation href="/blog">Blog</Navigation>
				<Navigation href="/impressum">Impressum</Navigation>
				<Navigation href="/datenschutz">Datenschutz</Navigation>
			</div>

			<!-- CTA Button -->
			<a
				href="/products"
				class="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
			>
				Get Started
			</a>
		</div>
	</nav>
</header>
