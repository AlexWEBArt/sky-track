import type { IFlight } from "../../shared/types/IFlight.interface"
import { FlightCard } from "../flightCard"
import styles from './flightList.module.css'

interface Props {
    flights: IFlight[]
}

export function FlightList({ flights }: Props) {
    return (
        <div className={styles.flight_list}>
            {
                flights.map(flight => <FlightCard flight={flight} key={flight.flightNumber}/>)
            }
        </div>
    )
}