<script>
	import { portal } from 'svelte-portal';
	import { getDialogContext, setDialogContext } from './context';
	import { onMount } from 'svelte';

	export let open = false;
	export let onClose = () => {};

	setDialogContext(open);

	const { isOpen } = getDialogContext();

	let dialog;

	$: {
		if ($isOpen) {
			dialog?.showModal();
		} else {
			dialog?.close();
		}
	}

	onMount(() => {
		function handleClose() {
			onClose();
		}

		dialog.addEventListener('close', handleClose);

		return () => {
			dialog.removeEventListener('close', handleClose);
		};
	});
</script>

<dialog modal-mode="mega" bind:this={dialog} use:portal={'body'}>
	<slot />
</dialog>

<style lang="postcss">
	:global(body:has(dialog[open])) {
		overflow: hidden;
	}

	dialog {
		@apply rounded-t-lg md:rounded-b-lg mb-0 md:mb-auto w-full sm:w-[375px] duration-300 max-w-[100vw];
	}

	dialog[modal-mode='mega']:modal {
		max-width: 100vw;
		margin: auto;
		position: fixed;
		inset: 0;
		z-index: var(--layer-important);
	}

	@media (max-width: 768px) {
		dialog[modal-mode='mega']:modal {
			margin-bottom: 0px;
		}
	}

	dialog[modal-mode='mega']::-webkit-backdrop {
		background: rgba(0, 0, 0, 0.5);
		-webkit-animation: backdrop-fade 300ms ease forwards;
		animation: backdrop-fade 300ms ease forwards;
	}

	dialog[modal-mode='mega']::backdrop {
		background: rgba(0, 0, 0, 0.5);
		-webkit-animation: backdrop-fade 300ms ease forwards;
		animation: backdrop-fade 300ms ease forwards;
	}

	dialog[modal-mode='mega']:not([open]) {
		pointer-events: none;
		-webkit-animation: slide-down 300ms ease forwards;
		animation: slide-down 300ms ease forwards;
	}

	dialog[modal-mode='mega'] {
		-webkit-animation: slide-up 300ms ease forwards;
		animation: slide-up 300ms ease forwards;
	}

	@keyframes slide-down {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		99% {
			transform: translateY(70%);
			opacity: 0;
		}
		100% {
			transform: translateY(70%);
			opacity: 0;
			display: none;
		}
	}

	@keyframes slide-up {
		from {
			display: block;
			transform: translateY(70%);
		}
		to {
			display: block;
			transform: translateY(0px);
		}
	}

	@keyframes backdrop-fade {
		from {
			background: transparent;
		}
		to {
			background: rgba(0, 0, 0, 0.5);
		}
	}
</style>
