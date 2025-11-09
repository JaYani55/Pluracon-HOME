<script lang="ts">
	import Navigation from '$lib/components/shared/Navigation.svelte';
	import LanguageSelector from '$lib/components/shared/LanguageSelector.svelte';
	import { currentLanguage, t } from '$lib/stores/language';

	let lang = $derived($currentLanguage);
	let translations = $derived(t(lang));
</script>

<header class="border-b-4 border-black bg-white sticky top-0 z-50">
	<nav class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between gap-4">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
				<img src="/Logov3_small.jpg" alt="Pluracon Logo" class="h-12 w-auto border-4 border-black" />
				<span class="text-2xl font-black uppercase tracking-tight">Pluracon</span>
			</a>

			<!-- Navigation Links -->
			<div class="hidden md:flex items-center gap-8">
				<Navigation href="/products">{translations.nav.products}</Navigation>
				<Navigation href="/blog">{translations.nav.blog}</Navigation>
				<Navigation href="/philosophy">{translations.nav.philosophy}</Navigation>
				<Navigation href="/impressum">{translations.nav.impressum}</Navigation>
				<Navigation href="/datenschutz">{translations.nav.datenschutz}</Navigation>
			</div>

			<!-- Right side: Language selector and CTA -->
			<div class="flex items-center gap-3">
				<LanguageSelector />
				<a
					href="mailto:jay@pluracon.org"
					class="neo-button bg-primary text-white px-6 py-2 font-bold uppercase text-sm"
				>
					{translations.nav.joinUs}
				</a>
			</div>
		</div>
	</nav>
</header>
