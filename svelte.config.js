import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const shiki = await import('shiki');
					const html = await shiki.codeToHtml(code, {
						lang,
						theme: 'github-light'
					});
					return `{@html \`${html}\`}`;
				}
			},
			smartypants: {
				dashes: 'oldschool'
			}
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: '/Theater'
		},
		appDir: '_app',
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'ignore',
			entries: ['*']
		}
	}
};

export default config;
