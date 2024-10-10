<script>
	export let type = 'button';
</script>

<button {type} class={$$props.class} on:*>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply rounded-md px-3 h-9 text-sm flex items-center justify-center gap-1;
	}
</style>
