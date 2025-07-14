import { createContext, useContext, useState, useEffect } from 'react';

export const themes = ['literary', 'cyberpunk']; // add more here
export const defaultTheme = 'literary';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    return themes.includes(stored) ? stored : defaultTheme;
  });

  useEffect(() => {
    if (themes.includes(currentTheme)) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
