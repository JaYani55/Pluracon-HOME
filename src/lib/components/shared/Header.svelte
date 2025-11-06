<script lang="ts">
	import Navigation from '$lib/components/shared/Navigation.svelte';
</script>

<header class="border-b-4 border-black bg-white sticky top-0 z-50">
	<nav class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
				<img src="/Logov3_small.jpg" alt="Pluracon Logo" class="h-12 w-auto border-4 border-black" />
				<span class="text-2xl font-black uppercase tracking-tight">Pluracon</span>
			</a>

			<!-- Navigation Links -->
			<div class="hidden md:flex items-center gap-8">
				<Navigation href="/products">Products</Navigation>
				<Navigation href="/blog">Blog</Navigation>
				<Navigation href="/philosophy">Philosophy</Navigation>
				<Navigation href="/impressum">Impressum</Navigation>
				<Navigation href="/datenschutz">Datenschutz</Navigation>
			</div>

			<!-- CTA Button -->
			<a
				href="/products"
				class="neo-button bg-primary text-white px-6 py-2 font-bold uppercase text-sm"
			>
				Join Us
			</a>
		</div>
	</nav>
</header>
