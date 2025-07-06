import cn from 'clsx'
import { observer } from "mobx-react-lite"
import { useSearchParams } from 'react-router'
import type { IFlight } from 'shared/types/IFlight.interface'
import { QUARY_PARAM_FLIGHT } from 'shared/constants'
import styles from './flightCard.module.css'
import { favoritesStore } from 'store'
import { ProgressBar } from 'shared/ui/progressBar'

interface Props {
    flight: IFlight
}

export const FlightCard = observer(function FlightCard({ flight }: Props) {
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

    const handleClickFavorites = () => favoritesStore.toggleFavorite(flight.id)

    return (
        <div className={cn(styles.flight_button, isActive && styles.active)}>
            <button className={styles.flight_card} onClick={handleClickOpenFlight}>
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
                    <div className={styles.route_progress}>
                        <ProgressBar progress={flight.route.statusPercent} />
                    </div>
                    <div className={styles.airport}>
                        <span className={styles.airport_city}>{flight.arrival.city}</span>
                        <span className={styles.airport_code}>{flight.arrival.code}</span>
                    </div>
                </div>
            </button>
            <button
                className={cn(styles.btn_favotites, favoritesStore.isFavorite(flight.id) && styles.is_favorites)}
                onClick={handleClickFavorites}
            >
                ★
            </button>
        </div>
    )
})