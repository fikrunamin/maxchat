<script>
	export let id = '',
		name = '',
		placeholder = '',
		value = '',
		disabled = false,
		options = [];
</script>

<select
	id={id?.length ? id : undefined}
	name={name?.length ? name : undefined}
	class={$$props.class}
	{value}
	{disabled}
	on:*
>
	<option value={null} selected disabled>Choose option...</option>
	{#each options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>

<style lang="postcss">
	select {
		@apply mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm;
	}
</style>
