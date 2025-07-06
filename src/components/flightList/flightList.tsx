import { useState } from "react"
import type { IFlight } from "shared/types/IFlight.interface"
import { FlightCard } from "../flightCard"
import { FlightFilters } from "./flightFilters/flightFilters"
import styles from './flightList.module.css'


interface Props {
    flights: IFlight[]
}

const getFilteredCountries = (flights: IFlight[]) => {
    return new Set(['All', ...flights.map(flight => flight.route.countryName)])
}

export function FlightList({ flights }: Props) {
    const [activeFilter, setActiveFilter] = useState('All')
    const filteredCountries = getFilteredCountries(flights)
    const filteredFlight = activeFilter === 'All' ? flights : flights.filter(flight => flight.route.countryName === activeFilter )

    return (
        <div className={styles.flight_list}>
            <FlightFilters filters={filteredCountries} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            {
                filteredFlight.map(flight => <FlightCard flight={flight} key={flight.flightNumber} />)
            }
        </div>
    )
}