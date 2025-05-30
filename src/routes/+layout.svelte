<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	
	let { children } = $props();
	const currentPath = $derived($page.url.pathname);
</script>

<div class="min-h-screen bg-gray-50">
	<header class="bg-white shadow-sm">
		<div class="container mx-auto px-4 py-4">
			<nav>
				<ul class="flex space-x-4">
					<li>
						<a 
							href="{base}/" 
							class="text-blue-600 hover:text-blue-800 font-medium"
							class:font-bold={currentPath === `${base}/`}
						>
							Home
						</a>
					</li>
					<li>
						<a 
							href="{base}/welcome" 
							class="text-blue-600 hover:text-blue-800 font-medium"
							class:font-bold={currentPath === `${base}/welcome`}
						>
							Sample Markdown
						</a>
					</li>
					<li>
						<a 
							href="{base}/features" 
							class="text-blue-600 hover:text-blue-800 font-medium"
							class:font-bold={currentPath === `${base}/features`}
						>
							Features
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	<main class="container mx-auto px-4 py-8">
		<article class="prose prose-lg max-w-none">
			{@render children()}
		</article>
	</main>

	<footer class="border-t mt-8">
		<div class="container mx-auto px-4 py-4 text-center text-gray-600">
			<p>Built with SvelteKit and MDsveX</p>
		</div>
	</footer>
</div>
