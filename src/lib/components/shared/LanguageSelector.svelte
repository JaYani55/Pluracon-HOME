<script lang="ts">
	import { currentLanguage, t } from '$lib/stores/language';
	import type { Language } from '$lib/i18n/translations';

	let showDropdown = $state(false);
	let lang = $derived($currentLanguage);

	function setLanguage(newLang: Language) {
		currentLanguage.set(newLang);
		showDropdown = false;
	}

	function toggleDropdown() {
		showDropdown = !showDropdown;
	}

	// Close dropdown when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.language-selector')) {
			showDropdown = false;
		}
	}

	$effect(() => {
		if (showDropdown) {
			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<div class="language-selector relative">
	<button
		onclick={toggleDropdown}
		class="neo-button bg-white text-black px-3 py-2 font-bold flex items-center gap-2"
		aria-label="Select language"
	>
		{#if lang === 'de'}
			<span class="text-xl">🇩🇪</span>
		{:else}
			<span class="text-xl">🇬🇧</span>
		{/if}
		<span class="hidden sm:inline uppercase text-xs">{lang}</span>
		<span class="text-xs">▼</span>
	</button>

	{#if showDropdown}
		<div class="absolute right-0 top-full mt-2 neo-card bg-white p-0 overflow-hidden z-50 min-w-[140px]">
			<button
				onclick={() => setLanguage('de')}
				class="w-full px-4 py-3 flex items-center gap-3 hover:bg-secondary transition-colors border-b-4 border-black font-bold uppercase text-sm"
				class:bg-secondary={lang === 'de'}
			>
				<span class="text-xl">🇩🇪</span>
				<span>Deutsch</span>
			</button>
			<button
				onclick={() => setLanguage('en')}
				class="w-full px-4 py-3 flex items-center gap-3 hover:bg-secondary transition-colors font-bold uppercase text-sm"
				class:bg-secondary={lang === 'en'}
			>
				<span class="text-xl">🇬🇧</span>
				<span>English</span>
			</button>
		</div>
	{/if}
</div>

<style>
	.language-selector {
		user-select: none;
	}
</style>
