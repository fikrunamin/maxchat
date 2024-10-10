<script>
	import PasienTable from '$lib/components/modules/pasien/PasienTable.svelte';
	import SearchDialog from '$lib/components/modules/pasien/SearchDialog.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;

	let openSearchDialog = false;
	let filter = {
		nama: '',
		ktp: '',
		rekam_medis: ''
	};

	$: appliedFilter = transformAppliedFilter(filter);
	$: filteredPasien = data.pasien.filter((pasien) => {
		const nama = pasien.nama.toLowerCase().includes(filter.nama);
		const ktp = pasien.ktp.toLowerCase().includes(filter.ktp);
		const rekam_medis = pasien.rekam_medis.toLowerCase().includes(filter.rekam_medis);

		return nama && ktp && rekam_medis;
	});

	const handleOpenSearchDialog = () => {
		openSearchDialog = true;
	};

	const handleApplyFilter = (appliedFilter) => {
		filter = appliedFilter;
	};

	const transformAppliedFilter = (fx) => {
		let appliedFilter = Object.entries(fx).some((f) => f[1].length);
		if (!appliedFilter) return '';

		const text = Object.entries(fx)
			.filter((f) => f[1].length)
			.map((f) => `${f[0]} "${f[1]}"`)
			.join(', ');

		return `Cari ${text}`;
	};
</script>

<div class="container">
	<div class="pasien-wrapper">
		<header>
			<h3 class="title">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
					/>
				</svg>

				Daftar Pasien
			</h3>
			<div class="flex items-center gap-2">
				<input class="search" value={appliedFilter} readonly on:click={handleOpenSearchDialog} />
				<a href="/pasien/create" class="add">+ Tambah</a>
			</div>
		</header>
		<PasienTable data={filteredPasien} />
		{#if openSearchDialog}
			<SearchDialog bind:open={openSearchDialog} onApplyFilter={handleApplyFilter} {filter} />
		{/if}
	</div>
</div>

<style lang="postcss">
	.container {
		@apply p-4;
	}

	.title {
		@apply font-semibold text-lg flex items-center gap-2;
	}

	header {
		@apply flex items-center justify-between mb-4;
	}

	.search {
		@apply h-9 w-96 bg-gray-100 border border-gray-200 rounded-md;
	}

	.add {
		@apply bg-blue-400 text-white rounded-md px-3 h-9 text-sm grid place-content-center;
	}

	.pasien-wrapper {
		@apply border border-gray-200 rounded-md p-6;
	}
</style>
