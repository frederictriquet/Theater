export const prerender = true;
export const trailingSlash = 'always';

// This ensures consistent handling of base paths
export const load = async ({ url }) => {
    return {
        pathname: url.pathname
    };
};
