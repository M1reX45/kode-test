import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app'
import { AppThemeProvider } from '~ui/theme'

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
