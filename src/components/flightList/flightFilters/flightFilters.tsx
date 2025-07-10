import type { IFlightFilters } from "../flightList";
import styles from "./flightFilters.module.css";

interface Props {
  filteredCountries: Set<string>;
  filteredAirlines: Set<string>;
  activeFilter: IFlightFilters;
  setActiveFilter: (filters: IFlightFilters) => void;
}

export function FlightFilters({
  filteredCountries,
  filteredAirlines,
  activeFilter,
  setActiveFilter,
}: Props) {
  return (
    <div className={styles.outer_container}>
      <select
        className={styles.filters_select}
        name="filterCountries"
        value={activeFilter.countrie}
        onChange={(e) =>
          setActiveFilter({
            ...activeFilter,
            countrie: e.target.value,
          })
        }
      >
        {Array.from(filteredCountries).map((filter) => (
          <option key={filter} className={styles.filter_option} value={filter}>
            {filter}
          </option>
        ))}
      </select>
      <select
        className={styles.filters_select}
        name="filterAirlines"
        value={activeFilter.airline}
        onChange={(e) =>
          setActiveFilter({
            ...activeFilter,
            airline: e.target.value,
          })
        }
      >
        {Array.from(filteredAirlines).map((filter) => (
          <option key={filter} className={styles.filter_option} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
}
