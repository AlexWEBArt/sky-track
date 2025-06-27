import {
    createContext,
    useMemo,
    useState,
    type PropsWithChildren
} from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '../constants/storageKey'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface IThemeContext {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContext>({})

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    )

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
}