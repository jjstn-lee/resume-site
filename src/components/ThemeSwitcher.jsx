import { useTheme, ThemeProvider } from '@/components/ThemeProvider.jsx';

export const ThemeSwitcher = () => {

  const { currentTheme, setCurrentTheme, themes } = useTheme();

  return (
    // <ThemeProvider>
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
    // </ThemeProvider>
  );
}
