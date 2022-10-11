import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import { AppThemeProvider } from '~ui/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<StrictMode>
		<AppThemeProvider>
			<App />
		</AppThemeProvider>
	</StrictMode>
)
