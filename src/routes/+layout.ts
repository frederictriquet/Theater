// This tells SvelteKit to prerender all pages at build time
export const prerender = true;

// This is required for GitHub Pages - it ensures we get correct paths
export const load = ({ url }) => {
    return {
        pathname: url.pathname
    };
};
