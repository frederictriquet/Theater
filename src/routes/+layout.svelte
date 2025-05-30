<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50">
	<header class="bg-white shadow-sm">
		<div class="container mx-auto px-4 py-4">
			<nav>
				<ul class="flex space-x-4">
					<li>
						<a href="/" class="text-blue-600 hover:text-blue-800 font-medium">Home</a>
					</li>
					<li>
						<a href="/welcome" class="text-blue-600 hover:text-blue-800 font-medium">Sample Markdown</a>
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
