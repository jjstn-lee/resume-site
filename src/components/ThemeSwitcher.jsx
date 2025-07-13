import { useEffect, useState } from 'react';

const themes = ['literary', 'cyberpunk'];

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

    useEffect(() => {
    console.log('Setting theme:', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

  return (
    <div className="inline-block relative">
      <select
        className="select select-bordered w-full max-w-xs"
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
        aria-label="Select theme"
      >
        {themes.map((theme) => (
          <option key={theme} value={theme} className="capitalize">
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
}
