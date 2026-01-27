
export function initThemeToggle() {
    const STORAGE_KEY = 'theme-preference';
    const toggleBtnId = 'theme-toggle';

    const getColorPreference = () => {
        if (localStorage.getItem(STORAGE_KEY)) {
            return localStorage.getItem(STORAGE_KEY);
        } else {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
    };

    const setPreference = (theme) => {
        localStorage.setItem(STORAGE_KEY, theme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    // set early
    setPreference(getColorPreference());

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
        setPreference(isDark ? 'dark' : 'light');
    });

    return {
        toggle: () => {
            const current = getColorPreference();
            setPreference(current === 'dark' ? 'light' : 'dark');
        }
    };
}
