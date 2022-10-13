import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from '~pages/Home'
import { Profile } from '~pages/Profile'
import './destyle.css'
import './app.css'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/profile/:id' element={<Profile />} />
			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	)
}
