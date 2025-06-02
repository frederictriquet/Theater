/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace svelte.JSX {
		type EventHandler<E = Event, T = HTMLElement> = (event: E & { currentTarget: EventTarget & T }) => any;
		type HTMLAttributes<T> = {
			[key: string]: any;
		}
		type SVGAttributes<T> = {
			[key: string]: any;
		}
	}
}

declare module '$app/paths' {
	export const base: string;
}

declare module '$app/stores' {
	import { type Readable } from 'svelte/store';
	interface Page {
		url: URL;
		params: Record<string, string>;
		data: Record<string, any>;
	}
	export const page: Readable<Page>;
}

declare module '$app/environment' {
	export const browser: boolean;
	export const dev: boolean;
}

declare module '$app/navigation' {
	export function goto(href: string): Promise<void>;
}

declare module 'svelte' {
	import { SvelteComponentTyped } from 'svelte';
	
	export interface ComponentProps {}
	export interface ComponentEvents {}
	export interface ComponentSlots {}

	export class SvelteComponent extends SvelteComponentTyped<ComponentProps, ComponentEvents, ComponentSlots> {}
	
	export function onMount(fn: () => void | (() => void)): void;
}

export {};
