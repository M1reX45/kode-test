import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import { AppThemeProvider } from '~ui/theme'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<StrictMode>
		<BrowserRouter>
			<AppThemeProvider>
				<App />
			</AppThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
