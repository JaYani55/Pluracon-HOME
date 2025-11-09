<script lang="ts">
	import { currentLanguage, t } from '$lib/stores/language';

	let lang = $derived($currentLanguage);
	let translations = $derived(t(lang));
</script>

<footer class="bg-secondary border-t-4 border-black mt-20">
	<div class="container mx-auto px-6 py-12">
		<div class="grid md:grid-cols-4 gap-8">
			<!-- Company Info -->
			<div>
				<h3 class="font-black text-lg mb-4 uppercase">Pluracon</h3>
				<p class="text-foreground text-sm font-medium">
					{translations.footer.tagline}
				</p>
			</div>

		<!-- Products -->
		<div>
			<h4 class="font-black mb-4 uppercase text-sm">{translations.footer.productsTitle}</h4>
			<ul class="space-y-2 text-sm font-medium">
				<li><a href="/products" class="hover:text-primary transition-colors hover:underline decoration-4">{translations.footer.allProducts}</a></li>
			</ul>
		</div>

		<!-- Resources -->
		<div>
			<h4 class="font-black mb-4 uppercase text-sm">{translations.footer.resourcesTitle}</h4>
			<ul class="space-y-2 text-sm font-medium">
				<li><a href="/blog" class="hover:text-primary transition-colors hover:underline decoration-4">{translations.footer.blog}</a></li>
			</ul>
		</div>			<!-- Legal -->
			<div>
				<h4 class="font-black mb-4 uppercase text-sm">{translations.footer.legalTitle}</h4>
				<ul class="space-y-2 text-sm font-medium">
					<li><a href="/impressum" class="hover:text-primary transition-colors hover:underline decoration-4">{translations.footer.impressum}</a></li>
					<li><a href="/datenschutz" class="hover:text-primary transition-colors hover:underline decoration-4">{translations.footer.datenschutz}</a></li>
				</ul>
			</div>
		</div>

		<div class="border-t-4 border-black mt-8 pt-8 text-center text-sm font-bold">
			<p>&copy; {new Date().getFullYear()} Pluracon. {translations.footer.copyright}</p>
		</div>
	</div>
</footer>
