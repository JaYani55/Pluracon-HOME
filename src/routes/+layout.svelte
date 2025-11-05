<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/shared/Header.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
