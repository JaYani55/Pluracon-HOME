import { writable } from 'svelte/store';
import type { Language } from '$lib/i18n/translations';
import { translations } from '$lib/i18n/translations';
import { browser } from '$app/environment';

// Get initial language from localStorage or default to German
const getInitialLanguage = (): Language => {
	if (browser) {
		const stored = localStorage.getItem('language');
		if (stored === 'de' || stored === 'en') {
			return stored;
		}
	}
	return 'de'; // Default to German
};

export const currentLanguage = writable<Language>(getInitialLanguage());

// Subscribe to changes and save to localStorage
if (browser) {
	currentLanguage.subscribe(lang => {
		localStorage.setItem('language', lang);
	});
}

// Helper function to get translations for current language
export const t = (lang: Language) => translations[lang];
