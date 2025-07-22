import { BrowserRouter, Route, Routes } from 'react-router'

import { FlightMap } from 'components/flightMap'

import { FavoritesPage } from 'pages/favorites'
import { HomePage } from 'pages/home'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<FlightMap />
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/favorites'
					element={<FavoritesPage />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
