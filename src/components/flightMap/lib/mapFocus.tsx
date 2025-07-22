import { useEffect } from 'react'

import type { LatLngExpression } from 'leaflet'
import { useMap } from 'react-leaflet'

export const MapFocus = ({ coordinate }: { coordinate: LatLngExpression }) => {
	const map = useMap()

	useEffect(() => {
		if (coordinate) {
			map.setView(coordinate, map.getZoom(), {
				animate: true,
				duration: 1,
				easeLinearity: 0.25
			})
		}
	}, [coordinate, map])

	return null
}
