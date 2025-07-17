import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { MapPin, Plane } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./flightMap.module.css";
import { QUERY_PARAM_FLIGHT } from "shared/constants";
import { useSearchParams } from "react-router";
import { useMemo } from "react";
import flights from "shared/data/flights.json";
import { useTheme } from "shared/theme";
import type { IRoute } from "shared/types/IFlight.interface";

export const FlightMap = () => {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const { theme } = useTheme();

  const flightRoute = useMemo(() => {
    const route = flights.find(
      (flight) => flight.flightNumber === selectedFlight
    )?.route;
    return route as IRoute;
  }, [selectedFlight]);

  const LucideMarkerIcon = (color: string) => {
    const svg = renderToStaticMarkup(
      <MapPin color={color} size={32} strokeWidth={3} />
    );
    return L.divIcon({
      html: svg,
      className: "",
      iconAnchor: [16, 30],
      iconSize: [32, 32],
    });
  };

  const LucidePlaneIcon = (color: string, rotation: number) => {
    const svg = renderToStaticMarkup(
      <div
        style={{
          transform: `rotate(${rotation}deg)`,
          width: "32px",
          height: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Plane color={color} size={28} strokeWidth={3} />
      </div>
    );

    return L.divIcon({
      html: svg,
      className: "",
      iconAnchor: [16, 16],
      iconSize: [32, 32],
    });
  };

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

        {flightRoute && (
          <>
            <Polyline
              positions={flightRoute.flightPath}
              pathOptions={{
                color: theme === "dark" ? "#167afd" : "#FF5733",
                weight: 3,
              }}
            />
            <Marker
              position={flightRoute.flightPath[0]}
              icon={LucideMarkerIcon("#eeeeee")}
            />
            <Marker
              position={flightRoute.flightPath[1]}
              icon={LucideMarkerIcon("#eeeeee")}
            />
            <Marker
              position={flightRoute.statusCoordinate}
              icon={LucidePlaneIcon("#eeeeee", flightRoute.bearing)}
            />
          </>
        )}
      </MapContainer>
    </div>
  );
};
