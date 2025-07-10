import { useState } from "react";
import type { IFlight } from "shared/types/IFlight.interface";
import { FlightCard } from "../flightCard";
import { FlightFilters } from "./flightFilters/flightFilters";
import styles from "./flightList.module.css";

interface Props {
  flights: IFlight[];
}

export interface IFlightFilters {
  countrie: string;
  airline: string;
}

const getFilteredCountries = (flights: IFlight[]) => {
  return new Set(["All", ...flights.map((flight) => flight.route.countryName)]);
};

const getFilteredAirlines = (flights: IFlight[]) => {
  return new Set(["All", ...flights.map((flight) => flight.airline)]);
};

export function FlightList({ flights }: Props) {
  const [activeFilters, setActiveFilter] = useState<IFlightFilters>({
    countrie: "All",
    airline: "All",
  });
  const filteredCountries = getFilteredCountries(flights);
  const filteredAirlines = getFilteredAirlines(flights);
  const filteredFlight =
    activeFilters.countrie === "All" && activeFilters.airline === "All"
      ? flights
      : flights.filter((flight) => {
          if (
            activeFilters.countrie !== "All" &&
            activeFilters.airline === "All"
          ) {
            return flight.route.countryName === activeFilters.countrie;
          }
          if (
            activeFilters.airline !== "All" &&
            activeFilters.countrie === "All"
          ) {
            return flight.airline === activeFilters.airline;
          }
          return (
            flight.route.countryName === activeFilters.countrie &&
            flight.airline === activeFilters.airline
          );
        });

  return (
    <div className={styles.flight_list}>
      <FlightFilters
        filteredCountries={filteredCountries}
        filteredAirlines={filteredAirlines}
        activeFilter={activeFilters}
        setActiveFilter={setActiveFilter}
      />
      {filteredFlight.map((flight) => (
        <FlightCard flight={flight} key={flight.flightNumber} />
      ))}
    </div>
  );
}
