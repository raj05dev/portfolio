import { createContext } from 'react';
import type { ThemeMode } from '@/types';

export const THEME_STORAGE_KEY = 'sky_portfolio_theme_mode';

export interface ThemeContextValue {
  theme: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
