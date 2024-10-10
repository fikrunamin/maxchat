<script>
	import '../app.css';
	import Sidebar from '$lib/components/common/Sidebar.svelte';
</script>

<div class="container">
	<aside>
		<Sidebar />
	</aside>
	<main>
		<slot />
	</main>
</div>

<style lang="postcss">
	.container {
		@apply h-screen max-w-screen-xl flex;
	}
	.container aside {
		@apply w-72 flex-none h-full overflow-y-auto shadow hidden md:block;
	}
	.container main {
		@apply grow;
	}
</style>
