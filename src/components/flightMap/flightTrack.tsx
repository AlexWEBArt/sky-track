import { useMemo } from 'react'

import { LucideMarkerIcon, LucidePlaneIcon } from './lib/mapMarker'
import { generateArcPath } from './utils/generateArcPath'
import { getClosestIndex } from './utils/getClosestIndex'
import 'leaflet/dist/leaflet.css'
import { Marker, Polyline } from 'react-leaflet'
import { useNavigate, useSearchParams } from 'react-router'

import { QUERY_PARAM_FLIGHT } from 'shared/constants'
import flights from 'shared/data/flights.json'
import { useTheme } from 'shared/theme'
import type { IRoute } from 'shared/types/IFlight.interface'

export const FlightTrack = () => {
	const [searchParams] = useSearchParams()
	const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT)

	const { theme } = useTheme()
	const navigate = useNavigate()

	const flightRoute = useMemo(() => {
		const route = flights.find(
			flight => flight.flightNumber === selectedFlight
		)?.route
		return route as IRoute
	}, [selectedFlight])

	const arcPath = flightRoute
		? generateArcPath(flightRoute.flightPath[0], flightRoute.flightPath[1], 100)
		: []

	const currentIdx = flightRoute
		? getClosestIndex(arcPath, flightRoute.statusCoordinate)
		: 0

	const passedPath = arcPath.slice(0, currentIdx + 1)
	const remainingPath = arcPath.slice(currentIdx)

	const handlePlaneClick = (flightNumber: string) => {
		navigate(`?${QUERY_PARAM_FLIGHT}=${flightNumber}`)
	}

	return (
		<>
			{flights.map((flight, index) => (
				<Marker
					key={index}
					position={
						Array.isArray(flight.route.statusCoordinate) &&
						flight.route.statusCoordinate.length === 2
							? [
									flight.route.statusCoordinate[0],
									flight.route.statusCoordinate[1]
								]
							: [0, 0] // fallback
					}
					icon={LucidePlaneIcon(
						'rgba(75, 75, 75, 0.7)',
						'rgba(238,238,238, 0.7)',
						flight.route.bearing
					)}
					eventHandlers={{
						click: () => handlePlaneClick(flight.flightNumber)
					}}
				/>
			))}
			{flightRoute && (
				<>
					<Polyline
						positions={passedPath}
						pathOptions={{
							color:
								theme === 'dark'
									? 'rgba(255, 95, 51, 0.8)'
									: 'rgba(104, 152, 255, 0.8)',
							weight: 3
						}}
					/>
					<Polyline
						positions={remainingPath}
						pathOptions={{
							color:
								theme === 'dark'
									? 'rgba(30, 30, 30, 0.6)'
									: 'rgba(225, 225, 225, 0.6)',
							weight: 3,
							dashArray: '8 8'
						}}
					/>
					<Marker
						position={flightRoute.flightPath[0]}
						icon={LucideMarkerIcon('#eeeeee', 'rgba(75, 75, 75, 0.7)')}
					/>
					<Marker
						position={flightRoute.flightPath[1]}
						icon={LucideMarkerIcon('#eeeeee', 'rgba(75, 75, 75, 0.7)')}
					/>
					<Marker
						position={flightRoute.statusCoordinate}
						icon={LucidePlaneIcon(
							'rgba(75, 75, 75)',
							'#eeeeee',
							flightRoute.bearing
						)}
					/>
				</>
			)}
		</>
	)
}
