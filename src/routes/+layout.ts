// Force static prerendering
export const prerender = true;
export const trailingSlash = 'always';

// Handle path segments relative to the base
export const load = async ({ url }) => {
    return {
        pathname: url.pathname,
        isIndex: url.pathname === '/' || url.pathname === ''
    };
};
