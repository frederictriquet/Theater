import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
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
		},
		typescript: {
			config: (config) => {
				config.compilerOptions = {
					...config.compilerOptions,
					moduleResolution: 'bundler',
					allowJs: true,
					checkJs: true,
					esModuleInterop: true,
					forceConsistentCasingInFileNames: true,
					resolveJsonModule: true,
					skipLibCheck: true,
					sourceMap: true,
					strict: true,
					types: ['svelte']
				};
				return config;
			}
		}
	},
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
					return `{@html ${JSON.stringify(html)}}`;
				}
			},
			smartypants: {
				dashes: 'oldschool'
			}
		})
	]
};

export default config;
