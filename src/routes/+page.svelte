<script>
    import { base } from '$app/paths';
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Markdown Viewer</h1>
    <div class="prose prose-lg dark:prose-invert">
        <p class="lead dark:text-gray-300">A simple and beautiful markdown viewer built with SvelteKit and MDsveX.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">Sample Pages</h2>
        <ul class="space-y-3">
            <li>
                <a href="{base}/welcome" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">📝 Basic Markdown Example</a>
                <p class="text-gray-600 dark:text-gray-400">A simple example showing basic markdown syntax</p>
            </li>
            <li>
                <a href="{base}/features" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">✨ Enhanced Features</a>
                <p class="text-gray-600 dark:text-gray-400">Demonstrates syntax highlighting, smart typography, and more</p>
            </li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8">
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Quick Tip</h3>
            <p class="dark:text-gray-300">You can add more markdown files in the <code class="dark:bg-gray-800 dark:text-gray-200">src/routes</code> directory with either <code class="dark:bg-gray-800 dark:text-gray-200">.md</code> or <code class="dark:bg-gray-800 dark:text-gray-200">.svx</code> extensions. They'll be automatically accessible as routes!</p>
        </div>
    </div>
</div>
