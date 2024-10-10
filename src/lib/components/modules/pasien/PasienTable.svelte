<script>
	import { IconButton } from '$lib/components/ui/Button';
	import {
		Table,
		TableBody,
		TableColumn,
		TableColumnHead,
		TableHead,
		TableRow
	} from '$lib/components/ui/Table';

	export let data = [];
</script>

<Table>
	<TableHead>
		<TableRow>
			<TableColumnHead>Nama</TableColumnHead>
			<TableColumnHead>Rekam Medis</TableColumnHead>
			<TableColumnHead>KTP</TableColumnHead>
			<TableColumnHead class="text-center">Tgl Lahir</TableColumnHead>
			<TableColumnHead class="text-center">JK</TableColumnHead>
			<TableColumnHead class="text-center">Pendidikan</TableColumnHead>
			<TableColumnHead class="text-center">Status</TableColumnHead>
			<TableColumnHead class="w-16"></TableColumnHead>
		</TableRow>
	</TableHead>
	<TableBody>
		{#each data as pasien}
			<TableRow>
				<TableColumn>{pasien.nama}</TableColumn>
				<TableColumn>{pasien.rekam_medis}</TableColumn>
				<TableColumn>{pasien.ktp}</TableColumn>
				<TableColumn>{pasien.tanggal_lahir}</TableColumn>
				<TableColumn>{pasien.jenis_kelamin}</TableColumn>
				<TableColumn>{pasien.pendidikan}</TableColumn>
				<TableColumn>{pasien.status}</TableColumn>
				<TableColumn>
					<IconButton>
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
								d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
							/>
						</svg>
					</IconButton>
				</TableColumn>
			</TableRow>
		{/each}
	</TableBody>
</Table>
