import { ThemeProvider } from '../../shared/theme'
import type { PropsWithChildren } from 'react'

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ThemeProvider>
            {
                children
            }
        </ThemeProvider>
    )
}