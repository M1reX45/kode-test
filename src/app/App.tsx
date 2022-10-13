import { Route, Routes, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from '~pages/Home'
import { Profile } from '~pages/Profile'
import './destyle.css'
import './app.css'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile/:id' element={<Profile />} />
				<Route path='/*' element={<Navigate to='/' />} />
			</Routes>
		</QueryClientProvider>
	)
}
