<script>
	import { Button } from '$lib/components/ui/Button';
	import { Dialog, DialogContent, DialogHeader } from '$lib/components/ui/Dialog';
	import DialogFooter from '$lib/components/ui/Dialog/DialogFooter.svelte';
	import { Input } from '$lib/components/ui/Form';
	import { Table, TableBody, TableColumn } from '$lib/components/ui/Table';
	import TableRow from '$lib/components/ui/Table/TableRow.svelte';

	export let open = false;
	export let filter = {
		nama: '',
		ktp: '',
		rekam_medis: ''
	};
	export let onApplyFilter = (data) => {};

	let form;

	const handleCloseDialog = () => {
		open = false;
	};

	const handleApplyFilter = () => {
		const formData = new FormData(form);

		onApplyFilter({
			nama: formData.get('nama'),
			ktp: formData.get('ktp'),
			rekam_medis: formData.get('rekam_medis')
		});

		handleCloseDialog();
	};

	const handleCancel = () => {
		handleCloseDialog();
	};
</script>

<Dialog {open} onClose={handleCloseDialog}>
	<DialogHeader>Pencarian</DialogHeader>
	<DialogContent>
		<form bind:this={form} on:submit|preventDefault={handleApplyFilter}>
			<Table>
				<TableBody>
					<TableRow>
						<TableColumn class="p-0">
							<label for="nama">Nama</label>
						</TableColumn>
						<TableColumn class="p-0">
							<Input id="nama" name="nama" value={filter.nama} />
						</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn class="p-0">
							<label for="ktp">No. KTP</label>
						</TableColumn>
						<TableColumn class="p-0">
							<Input id="ktp" name="ktp" value={filter.ktp} />
						</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn class="p-0">
							<label for="rekam_medis">No. Rekam Medis</label>
						</TableColumn>
						<TableColumn class="p-0">
							<Input id="rekam_medis" name="rekam_medis" value={filter.rekam_medis} />
						</TableColumn>
					</TableRow>
				</TableBody>
			</Table>
			<button class="hidden"></button>
		</form>
	</DialogContent>
	<DialogFooter>
		<menu class="flex justify-center items-center gap-2">
			<Button class="bg-blue-400 text-white" on:click={handleApplyFilter}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
				</svg>
				<span>OK</span>
			</Button>
			<Button class="bg-gray-500 text-white" on:click={handleCancel}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
				<span> Tutup </span>
			</Button>
		</menu>
	</DialogFooter>
</Dialog>
