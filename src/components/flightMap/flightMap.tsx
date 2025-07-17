import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  useMap,
} from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { MapPin, Plane } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L, { type LatLngExpression } from "leaflet";
import styles from "./flightMap.module.css";
import { QUERY_PARAM_FLIGHT } from "shared/constants";
import { useSearchParams } from "react-router";
import { useEffect, useMemo } from "react";
import flights from "shared/data/flights.json";
import { useTheme } from "shared/theme";
import type { IRoute } from "shared/types/IFlight.interface";

const MapFocus = ({ coordinate }: { coordinate: LatLngExpression }) => {
  const map = useMap();

  useEffect(() => {
    if (coordinate) {
      map.setView(coordinate, map.getZoom(), {
        animate: true,
        duration: 1,
        easeLinearity: 0.25,
      });
    }
  }, [coordinate, map]);

  return null;
};

const LucideMarkerIcon = (color: string, fillColor: string) => {
  const svg = renderToStaticMarkup(
    <MapPin
      color={color}
      size={28}
      strokeWidth={2}
      style={{ fill: fillColor }}
    />
  );
  return L.divIcon({
    html: svg,
    className: "",
    iconAnchor: [14, 26],
    iconSize: [28, 28],
  });
};

const LucidePlaneIcon = (
  color: string,
  fillColor: string,
  rotation: number
) => {
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
      <Plane
        color={color}
        style={{ fill: fillColor }}
        size={28}
        strokeWidth={1}
      />
    </div>
  );

  return L.divIcon({
    html: svg,
    className: "",
    iconAnchor: [16, 16],
    iconSize: [32, 32],
  });
};

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

  const allPlanes = flights.map((flight) => flight.route as IRoute);

  return (
    <div className={styles.flight_map_container}>
      <MapContainer
        center={flightRoute ? flightRoute.statusCoordinate : [0, 0]}
        zoom={9}
        scrollWheelZoom={true}
        zoomControl={false}
        className={styles.flight_map}
      >
        {flightRoute && <MapFocus coordinate={flightRoute.statusCoordinate} />}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri"
        />
        {allPlanes.map((plane, index) => (
          <Marker
            key={index}
            position={plane.statusCoordinate}
            icon={LucidePlaneIcon(
              "rgba(75, 75, 75, 0.7)",
              "rgba(238,238,238, 0.7)",
              plane.bearing
            )}
          />
        ))}
        {flightRoute && (
          <>
            <Polyline
              positions={flightRoute.flightPath}
              pathOptions={{
                color:
                  theme === "dark"
                    ? "rgba(255, 95, 51, 0.8)"
                    : "rgba(104, 152, 255, 0.8)",
                weight: 3,
              }}
            />
            <Marker
              position={flightRoute.flightPath[0]}
              icon={LucideMarkerIcon("#eeeeee", "rgba(75, 75, 75, 0.7)")}
            />
            <Marker
              position={flightRoute.flightPath[1]}
              icon={LucideMarkerIcon("#eeeeee", "rgba(75, 75, 75, 0.7)")}
            />
            <Marker
              position={flightRoute.statusCoordinate}
              icon={LucidePlaneIcon(
                "rgba(75, 75, 75)",
                "#eeeeee",
                flightRoute.bearing
              )}
            />
          </>
        )}
      </MapContainer>
    </div>
  );
};
