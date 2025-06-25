import { useSearchParams } from 'react-router'
import type { IFlight } from '../../shared/types/IFlight.interface'
import { QUARY_PARAM_FLIGHT } from '../../shared/constants/queryParameters'
import { useMemo } from 'react'
import styles from './flightDetails.module.css'

interface Props {
    flights: IFlight[]
}

export function FlightDetails({ flights }: Props) {
    const [searchParams] = useSearchParams()
    const selectedFlight = searchParams.get(QUARY_PARAM_FLIGHT)

    const flight = useMemo(() => flights.find(flight => flight.flightNumber === selectedFlight), [selectedFlight])

    return (
        <div className={styles.outer_container}>
            <div className={styles.header}>
                <div className={styles.flight_title}>
                    <div className={styles.flight_info}>
                        <span className={styles.flight_number}>
                            {
                                flight?.flightNumber
                            }
                        </span>
                        <span className={styles.airline}>
                            {
                                flight?.airline
                            }
                        </span>
                    </div>
                    <div className={styles.btn_close}>
                        &times;
                    </div>
                </div>
                <img src={flight?.airplaneImage} className={styles.airplane_image}/>
            </div>
        </div>
    )
}