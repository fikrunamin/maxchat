import pasien from '$lib/data/pasien.json';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		pasien
	};
}
