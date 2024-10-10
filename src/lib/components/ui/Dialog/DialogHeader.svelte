<script>
	import { getDialogContext } from './context';

	const { close } = getDialogContext();
</script>

<header>
	<slot />
	<button type="button" class="close" on:click={close}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-5"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
		</svg>
	</button>
</header>

<style lang="postcss">
	header {
		@apply min-h-9 p-4 border-b;
	}
	.close {
		@apply absolute right-4 top-4;
	}
</style>
