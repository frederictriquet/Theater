<script>
    import { base } from '$app/paths';
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Markdown Viewer</h1>
    <div class="prose prose-lg">
        <p class="lead">A simple and beautiful markdown viewer built with SvelteKit and MDsveX.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Sample Pages</h2>
        <ul class="space-y-3">
            <li>
                <a href="{base}/welcome" class="text-blue-600 hover:text-blue-800">📝 Basic Markdown Example</a>
                <p class="text-gray-600">A simple example showing basic markdown syntax</p>
            </li>
            <li>
                <a href="{base}/features" class="text-blue-600 hover:text-blue-800">✨ Enhanced Features</a>
                <p class="text-gray-600">Demonstrates syntax highlighting, smart typography, and more</p>
            </li>
        </ul>

        <div class="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 class="text-lg font-semibold mb-2">Quick Tip</h3>
            <p>You can add more markdown files in the <code>src/routes</code> directory with either <code>.md</code> or <code>.svx</code> extensions. They'll be automatically accessible as routes!</p>
        </div>
    </div>
</div>
