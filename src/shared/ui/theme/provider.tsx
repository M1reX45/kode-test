import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

interface AppThemeProviderProps {
	children: ReactNode
}

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
