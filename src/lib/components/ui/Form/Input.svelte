<script>
	import { onMount } from 'svelte';

	export let type = 'text',
		id = '',
		name = '',
		placeholder = '',
		disabled = false,
		value = '';

	let input;

	onMount(() => {
		input.type = type;
	});
</script>

<input
	bind:this={input}
	id={id?.length ? id : undefined}
	name={name?.length ? name : undefined}
	{placeholder}
	class={$$props.class}
	bind:value
	{disabled}
	on:*
/>

<style lang="postcss">
	input {
		@apply mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm;
	}
</style>
