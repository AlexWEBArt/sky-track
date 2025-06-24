import type { IFlight } from '../../shared/types/IFlight.interface'
import styles from './flightCard.module.css'

interface Props {
    flight: IFlight
}

export function FlightCard({ flight }: Props) {
    return (
        <div className={styles.flight_card}>
            <div className={styles.airline}>
                <div className={styles.airline_logo}>
                    <img src={flight.airlineLogo} alt={flight.airline} />
                    <span className={styles.flight_number}>{flight.flightNumber}</span>
                </div>
                <div className={styles.airline_code}>
                    <span className={styles.code}>{flight.code}</span>
                    <span className={styles.aircraft}>{flight.aircraft}</span>
                </div>
            </div>
            <div className={styles.route}>
                <div className={styles.airport}>
                    <span className={styles.airport_city}>{flight.departure.city}</span>
                    <span className={styles.airport_code}>{flight.departure.code}</span>
                </div>
                <div className={styles.airport}>
                    <span className={styles.airport_city}>{flight.arrival.city}</span>
                    <span className={styles.airport_code}>{flight.arrival.code}</span>
                </div>
            </div>
        </div>
    )
}