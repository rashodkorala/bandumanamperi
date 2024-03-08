import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the type for the theme
type Theme = 'light' | 'dark';

// Create the context
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: () => {},
});

// Custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);

// Define props interface for ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode;
}

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Check the preferred color scheme and set the initial theme accordingly
  useEffect(() => {
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    // Add logic to apply Tailwind CSS dark mode class to the body
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
