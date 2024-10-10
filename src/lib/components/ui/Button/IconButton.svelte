<script>
	export let type = 'button';
</script>

<button {type} on:*>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply bg-transparent hover:bg-gray-100 rounded-full size-8 flex items-center justify-center duration-100;
	}
</style>
