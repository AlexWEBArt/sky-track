import L from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server'

import { MapPin, Plane } from 'lucide-react'

export const LucideMarkerIcon = (color: string, fillColor: string) => {
	const svg = renderToStaticMarkup(
		<MapPin
			color={color}
			size={28}
			strokeWidth={2}
			style={{ fill: fillColor }}
		/>
	)
	return L.divIcon({
		html: svg,
		className: '',
		iconAnchor: [14, 26],
		iconSize: [28, 28]
	})
}

export const LucidePlaneIcon = (
	color: string,
	fillColor: string,
	rotation: number
) => {
	const svg = renderToStaticMarkup(
		<div
			style={{
				transform: `rotate(${rotation}deg)`,
				width: '32px',
				height: '32px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Plane
				color={color}
				style={{ fill: fillColor }}
				size={28}
				strokeWidth={1}
			/>
		</div>
	)

	return L.divIcon({
		html: svg,
		className: '',
		iconAnchor: [16, 16],
		iconSize: [32, 32]
	})
}
