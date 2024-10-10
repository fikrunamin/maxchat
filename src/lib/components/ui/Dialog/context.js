import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

export function setDialogContext(open) {
	const isOpen = writable(open);
	setContext('isOpen', isOpen);
}

export function getDialogContext() {
	const isOpen = getContext('isOpen');

	return {
		isOpen,
		close: () => {
			isOpen.set(false);
		}
	};
}
