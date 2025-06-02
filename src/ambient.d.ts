/// <reference types="svelte" />
/// <reference types="@sveltejs/kit" />

declare module '*.svelte' {
	const component: any;
	export default component;
}

declare module '$app/paths' {
	export const base: string;
}

declare module '$app/stores' {
	import type { Readable } from 'svelte/store';
	
	interface Page {
		url: URL;
		params: Record<string, string>;
		status: number;
		error: Error | null;
		data: Record<string, any>;
	}

	export const page: Readable<Page>;
}

declare module '$app/navigation' {
	export function goto(href: string): Promise<void>;
}

declare module 'svelte' {
	export { SvelteComponent, onMount } from '@sveltejs/kit/node_modules/svelte';
}
