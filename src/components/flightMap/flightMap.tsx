import { useMemo, useState } from 'react'

import { FlightTrack } from './flightTrack'
import { MapFocus } from './lib/mapFocus'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useSearchParams } from 'react-router'

import { QUERY_PARAM_FLIGHT } from 'shared/constants'
import flights from 'shared/data/flights.json'
import type { IRoute } from 'shared/types/IFlight.interface'

import styles from './flightMap.module.css'

export const FlightMap = () => {
	const [searchParams] = useSearchParams()
	const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT)

	const [tileError, setTileError] = useState(false)

	const flightRoute = useMemo(() => {
		const route = flights.find(
			flight => flight.flightNumber === selectedFlight
		)?.route
		return route as IRoute
	}, [selectedFlight])

	return (
		<div className={styles.flight_map_container}>
			{tileError ? (
				<div className={styles.map_error}>
					Не удалось загрузить карту. Проверьте соединение или попробуйте позже.
				</div>
			) : (
				<MapContainer
					center={flightRoute ? flightRoute.statusCoordinate : [0, 0]}
					zoom={9}
					minZoom={2}
					maxZoom={12}
					maxBounds={[
						[85, -180],
						[-85, 180]
					]}
					scrollWheelZoom={true}
					zoomControl={false}
					className={styles.flight_map}
				>
					{flightRoute && (
						<MapFocus coordinate={flightRoute.statusCoordinate} />
					)}
					<TileLayer
						url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
						attribution='Tiles © Esri'
						eventHandlers={{
							tileerror: () => setTileError(true)
						}}
					/>
					<FlightTrack />
				</MapContainer>
			)}
		</div>
	)
}
