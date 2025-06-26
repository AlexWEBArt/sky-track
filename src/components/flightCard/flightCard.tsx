import cn from 'clsx'
import { useSearchParams } from 'react-router'
import type { IFlight } from '../../shared/types/IFlight.interface'
import styles from './flightCard.module.css'
import { QUARY_PARAM_FLIGHT } from '../../shared/constants/queryParameters'

interface Props {
    flight: IFlight
}

export function FlightCard({ flight }: Props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const selectedFlight = searchParams.get(QUARY_PARAM_FLIGHT)

    const isActive = selectedFlight === flight.flightNumber

    const handleClickOpenFlight = () => {
        if (selectedFlight === flight.flightNumber) {
            const params = new URLSearchParams(searchParams)
            params.delete(QUARY_PARAM_FLIGHT)
            setSearchParams(params)

            return null
        }

        setSearchParams({
            [QUARY_PARAM_FLIGHT]: flight.flightNumber
        })
    }

    return (
        <button className={cn(styles.flight_button, isActive && styles.active)} onClick={handleClickOpenFlight}>
            <div className={styles.flight_card}>
                <div className={styles.airline}>
                    <div className={styles.airline_logo}>
                        <img src={flight.airlineLogo} alt={flight.airline} />
                        <span className={styles.flight_number}>{flight.flightNumber}</span>
                    </div>
                    <div className={styles.airline_code}>
                        <span className={styles.code}>{flight.code}</span>
                        <span className={styles.aircraft}>{flight.airplane.aircraft}</span>
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
        </button>
    )
}