import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import planeIconUrl from "/public/plane.svg";
import type { LatLngTuple } from "leaflet";
import styles from "./flightMap.module.css";

const flightPath: LatLngTuple[] = [
  [53.3498, -6.2603], // Dublin (DUB)
  [34.8728, 33.6249], // Larnaca (LCA)
];

const planeIcon = new L.Icon({
  iconUrl: planeIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

export const FlightMap = () => {
  return (
    <div className={styles.flight_map_container}>
      <MapContainer
        center={[45, 10]}
        zoom={9}
        scrollWheelZoom={true}
        zoomControl={false}
        className={styles.flight_map}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri"
        />

        <Polyline
          positions={flightPath}
          pathOptions={{ color: "#FF5733", weight: 4 }}
        />

        <Marker position={[44.5, 13.8]} icon={planeIcon} />
      </MapContainer>
    </div>
  );
};
