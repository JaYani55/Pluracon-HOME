<script lang="ts">
	let { href, children }: { href: string; children?: any } = $props();
</script>

<a
	{href}
	class="text-foreground/80 hover:text-primary transition-colors font-medium"
>
	{@render children?.()}
</a>
