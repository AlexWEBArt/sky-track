import { useContext } from 'react'

import { Theme, ThemeContext } from './themeProvider'

import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants'

interface UseThemeResults {
	theme?: Theme
	toggleTheme: () => void
}

export const useTheme = (): UseThemeResults => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
		setTheme?.(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme, toggleTheme }
}
