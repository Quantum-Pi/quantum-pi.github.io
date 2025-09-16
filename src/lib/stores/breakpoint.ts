import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Breakpoint = 'sm' | 'md' | 'xl';

function createBreakpointStore() {
    const { subscribe, set } = writable<Breakpoint>('sm');

    const getBreakpoint = (): Breakpoint => {
        if (!browser) return 'sm';
        if (window.innerWidth >= 1280) return 'xl';
        if (window.innerWidth >= 768) return 'md';
        return 'sm';
    };

    let resizeTimeout: number;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            set(getBreakpoint());
        }, 16);
    };

    if (browser) {
        set(getBreakpoint());
        window.addEventListener('resize', handleResize, { passive: true });
    }

    return {
        subscribe,
        destroy: () => {
            if (browser) {
                window.removeEventListener('resize', handleResize);
            }
        }
    };
}

export const breakpoint = createBreakpointStore();