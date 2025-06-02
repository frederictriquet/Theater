import { writable, get } from 'svelte/store';

const createThemeStore = () => {
    // Initialize from localStorage if available
    const defaultDark = typeof window !== 'undefined' 
        ? window.localStorage.getItem('darkMode') === 'true'
        : false;

    const { subscribe, set } = writable(defaultDark);

    return {
        subscribe,
        toggle: () => {
            const current = get({ subscribe });
            const newValue = !current;
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('darkMode', String(newValue));
                document.documentElement.classList.toggle('dark', newValue);
            }
            set(newValue);
        },
        initialize: () => {
            const dark = get({ subscribe });
            if (typeof window !== 'undefined') {
                document.documentElement.classList.toggle('dark', dark);
            }
        }
    };
};

export const darkMode = createThemeStore();
