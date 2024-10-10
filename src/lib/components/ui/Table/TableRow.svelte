<tr>
	<slot />
</tr>

<style lang="postcss">
	tr:not(:last-of-type) {
		@apply border-b border-gray-200;
	}

	tr {
		@apply hover:bg-gray-50;
	}
</style>
