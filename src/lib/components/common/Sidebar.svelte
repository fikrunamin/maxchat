<script>
	import { page } from '$app/stores';
</script>

<div class="px-4 py-6 bg-white h-full">
	<span class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
		Logo
	</span>

	<ul class="mt-6 space-y-1">
		<li>
			<a
				href="/"
				class="block rounded-lg px-4 py-2 text-sm font-medium {$page.route.id === '/'
					? 'bg-gray-100 text-gray-700'
					: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}"
			>
				Beranda
			</a>
		</li>
		<li>
			<a
				href="/pasien"
				class="block rounded-lg px-4 py-2 text-sm font-medium {$page.route.id?.startsWith('/pasien')
					? 'bg-gray-100 text-gray-700'
					: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}"
			>
				Pasien
			</a>
		</li>
	</ul>
</div>
