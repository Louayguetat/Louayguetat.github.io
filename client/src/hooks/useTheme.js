import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

/* The initial value is resolved by the inline script in public/index.html,
   so read it back off the document to stay in sync and avoid a flash. */
function readInitialTheme() {
  if (typeof document === 'undefined') return 'light';
  const applied = document.documentElement.getAttribute('data-theme');
  return applied === 'dark' ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* storage blocked in private mode, so the theme only lasts this session */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
