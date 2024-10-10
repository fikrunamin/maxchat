<script>
	import Button from '$lib/components/ui/Button/Button.svelte';
	import IconButton from '$lib/components/ui/Button/IconButton.svelte';
	import { Select } from '$lib/components/ui/Form';
	import Input from '$lib/components/ui/Form/Input.svelte';
	import Toggle from '$lib/components/ui/Form/Toggle.svelte';
	import {
		Table,
		TableBody,
		TableColumn,
		TableColumnHead,
		TableHead,
		TableRow
	} from '$lib/components/ui/Table';

	let initialData = {
		utama: {
			nama: '',
			tempat_lahir: '',
			tanggal_lahir: ''
		},
		alamat_ktp: {
			provinsi: null,
			kota: null,
			kecamatan: null,
			desa: null,
			alamat: ''
		},
		alamat_domisili: {
			provinsi: null,
			kota: null,
			kecamatan: null,
			desa: null,
			alamat: ''
		},
		anggota_keluarga_terdekat: {
			hubungan: 'Kakek',
			nama: ''
		},
		anggota_keluarga_lainnya: []
	};

	const handleAddKeluarga = () => {
		if (initialData.anggota_keluarga_lainnya.length >= 5) return;

		initialData = {
			...initialData,
			anggota_keluarga_lainnya: [
				...initialData.anggota_keluarga_lainnya,
				{
					id: Math.random(),
					nama: '',
					hubungan: ''
				}
			]
		};
	};

	const handleRemoveKeluarga = (index) => {
		if (!initialData.anggota_keluarga_lainnya?.[index]) return;

		initialData = {
			...initialData,
			anggota_keluarga_lainnya: initialData.anggota_keluarga_lainnya.filter((_, i) => i !== index)
		};
	};

	const handleToggleAlamat = (e) => {
		if (!e.target.checked) return;

		initialData = {
			...initialData,
			alamat_domisili: initialData.alamat_ktp
		};
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

				Tambah Pasien
			</h3>
		</header>

		<form class="text-sm grid gap-4">
			<div>
				<h6 class="font-semibold mb-2">Data Utama</h6>
				<div class="grid md:grid-cols-2 gap-4">
					<label
						for="utama.nama"
						class="col-span-full flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Nama</div>
						<Input id="utama.nama" name="utama.nama" bind:value={initialData.utama.nama} />
					</label>
					<label
						for="utama.tempat_lahir"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Tempat Lahir</div>
						<Input
							id="utama.tempat_lahir"
							name="utama.tempat_lahir"
							bind:value={initialData.utama.tempat_lahir}
						/>
					</label>
					<label
						for="utama.tanggal_lahir"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none text-right">Tanggal Lahir</div>
						<Input
							id="utama.tanggal_lahir"
							name="utama.tanggal_lahir"
							type="date"
							bind:value={initialData.utama.tanggal_lahir}
						/>
					</label>
				</div>
			</div>
			<div class="mt-4">
				<h6 class="font-semibold mb-2">Alamat Sesuai KTP</h6>
				<div class="grid md:grid-cols-2 gap-4">
					<label
						for="alamat_ktp.provinsi"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Provinsi</div>
						<Select
							id="alamat_ktp.provinsi"
							name="alamat_ktp.provinsi"
							bind:value={initialData.alamat_ktp.provinsi}
						/>
					</label>
					<label
						for="alamat_ktp.kota"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none text-right">Kota/Kab.</div>
						<Select
							id="alamat_ktp.kota"
							name="alamat_ktp.kota"
							bind:value={initialData.alamat_ktp.kota}
						/>
					</label>
					<label
						for="alamat_ktp.kecamatan"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Kecamatan</div>
						<Select
							id="alamat_ktp.kecamatan"
							name="alamat_ktp.kecamatan"
							bind:value={initialData.alamat_ktp.kecamatan}
						/>
					</label>
					<label
						for="alamat_ktp.desa"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none text-right">Desa</div>
						<Select
							id="alamat_ktp.desa"
							name="alamat_ktp.desa"
							bind:value={initialData.alamat_ktp.desa}
						/>
					</label>
					<label
						for="alamat_ktp.alamat"
						class="col-span-full flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Alamat</div>
						<Input
							id="alamat_ktp.alamat"
							name="alamat_ktp.alamat"
							bind:value={initialData.alamat_ktp.alamat}
						/>
					</label>
				</div>
			</div>
			<div class="mt-4">
				<h6 class="font-semibold mb-2">Alamat Domisili</h6>
				<div class="grid md:grid-cols-2 gap-4">
					<label class="col-span-full flex items-center gap-2">
						<div class="w-fit md:w-36 flex-none">Sama dengan KTP</div>
						<Toggle on:change={handleToggleAlamat} />
					</label>
					<label
						for="alamat_domisili.provinsi"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Provinsi</div>
						<Select
							id="alamat_domisili.provinsi"
							name="alamat_domisili.provinsi"
							bind:value={initialData.alamat_domisili.provinsi}
						/>
					</label>
					<label
						for="alamat_domisili.kota"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none text-right">Kota/Kab.</div>
						<Select
							id="alamat_domisili.kota"
							name="alamat_domisili.kota"
							bind:value={initialData.alamat_domisili.kota}
						/>
					</label>
					<label
						for="alamat_domisili.kecamatan"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Kecamatan</div>
						<Select
							id="alamat_domisili.kecamatan"
							name="alamat_domisili.kecamatan"
							bind:value={initialData.alamat_domisili.kecamatan}
						/>
					</label>
					<label
						for="alamat_domisili.desa"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none text-right">Desa</div>
						<Select
							id="alamat_domisili.desa"
							name="alamat_domisili.desa"
							bind:value={initialData.alamat_domisili.desa}
						/>
					</label>
					<label
						for="alamat_domisili.alamat"
						class="col-span-full flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Alamat</div>
						<Input
							id="alamat_domisili.alamat"
							name="alamat_domisili.alamat"
							bind:value={initialData.alamat_domisili.alamat}
						/>
					</label>
				</div>
			</div>
			<div class="mt-4">
				<h6 class="font-semibold mb-2">Anggota Keluarga Terdekat</h6>
				<div class="grid md:grid-cols-2 gap-4">
					<label
						for="anggota_keluarga_terdekat.hubungan"
						class="flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Hubungan</div>
						<Select
							id="anggota_keluarga_terdekat.hubungan"
							name="anggota_keluarga_terdekat.hubungan"
							bind:value={initialData.anggota_keluarga_terdekat.hubungan}
							options={[
								{
									label: 'Kakek',
									value: 'Kakek'
								}
							]}
						/>
					</label>
					<label
						for="anggota_keluarga_terdekat.nama"
						class="col-span-full flex flex-col items-start md:items-center md:flex-row gap-x-4"
					>
						<div class="w-fit md:w-36 flex-none">Nama</div>
						<Input
							id="anggota_keluarga_terdekat.nama"
							name="anggota_keluarga_terdekat.nama"
							bind:value={initialData.anggota_keluarga_terdekat.nama}
						/>
					</label>
				</div>
			</div>
			<div class="mt-4">
				<h6 class="font-semibold mb-2">Anggota Keluarga Lainnya</h6>
				<div>
					<Table>
						<TableHead>
							<TableRow>
								<TableColumnHead class="text-center w-20">Urut</TableColumnHead>
								<TableColumnHead class="text-center">Nama</TableColumnHead>
								<TableColumnHead class="text-center">Hubungan</TableColumnHead>
								<TableColumnHead></TableColumnHead>
							</TableRow>
						</TableHead>
						<TableBody>
							{#each initialData.anggota_keluarga_lainnya as anggota, i (anggota.id)}
								<TableRow>
									<TableColumn><Input value={i + 1} disabled={true} /></TableColumn>
									<TableColumn><Input value={anggota.nama} /></TableColumn>
									<TableColumn><Select value={anggota.hubungan} /></TableColumn>
									<TableColumn>
										<IconButton on:click={() => handleRemoveKeluarga(i)}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="size-4"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M6 18 18 6M6 6l12 12"
												/>
											</svg>
										</IconButton>
									</TableColumn>
								</TableRow>
							{/each}
						</TableBody>
					</Table>
					{#if initialData.anggota_keluarga_lainnya.length < 5}
						<Button class="bg-blue-400 text-white mt-4" on:click={handleAddKeluarga}>
							+ Tambah
						</Button>
					{/if}
				</div>
			</div>
			<div class="mt-4">
				<menu class="flex items-center justify-center gap-2">
					<Button class="bg-gray-200"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
							/>
						</svg>
						Kembali</Button
					>
					<Button class="bg-teal-400 text-white"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
							/>
						</svg>
						Cetak Berkas</Button
					>
					<Button class="bg-teal-400 text-white"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
							/>
						</svg>
						Upload Berkas</Button
					>
					<Button class="bg-blue-400 text-white"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
						</svg>
						Simpan</Button
					>
				</menu>
			</div>
		</form>
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
		@apply flex items-center justify-between mb-4 border-b pb-4;
	}
</style>
