// Re-export Svelte lifecycle functions
import * as svelte from 'svelte';

export const onMount: typeof svelte.onMount = svelte.onMount;
