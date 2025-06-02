<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { darkMode } from '$lib/stores/theme';
  import { onMount } from '$lib/utils/svelte-imports';
  
  let currentPath = $page.url.pathname;
  $: isDark = $darkMode;

  onMount(() => {
    darkMode.initialize();
  });
</script>

<div class="container spacing">
  <header style="padding: 1rem 0; border-bottom: 1px solid #ddd;">
    <nav>
      <ul style="display: flex; gap: 1.5rem; align-items: center;">
        <li>
          <a 
            href="{base}/" 
            style="color: {currentPath === '/' ? 'var(--accent-color, #0066cc)' : 'inherit'};"
            aria-current={currentPath === '/' ? 'page' : undefined}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="{base}/scene-1"
            style="color: {currentPath === '/scene-1' ? 'var(--accent-color, #0066cc)' : 'inherit'};"
            aria-current={currentPath === '/scene-1' ? 'page' : undefined}
          >
            Scène 1
          </a>
        </li>
        <li>
          <a 
            href="{base}/scene-2"
            style="color: {currentPath === '/scene-2' ? 'var(--accent-color, #0066cc)' : 'inherit'};"
            aria-current={currentPath === '/scene-2' ? 'page' : undefined}
          >
            Scène 2
          </a>
        </li>
        <li>
          <a 
            href="{base}/features"
            style="color: {currentPath === '/features' ? 'var(--accent-color, #0066cc)' : 'inherit'};"
            aria-current={currentPath === '/features' ? 'page' : undefined}
          >
            Features
          </a>
        </li>
      </ul>
      <button
        on:click={() => darkMode.toggle()}
        type="button"
        style="width: 2rem; height: 2rem; margin-left: auto;"
        aria-label="Toggle dark mode"
      >
        {#if isDark}
          <svg style="width: 1.25rem; height: 1.25rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        {:else}
          <svg style="width: 1.25rem; height: 1.25rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
          </svg>
        {/if}
      </button>
    </nav>
  </header>

  <main style="padding: 2rem 0;">
    <article class="spacing">
      <slot />
    </article>
  </main>

  <footer style="padding: 2rem 0; border-top: 1px solid #ddd; text-align: center; color: #666;">
    <p>Built with SvelteKit and MDsveX</p>
  </footer>
</div>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a:hover {
    color: var(--accent-color, #0066cc);
  }

  :global(.dark) {
    background-color: #1a1a1a;
    color: #fff;
  }

  :global(.dark) header,
  :global(.dark) footer {
    border-color: #333;
  }
</style>
