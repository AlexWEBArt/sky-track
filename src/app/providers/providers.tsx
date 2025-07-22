import type { PropsWithChildren } from 'react'

import { ThemeProvider } from 'shared/theme'

export const Providers = ({ children }: PropsWithChildren) => {
	return <ThemeProvider>{children}</ThemeProvider>
}
