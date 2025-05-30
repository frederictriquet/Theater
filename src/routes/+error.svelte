<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
	<div class="text-center">
		<h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
		<p class="text-xl text-gray-600 mb-8">Page not found</p>
		<p class="text-gray-500 mb-8">The page "{$page.url.pathname}" does not exist.</p>
		<a href="/Theater/" class="text-blue-600 hover:text-blue-800 font-medium">
			Return to homepage
		</a>
	</div>
</div>
