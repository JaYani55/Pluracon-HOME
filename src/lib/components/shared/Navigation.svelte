<script lang="ts">
	let { href, children }: { href: string; children?: any } = $props();
</script>

<a
	{href}
	class="text-black hover:text-primary transition-colors font-bold uppercase text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary after:transition-all hover:after:w-full"
>
	{@render children?.()}
</a>
